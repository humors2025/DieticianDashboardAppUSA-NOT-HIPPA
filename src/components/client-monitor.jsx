// "use client"
// import { IoIosArrowForward } from "react-icons/io";
// import ClientTable from "./clientTable";
// import DashboardCard from "./dashboard-card";
// export default function ClientMonitor() {
//     return (
//         <>

//             <div className="flex flex-col gap-7">

//                 <DashboardCard />
//                 <div className="flex flex-col gap-[30px] pt-[30px] pl-5 px-5 pb-[30px] border border-[#E1E6ED] rounded-[10px]">

//                     <div className="flex gap-5 items-center pl-2.5">
//                         <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">Recently Added</span>
//                         <div className="flex gap-2.5 cursor-pointer">
//                             <span className="text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24]">View all clients</span>
//                             <IoIosArrowForward className="text-[#308BF9] w-[15px] h-[15px]" />

//                         </div>
//                     </div>
//                     <ClientTable showUserProfile={false} showDailyStatusHeader={false} />
//                 </div>
//             </div>
//         </>
//     )
// }















// "use client";
// import { IoIosArrowForward } from "react-icons/io";
// import ClientTable from "./clientTable";
// import { useSelector } from "react-redux";
// import { selectClients } from "../store/clientSlice";
// import { useRouter } from "next/navigation";

// export default function   () {
//     const clients = useSelector(selectClients);
//     const router = useRouter();

//     const handleViewAllClients = () => {
//         router.push('/client');
//     };

//   return (
//     <>
//       <div className="flex flex-col gap-7">
//         <div className="flex flex-col gap-[30px] pt-[30px] pl-5 px-5 pb-[30px] border-[#E1E6ED] rounded-[10px]">
//           {/* <div className="flex gap-5 items-center pl-2.5">
//             <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">
//               Recently Added
//             </span> 
//             <div 
//               className="flex gap-2.5 cursor-pointer items-center"
//               onClick={handleViewAllClients}
//             >
//               <span className="text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24px] hover:underline">
//                 View all clients
//               </span>
//               <IoIosArrowForward className="text-[#308BF9] w-[15px] h-[15px]" />
//             </div>
//           </div> */}

//           <div className="flex gap-2.5">
//             <div className="px-[30px] py-[11px] rounded-[20px] bg-[#252525] cursor-pointer">
//               <p className="text-white text-[12px] font-normal leading-normal tracking-[-0.24px]">All (500)</p>
//             </div>

//             <div className="px-[30px] py-[11px] rounded-[20px] border cursor-pointer">
//               <p className="text-[#A1A1A1] text-[12px] font-normal leading-normal tracking-[-0.24px]">Tested (300)</p>
//             </div>

//              <div className="px-[30px] py-[11px] rounded-[20px] border">
//               <p className="text-[#A1A1A1] text-[12px] font-normal leading-normal tracking-[-0.24px]">Missed (100)</p>
//             </div>

             
//           </div>
//           <ClientTable showUserProfile={false} showDailyStatusHeader={false} clients={clients} />
//         </div>
//       </div>
//     </>
//   );
// }




"use client";

import { useState, useMemo } from "react";
import ClientTable from "./clientTable";
import { useSelector } from "react-redux";
import { selectClients } from "../store/clientSlice";
import { useRouter } from "next/navigation";
import { UserProfile } from "./user-profile";

export default function ClientsSection() {
  const clients = useSelector(selectClients);
  const router = useRouter();

  // 🔹 Active tab state (default = All)
  const [activeTab, setActiveTab] = useState("all");

  // ✅ Search state
  const [search, setSearch] = useState("");

  const handleViewAllClients = () => {
    router.push("/client");
  };

  // 🔹 Filter clients based on tab + search
  const filteredClients = useMemo(() => {
    if (!clients) return [];

    let result = [...clients];

    if (activeTab === "tested") {
      result = result.filter((client) => client.status === "tested");
    }

    if (activeTab === "missed") {
      result = result.filter((client) => client.status === "missed");
    }

    // ✅ Search filter (change `name` key if your api uses different field)
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter((client) =>
        (client.name || "").toLowerCase().includes(q)
      );
    }

    return result;
  }, [clients, activeTab, search]);

  // 🔹 Counts
  const allCount = clients?.length || 0;
  const testedCount = clients?.filter((c) => c.status === "tested").length || 0;
  const missedCount = clients?.filter((c) => c.status === "missed").length || 0;

  const tabClass = (tabName) =>
    `px-[30px] py-[11px] rounded-[20px] cursor-pointer transition-all duration-200 ${
      activeTab === tabName ? "bg-[#252525]" : "border border-[#E1E6ED]"
    }`;

  const textClass = (tabName) =>
    `text-[12px] font-normal leading-normal tracking-[-0.24px] ${
      activeTab === tabName ? "text-white" : "text-[#A1A1A1]"
    }`;

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-[15px]  border-[#E1E6ED] rounded-[10px]">
       
      {/* 🔹 Tabs + Search */}
{/* <div className="flex items-center justify-between w-full">
  
 
  <div className="flex gap-2.5">
    <div className={tabClass("all")} onClick={() => setActiveTab("all")}>
      <p className={textClass("all")}>All ({allCount})</p>
    </div>

    <div
      className={tabClass("tested")}
      onClick={() => setActiveTab("tested")}
    >
      <p className={textClass("tested")}>Tested ({testedCount})</p>
    </div>

    <div
      className={tabClass("missed")}
      onClick={() => setActiveTab("missed")}
    >
      <p className={textClass("missed")}>Missed ({missedCount})</p>
    </div>
  </div>


  <div className="w-[300px]">
    <UserProfile
      showOnlySearch={true}
      searchQuery={search}
      onSearchChange={setSearch}
    />
  </div>

</div> */}

        {/* 🔹 Table */}
        <ClientTable
          showUserProfile={false}
          showDailyStatusHeader={false}
          clients={filteredClients}
          activeTab={activeTab}
        />
      </div>
    </div>
  );
}