
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserProfile } from "./user-profile";
import { toast } from "sonner";
import {
  selectClients,
  getClientsForDietician
} from "../store/clientSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ClientTable({ 
  showUserProfile = true, 
  showDailyStatusHeader = true, 
  showTestTaken = false,
  testAssigned = false,
  clients: clientsList,
  activeTab = "all"
}) {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState('Recently Added');
  const router = useRouter();

  // Handle sort change from UserProfile
  const handleSortChange = (option) => {
    setSortOption(option);
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch (error) {
      return "N/A";
    }
  };

  // Helper function to determine plan status
  const getPlanStatus = (plansCount) => {
    if (!plansCount) return "No Plan";
    return plansCount.active > 0 ? "Active" : "Inactive";
  };

  // Helper function to get the most relevant plan
  const getMostRelevantPlan = (client) => {
    if (!client.plans_summary) return null;

    const allPlans = [
      ...(client.plans_summary.active || []),
      ...(client.plans_summary.not_started || []),
      ...(client.plans_summary.completed || [])
    ];

    if (allPlans.length === 0) return null;

    const sortedPlans = allPlans.sort((a, b) =>
      new Date(b.plan_start_date || 0) - new Date(a.plan_start_date || 0)
    );

    const activePlans = client.plans_summary.active || [];
    if (activePlans.length > 0) {
      return activePlans.sort((a, b) =>
        new Date(b.plan_start_date || 0) - new Date(a.plan_start_date || 0)
      )[0];
    }

    const notStartedPlans = client.plans_summary.not_started || [];
    if (notStartedPlans.length > 0) {
      return notStartedPlans.sort((a, b) =>
        new Date(b.plan_start_date || 0) - new Date(a.plan_start_date || 0)
      )[0];
    }

    return sortedPlans[0];
  };

  // Helper function to calculate plan duration and type
  const getPlanType = (activePlan) => {
    if (!activePlan) return "No plan";

    const startDate = activePlan.plan_start_date;
    const endDate = activePlan.plan_end_date;

    if (!startDate || !endDate) return "Custom plan";

    try {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDiff = end.getTime() - start.getTime();
      const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;

      if (dayDiff <= 0) return "Invalid dates";

      const months = Math.floor(dayDiff / 30);
      const days = dayDiff % 30;

      if (months > 0) {
        return days > 0 ? `${months}-month ${days}-day plan` : `${months}-month plan`;
      } else {
        return `${dayDiff}-day plan`;
      }
    } catch (error) {
      return "Custom plan";
    }
  };

  // Transform API data to match your table structure
  const transformClientData = (apiData) => {
    if (!apiData || !Array.isArray(apiData)) return [];

    return apiData.map(client => {
      const relevantPlan = getMostRelevantPlan(client);

      return {
        name: client.profile_name || "N/A",
        age: client.age || "N/A", // Store age as number for sorting
        gender: client.gender || "N/A",
        displayAge: `${client.age || "N/A"} years, ${client.gender || "N/A"}`,
        dateCreated: formatDate(client.dttm),
        rawDate: client.dttm, // Store raw date for sorting
        referenceCode: client.profile_id || "N/A",
        planStatus: getPlanStatus(client.plans_count),
        planType: getPlanType(relevantPlan),
        lastLogged: "",
        metabolismStatus: "",
        metabolismColor: "#DA5747",
        metabolismBg: "#FFEDED",
        dietGoal: "-",
        dietGoalDate: formatDate(client.dttm),
        plansCompleted: client.plans_count?.completed || 0,
        testAssigned: "-",
        originalData: client,
        image: client.profile_image_url,
        dieticianId: client.dietician_id, 
        profileId: client.profile_id 
      };
    });
  };

  // Filter data based on activeTab
  let filteredByTab = clientsList;
  if (activeTab === "active") {
    filteredByTab = clientsList.filter(
      (c) => (c?.plans_count?.active ?? 0) > 0
    );
  } else if (activeTab === "needs") {
    filteredByTab = clientsList.filter(
      (c) => (c?.plans_count?.total ?? 0) === 0
    );
  }

  const clients = useMemo(() => transformClientData(filteredByTab), [filteredByTab]);

  // Sort clients based on selected option
  const sortedClients = useMemo(() => {
    if (!clients.length) return [];

    const clientsCopy = [...clients];

   switch (sortOption) {
  case 'Recently Added':
    return clientsCopy.sort((a, b) => new Date(b.rawDate) - new Date(a.rawDate));

  case 'A to Z':
    return clientsCopy.sort((a, b) => a.name.localeCompare(b.name));

  case 'Z to A':
    return clientsCopy.sort((a, b) => b.name.localeCompare(a.name));

  case 'By Age Asc':
    // Youngest first
    return clientsCopy.sort((a, b) => {
      const ageA = parseInt(a.age, 10);
      const ageB = parseInt(b.age, 10);

      // push invalid ages to bottom
      if (isNaN(ageA) && isNaN(ageB)) return 0;
      if (isNaN(ageA)) return 1;
      if (isNaN(ageB)) return -1;

      return ageA - ageB; // ascending
    });

  case 'By Age Desc':
  case 'by Age': // keep old option working also
    // Oldest first
    return clientsCopy.sort((a, b) => {
      const ageA = parseInt(a.age, 10);
      const ageB = parseInt(b.age, 10);

      if (isNaN(ageA) && isNaN(ageB)) return 0;
      if (isNaN(ageA)) return 1;
      if (isNaN(ageB)) return -1;

      return ageB - ageA; // descending
    });

  default:
    return clientsCopy;
}

  }, [clients, sortOption]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Reference code copied!");
    }).catch(err => {
      toast.error("Failed to copy reference code");
      console.error('Failed to copy: ', err);
    });
  };

  const handleRowClick = (client) => {
    const params = new URLSearchParams({
      profile_id: client.profileId
    });
    router.push(`/profile?${params.toString()}`);
  }

  // Filter sorted clients based on search
  const filteredClients = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return sortedClients;
    return sortedClients.filter(c => c.name.toLowerCase().includes(q));
  }, [search, sortedClients]);



  return (
    <>
      {/* Pass the sort handler to UserProfile */}
      {showUserProfile && (
        <div className="">
          <UserProfile 
            searchQuery={search} 
            onSearchChange={setSearch} 
            onSortChange={handleSortChange} 
          />
        </div>
      )}

      <div>
        <div className="rounded-[10px] overflow-hidden">
          <table className="w-full bg-[#FFFFFF]">
            <thead className="bg-[#F0F0F0]">
              <tr>
                <th className="px-[15px] pt-5 pb-[5px] text-left">
                  <p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">
                    Client Name {sortOption === 'A to Z' && '↑'} {sortOption === 'Z to A' && '↓'}
                  </p>
                </th>
                <th className="px-[15px] pt-5 pb-[5px] text-left">
                  <p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">
                    Date Created {sortOption === 'Recently Added' && '↓'}
                  </p>
                </th>
                {/* <th className="px-[15px] pt-5 pb-[5px] text-left">
                  <p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">
                    Current Plan
                  </p>
                </th> */}
                {/* {showDailyStatusHeader && (
                  <th className="px-[15px] pt-5 pb-[5px] text-left">
                    <p className="text-[#535359] text-center font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">
                      Plans completed
                    </p>
                  </th>
                )} */}
         
         {showTestTaken && (
                  <th className="px-[15px] pt-5 pb-[5px] text-left">
                    <p className="text-[#535359] text-center font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">
                     Test Taken
                    </p>
                  </th>
                  )}
             
                {testAssigned && (
                  <th className="px-[15px] pt-5 pb-[5px] text-left">
                    <p className="text-[#535359] text-center font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Test Assigned</p>
                  </th>
                )}
                <th className="px-[15px] pt-5 pb-[5px] text-left hidden">
                  <p className="text-[#535359] font-normal text-xs leading-[1.1] tracking-[-0.24px] font-['Poppins']">Actions</p>
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredClients.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-[15px] py-8 text-center">
                    <p className="text-[#A1A1A1] text-[18px]">No clients found.</p>
                  </td>
                </tr>
              ) : (
                filteredClients.map((client, idx) => (
                  <tr
                    key={`${client.profileId}-${idx}`}
                    className="align-top cursor-pointer [&>td]:cursor-pointer"
                    onClick={() => handleRowClick(client)}
                  >
                    {/* Client Name */}
                    <td className="px-[15px] py-5">
                      <div className="flex gap-[15px]">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden bg-[#F0F0F0]">
                          <Image
                            src={client.image || "/icons/hugeicons_user-circle-02.svg"}
                            alt={client.name || "profile"}
                            fill
                            className="object-cover"
                            sizes="32px"
                            priority={false}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
                            {client.name}
                          </span>
                          <span className="font-normal text-[10px] leading-normal tracking-[-0.2px]">
                            {client.displayAge}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Date Created */}
                    <td className="px-[15px] py-5">
                      <span className="text-[#A1A1A1] text-[12px] font-normal leading-[126%] tracking-[-0.24px]">
                        {client.dateCreated}
                      </span>
                    </td>

                    {/* Current Plan */}
                    {/* <td className="px-[15px] py-5">
                      <div className="flex flex-col gap-1">
                        <span className={`text-[12px] font-semibold leading-[126%] tracking-[-0.24px] ${
                          client.planStatus === 'Active' ? 'text-[#3FAF58]' : 'text-[#A1A1A1]'
                        }`}>
                         {client.planStatus}
                         
                        </span>
                        <span className="text-[#535359] text-[10px] font-normal leading-normal tracking-[-0.2px]">
                         {client.planType}
                       {getMostRelevantPlan(client.originalData)?.plan_title || "No Plan"} 
                          </span>
                        <div className="flex gap-[5px]">
                          <p className="text-[#308BF9] cursor-pointer font-semibold text-[10px] leading-[110%] tracking-[-0.2px]">
                            View Plan
                          </p>
                          <Image src="/icons/right button.svg" width={10} height={10} alt="right button" className="cursor-pointer" />
                        </div>
                      </div>
                    </td> */}

                    {/* Plans completed */}
                    {/* {showDailyStatusHeader && (
                      <td className="text-center px-[15px] py-5">
                        <span className="text-[#252525] text-center text-[12px] font-semibold leading-[1.26px]">
                          {client.plansCompleted}
                        </span>
                      </td>
                    )} */}

{/* Test Count */}
{showTestTaken && (
                      <td className="text-center px-[15px] py-5">
                        <span className="text-[#252525] text-center text-[12px] font-semibold leading-[1.26px]">
                          {client.plansCompleted}
                        </span>
                      </td>
                      )}
                
                    {testAssigned && (
                      <td className="text-center px-[15px] py-5">
                        <span className="text-[#252525] text-center text-[12px] font-semibold leading-[1.26px]">
                          {client.testAssigned}
                        </span>
                      </td>
                    )}

                    {/* Actions */}
                    <td className="px-[15px] py-5 hidden">
                      <div className="py-2.5 flex gap-5">
                        <Image src="/icons/hugeicons_message-02.svg" alt="message" width={20} height={20} className="cursor-pointer" />
                        <Image src="/icons/hugeicons_view.svg" alt="view" width={20} height={20} className="cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
