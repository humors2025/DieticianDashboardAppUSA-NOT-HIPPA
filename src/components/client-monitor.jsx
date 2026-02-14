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















"use client";
import { IoIosArrowForward } from "react-icons/io";
import ClientTable from "./clientTable";
import { useSelector } from "react-redux";
import { selectClients } from "../store/clientSlice";
import { useRouter } from "next/navigation";

export default function ClientMonitor() {
    const clients = useSelector(selectClients);
    const router = useRouter();

    const handleViewAllClients = () => {
        router.push('/client');
    };

  return (
    <>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-[30px] pt-[30px] pl-5 px-5 pb-[30px] border border-[#E1E6ED] rounded-[10px]">
          <div className="flex gap-5 items-center pl-2.5">
            <span className="text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">
              Recently Added
            </span> 
            <div 
              className="flex gap-2.5 cursor-pointer items-center"
              onClick={handleViewAllClients}
            >
              <span className="text-[#308BF9] text-[12px] font-semibold leading-[110%] tracking-[-0.24px] hover:underline">
                View all clients
              </span>
              <IoIosArrowForward className="text-[#308BF9] w-[15px] h-[15px]" />
            </div>
          </div>
          <ClientTable showUserProfile={false} showDailyStatusHeader={false} clients={clients} />
        </div>
      </div>
    </>
  );
}