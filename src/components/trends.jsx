// "use client"
// import { useState } from "react"
// import { IoIosArrowDown } from "react-icons/io";
// import Image from "next/image";
// import Graph from "./graph";

// export default function Trends() {
//   const [active, setActive] = useState("Digestive Balance Trend")
//   // Separate state for each dropdown
//   const [firstTimeRange, setFirstTimeRange] = useState("Weekly")
//   const [secondTimeRange, setSecondTimeRange] = useState("Weekly")
//   const [firstShowDropdown, setFirstShowDropdown] = useState(false)
//   const [secondShowDropdown, setSecondShowDropdown] = useState(false)

//   const labels = ["05 Aug", "06 Aug", "07 Aug", "07 Aug", "07 Aug", "07 Aug", "07 Aug"];
//   const values = [30, 42, 55, 48, 60, 54, 62];

//   const tabs = [
//     { label: "Digestive Balance Trend", color: "#E48326" },
//     { label: "Fuel & Energy Trend", color: "#3FAF58" },
//     { label: "Liver Heptic", color: "#3FAF58" },
//   ]

//   // Define percentage values for each section
//   const firstSectionPercentage = 80;
//   const secondSectionPercentage = 20;

//   // Function to get titles based on active tab
//   const getTitles = () => {
//     switch(active) {
//       case "Digestive Balance Trend":
//         return {
//           firstTitle: "Nutrient Utilization Trend",
//           secondTitle: "Digestive Activity Trend"
//         };
//       case "Fuel & Energy Trend":
//         return {
//           firstTitle: "Fat Metabolism Score",
//           secondTitle: "Glucose Metabolism Score"
//         };
//       case "Liver Heptic":
//         return {
//           firstTitle: "Heptic Metabolism Score",
//           secondTitle: "Detoxification Metabolism Score"
//         };
//       default:
//         return {
//           firstTitle: "Nutrient Utilization Trend",
//           secondTitle: "Digestive Activity Trend"
//         };
//     }
//   };

//   const titles = getTitles();

//   return (
//     <div className="flex-1 min-w-0  rounded-[15px] mx-2">
//       <div className="mt-[15px] ml-[13px]">
//         <span className=" text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[0.4px]">
//           Score Analysis
//         </span>
//       </div>

//       <div className="flex flex-col gap-6">
//         <div className="flex w-full gap-6 mt-[18px] border-b border-[#E1E6ED]">
//           {tabs.map(tab => {
//             const isActive = active === tab.label
//             return (
//               <button
//                 key={tab.label}
//                 onClick={() => setActive(tab.label)}
//                 className={`flex gap-2.5 items-center pb-[13px] pl-[5px] pr-[25px] cursor-pointer
//                   ${isActive ? "border-b-2 border-[#308BF9]" : ""}
//                 `}
//               >
//                 <span
//                   className={`text-[12px] font-semibold leading-[110%] tracking-[-0.24px] 
//                     ${isActive ? "text-[#308BF9]" : "text-[#A1A1A1]"}
//                   `}
//                 >
//                   {tab.label}
//                 </span>
//                 <div
//                   className="w-[6px] h-[6px] rounded-full"
//                   style={{ backgroundColor: tab.color }}
//                 />
//               </button>
//             )
//           })}
//         </div>

//         <div className="flex flex-col gap-9 pt-1.5 pl-[5px] pr-[13px] rounded-[15px]">
//           <div className="flex flex-col gap-[5px] px-[15px] py-[18px] bg-[#F0F0F0] rounded-[15px]">
//             <span className="text-[#252525] text-[12px] font-semibold leading-[130%] tracking-[-0.24px]">Main Marker: Hydrogen</span>
//             <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[-0.4px]">4.752 ppm</span>
//           </div>

//           <div className="flex flex-col gap-[42px]">
//             {/* First Section */}
//             <div className="flex flex-col gap-5">
//               <div className="pb-5 border-b border-[#E1E6ED]">
//                 <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">{titles.firstTitle}</span>
//               </div>
//               <div className="flex flex-col lg:flex-row gap-[30px] items-start">

//                 <div className="flex-1 min-w-0 w-full">
//                   <div className="mx-[15px] my-4">
//                     <div className="flex justify-between ">
//                       <div className="relative">
//                         <div 
//                           className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
//                           onClick={() => setFirstShowDropdown(!firstShowDropdown)}
//                         >
//                           <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">
//                             {firstTimeRange}
//                           </span>
//                           <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
//                         </div>

//                         {/* First Dropdown Menu */}
//                         {firstShowDropdown && (
//                           <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
//                             <div 
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => {
//                                 setFirstTimeRange("Weekly");
//                                 setFirstShowDropdown(false);
//                               }}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Weekly
//                               </span>
//                             </div>
//                             <div 
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => {
//                                 setFirstTimeRange("Monthly");
//                                 setFirstShowDropdown(false);
//                               }}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Monthly
//                               </span>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   <Graph title={titles.firstTitle} labels={labels} values={values} />
//                 </div>

//                 <div className="flex flex-col gap-5 w-full lg:w-auto">
//                   <div className="flex flex-col gap-[5px] w-full relative">
//                     {/* Progress Bar */}
//                     <div className="w-full rounded-full h-2.5 flex gap-0.5 overflow-hidden relative">
//                       <div
//                         className="bg-[#E48326] h-2.5 rounded-[5px]"
//                         style={{ width: "30%" }}
//                       ></div>
//                       <div
//                         className="bg-[#FFBF2D] h-2.5 rounded-[5px]"
//                         style={{ width: "40%" }}
//                       ></div>
//                       <div
//                         className="bg-[#3FAF58] h-2.5 rounded-[5px]"
//                         style={{ width: "30%" }}
//                       ></div>

//                       {/* Pointer Indicator - dynamically positioned */}
//                       <div
//                         className="absolute top-1/2 w-[11px] h-[22px] border-[10px] border-[#252525] rounded-[10px] transform -translate-y-1/2"
//                         style={{ left: `${firstSectionPercentage}%` }}
//                       ></div>
//                     </div>

//                     {/* Labels (positioned absolutely) */}
//                     <div className="relative w-full">
//                       <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal">
//                         0
//                       </span>
//                       <span
//                         className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal"
//                         style={{ left: "30%" }}
//                       >
//                         60
//                       </span>
//                       <span
//                         className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal"
//                         style={{ left: "70%" }}
//                       >
//                         80
//                       </span>
//                       <span className="absolute right-0 text-[8px] text-[#252525] font-normal">
//                         100
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">{firstSectionPercentage}%</p>
//                     <div className="mx-3 h-4 w-px bg-[#252525]"></div>
//                     <p className="text-[#3FAF58] text-[20px] md:text-[25px] font-semibold">Optimal</p>
//                   </div>
//                   <div className="flex flex-col gap-[5px]">
//                     <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
//                     <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]">Likely malabsorption; prefer smaller meals and easy-to-digest proteins</span>
//                   </div>
//                   <div className="border-b border-[#E1E6ED]"></div>
//                   <div className="flex flex-col gap-[5px]">
//                     <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
//                     <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px] break-words">2–6 week low-FODMAP trial with structured re-introduction; smaller, evenly spaced meals; prefer curd/paneer/eggs if tolerated </span>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* Second Section */}
//             <div className="flex flex-col gap-5">
//               <div className="pb-5 border-b border-[#E1E6ED]">
//                 <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">{titles.secondTitle}</span>
//               </div>
//               <div className="flex flex-col lg:flex-row gap-[30px] items-start">

//                 <div className="flex-1 min-w-0 w-full">
//                   <div className="mx-[15px] my-4">
//                     <div className="flex justify-between ">
//                       <div className="relative">
//                         <div 
//                           className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
//                           onClick={() => setSecondShowDropdown(!secondShowDropdown)}
//                         >
//                           <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">
//                             {secondTimeRange}
//                           </span>
//                           <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
//                         </div>

//                         {/* Second Dropdown Menu */}
//                         {secondShowDropdown && (
//                           <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
//                             <div 
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => {
//                                 setSecondTimeRange("Weekly");
//                                 setSecondShowDropdown(false);
//                               }}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Weekly
//                               </span>
//                             </div>
//                             <div 
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => {
//                                 setSecondTimeRange("Monthly");
//                                 setSecondShowDropdown(false);
//                               }}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Monthly
//                               </span>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   <Graph title={titles.secondTitle} labels={labels} values={values} />
//                 </div>

//                 <div className="flex flex-col gap-5 w-full lg:w-auto">
//                   <div className="flex flex-col gap-[5px] w-full relative">
//                     {/* Progress Bar */}
//                     <div className="w-full rounded-full h-2.5 flex gap-0.5 overflow-hidden relative">
//                        <div
//                         className="bg-[#3FAF58] h-2.5 rounded-[5px]"
//                         style={{ width: "30%" }}
//                       ></div>

//                       <div
//                         className="bg-[#FFBF2D] h-2.5 rounded-[5px]"
//                         style={{ width: "40%" }}
//                       ></div>
//                      <div
//                         className="bg-[#E48326] h-2.5 rounded-[5px]"
//                         style={{ width: "30%" }}
//                       ></div>

//                       {/* Pointer Indicator - dynamically positioned */}
//                       <div
//                         className="absolute top-1/2 w-[11px] h-[22px] border-[10px] border-[#252525] rounded-[10px] transform -translate-y-1/2"
//                         style={{ left: `${secondSectionPercentage}%` }}
//                       ></div>
//                     </div>

//                     {/* Labels (positioned absolutely) */}
//                     <div className="relative w-full">
//                       <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal">
//                         0
//                       </span>
//                       <span
//                         className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal"
//                         style={{ left: "30%" }}
//                       >
//                         60
//                       </span>
//                       <span
//                         className="absolute -translate-x-1/2 text-[#252525] text-[8px] font-normal"
//                         style={{ left: "70%" }}
//                       >
//                         80
//                       </span>
//                       <span className="absolute right-0 text-[8px] text-[#252525] font-normal">
//                         100
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">{secondSectionPercentage}%</p>
//                     <div className="mx-3 h-4 w-px bg-[#252525]"></div>
//                     <p className="text-[#3FAF58] text-[20px] md:text-[25px] font-semibold">Optimal</p>
//                   </div>
//                   <div className="flex flex-col gap-[5px]">
//                     <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
//                     <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]">Likely malabsorption; prefer smaller meals and easy-to-digest proteins</span>
//                   </div>
//                   <div className="border-b border-[#E1E6ED]"></div>
//                   <div className="flex flex-col gap-[5px]">
//                     <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
//                     <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px] break-words">2–6 week low-FODMAP trial with structured re-introduction; smaller, evenly spaced meals; prefer curd/paneer/eggs if tolerated </span>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }













// "use client"
// import { useMemo, useState } from "react"
// import { IoIosArrowDown } from "react-icons/io";
// import Image from "next/image";
// import Graph from "./graph";

// export default function Trends() {
//   const [active, setActive] = useState("Digestive Balance Trend")
//   const [firstTimeRange, setFirstTimeRange] = useState("Weekly")
//   const [secondTimeRange, setSecondTimeRange] = useState("Weekly")
//   const [firstShowDropdown, setFirstShowDropdown] = useState(false)
//   const [secondShowDropdown, setSecondShowDropdown] = useState(false)

//   // ---- helpers (labels) ----
//   const formatDDMon = (d) =>
//     d.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }); // "07 Nov"

//   const getWeeklyLabels = () => {
//     // last 7 days including today
//     const today = new Date();
//     const arr = [];
//     for (let i = 6; i >= 0; i--) {
//       const dt = new Date(today);
//       dt.setDate(today.getDate() - i);
//       arr.push(formatDDMon(dt).replace(",", ""));
//     }
//     return arr;
//   };

//   const getMonthlyWeekLabels = () => {
//     const now = new Date();
//     const monthShort = now.toLocaleDateString("en-GB", { month: "short" }); // "Nov"
//     const year = now.getFullYear();
//     const month = now.getMonth();

//     // Count how many ISO-like weeks exist in current month (Mon–Sun buckets)
//     const firstOfMonth = new Date(year, month, 1);
//     const lastOfMonth = new Date(year, month + 1, 0);

//     // Start at Monday of the week containing the 1st
//     const start = new Date(firstOfMonth);
//     const day = start.getDay(); // 0 Sun ... 6 Sat
//     const diffToMonday = (day + 6) % 7; // days to go back to Monday
//     start.setDate(start.getDate() - diffToMonday);

//     // Step weeks forward until we pass the last day of month
//     const labels = [];
//     let w = 1;
//     let cursor = new Date(start);
//     while (cursor <= lastOfMonth) {
//       labels.push(`${monthShort} W${w}`);
//       // jump 7 days
//       cursor.setDate(cursor.getDate() + 7);
//       w += 1;
//       // Avoid infinite loops; max 6 week labels
//       if (w > 6) break;
//     }
//     return labels;
//   };

//   // ---- helpers (values) ----
//   const baseValues = [30, 42, 55, 48, 60, 54, 62]; // your existing sample
//   const fitValues = (desiredLen) => {
//     if (desiredLen === baseValues.length) return baseValues;
//     if (desiredLen < baseValues.length) return baseValues.slice(0, desiredLen);
//     // if we need more, extend by repeating last value
//     const extra = Array.from({ length: desiredLen - baseValues.length }, () => baseValues[baseValues.length - 1]);
//     return [...baseValues, ...extra];
//   };

//   const tabs = [
//     { label: "Digestive Balance Trend", color: "#E48326" },
//     { label: "Fuel & Energy Trend", color: "#3FAF58" },
//     { label: "Liver Heptic", color: "#3FAF58" },
//   ]

//   const firstSectionPercentage = 80;
//   const secondSectionPercentage = 20;

//   const getTitles = () => {
//     switch(active) {
//       case "Digestive Balance Trend":
//         return { firstTitle: "Nutrient Utilization Trend", secondTitle: "Digestive Activity Trend" };
//       case "Fuel & Energy Trend":
//         return { firstTitle: "Fat Metabolism Score", secondTitle: "Glucose Metabolism Score" };
//       case "Liver Heptic":
//         return { firstTitle: "Heptic Metabolism Score", secondTitle: "Detoxification Metabolism Score" };
//       default:
//         return { firstTitle: "Nutrient Utilization Trend", secondTitle: "Digestive Activity Trend" };
//     }
//   };
//   const titles = getTitles();

//   // Compute labels per section based on dropdown
//   const firstLabels = useMemo(
//     () => (firstTimeRange === "Weekly" ? getWeeklyLabels() : getMonthlyWeekLabels()),
//     [firstTimeRange]
//   );
//   const secondLabels = useMemo(
//     () => (secondTimeRange === "Weekly" ? getWeeklyLabels() : getMonthlyWeekLabels()),
//     [secondTimeRange]
//   );

//   // Fit values length to labels length for each section
//   const firstValues = useMemo(() => fitValues(firstLabels.length), [firstLabels]);
//   const secondValues = useMemo(() => fitValues(secondLabels.length), [secondLabels]);

//   return (
//     <div className="flex-1 min-w-0  rounded-[15px] mx-2">
//       <div className="mt-[15px] ml-[13px]">
//         <span className=" text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[0.4px]">
//           Score Analysis
//         </span>
//       </div>

//       <div className="flex flex-col gap-6">
//         <div className="flex w-full gap-6 mt-[18px] border-b border-[#E1E6ED]">
//           {tabs.map(tab => {
//             const isActive = active === tab.label
//             return (
//               <button
//                 key={tab.label}
//                 onClick={() => setActive(tab.label)}
//                 className={`flex gap-2.5 items-center pb-[13px] pl-[5px] pr-[25px] cursor-pointer
//                   ${isActive ? "border-b-2 border-[#308BF9]" : ""}
//                 `}
//               >
//                 <span
//                   className={`text-[12px] font-semibold leading-[110%] tracking-[-0.24px] 
//                     ${isActive ? "text-[#308BF9]" : "text-[#A1A1A1]"}
//                   `}
//                 >
//                   {tab.label}
//                 </span>
//                 <div
//                   className="w-[6px] h-[6px] rounded-full"
//                   style={{ backgroundColor: tab.color }}
//                 />
//               </button>
//             )
//           })}
//         </div>

//         <div className="flex flex-col gap-9 pt-1.5 pl-[5px] pr-[13px] rounded-[15px]">
//           <div className="flex flex-col gap-[5px] px-[15px] py-[18px] bg-[#F0F0F0] rounded-[15px]">
//             <span className="text-[#252525] text-[12px] font-semibold leading-[130%] tracking-[-0.24px]">Main Marker: Hydrogen</span>
//             <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[-0.4px]">4.752 ppm</span>
//           </div>

//           <div className="flex flex-col gap-[42px]">
//             {/* First Section */}
//             <div className="flex flex-col gap-5">
//               <div className="pb-5 border-b border-[#E1E6ED]">
//                 <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">{titles.firstTitle}</span>
//               </div>
//               <div className="flex flex-col lg:flex-row gap-[30px] items-start">

//                 <div className="flex-1 min-w-0 w-full">
//                   <div className="mx-[15px] my-4">
//                     <div className="flex justify-between ">
//                       <div className="relative">
//                         <div 
//                           className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
//                           onClick={() => setFirstShowDropdown(!firstShowDropdown)}
//                         >
//                           <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">
//                             {firstTimeRange}
//                           </span>
//                           <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
//                         </div>

//                         {firstShowDropdown && (
//                           <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
//                             <div 
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => { setFirstTimeRange("Weekly"); setFirstShowDropdown(false); }}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Weekly
//                               </span>
//                             </div>
//                             <div 
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => { setFirstTimeRange("Monthly"); setFirstShowDropdown(false); }}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Monthly
//                               </span>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   {/* Pass computed labels/values */}
//                   <Graph title={titles.firstTitle} labels={firstLabels} values={firstValues} />
//                 </div>

//                 <div className="flex flex-col gap-5 w-full lg:w-auto">
//                   <div className="flex flex-col gap-[5px] w-full relative">
//                     <div className="w-full rounded-full h-2.5 flex gap-0.5 overflow-hidden relative">
//                       <div className="bg-[#E48326] h-2.5 rounded-[5px]" style={{ width: "30%" }}></div>
//                       <div className="bg-[#FFBF2D] h-2.5 rounded-[5px]" style={{ width: "40%" }}></div>
//                       <div className="bg-[#3FAF58] h-2.5 rounded-[5px]" style={{ width: "30%" }}></div>
//                       <div className="absolute top-1/2 w-[11px] h-[22px] border-[10px] border-[#252525] rounded-[10px] transform -translate-y-1/2" style={{ left: `${firstSectionPercentage}%` }}></div>
//                     </div>
//                     <div className="relative w-full">
//                       <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal">0</span>
//                       <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal" style={{ left: "30%" }}>60</span>
//                       <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal" style={{ left: "70%" }}>80</span>
//                       <span className="absolute right-0 text-[8px] text-[#252525] font-normal">100</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">{firstSectionPercentage}%</p>
//                     <div className="mx-3 h-4 w-px bg-[#252525]"></div>
//                     <p className="text-[#3FAF58] text-[20px] md:text-[25px] font-semibold">Optimal</p>
//                   </div>
//                   <div className="flex flex-col gap-[5px]">
//                     <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
//                     <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]">Likely malabsorption; prefer smaller meals and easy-to-digest proteins</span>
//                   </div>
//                   <div className="border-b border-[#E1E6ED]"></div>
//                   <div className="flex flex-col gap-[5px]">
//                     <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
//                     <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px] break-words">2–6 week low-FODMAP trial with structured re-introduction; smaller, evenly spaced meals; prefer curd/paneer/eggs if tolerated </span>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* Second Section */}
//             <div className="flex flex-col gap-5">
//               <div className="pb-5 border-b border-[#E1E6ED]">
//                 <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">{titles.secondTitle}</span>
//               </div>
//               <div className="flex flex-col lg:flex-row gap-[30px] items-start">

//                 <div className="flex-1 min-w-0 w-full">
//                   <div className="mx-[15px] my-4">
//                     <div className="flex justify-between ">
//                       <div className="relative">
//                         <div 
//                           className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
//                           onClick={() => setSecondShowDropdown(!secondShowDropdown)}
//                         >
//                           <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">
//                             {secondTimeRange}
//                           </span>
//                           <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
//                         </div>

//                         {secondShowDropdown && (
//                           <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
//                             <div 
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => { setSecondTimeRange("Weekly"); setSecondShowDropdown(false); }}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Weekly
//                               </span>
//                             </div>
//                             <div 
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => { setSecondTimeRange("Monthly"); setSecondShowDropdown(false); }}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Monthly
//                               </span>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   {/* Pass computed labels/values */}
//                   <Graph title={titles.secondTitle} labels={secondLabels} values={secondValues} />
//                 </div>

//                 <div className="flex flex-col gap-5 w-full lg:w-auto">
//                   <div className="flex flex-col gap-[5px] w-full relative">
//                     <div className="w-full rounded-full h-2.5 flex gap-0.5 overflow-hidden relative">
//                       <div className="bg-[#3FAF58] h-2.5 rounded-[5px]" style={{ width: "30%" }}></div>
//                       <div className="bg-[#FFBF2D] h-2.5 rounded-[5px]" style={{ width: "40%" }}></div>
//                       <div className="bg-[#E48326] h-2.5 rounded-[5px]" style={{ width: "30%" }}></div>
//                       <div className="absolute top-1/2 w-[11px] h-[22px] border-[10px] border-[#252525] rounded-[10px] transform -translate-y-1/2" style={{ left: `${secondSectionPercentage}%` }}></div>
//                     </div>
//                     <div className="relative w-full">
//                       <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal">0</span>
//                       <span className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal" style={{ left: "30%" }}>60</span>
//                       <span className="absolute -translate-x-1/2 text-[#252525] text-[8px] font-normal" style={{ left: "70%" }}>80</span>
//                       <span className="absolute right-0 text-[8px] text-[#252525] font-normal">100</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">{secondSectionPercentage}%</p>
//                     <div className="mx-3 h-4 w-px bg-[#252525]"></div>
//                     <p className="text-[#3FAF58] text-[20px] md:text-[25px] font-semibold">Optimal</p>
//                   </div>
//                   <div className="flex flex-col gap-[5px]">
//                     <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
//                     <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]">Likely malabsorption; prefer smaller meals and easy-to-digest proteins</span>
//                   </div>
//                   <div className="border-b border-[#E1E6ED]"></div>
//                   <div className="flex flex-col gap-[5px]">
//                     <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">Interpretation:</span>
//                     <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px] break-words">2–6 week low-FODMAP trial with structured re-introduction; smaller, evenly spaced meals; prefer curd/paneer/eggs if tolerated </span>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }









// "use client"
// import { useMemo, useState, useEffect } from "react"
// import { IoIosArrowDown } from "react-icons/io";
// import Image from "next/image";
// import Graph from "./graph";
// import { fetchScoreTrend, fetchScoresInsight } from "../services/authService";
// import { useSearchParams } from "next/navigation";
// import { cookieManager } from "../lib/cookies";
// import { useDispatch } from "react-redux";
// import { setScoresInsight } from "../store/scoresInsightSlice";



// export default function Trends({ selectedDate }) {
//   const dispatch = useDispatch();
//   const searchParams = useSearchParams();
//   const dieticianData = cookieManager.getJSON("dietician");
//   const dieticianId = dieticianData?.dietician_id;
//   const profileId = searchParams.get("profile_id");

//   const [active, setActive] = useState("Digestive Balance Trend");
//   const [firstTimeRange, setFirstTimeRange] = useState("Weekly");
//   const [secondTimeRange, setSecondTimeRange] = useState("Weekly");
//   const [firstShowDropdown, setFirstShowDropdown] = useState(false);
//   const [secondShowDropdown, setSecondShowDropdown] = useState(false);
//   const [graphData, setGraphData] = useState(null);
//   console.log("graphData712:-", graphData);
//   const [scoresInsightData, setScoresInsightData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [scoresLoading, setScoresLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [apiMessage, setApiMessage] = useState(null);

//   // Function to format date to YYYY-MM-DD
//   const formatDateToYYYYMMDD = (date) => {
//     if (!date) return null;

//     if (typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
//       return date;
//     }

//     const dateObj = new Date(date);
//     if (isNaN(dateObj.getTime())) {
//       console.error("Invalid date:", date);
//       return null;
//     }

//     const year = dateObj.getFullYear();
//     const month = String(dateObj.getMonth() + 1).padStart(2, "0");
//     const day = String(dateObj.getDate()).padStart(2, "0");

//     return `${year}-${month}-${day}`;
//   };

//   // 🔹 Normalize tests_by_date → { range, data }
//   const normalizeTestsByDate = (testsByDate) => {
//     if (!testsByDate) return null;

//     const dates = Object.keys(testsByDate).sort(); // ["2025-11-20", "2025-11-23", ...]
//     if (dates.length === 0) return null;

//     const data = dates.map((date) => {
//       const t = testsByDate[date];
//       const s = t.scores || {};

//       return {
//         date, // "2025-11-20"
//         absorptive_metabolism_score: s.absorptive ?? 0,
//         fermentative_metabolism_score: s.fermentative ?? 0,
//         fat_metabolism_score: s.fat ?? 0,
//         glucose_metabolism_score: s.glucose ?? 0,
//         hepatic_stress_metabolism_score: s.hepatic_stress ?? 0,
//         detoxification_metabolism_score: s.detoxification ?? 0,
//       };
//     });

//     return {
//       range: {
//         start_date: dates[0],
//         end_date: dates[dates.length - 1],
//       },
//       data,
//     };
//   };

//   // Fetch ALL data once when component mounts
//   useEffect(() => {
//     const fetchInitialData = async () => {
//       if (!dieticianId || !profileId) return;

//       setLoading(true);
//       setError(null);
//       setApiMessage(null);
//       try {
//         const response = await fetchScoreTrend(dieticianId, profileId);
//         if (response && response.tests_by_date) {
//           const normalized = normalizeTestsByDate(response.tests_by_date);
//           if (normalized) {
//             setGraphData(normalized);
//             setApiMessage(null);
//           } else {
//             setGraphData(null);
//             setApiMessage("No data available");
//           }
//         } else {
//           setGraphData(null);
//           setApiMessage(response?.message || "No data available");
//         }
//       } catch (err) {
//         setError(err.message || "An error occurred");
//         setGraphData(null);
//         setApiMessage(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInitialData();
//   }, [dieticianId, profileId]);

//   // Fetch scores insight data when selectedDate changes
//   useEffect(() => {
//     const fetchScoresData = async () => {
//       if (!dieticianId || !profileId || !selectedDate) return;

//       const formattedDate = formatDateToYYYYMMDD(selectedDate);
//       if (!formattedDate) {
//         console.error("Invalid date format, cannot fetch scores insight");
//         return;
//       }

//       setScoresLoading(true);
//       try {
//         const response = await fetchScoresInsight(
//           dieticianId,
//           profileId,
//           formattedDate
//         );

//         if (response?.noData) {
//           setScoresInsightData(null);
//           dispatch(setScoresInsight(null));
//           //sessionStorage.setItem("scoresInsight", "null");
//         } else if (response && response.latest_test) {
//           setScoresInsightData(response);
//           dispatch(setScoresInsight(response));
//           //sessionStorage.setItem("scoresInsight", JSON.stringify(response));
//         } else {
//           setScoresInsightData(null);
//           dispatch(setScoresInsight(null));
//           //sessionStorage.setItem("scoresInsight", "null");
//         }
//       } catch (err) {
//         console.error("Error fetching scores insight:", err);
//         setScoresInsightData(null);
//         dispatch(setScoresInsight(null));
//         //sessionStorage.setItem("scoresInsight", "null");
//       } finally {
//         setScoresLoading(false);
//       }
//     };

//     fetchScoresData();
//   }, [dieticianId, profileId, selectedDate, dispatch]);

//   // Get active marker based on tab
//   const getActiveMarker = () => {
//     switch (active) {
//       case "Digestive Balance Trend":
//         return {
//           name: "Hydrogen",
//           value: scoresInsightData?.latest_test?.ppm?.h2,
//           unit: "ppm",
//         };
//       case "Fuel & Energy Trend":
//         return {
//           name: "Acetone",
//           value: scoresInsightData?.latest_test?.ppm?.acetone,
//           unit: "ppm",
//         };
//       case "Liver Heptic":
//         return {
//           name: "Ethanol",
//           value: scoresInsightData?.latest_test?.ppm?.ethanol,
//           unit: "ppm",
//         };
//       default:
//         return {
//           name: "Hydrogen",
//           value: scoresInsightData?.latest_test?.ppm?.h2,
//           unit: "ppm",
//         };
//     }
//   };

//   const activeMarker = getActiveMarker();

//   const getMarkersForScoreType = (scoreType) => {
//     switch (scoreType) {
//       case "absorptive":
//       case "detoxification":
//         return [
//           { position: "0%", label: "0" },
//           { position: "50%", label: "50" },
//           { position: "80%", label: "80" },
//           { position: "100%", label: "100" },
//         ];

//       case "fermentative":
//         return [
//           { position: "0%", label: "0" },
//           { position: "20%", label: "20" },
//           { position: "30%", label: "30" },
//           { position: "100%", label: "100" },
//         ];

//       case "fat":
//         return [
//           { position: "0%", label: "0" },
//           { position: "70%", label: "70" },
//           { position: "80%", label: "80" },
//           { position: "100%", label: "100" },
//         ];

//       case "glucose":
//         return [
//           { position: "0%", label: "0" },
//           { position: "20%", label: "20" },
//           { position: "30%", label: "30" },
//           { position: "100%", label: "100" },
//         ];

//       case "hepatic_stress":
//         return [
//           { position: "0%", label: "0" },
//           { position: "20%", label: "20" },
//           { position: "30%", label: "30" },
//           { position: "100%", label: "100" },
//         ];

//       default:
//         return [
//           { position: "0%", label: "0" },
//           { position: "100%", label: "100" },
//         ];
//     }
//   };

//   const getZoneSegmentsForScoreType = (scoreType) => {
//     switch (scoreType) {
//       case "fermentative":
//         return [
//           { color: "#3FAF58", width: "20%" },
//           { color: "#FFBF2D", width: "10%" },
//           { color: "#E48326", width: "70%" },
//         ];

//       case "absorptive":
//         return [
//           { color: "#E48326", width: "50%" },
//           { color: "#FFBF2D", width: "30%" },
//           { color: "#3FAF58", width: "20%" },
//         ];

//       case "fat":
//         return [
//           { color: "#E48326", width: "70%" },
//           { color: "#FFBF2D", width: "10%" },
//           { color: "#3FAF58", width: "20%" },
//         ];

//       case "glucose":
//         return [
//           { color: "#3FAF58", width: "20%" },
//           { color: "#FFBF2D", width: "10%" },
//           { color: "#E48326", width: "70%" },
//         ];

//       case "hepatic_stress":
//         return [
//           { color: "#3FAF58", width: "20%" },
//           { color: "#FFBF2D", width: "10%" },
//           { color: "#E48326", width: "70%" },
//         ];

//       case "detoxification":
//         return [
//           { color: "#E48326", width: "50%" },
//           { color: "#FFBF2D", width: "30%" },
//           { color: "#3FAF58", width: "20%" },
//         ];

//       default:
//         return [{ color: "#E1E6ED", width: "100%" }];
//     }
//   };

//   // Get progress bar configuration from scores insight data
//   const getProgressBarConfigs = () => {
//     if (scoresInsightData?.noData) {
//       return getNoDataProgressBarConfigs();
//     }

//     if (!scoresInsightData || !scoresInsightData.latest_test) {
//       return getDefaultProgressBarConfigs();
//     }

//     const testJson = scoresInsightData.latest_test.test_json;
//     const scores = scoresInsightData.latest_test.scores;

//     const hasActualData = testJson && testJson.Metabolism_Score_Analysis;
//     const hasOnlyRawData = testJson && testJson.raw;

//     if (hasOnlyRawData) {
//       return getNoDataProgressBarConfigs();
//     }

//     if (hasActualData) {
//       const metabolismData = testJson.Metabolism_Score_Analysis;

//       const getZoneColor = (zone) => {
//         switch (zone) {
//           case "Optimal":
//             return "#3FAF58";
//           case "Moderate":
//             return "#FFBF2D";
//           case "Focus":
//             return "#E48326";
//           default:
//             return "#3FAF58";
//         }
//       };

//       switch (active) {
//         case "Digestive Balance Trend":
//           return [
//             {
//               percentage: scores.absorptive || 0,
//               colors: getZoneSegmentsForScoreType("absorptive"),
//               markers: getMarkersForScoreType("absorptive"),
//               status: metabolismData.absorption?.zone || "N/A",
//               statusColor: getZoneColor(metabolismData.absorption?.zone),
//               interpretation:
//                 metabolismData.absorption?.interpretation ||
//                 "No interpretation available",
//               intervention:
//                 metabolismData.absorption?.intervention ||
//                 "No intervention available",
//             },
//             {
//               percentage: scores.fermentative || 0,
//               colors: getZoneSegmentsForScoreType("fermentative"),
//               markers: getMarkersForScoreType("fermentative"),
//               status: metabolismData.fermentation?.zone || "N/A",
//               statusColor: getZoneColor(metabolismData.fermentation?.zone),
//               interpretation:
//                 metabolismData.fermentation?.interpretation ||
//                 "No interpretation available",
//               intervention:
//                 metabolismData.fermentation?.intervention ||
//                 "No intervention available",
//             },
//           ];

//         case "Fuel & Energy Trend":
//           return [
//             {
//               percentage: scores.fat || 0,
//               colors: getZoneSegmentsForScoreType("fat"),
//               markers: getMarkersForScoreType("fat"),
//               status: metabolismData.fat_metabolism?.zone || "N/A",
//               statusColor: getZoneColor(metabolismData.fat_metabolism?.zone),
//               interpretation:
//                 metabolismData.fat_metabolism?.interpretation ||
//                 "No interpretation available",
//               intervention:
//                 metabolismData.fat_metabolism?.intervention ||
//                 "No intervention available",
//             },
//             {
//               percentage: scores.glucose || 0,
//               colors: getZoneSegmentsForScoreType("glucose"),
//               markers: getMarkersForScoreType("glucose"),
//               status: metabolismData.glucose_metabolism?.zone || "N/A",
//               statusColor: getZoneColor(metabolismData.glucose_metabolism?.zone),
//               interpretation:
//                 metabolismData.glucose_metabolism?.interpretation ||
//                 "No interpretation available",
//               intervention:
//                 metabolismData.glucose_metabolism?.intervention ||
//                 "No intervention available",
//             },
//           ];

//         case "Liver Heptic":
//           return [
//             // {
//             //   percentage: scores.hepatic_stress || 0,
//             //   colors: getZoneSegmentsForScoreType("hepatic_stress"),
//             //   markers: getMarkersForScoreType("hepatic_stress"),
//             //   status: metabolismData.hepatic_stress?.zone || "N/A",
//             //   statusColor: getZoneColor(metabolismData.hepatic_stress?.zone),
//             //   interpretation:
//             //     metabolismData.hepatic_stress?.interpretation ||
//             //     "No interpretation available",
//             //   intervention:
//             //     metabolismData.hepatic_stress?.intervention ||
//             //     "No intervention available",
//             // },
//             // {
//             //   percentage: scores.detoxification || 0,
//             //   colors: getZoneSegmentsForScoreType("detoxification"),
//             //   markers: getMarkersForScoreType("detoxification"),
//             //   status: metabolismData.detoxification?.zone || "N/A",
//             //   statusColor: getZoneColor(metabolismData.detoxification?.zone),
//             //   interpretation:
//             //     metabolismData.detoxification?.interpretation ||
//             //     "No interpretation available",
//             //   intervention:
//             //     metabolismData.detoxification?.intervention ||
//             //     "No intervention available",
//             // },



//              {
//               percentage: scores.detoxification || 0,
//               colors: getZoneSegmentsForScoreType("detoxification"),
//               markers: getMarkersForScoreType("detoxification"),
//               status: metabolismData.detoxification?.zone || "N/A",
//               statusColor: getZoneColor(metabolismData.detoxification?.zone),
//               interpretation:
//                 metabolismData.detoxification?.interpretation ||
//                 "No interpretation available",
//               intervention:
//                 metabolismData.detoxification?.intervention ||
//                 "No intervention available",
//             },


//              {
//               percentage: scores.hepatic_stress || 0,
//               colors: getZoneSegmentsForScoreType("hepatic_stress"),
//               markers: getMarkersForScoreType("hepatic_stress"),
//               status: metabolismData.hepatic_stress?.zone || "N/A",
//               statusColor: getZoneColor(metabolismData.hepatic_stress?.zone),
//               interpretation:
//                 metabolismData.hepatic_stress?.interpretation ||
//                 "No interpretation available",
//               intervention:
//                 metabolismData.hepatic_stress?.intervention ||
//                 "No intervention available",
//             },
           


//           ];

//         default:
//           return getDefaultProgressBarConfigs();
//       }
//     }

//     return getNoDataProgressBarConfigs();
//   };

//   const getTitles = () => {
//     switch (active) {
//       case "Digestive Balance Trend":
//         return {
//           firstTitle: "Nutrient Utilization Trend",
//           secondTitle: "Digestive Activity Trend",
//           firstScoreType: "absorptive",
//           secondScoreType: "fermentative",
//         };
//       case "Fuel & Energy Trend":
//         return {
//           firstTitle: "Fat Metabolism Score",
//           secondTitle: "Glucose Metabolism Score",
//           firstScoreType: "fat",
//           secondScoreType: "glucose",
//         };
//       // case "Liver Heptic":
//       //   return {
//       //     firstTitle: "Hepatic Stress Score",
//       //     secondTitle: "Detoxification Metabolism Score",
//       //     firstScoreType: "hepatic_stress",
//       //     secondScoreType: "detoxification",
//       //   };


// case "Liver Heptic":
//         return {
//           firstTitle: "Detoxification Metabolism Score",
//           secondTitle: "Hepatic Stress Score",
//           firstScoreType: "detoxification",
//           secondScoreType: "hepatic_stress",
//         };

//       default:
//         return {
//           firstTitle: "Nutrient Utilization Trend",
//           secondTitle: "Digestive Activity Trend",
//           firstScoreType: "absorptive",
//           secondScoreType: "fermentative",
//         };
//     }
//   };

//   // Helper function for default config
//   const getDefaultProgressBarConfigs = () => {
//     const titles = getTitles();

//     return [
//       {
//         percentage: "-",
//         colors: getZoneSegmentsForScoreType(titles.firstScoreType),
//         markers: getMarkersForScoreType(titles.firstScoreType),
//         status: "Optimal",
//         statusColor: "#3FAF58",
//         interpretation: "-",
//         intervention: "-",
//       },
//       {
//         percentage: "-",
//         colors: getZoneSegmentsForScoreType(titles.secondScoreType),
//         markers: getMarkersForScoreType(titles.secondScoreType),
//         status: "Optimal",
//         statusColor: "#3FAF58",
//         interpretation: "-",
//         intervention: "-",
//       },
//     ];
//   };

//   // Helper function for "No Data Found" config
//   const getNoDataProgressBarConfigs = () => {
//     return [
//       {
//         percentage: 0,
//         colors: [
//           { color: "#E1E6ED", width: "30%" },
//           { color: "#E1E6ED", width: "40%" },
//           { color: "#E1E6ED", width: "30%" },
//         ],
//         markers: [
//           { position: "0%", label: "0" },
//           { position: "30%", label: "60" },
//           { position: "70%", label: "80" },
//           { position: "100%", label: "100" },
//         ],
//         status: "No Data",
//         statusColor: "#A1A1A1",
//         interpretation: "No test data available for the selected date",
//         intervention:
//           "Please select a different date with available test results",
//       },
//       {
//         percentage: 0,
//         colors: [
//           { color: "#E1E6ED", width: "30%" },
//           { color: "#E1E6ED", width: "40%" },
//           { color: "#E1E6ED", width: "30%" },
//         ],
//         markers: [
//           { position: "0%", label: "0" },
//           { position: "30%", label: "60" },
//           { position: "70%", label: "80" },
//           { position: "100%", label: "100" },
//         ],
//         status: "No Data",
//         statusColor: "#A1A1A1",
//         interpretation: "No test data available for the selected date",
//         intervention:
//           "Please select a different date with available test results",
//       },
//     ];
//   };

//   const progressBarConfigs = getProgressBarConfigs();

//   const ProgressBarSection = ({ config }) => (
//     <div className="flex flex-col gap-5 w-full lg:w-auto">
//       <div className="flex flex-col gap-[5px] w-full relative">
//         <div className="w-full rounded-[10px] h-[22px] flex gap-0.5 relative items-center">
//           {config.colors.map((colorConfig, index) => (
//             <div
//               key={index}
//               className="h-2.5 rounded-[5px]"
//               style={{
//                 backgroundColor: colorConfig.color,
//                 width: colorConfig.width,
//               }}
//             />
//           ))}
//           <div
//             className="absolute top-1/2 w-1 h-[22px] border-[10px] border-[#252525] rounded-[10px] transform -translate-y-1/2"
//             style={{
//               left:
//                 config.percentage === "-"
//                   ? "0%"
//                   : `${Math.max(
//                       0,
//                       Math.min(100, Number(config.percentage) || 0)
//                     )}%`,
//             }}
//           />
//         </div>
//         <div className="relative w-full">
//           {config.markers.map((marker, index) => (
//             <span
//               key={index}
//               className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal"
//               style={{ left: marker.position }}
//             >
//               {marker.label}
//             </span>
//           ))}
//         </div>
//       </div>
//       <div className="flex items-center">
//         {/* <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">
//           {config.percentage === "-"
//             ? "-"
//             : `${Number(config.percentage).toFixed(0)}%`}
//         </p> */}

//         <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">
//   {config.percentage === "-"
//     ? "-"
//     : `${Math.floor(Number(config.percentage) || 0)}%`}
// </p>

//         <div className="mx-3 h-4 w-px bg-[#252525]"></div>
//         <p
//           className="text-[20px] md:text-[25px] font-semibold"
//           style={{ color: config.statusColor }}
//         >
//           {config.status}
//         </p>
//       </div>
//       <div className="flex flex-col gap-[5px]">
//         <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">
//           Interpretation:
//         </span>
//         <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]">
//           {config.interpretation}
//         </span>
//       </div>
//       <div className="border-b border-[#E1E6ED]"></div>
//       <div className="flex flex-col gap-[5px]">
//         <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">
//           Intervention:
//         </span>
//         <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px] break-words">
//           {config.intervention}
//         </span>
//       </div>
//     </div>
//   );

//   const getWeekOfMonth = (date) => {
//     const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
//     const firstDayOfWeek = firstDay.getDay(); // 0 = Sun
//     const adjustedFirstDay = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1; // Monday = 0
//     const diff =
//       Math.floor((date.getDate() + adjustedFirstDay - 1) / 7) + 1; // 1..5
//     return diff;
//   };

//   // const aggregateDataByWeek = (data, scoreType) => {
//   //   if (!data || data.length === 0) {
//   //     return { labels: [], values: [] };
//   //   }

//   //   // Use last record's month as current month
//   //   const lastDate = new Date(data[data.length - 1].date);
//   //   const targetMonth = lastDate.getMonth();
//   //   const targetYear = lastDate.getFullYear();

//   //   const monthData = data.filter((item) => {
//   //     const d = new Date(item.date);
//   //     return d.getMonth() === targetMonth && d.getFullYear() === targetYear;
//   //   });

//   //   const weeklyData = {};

//   //   monthData.forEach((item) => {
//   //     const date = new Date(item.date);
//   //     const weekNumber = getWeekOfMonth(date);
//   //     const weekKey = `Week ${weekNumber}`;

//   //     if (!weeklyData[weekKey]) {
//   //       weeklyData[weekKey] = {
//   //         values: [],
//   //       };
//   //     }

//   //     let score = 0;
//   //     switch (scoreType) {
//   //       case "absorptive":
//   //         score = parseInt(item.absorptive_metabolism_score) || 0;
//   //         break;
//   //       case "fermentative":
//   //         score = parseInt(item.fermentative_metabolism_score) || 0;
//   //         break;
//   //       case "fat":
//   //         score = parseInt(item.fat_metabolism_score) || 0;
//   //         break;
//   //       case "glucose":
//   //         score = parseInt(item.glucose_metabolism_score) || 0;
//   //         break;
//   //       // case "hepatic_stress":
//   //       //   score = parseInt(item.hepatic_stress_metabolism_score) || 0;
//   //       //   break;
//   //       // case "detoxification":
//   //       //   score = parseInt(item.detoxification_metabolism_score) || 0;
//   //       //   break;
         
//   //       case "detoxification":
//   //         score = parseInt(item.detoxification_metabolism_score) || 0;
//   //         break;
//   //         case "hepatic_stress":
//   //         score = parseInt(item.hepatic_stress_metabolism_score) || 0;
//   //         break;
//   //       default:
//   //         score = 0;
//   //     }

//   //     weeklyData[weekKey].values.push(score);
//   //   });

//   //   const result = { labels: [], values: [] };

//   //   Object.keys(weeklyData)
//   //     .sort((a, b) => {
//   //       const wa = parseInt(a.split(" ")[1]);
//   //       const wb = parseInt(b.split(" ")[1]);
//   //       return wa - wb;
//   //     })
//   //     .forEach((week) => {
//   //       const weekData = weeklyData[week];
//   //       const avg =
//   //         weekData.values.reduce((sum, v) => sum + v, 0) /
//   //         weekData.values.length;

//   //       result.labels.push(week);
//   //       result.values.push(Math.round(avg));
//   //     });

//   //   return result;
//   // };




//   const aggregateDataByWeek = (data, scoreType) => {
//   if (!data || data.length === 0) {
//     return { labels: [], values: [] };
//   }

//   // Use last record's month as current month
//   const lastDate = new Date(data[data.length - 1].date);
//   const targetMonth = lastDate.getMonth();
//   const targetYear = lastDate.getFullYear();

//   // keep only that month data
//   const monthData = data.filter((item) => {
//     const d = new Date(item.date);
//     return d.getMonth() === targetMonth && d.getFullYear() === targetYear;
//   });

//   if (monthData.length === 0) return { labels: [], values: [] };

//   const weeklyData = {};

//   // helper: month short label
//   const monthShort = (d) => d.toLocaleDateString("en-GB", { month: "short" });

//   // helper: dd Mon
//   const formatDayMonth = (d) => {
//     const day = String(d.getDate()).padStart(2, "0");
//     return `${day} ${monthShort(d)}`;
//   };

//   // helper: get Monday of the week (Mon-Sun)
//   const getWeekStartMonday = (dateObj) => {
//     const d = new Date(dateObj);
//     const day = d.getDay(); // 0 Sun, 1 Mon...
//     const diff = day === 0 ? -6 : 1 - day; // shift back to Monday
//     d.setDate(d.getDate() + diff);
//     d.setHours(0, 0, 0, 0);
//     return d;
//   };

//   // helper: get Sunday of same week
//   const getWeekEndSunday = (mondayObj) => {
//     const d = new Date(mondayObj);
//     d.setDate(d.getDate() + 6);
//     d.setHours(0, 0, 0, 0);
//     return d;
//   };

//   // score getter (same logic you had)
//   const getScore = (item) => {
//     switch (scoreType) {
//       case "absorptive":
//         return parseInt(item.absorptive_metabolism_score) || 0;
//       case "fermentative":
//         return parseInt(item.fermentative_metabolism_score) || 0;
//       case "fat":
//         return parseInt(item.fat_metabolism_score) || 0;
//       case "glucose":
//         return parseInt(item.glucose_metabolism_score) || 0;
//       case "detoxification":
//         return parseInt(item.detoxification_metabolism_score) || 0;
//       case "hepatic_stress":
//         return parseInt(item.hepatic_stress_metabolism_score) || 0;
//       default:
//         return 0;
//     }
//   };

//   // group by week range label
//   monthData.forEach((item) => {
//     const dateObj = new Date(item.date);

//     const monday = getWeekStartMonday(dateObj);
//     const sunday = getWeekEndSunday(monday);

//     // clamp to current month boundaries (so last week becomes "29 Dec - 31 Dec")
//     const monthStart = new Date(targetYear, targetMonth, 1);
//     const monthEnd = new Date(targetYear, targetMonth + 1, 0);

//     const start = monday < monthStart ? monthStart : monday;
//     const end = sunday > monthEnd ? monthEnd : sunday;

//     const weekLabel = `${formatDayMonth(start)} - ${formatDayMonth(end)}`;

//     if (!weeklyData[weekLabel]) weeklyData[weekLabel] = [];
//     weeklyData[weekLabel].push(getScore(item));
//   });

//   // sort weeks by label start date
//   const result = { labels: [], values: [] };

//   const sortedLabels = Object.keys(weeklyData).sort((a, b) => {
//     // parse "DD Mon - ..." safely
//     const parseStart = (label) => {
//       const [startPart] = label.split(" - ");
//       // startPart = "01 Dec"
//       const [dd, mon] = startPart.split(" ");
//       const monthIndex = new Date(`${mon} 01, ${targetYear}`).getMonth();
//       return new Date(targetYear, monthIndex, Number(dd));
//     };
//     return parseStart(a) - parseStart(b);
//   });

//   sortedLabels.forEach((label) => {
//     const arr = weeklyData[label];
//     const avg = arr.reduce((sum, v) => sum + v, 0) / arr.length;
//     result.labels.push(label);
//     result.values.push(Math.round(avg));
//   });

//   return result;
// };





//   const formatDateLabel = (dateString) => {
//     try {
//       const date = new Date(dateString);
//       if (isNaN(date.getTime())) {
//         console.error("Invalid date string:", dateString);
//         return "Invalid Date";
//       }

//       const day = String(date.getDate()).padStart(2, "0");
//       const month = date.toLocaleDateString("en-GB", { month: "short" });
//       return `${day} ${month}`;
//     } catch (error) {
//       console.error("Error formatting date:", error);
//       return "Invalid Date";
//     }
//   };

//   // 🔹 Main data processing for Weekly / Monthly
//   const getProcessedData = (scoreType, timeRange) => {
//     if (!graphData || !graphData.data) {
//       return { labels: [], values: [] };
//     }

//     const sortedData = [...graphData.data].sort(
//       (a, b) => new Date(a.date) - new Date(b.date)
//     );

//     if (timeRange === "Weekly") {
//       const last7 = sortedData.slice(-7);

//       const labels = last7.map((item) => formatDateLabel(item.date));
//       const values = last7.map((item) => {
//         switch (scoreType) {
//           case "absorptive":
//             return parseInt(item.absorptive_metabolism_score) || 0;
//           case "fermentative":
//             return parseInt(item.fermentative_metabolism_score) || 0;
//           case "fat":
//             return parseInt(item.fat_metabolism_score) || 0;
//           case "glucose":
//             return parseInt(item.glucose_metabolism_score) || 0;
//           // case "hepatic_stress":
//           //   return parseInt(item.hepatic_stress_metabolism_score) || 0;
//           // case "detoxification":
//           //   return parseInt(item.detoxification_metabolism_score) || 0;

//  case "detoxification":
//             return parseInt(item.detoxification_metabolism_score) || 0;
//              case "hepatic_stress":
//             return parseInt(item.hepatic_stress_metabolism_score) || 0;
         
//           default:
//             return 0;
//         }
//       });

//       return { labels, values };
//     }

//     if (timeRange === "Monthly") {
//       return aggregateDataByWeek(sortedData, scoreType);
//     }

//     return { labels: [], values: [] };
//   };

//   const handleFirstTimeRangeChange = (newRange) => {
//     setFirstTimeRange(newRange);
//     setFirstShowDropdown(false);
//   };

//   const handleSecondTimeRangeChange = (newRange) => {
//     setSecondTimeRange(newRange);
//     setSecondShowDropdown(false);
//   };

//   const getTabColor = (tabLabel) => {
//     const metabolismData =
//       scoresInsightData?.latest_test?.test_json?.Metabolism_Score_Analysis;

//     if (!metabolismData) {
//       if (tabLabel === "Digestive Balance Trend") return "#E48326";
//       if (tabLabel === "Fuel & Energy Trend") return "#3FAF58";
//       if (tabLabel === "Liver Heptic") return "#3FAF58";
//       return "#E1E6ED";
//     }

//     let zone1 = "";
//     let zone2 = "";

//     switch (tabLabel) {
//       case "Digestive Balance Trend":
//         zone1 = metabolismData.absorption?.zone || "";
//         zone2 = metabolismData.fermentation?.zone || "";
//         break;
//       case "Fuel & Energy Trend":
//         zone1 = metabolismData.fat_metabolism?.zone || "";
//         zone2 = metabolismData.glucose_metabolism?.zone || "";
//         break;
//       case "Liver Heptic":
//         zone1 = metabolismData.hepatic_stress?.zone || "";
//         zone2 = metabolismData.detoxification?.zone || "";
//         break;
//       default:
//         break;
//     }

//     const z1 = zone1.toLowerCase();
//     const z2 = zone2.toLowerCase();

//     const hasFocus = z1 === "Focus" || z2 === "Focus";
//     const hasModerate = z1 === "Moderate" || z2 === "Moderate";
//     const hasOptimal = z1 === "Optimal" || z2 === "Optimal";

//     if (hasFocus) return "#E48326";
//     if (hasModerate) return "#FFBF2D";
//     if (hasOptimal) return "#3FAF58";

//     return "#E1E6ED";
//   };

//   const tabs = [
//     { label: "Digestive Balance Trend" },
//     { label: "Fuel & Energy Trend" },
//     { label: "Liver Heptic" },
//   ];

//   const titles = getTitles();

//   const firstSectionData = useMemo(
//     () => getProcessedData(titles.firstScoreType, firstTimeRange),
//     [graphData, titles.firstScoreType, firstTimeRange]
//   );

//   console.log("firstSectionData1572:-", firstSectionData);

//   const secondSectionData = useMemo(
//     () => getProcessedData(titles.secondScoreType, secondTimeRange),
//     [graphData, titles.secondScoreType, secondTimeRange]
//   );


//     console.log("secondSectionData1580:-", secondSectionData);

//   if (loading) {
//     return (
//       <div className="flex-1 min-w-0 rounded-[15px] mx-2 p-4">
//         Loading graph data...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex-1 min-w-0 rounded-[15px] mx-2 p-4 text-red-500">
//         Error: {error}
//       </div>
//     );
//   }

//   // if (!scoresLoading && (!scoresInsightData || scoresInsightData?.noData)) {
//   //   return null; 
//   // }

//   return (
//     <div className="flex-1 min-w-0  rounded-[15px] mx-2">
//       <div className="mt-[15px] ml-[13px]">
//         <span className=" text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[0.4px]">
//           Score Analysis
//         </span>
//       </div>

//       <div className="flex flex-col gap-6">
//         <div className="flex w-full gap-6 mt-[18px] border-b border-[#E1E6ED]">
//           {tabs.map(tab => {
//             const isActive = active === tab.label
//             return (
//               <button
//                 key={tab.label}
//                 onClick={() => setActive(tab.label)}
//                 className={`flex gap-2.5 items-center pb-[13px] pl-[5px] pr-[25px] cursor-pointer
//                   ${isActive ? "border-b-2 border-[#308BF9]" : ""}
//                 `}
//               >
//                 <span
//                   className={`text-[12px] font-semibold leading-[110%] tracking-[-0.24px] 
//                     ${isActive ? "text-[#308BF9]" : "text-[#A1A1A1]"}
//                   `}
//                 >
//                   {tab.label}
//                 </span>
//                 <div
//                   className="w-[6px] h-[6px] rounded-full"
//                   style={{ backgroundColor: getTabColor(tab.label)  }}
//                 />
//               </button>
//             )
//           })}
//         </div>

//         <div className="flex flex-col gap-9 pt-1.5 pl-[5px] pr-[13px] rounded-[15px]">
//           <div className="flex flex-col gap-[5px] px-[15px] py-[18px] bg-[#F0F0F0] rounded-[15px]">
//             <span className="text-[#252525] text-[12px] font-semibold leading-[130%] tracking-[-0.24px]">
//               Main Marker: {activeMarker.name}
//             </span>
//             <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[-0.4px]">
//               {activeMarker.value ? `${parseFloat(activeMarker.value).toFixed(3)} ${activeMarker.unit}` : "-"}
//             </span>
//           </div>

//           <div className="flex flex-col gap-[42px]">
//             {/* First Section */}
//             <div className="flex flex-col gap-5">
//               <div className="pb-5 border-b border-[#E1E6ED]">
//                 <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">{titles.firstTitle}</span>
//               </div>
//               <div className="flex flex-col lg:flex-row gap-[30px] items-start">
//                 {/* Graph Section - 50% width */}
//                 <div className="flex-1 w-full lg:w-1/2 min-w-0">
//                   <div className="mx-[15px] my-4">
//                     <div className="flex justify-between">
//                       <div className="relative">
//                         <div
//                           className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
//                           onClick={() => setFirstShowDropdown(!firstShowDropdown)}
//                         >
//                           <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">
//                             {firstTimeRange}
//                           </span>
//                           <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
//                         </div>

//                         {firstShowDropdown && (
//                           <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
//                             <div
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => handleFirstTimeRangeChange("Weekly")}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Weekly
//                               </span>
//                             </div>
//                             <div
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => handleFirstTimeRangeChange("Monthly")}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Monthly
//                               </span>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Show API message or Graph component */}
//                   {apiMessage ? (
//                     <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-200">
//                       <div className="text-center">
//                         <p className="text-gray-500 text-lg font-medium">{apiMessage}</p>
//                       </div>
//                     </div>
//                   ) : (
//                     <Graph title={titles.firstTitle} labels={firstSectionData.labels} values={firstSectionData.values} />
//                   )}
//                 </div>

//                 {/* Progress Bar Section - 50% width */}
//                 <div className="flex-1 w-full lg:w-1/2 min-w-0">
//                   <ProgressBarSection config={progressBarConfigs[0]} />
//                 </div>
//               </div>
//             </div>

//             {/* Second Section */}
//             <div className="flex flex-col gap-5">
//               <div className="pb-5 border-b border-[#E1E6ED]">
//                 <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">{titles.secondTitle}</span>
//               </div>
//               <div className="flex flex-col lg:flex-row gap-[30px] items-start">
//                 {/* Graph Section - 50% width */}
//                 <div className="flex-1 w-full lg:w-1/2 min-w-0">
//                   <div className="mx-[15px] my-4">
//                     <div className="flex justify-between">
//                       <div className="relative">
//                         <div
//                           className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
//                           onClick={() => setSecondShowDropdown(!secondShowDropdown)}
//                         >
//                           <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">
//                             {secondTimeRange}
//                           </span>
//                           <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
//                         </div>

//                         {secondShowDropdown && (
//                           <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
//                             <div
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => handleSecondTimeRangeChange("Weekly")}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Weekly
//                               </span>
//                             </div>
//                             <div
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => handleSecondTimeRangeChange("Monthly")}
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Monthly
//                               </span>
//                             </div>
//                           </div>
//                         )}


//                         <div
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick=""
//                             >
//                               <span className="text-[#535359] text-[12px] not-italic font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Month
//                               </span>
//                             </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Show API message or Graph component */}
//                   {apiMessage ? (
//                     <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-200">
//                       <div className="text-center">
//                         <p className="text-gray-500 text-lg font-medium">{apiMessage}</p>
//                       </div>
//                     </div>
//                   ) : (
//                     <Graph title={titles.secondTitle} labels={secondSectionData.labels} values={secondSectionData.values} />
//                   )}
//                 </div>

//                 {/* Progress Bar Section - 50% width */}
//                 <div className="flex-1 w-full lg:w-1/2 min-w-0">
//                   <ProgressBarSection config={progressBarConfigs[1]} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }



























// "use client";
// import { useMemo, useState, useEffect } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import Image from "next/image";
// import Graph from "./graph";
// import { fetchScoreTrend, fetchScoresInsight } from "../services/authService";
// import { useSearchParams } from "next/navigation";
// import { cookieManager } from "../lib/cookies";
// import { useDispatch } from "react-redux";
// import { setScoresInsight } from "../store/scoresInsightSlice";

// export default function Trends({ selectedDate, showMainMarker = true, compactGraphs = false  }) {
//   const dispatch = useDispatch();
//   const searchParams = useSearchParams();
//   const dieticianData = cookieManager.getJSON("dietician");
//   const dieticianId = dieticianData?.dietician_id;
//   const profileId = searchParams.get("profile_id");

//   const [active, setActive] = useState("Digestive Balance Trend");
//   const [firstTimeRange, setFirstTimeRange] = useState("Weekly");
//   const [secondTimeRange, setSecondTimeRange] = useState("Weekly");
//   const [firstShowDropdown, setFirstShowDropdown] = useState(false);
//   const [secondShowDropdown, setSecondShowDropdown] = useState(false);

//   // ✅ Month dropdowns (shown only when Monthly is selected)
//   const [firstSelectedMonth, setFirstSelectedMonth] = useState(null); // "YYYY-MM"
//   const [secondSelectedMonth, setSecondSelectedMonth] = useState(null); // "YYYY-MM"
//   const [firstMonthDropdown, setFirstMonthDropdown] = useState(false);
//   const [secondMonthDropdown, setSecondMonthDropdown] = useState(false);

//   const [graphData, setGraphData] = useState(null);
//   const [scoresInsightData, setScoresInsightData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [scoresLoading, setScoresLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [apiMessage, setApiMessage] = useState(null);

//   // Function to format date to YYYY-MM-DD
//   const formatDateToYYYYMMDD = (date) => {
//     if (!date) return null;

//     if (typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
//       return date;
//     }

//     const dateObj = new Date(date);
//     if (isNaN(dateObj.getTime())) {
//       console.error("Invalid date:", date);
//       return null;
//     }

//     const year = dateObj.getFullYear();
//     const month = String(dateObj.getMonth() + 1).padStart(2, "0");
//     const day = String(dateObj.getDate()).padStart(2, "0");

//     return `${year}-${month}-${day}`;
//   };

//   // 🔹 Normalize tests_by_date → { range, data }
//   const normalizeTestsByDate = (testsByDate) => {
//     if (!testsByDate) return null;

//     const dates = Object.keys(testsByDate).sort(); // ["2025-11-20", ...]
//     if (dates.length === 0) return null;

//     const data = dates.map((date) => {
//       const t = testsByDate[date];
//       const s = t.scores || {};

//       return {
//         date,
//         absorptive_metabolism_score: s.absorptive ?? 0,
//         fermentative_metabolism_score: s.fermentative ?? 0,
//         fat_metabolism_score: s.fat ?? 0,
//         glucose_metabolism_score: s.glucose ?? 0,
//         hepatic_stress_metabolism_score: s.hepatic_stress ?? 0,
//         detoxification_metabolism_score: s.detoxification ?? 0,
//       };
//     });

//     return {
//       range: {
//         start_date: dates[0],
//         end_date: dates[dates.length - 1],
//       },
//       data,
//     };
//   };

//   // Fetch ALL data once when component mounts
//   useEffect(() => {
//     const fetchInitialData = async () => {
//       if (!dieticianId || !profileId) return;

//       setLoading(true);
//       setError(null);
//       setApiMessage(null);
//       try {
//         const response = await fetchScoreTrend(dieticianId, profileId);
//         if (response && response.tests_by_date) {
//           const normalized = normalizeTestsByDate(response.tests_by_date);
//           if (normalized) {
//             setGraphData(normalized);
//             setApiMessage(null);
//           } else {
//             setGraphData(null);
//             setApiMessage("No data available");
//           }
//         } else {
//           setGraphData(null);
//           setApiMessage(response?.message || "No data available");
//         }
//       } catch (err) {
//         setError(err.message || "An error occurred");
//         setGraphData(null);
//         setApiMessage(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInitialData();
//   }, [dieticianId, profileId]);

//   // Fetch scores insight data when selectedDate changes
//   useEffect(() => {
//     const fetchScoresData = async () => {
//       if (!dieticianId || !profileId || !selectedDate) return;

//       const formattedDate = formatDateToYYYYMMDD(selectedDate);
//       if (!formattedDate) {
//         console.error("Invalid date format, cannot fetch scores insight");
//         return;
//       }

//       setScoresLoading(true);
//       try {
//         const response = await fetchScoresInsight(dieticianId, profileId, formattedDate);

//         if (response?.noData) {
//           setScoresInsightData(null);
//           dispatch(setScoresInsight(null));
//         } else if (response && response.latest_test) {
//           setScoresInsightData(response);
//           dispatch(setScoresInsight(response));
//         } else {
//           setScoresInsightData(null);
//           dispatch(setScoresInsight(null));
//         }
//       } catch (err) {
//         console.error("Error fetching scores insight:", err);
//         setScoresInsightData(null);
//         dispatch(setScoresInsight(null));
//       } finally {
//         setScoresLoading(false);
//       }
//     };

//     fetchScoresData();
//   }, [dieticianId, profileId, selectedDate, dispatch]);

//   // ✅ Build months list from graphData.data
//   const monthOptions = useMemo(() => {
//     const list = graphData?.data || [];
//     const map = new Map();

//     list.forEach((item) => {
//       const d = new Date(item.date);
//       if (isNaN(d.getTime())) return;

//       const y = d.getFullYear();
//       const m = String(d.getMonth() + 1).padStart(2, "0");
//       const key = `${y}-${m}`; // "2025-12"
//       const label = d.toLocaleDateString("en-GB", { month: "short", year: "numeric" }); // "Dec 2025"

//       map.set(key, label);
//     });

//     return Array.from(map.entries())
//       .sort((a, b) => a[0].localeCompare(b[0]))
//       .map(([key, label]) => ({ key, label }));
//   }, [graphData]);

//   // ✅ Default select latest month once graphData arrives
//   useEffect(() => {
//     if (!monthOptions.length) return;

//     const latest = monthOptions[monthOptions.length - 1];
//     if (!firstSelectedMonth) setFirstSelectedMonth(latest.key);
//     if (!secondSelectedMonth) setSecondSelectedMonth(latest.key);
//   }, [monthOptions]); // intentionally not depending on firstSelectedMonth/secondSelectedMonth

//   // Get active marker based on tab
//   const getActiveMarker = () => {
//     switch (active) {
//       case "Digestive Balance Trend":
//         return {
//           name: "Hydrogen",
//           value: scoresInsightData?.latest_test?.ppm?.h2,
//           unit: "ppm",
//         };
//       case "Fuel & Energy Trend":
//         return {
//           name: "Acetone",
//           value: scoresInsightData?.latest_test?.ppm?.acetone,
//           unit: "ppm",
//         };
//       case "Liver Heptic":
//         return {
//           name: "Ethanol",
//           value: scoresInsightData?.latest_test?.ppm?.ethanol,
//           unit: "ppm",
//         };
//       default:
//         return {
//           name: "Hydrogen",
//           value: scoresInsightData?.latest_test?.ppm?.h2,
//           unit: "ppm",
//         };
//     }
//   };

//   const activeMarker = getActiveMarker();

//   const getMarkersForScoreType = (scoreType) => {
//     switch (scoreType) {
//       case "absorptive":
//       case "detoxification":
//         return [
//           { position: "0%", label: "0" },
//           { position: "50%", label: "50" },
//           { position: "80%", label: "80" },
//           { position: "100%", label: "100" },
//         ];

//       case "fermentative":
//         return [
//           { position: "0%", label: "0" },
//           { position: "20%", label: "20" },
//           { position: "30%", label: "30" },
//           { position: "100%", label: "100" },
//         ];

//       case "fat":
//         return [
//           { position: "0%", label: "0" },
//           { position: "70%", label: "70" },
//           { position: "80%", label: "80" },
//           { position: "100%", label: "100" },
//         ];

//       case "glucose":
//         return [
//           { position: "0%", label: "0" },
//           { position: "20%", label: "20" },
//           { position: "30%", label: "30" },
//           { position: "100%", label: "100" },
//         ];

//       case "hepatic_stress":
//         return [
//           { position: "0%", label: "0" },
//           { position: "20%", label: "20" },
//           { position: "30%", label: "30" },
//           { position: "100%", label: "100" },
//         ];

//       default:
//         return [
//           { position: "0%", label: "0" },
//           { position: "100%", label: "100" },
//         ];
//     }
//   };

//   const getZoneSegmentsForScoreType = (scoreType) => {
//     switch (scoreType) {
//       case "fermentative":
//         return [
//           { color: "#3FAF58", width: "20%" },
//           { color: "#FFBF2D", width: "10%" },
//           { color: "#E48326", width: "70%" },
//         ];

//       case "absorptive":
//         return [
//           { color: "#E48326", width: "50%" },
//           { color: "#FFBF2D", width: "30%" },
//           { color: "#3FAF58", width: "20%" },
//         ];

//       case "fat":
//         return [
//           { color: "#E48326", width: "70%" },
//           { color: "#FFBF2D", width: "10%" },
//           { color: "#3FAF58", width: "20%" },
//         ];

//       case "glucose":
//         return [
//           { color: "#3FAF58", width: "20%" },
//           { color: "#FFBF2D", width: "10%" },
//           { color: "#E48326", width: "70%" },
//         ];

//       case "hepatic_stress":
//         return [
//           { color: "#3FAF58", width: "20%" },
//           { color: "#FFBF2D", width: "10%" },
//           { color: "#E48326", width: "70%" },
//         ];

//       case "detoxification":
//         return [
//           { color: "#E48326", width: "50%" },
//           { color: "#FFBF2D", width: "30%" },
//           { color: "#3FAF58", width: "20%" },
//         ];

//       default:
//         return [{ color: "#E1E6ED", width: "100%" }];
//     }
//   };

//   // Get progress bar configuration from scores insight data
//   const getProgressBarConfigs = () => {
//     if (scoresInsightData?.noData) {
//       return getNoDataProgressBarConfigs();
//     }

//     if (!scoresInsightData || !scoresInsightData.latest_test) {
//       return getDefaultProgressBarConfigs();
//     }

//     const testJson = scoresInsightData.latest_test.test_json;
//     const scores = scoresInsightData.latest_test.scores;

//     const hasActualData = testJson && testJson.Metabolism_Score_Analysis;
//     const hasOnlyRawData = testJson && testJson.raw;

//     if (hasOnlyRawData) {
//       return getNoDataProgressBarConfigs();
//     }

//     if (hasActualData) {
//       const metabolismData = testJson.Metabolism_Score_Analysis;

//       const getZoneColor = (zone) => {
//         switch (zone) {
//           case "Optimal":
//             return "#3FAF58";
//           case "Moderate":
//             return "#FFBF2D";
//           case "Focus":
//             return "#E48326";
//           default:
//             return "#3FAF58";
//         }
//       };

//       switch (active) {
//         case "Digestive Balance Trend":
//           return [
//             {
//               percentage: scores.absorptive || 0,
//               colors: getZoneSegmentsForScoreType("absorptive"),
//               markers: getMarkersForScoreType("absorptive"),
//               status: metabolismData.absorption?.zone || "N/A",
//               statusColor: getZoneColor(metabolismData.absorption?.zone),
//               interpretation:
//                 metabolismData.absorption?.interpretation || "No interpretation available",
//               intervention:
//                 metabolismData.absorption?.intervention || "No intervention available",
//             },
//             {
//               percentage: scores.fermentative || 0,
//               colors: getZoneSegmentsForScoreType("fermentative"),
//               markers: getMarkersForScoreType("fermentative"),
//               status: metabolismData.fermentation?.zone || "N/A",
//               statusColor: getZoneColor(metabolismData.fermentation?.zone),
//               interpretation:
//                 metabolismData.fermentation?.interpretation ||
//                 "No interpretation available",
//               intervention:
//                 metabolismData.fermentation?.intervention || "No intervention available",
//             },
//           ];

//         case "Fuel & Energy Trend":
//           return [
//             {
//               percentage: scores.fat || 0,
//               colors: getZoneSegmentsForScoreType("fat"),
//               markers: getMarkersForScoreType("fat"),
//               status: metabolismData.fat_metabolism?.zone || "N/A",
//               statusColor: getZoneColor(metabolismData.fat_metabolism?.zone),
//               interpretation:
//                 metabolismData.fat_metabolism?.interpretation ||
//                 "No interpretation available",
//               intervention:
//                 metabolismData.fat_metabolism?.intervention ||
//                 "No intervention available",
//             },
//             {
//               percentage: scores.glucose || 0,
//               colors: getZoneSegmentsForScoreType("glucose"),
//               markers: getMarkersForScoreType("glucose"),
//               status: metabolismData.glucose_metabolism?.zone || "N/A",
//               statusColor: getZoneColor(metabolismData.glucose_metabolism?.zone),
//               interpretation:
//                 metabolismData.glucose_metabolism?.interpretation ||
//                 "No interpretation available",
//               intervention:
//                 metabolismData.glucose_metabolism?.intervention ||
//                 "No intervention available",
//             },
//           ];

//         case "Liver Heptic":
//           return [
//             {
//               percentage: scores.detoxification || 0,
//               colors: getZoneSegmentsForScoreType("detoxification"),
//               markers: getMarkersForScoreType("detoxification"),
//               status: metabolismData.detoxification?.zone || "N/A",
//               statusColor: getZoneColor(metabolismData.detoxification?.zone),
//               interpretation:
//                 metabolismData.detoxification?.interpretation ||
//                 "No interpretation available",
//               intervention:
//                 metabolismData.detoxification?.intervention ||
//                 "No intervention available",
//             },
//             {
//               percentage: scores.hepatic_stress || 0,
//               colors: getZoneSegmentsForScoreType("hepatic_stress"),
//               markers: getMarkersForScoreType("hepatic_stress"),
//               status: metabolismData.hepatic_stress?.zone || "N/A",
//               statusColor: getZoneColor(metabolismData.hepatic_stress?.zone),
//               interpretation:
//                 metabolismData.hepatic_stress?.interpretation ||
//                 "No interpretation available",
//               intervention:
//                 metabolismData.hepatic_stress?.intervention ||
//                 "No intervention available",
//             },
//           ];

//         default:
//           return getDefaultProgressBarConfigs();
//       }
//     }

//     return getNoDataProgressBarConfigs();
//   };

//   const getTitles = () => {
//     switch (active) {
//       case "Digestive Balance Trend":
//         return {
//           firstTitle: "Nutrient Utilization Trend",
//           secondTitle: "Digestive Activity Trend",
//           firstScoreType: "absorptive",
//           secondScoreType: "fermentative",
//         };
//       case "Fuel & Energy Trend":
//         return {
//           firstTitle: "Fat Metabolism Score",
//           secondTitle: "Glucose Metabolism Score",
//           firstScoreType: "fat",
//           secondScoreType: "glucose",
//         };
//       case "Liver Heptic":
//         return {
//           firstTitle: "Detoxification Metabolism Score",
//           secondTitle: "Hepatic Stress Score",
//           firstScoreType: "detoxification",
//           secondScoreType: "hepatic_stress",
//         };
//       default:
//         return {
//           firstTitle: "Nutrient Utilization Trend",
//           secondTitle: "Digestive Activity Trend",
//           firstScoreType: "absorptive",
//           secondScoreType: "fermentative",
//         };
//     }
//   };

//   // Helper function for default config
//   const getDefaultProgressBarConfigs = () => {
//     const titles = getTitles();

//     return [
//       {
//         percentage: "-",
//         colors: getZoneSegmentsForScoreType(titles.firstScoreType),
//         markers: getMarkersForScoreType(titles.firstScoreType),
//         status: "Optimal",
//         statusColor: "#3FAF58",
//         interpretation: "-",
//         intervention: "-",
//       },
//       {
//         percentage: "-",
//         colors: getZoneSegmentsForScoreType(titles.secondScoreType),
//         markers: getMarkersForScoreType(titles.secondScoreType),
//         status: "Optimal",
//         statusColor: "#3FAF58",
//         interpretation: "-",
//         intervention: "-",
//       },
//     ];
//   };

//   // Helper function for "No Data Found" config
//   const getNoDataProgressBarConfigs = () => {
//     return [
//       {
//         percentage: 0,
//         colors: [
//           { color: "#E1E6ED", width: "30%" },
//           { color: "#E1E6ED", width: "40%" },
//           { color: "#E1E6ED", width: "30%" },
//         ],
//         markers: [
//           { position: "0%", label: "0" },
//           { position: "30%", label: "60" },
//           { position: "70%", label: "80" },
//           { position: "100%", label: "100" },
//         ],
//         status: "No Data",
//         statusColor: "#A1A1A1",
//         interpretation: "No test data available for the selected date",
//         intervention: "Please select a different date with available test results",
//       },
//       {
//         percentage: 0,
//         colors: [
//           { color: "#E1E6ED", width: "30%" },
//           { color: "#E1E6ED", width: "40%" },
//           { color: "#E1E6ED", width: "30%" },
//         ],
//         markers: [
//           { position: "0%", label: "0" },
//           { position: "30%", label: "60" },
//           { position: "70%", label: "80" },
//           { position: "100%", label: "100" },
//         ],
//         status: "No Data",
//         statusColor: "#A1A1A1",
//         interpretation: "No test data available for the selected date",
//         intervention: "Please select a different date with available test results",
//       },
//     ];
//   };

//   const progressBarConfigs = getProgressBarConfigs();

//   const ProgressBarSection = ({ config }) => (
//     <div className="flex flex-col gap-5 w-full lg:w-auto">
//       <div className="flex flex-col gap-[5px] w-full relative">
//         <div className="w-full rounded-[10px] h-[22px] flex gap-0.5 relative items-center">
//           {config.colors.map((colorConfig, index) => (
//             <div
//               key={index}
//               className="h-2.5 rounded-[5px]"
//               style={{
//                 backgroundColor: colorConfig.color,
//                 width: colorConfig.width,
//               }}
//             />
//           ))}
//           <div
//             className="absolute top-1/2 w-1 h-[22px] border-[10px] border-[#252525] rounded-[10px] transform -translate-y-1/2"
//             style={{
//               left:
//                 config.percentage === "-"
//                   ? "0%"
//                   : `${Math.max(0, Math.min(100, Number(config.percentage) || 0))}%`,
//             }}
//           />
//         </div>
//         <div className="relative w-full">
//           {config.markers.map((marker, index) => (
//             <span
//               key={index}
//               className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal"
//               style={{ left: marker.position }}
//             >
//               {marker.label}
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="flex items-center">
//         <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">
//           {config.percentage === "-" ? "-" : `${Math.floor(Number(config.percentage) || 0)}%`}
//         </p>

//         <div className="mx-3 h-4 w-px bg-[#252525]"></div>

//         <p className="text-[20px] md:text-[25px] font-semibold" style={{ color: config.statusColor }}>
//           {config.status}
//         </p>
//       </div>

//       <div className="flex flex-col gap-[5px]">
//         <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">
//           Interpretation:
//         </span>
//         <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]">
//           {config.interpretation}
//         </span>
//       </div>

//       <div className="border-b border-[#E1E6ED]"></div>

//       <div className="flex flex-col gap-[5px]">
//         <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">
//           Intervention:
//         </span>
//         <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px] break-words">
//           {config.intervention}
//         </span>
//       </div>
//     </div>
//   );

//   const formatDateLabel = (dateString) => {
//     try {
//       const date = new Date(dateString);
//       if (isNaN(date.getTime())) return "Invalid Date";
//       const day = String(date.getDate()).padStart(2, "0");
//       const month = date.toLocaleDateString("en-GB", { month: "short" });
//       return `${day} ${month}`;
//     } catch (error) {
//       return "Invalid Date";
//     }
//   };

//   // ✅ Monthly aggregation by selected month
//   const aggregateDataByWeek = (data, scoreType, selectedMonthKey) => {
//     if (!data || data.length === 0) return { labels: [], values: [] };

//     let targetMonth, targetYear;

//     if (selectedMonthKey) {
//       const [y, m] = selectedMonthKey.split("-");
//       targetYear = Number(y);
//       targetMonth = Number(m) - 1;
//     } else {
//       const lastDate = new Date(data[data.length - 1].date);
//       targetMonth = lastDate.getMonth();
//       targetYear = lastDate.getFullYear();
//     }

//     const monthData = data.filter((item) => {
//       const d = new Date(item.date);
//       return d.getMonth() === targetMonth && d.getFullYear() === targetYear;
//     });

//     if (monthData.length === 0) return { labels: [], values: [] };

//     const weeklyData = {};

//     const monthShort = (d) => d.toLocaleDateString("en-GB", { month: "short" });

//     const formatDayMonth = (d) => {
//       const day = String(d.getDate()).padStart(2, "0");
//       return `${day} ${monthShort(d)}`;
//     };

//     const getWeekStartMonday = (dateObj) => {
//       const d = new Date(dateObj);
//       const day = d.getDay();
//       const diff = day === 0 ? -6 : 1 - day;
//       d.setDate(d.getDate() + diff);
//       d.setHours(0, 0, 0, 0);
//       return d;
//     };

//     const getWeekEndSunday = (mondayObj) => {
//       const d = new Date(mondayObj);
//       d.setDate(d.getDate() + 6);
//       d.setHours(0, 0, 0, 0);
//       return d;
//     };

//     const getScore = (item) => {
//       switch (scoreType) {
//         case "absorptive":
//           return parseInt(item.absorptive_metabolism_score) || 0;
//         case "fermentative":
//           return parseInt(item.fermentative_metabolism_score) || 0;
//         case "fat":
//           return parseInt(item.fat_metabolism_score) || 0;
//         case "glucose":
//           return parseInt(item.glucose_metabolism_score) || 0;
//         case "detoxification":
//           return parseInt(item.detoxification_metabolism_score) || 0;
//         case "hepatic_stress":
//           return parseInt(item.hepatic_stress_metabolism_score) || 0;
//         default:
//           return 0;
//       }
//     };

//     monthData.forEach((item) => {
//       const dateObj = new Date(item.date);

//       const monday = getWeekStartMonday(dateObj);
//       const sunday = getWeekEndSunday(monday);

//       const monthStart = new Date(targetYear, targetMonth, 1);
//       const monthEnd = new Date(targetYear, targetMonth + 1, 0);

//       const start = monday < monthStart ? monthStart : monday;
//       const end = sunday > monthEnd ? monthEnd : sunday;

//       const weekLabel = `${formatDayMonth(start)} - ${formatDayMonth(end)}`;

//       if (!weeklyData[weekLabel]) weeklyData[weekLabel] = [];
//       weeklyData[weekLabel].push(getScore(item));
//     });

//     const result = { labels: [], values: [] };

//     const sortedLabels = Object.keys(weeklyData).sort((a, b) => {
//       const parseStart = (label) => {
//         const [startPart] = label.split(" - ");
//         const [dd, mon] = startPart.split(" ");
//         const monthIndex = new Date(`${mon} 01, ${targetYear}`).getMonth();
//         return new Date(targetYear, monthIndex, Number(dd));
//       };
//       return parseStart(a) - parseStart(b);
//     });

//     sortedLabels.forEach((label) => {
//       const arr = weeklyData[label];
//       const avg = arr.reduce((sum, v) => sum + v, 0) / arr.length;
//       result.labels.push(label);
//       result.values.push(Math.round(avg));
//     });

//     return result;
//   };

//   // 🔹 Main data processing for Weekly / Monthly
//   const getProcessedData = (scoreType, timeRange) => {
//     if (!graphData || !graphData.data) return { labels: [], values: [] };

//     const sortedData = [...graphData.data].sort((a, b) => new Date(a.date) - new Date(b.date));

//     if (timeRange === "Weekly") {
//       const last7 = sortedData.slice(-7);

//       const labels = last7.map((item) => formatDateLabel(item.date));
//       const values = last7.map((item) => {
//         switch (scoreType) {
//           case "absorptive":
//             return parseInt(item.absorptive_metabolism_score) || 0;
//           case "fermentative":
//             return parseInt(item.fermentative_metabolism_score) || 0;
//           case "fat":
//             return parseInt(item.fat_metabolism_score) || 0;
//           case "glucose":
//             return parseInt(item.glucose_metabolism_score) || 0;
//           case "detoxification":
//             return parseInt(item.detoxification_metabolism_score) || 0;
//           case "hepatic_stress":
//             return parseInt(item.hepatic_stress_metabolism_score) || 0;
//           default:
//             return 0;
//         }
//       });

//       return { labels, values };
//     }

//     if (timeRange === "Monthly") {
//       const titles = getTitles();
//       const selectedMonthKey =
//         scoreType === titles.firstScoreType ? firstSelectedMonth : secondSelectedMonth;

//       return aggregateDataByWeek(sortedData, scoreType, selectedMonthKey);
//     }

//     return { labels: [], values: [] };
//   };

//   const handleFirstTimeRangeChange = (newRange) => {
//     setFirstTimeRange(newRange);
//     setFirstShowDropdown(false);

//     // ✅ close month dropdown when switching
//     setFirstMonthDropdown(false);

//     if (newRange === "Weekly") {
//       setFirstSelectedMonth(null);
//     } else if (newRange === "Monthly" && !firstSelectedMonth && monthOptions.length) {
//       setFirstSelectedMonth(monthOptions[monthOptions.length - 1].key);
//     }
//   };

//   const handleSecondTimeRangeChange = (newRange) => {
//     setSecondTimeRange(newRange);
//     setSecondShowDropdown(false);

//     // ✅ close month dropdown when switching
//     setSecondMonthDropdown(false);

//     if (newRange === "Weekly") {
//       setSecondSelectedMonth(null);
//     } else if (newRange === "Monthly" && !secondSelectedMonth && monthOptions.length) {
//       setSecondSelectedMonth(monthOptions[monthOptions.length - 1].key);
//     }
//   };

//   const getTabColor = (tabLabel) => {
//     const metabolismData = scoresInsightData?.latest_test?.test_json?.Metabolism_Score_Analysis;

//     if (!metabolismData) {
//       if (tabLabel === "Digestive Balance Trend") return "#E48326";
//       if (tabLabel === "Fuel & Energy Trend") return "#3FAF58";
//       if (tabLabel === "Liver Heptic") return "#3FAF58";
//       return "#E1E6ED";
//     }

//     let zone1 = "";
//     let zone2 = "";

//     switch (tabLabel) {
//       case "Digestive Balance Trend":
//         zone1 = metabolismData.absorption?.zone || "";
//         zone2 = metabolismData.fermentation?.zone || "";
//         break;
//       case "Fuel & Energy Trend":
//         zone1 = metabolismData.fat_metabolism?.zone || "";
//         zone2 = metabolismData.glucose_metabolism?.zone || "";
//         break;
//       case "Liver Heptic":
//         zone1 = metabolismData.hepatic_stress?.zone || "";
//         zone2 = metabolismData.detoxification?.zone || "";
//         break;
//       default:
//         break;
//     }

//     const z1 = zone1.toLowerCase();
//     const z2 = zone2.toLowerCase();

//     const hasFocus = z1 === "Focus" || z2 === "Focus";
//     const hasModerate = z1 === "Moderate" || z2 === "Moderate";
//     const hasOptimal = z1 === "Optimal" || z2 === "Optimal";

//     if (hasFocus) return "#E48326";
//     if (hasModerate) return "#FFBF2D";
//     if (hasOptimal) return "#3FAF58";

//     return "#E1E6ED";
//   };

//   const tabs = [
//     { label: "Digestive Balance Trend" },
//     { label: "Fuel & Energy Trend" },
//     { label: "Liver Heptic" },
//   ];

//   const titles = getTitles();

//   const firstSectionData = useMemo(
//     () => getProcessedData(titles.firstScoreType, firstTimeRange),
//     [graphData, titles.firstScoreType, firstTimeRange, firstSelectedMonth, monthOptions]
//   );

//   const secondSectionData = useMemo(
//     () => getProcessedData(titles.secondScoreType, secondTimeRange),
//     [graphData, titles.secondScoreType, secondTimeRange, secondSelectedMonth, monthOptions]
//   );

//   if (loading) {
//     return <div className="flex-1 min-w-0 rounded-[15px] mx-2 p-4">Loading graph data...</div>;
//   }

//   if (error) {
//     return (
//       <div className="flex-1 min-w-0 rounded-[15px] mx-2 p-4 text-red-500">
//         Error: {error}
//       </div>
//     );
//   }

//   return (
//     <div className="flex-1 min-w-0  rounded-[15px] mx-2">
//       <div className="mt-[15px] ml-[13px]">
//         <span className=" text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[0.4px]">
//           Score Analysis
//         </span>
//       </div>

//       <div className="flex flex-col gap-6">
//         <div className="flex w-full gap-6 mt-[18px] border-b border-[#E1E6ED]">
//           {tabs.map((tab) => {
//             const isActive = active === tab.label;
//             return (
//               <button
//                 key={tab.label}
//                 onClick={() => setActive(tab.label)}
//                 className={`flex gap-2.5 items-center pb-[13px] pl-[5px] pr-[25px] cursor-pointer ${
//                   isActive ? "border-b-2 border-[#308BF9]" : ""
//                 }`}
//               >
//                 <span
//                   className={`text-[12px] font-semibold leading-[110%] tracking-[-0.24px] ${
//                     isActive ? "text-[#308BF9]" : "text-[#A1A1A1]"
//                   }`}
//                 >
//                   {tab.label}
//                 </span>
//                 <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: getTabColor(tab.label) }} />
//               </button>
//             );
//           })}
//         </div>

//         <div className="flex flex-col gap-9 pt-1.5 pl-[5px] pr-[13px] rounded-[15px]">
//           {showMainMarker && (
//           <div className="flex flex-col gap-[5px] px-[15px] py-[18px] bg-[#F0F0F0] rounded-[15px]">
//             <span className="text-[#252525] text-[12px] font-semibold leading-[130%] tracking-[-0.24px]">
//               Main Marker: {activeMarker.name}
//             </span>
//             <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[-0.4px]">
//               {activeMarker.value ? `${parseFloat(activeMarker.value).toFixed(3)} ${activeMarker.unit}` : "-"}
//             </span>
//           </div>
//           )}

//           <div className="flex flex-col gap-[42px]">
//             {/* First Section */}
//             <div className="flex flex-col gap-5">
//               <div className="pb-5 border-b border-[#E1E6ED]">
//                 <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">
//                   {titles.firstTitle}
//                 </span>
//               </div>

//               <div className="flex flex-col lg:flex-row gap-[30px] items-start">
//                 {/* Graph Section */}
//                 <div className="flex-1 w-full lg:w-1/2 min-w-0">
//                   <div className="mx-[15px] my-4">
//                     <div className="flex gap-3">
//                       {/* LEFT: Weekly/Monthly dropdown */}
//                       <div className="relative">
//                         <div
//                           className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
//                           onClick={() => setFirstShowDropdown(!firstShowDropdown)}
//                         >
//                           <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">
//                             {firstTimeRange}
//                           </span>
//                           <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
//                         </div>

//                         {firstShowDropdown && (
//                           <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
//                             <div
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => handleFirstTimeRangeChange("Weekly")}
//                             >
//                               <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Weekly
//                               </span>
//                             </div>
//                             <div
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => handleFirstTimeRangeChange("Monthly")}
//                             >
//                               <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Monthly
//                               </span>
//                             </div>
//                           </div>
//                         )}
//                       </div>

//                       {/* RIGHT: Month dropdown (only when Monthly) */}
//                       {firstTimeRange === "Monthly" && (
//                         <div className="relative">
//                           <div
//                             className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
//                             onClick={() => setFirstMonthDropdown(!firstMonthDropdown)}
//                           >
//                             <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">
//                               {monthOptions.find((m) => m.key === firstSelectedMonth)?.label || "Select Month"}
//                             </span>
//                             <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
//                           </div>

//                           {firstMonthDropdown && (
//                             <div className="absolute top-full right-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
//                               {monthOptions.map((m) => (
//                                 <div
//                                   key={m.key}
//                                   className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                                   onClick={() => {
//                                     setFirstSelectedMonth(m.key);
//                                     setFirstMonthDropdown(false);
//                                   }}
//                                 >
//                                   <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                     {m.label}
//                                   </span>
//                                 </div>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Show API message or Graph component */}
//                   {apiMessage ? (
//                     <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-200">
//                       <div className="text-center">
//                         <p className="text-gray-500 text-lg font-medium">{apiMessage}</p>
//                       </div>
//                     </div>
//                   ) : (
//                     <Graph title={titles.firstTitle} labels={firstSectionData.labels} values={firstSectionData.values} />
//                   )}
//                 </div>

//                 {/* Progress Bar Section */}
//                 {showMainMarker && (
//                 <div className="flex-1 w-full lg:w-1/2 min-w-0">
//                   <ProgressBarSection config={progressBarConfigs[0]} />
//                 </div>
//                 )}
//               </div>
//             </div>

//             {/* Second Section */}
//             <div className="flex flex-col gap-5">
//               <div className="pb-5 border-b border-[#E1E6ED]">
//                 <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">
//                   {titles.secondTitle}
//                 </span>
//               </div>

//               <div className="flex flex-col lg:flex-row gap-[30px] items-start">
//                 {/* Graph Section */}
//                 <div className="flex-1 w-full lg:w-1/2 min-w-0">
//                   <div className="mx-[15px] my-4">
//                     <div className="flex justify-between gap-3">
//                       {/* LEFT: Weekly/Monthly dropdown */}
//                       <div className="relative">
//                         <div
//                           className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
//                           onClick={() => setSecondShowDropdown(!secondShowDropdown)}
//                         >
//                           <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">
//                             {secondTimeRange}
//                           </span>
//                           <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
//                         </div>

//                         {secondShowDropdown && (
//                           <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
//                             <div
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => handleSecondTimeRangeChange("Weekly")}
//                             >
//                               <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Weekly
//                               </span>
//                             </div>
//                             <div
//                               className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                               onClick={() => handleSecondTimeRangeChange("Monthly")}
//                             >
//                               <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                 Monthly
//                               </span>
//                             </div>
//                           </div>
//                         )}
//                       </div>

//                       {/* RIGHT: Month dropdown (only when Monthly) */}
//                       {secondTimeRange === "Monthly" && (
//                         <div className="relative">
//                           <div
//                             className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
//                             onClick={() => setSecondMonthDropdown(!secondMonthDropdown)}
//                           >
//                             <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize cursor-pointer">
//                               {monthOptions.find((m) => m.key === secondSelectedMonth)?.label || "Select Month"}
//                             </span>
//                             <IoIosArrowDown className="w-5 h-5 cursor-pointer" />
//                           </div>

//                           {secondMonthDropdown && (
//                             <div className="absolute top-full right-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
//                               {monthOptions.map((m) => (
//                                 <div
//                                   key={m.key}
//                                   className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
//                                   onClick={() => {
//                                     setSecondSelectedMonth(m.key);
//                                     setSecondMonthDropdown(false);
//                                   }}
//                                 >
//                                   <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
//                                     {m.label}
//                                   </span>
//                                 </div>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Show API message or Graph component */}
//                   {apiMessage ? (
//                     <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-200">
//                       <div className="text-center">
//                         <p className="text-gray-500 text-lg font-medium">{apiMessage}</p>
//                       </div>
//                     </div>
//                   ) : (
//                     <Graph title={titles.secondTitle} labels={secondSectionData.labels} values={secondSectionData.values}    showGradient={true}/>
//                   )}
//                 </div>

//                 {/* Progress Bar Section */}
//                 {showMainMarker && (
//                 <div className="flex-1 w-full lg:w-1/2 min-w-0">
//                   <ProgressBarSection config={progressBarConfigs[1]} />
//                 </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }











"use client";

import React, { useMemo, useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Graph from "./graph";
import { fetchScoreTrend, fetchScoresInsight } from "../services/authService";
import { useSearchParams } from "next/navigation";
import { cookieManager } from "../lib/cookies";
import { useDispatch } from "react-redux";
import { setScoresInsight } from "../store/scoresInsightSlice";

function TrendsComponent({ selectedDate, showMainMarker = true, compactGraphs = false }) {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const dieticianData = cookieManager.getJSON("dietician");
  const dieticianId = dieticianData?.dietician_id;
  const profileId = searchParams.get("profile_id");

  const [active, setActive] = useState("Digestive Balance Trend");
  const [firstTimeRange, setFirstTimeRange] = useState("Weekly");
  const [secondTimeRange, setSecondTimeRange] = useState("Weekly");
  const [firstShowDropdown, setFirstShowDropdown] = useState(false);
  const [secondShowDropdown, setSecondShowDropdown] = useState(false);

  // Month dropdowns (shown only when Monthly is selected)
  const [firstSelectedMonth, setFirstSelectedMonth] = useState(null); // "YYYY-MM"
  const [secondSelectedMonth, setSecondSelectedMonth] = useState(null); // "YYYY-MM"
  const [firstMonthDropdown, setFirstMonthDropdown] = useState(false);
  const [secondMonthDropdown, setSecondMonthDropdown] = useState(false);

  const [graphData, setGraphData] = useState(null);
  const [scoresInsightData, setScoresInsightData] = useState(null);
  console.log("scoresInsightData3137:-", scoresInsightData);
  const [loading, setLoading] = useState(false);
  const [scoresLoading, setScoresLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiMessage, setApiMessage] = useState(null);

  // Function to format date to YYYY-MM-DD
  const formatDateToYYYYMMDD = (date) => {
    if (!date) return null;

    if (typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)) return date;

    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      console.error("Invalid date:", date);
      return null;
    }

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Normalize tests_by_date → { range, data }
  const normalizeTestsByDate = (testsByDate) => {
    if (!testsByDate) return null;

    const dates = Object.keys(testsByDate).sort();
    if (dates.length === 0) return null;

    const data = dates.map((date) => {
      const t = testsByDate[date];
      const s = t.scores || {};

      return {
        date,
        absorptive_metabolism_score: s.absorptive ?? 0,
        fermentative_metabolism_score: s.fermentative ?? 0,
        fat_metabolism_score: s.fat ?? 0,
        glucose_metabolism_score: s.glucose ?? 0,
        hepatic_stress_metabolism_score: s.hepatic_stress ?? 0,
        detoxification_metabolism_score: s.detoxification ?? 0,
      };
    });

    return {
      range: { start_date: dates[0], end_date: dates[dates.length - 1] },
      data,
    };
  };

  // Fetch trend data once (per profile)
  useEffect(() => {
    const fetchInitialData = async () => {
      if (!dieticianId || !profileId) return;

      setLoading(true);
      setError(null);
      setApiMessage(null);

      try {
        const response = await fetchScoreTrend(dieticianId, profileId);

        if (response && response.tests_by_date) {
          const normalized = normalizeTestsByDate(response.tests_by_date);
          if (normalized) {
            setGraphData(normalized);
            setApiMessage(null);
          } else {
            setGraphData(null);
            setApiMessage("No data available");
          }
        } else {
          setGraphData(null);
          setApiMessage(response?.message || "No data available");
        }
      } catch (err) {
        setError(err.message || "An error occurred");
        setGraphData(null);
        setApiMessage(null);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [dieticianId, profileId]);

  // Fetch scores insight when selectedDate changes
  useEffect(() => {
    const fetchScoresData = async () => {
      if (!dieticianId || !profileId || !selectedDate) return;

      const formattedDate = formatDateToYYYYMMDD(selectedDate);
      if (!formattedDate) return;

      setScoresLoading(true);
      try {
        const response = await fetchScoresInsight(dieticianId, profileId, formattedDate);

        if (response?.noData) {
          setScoresInsightData(null);
          dispatch(setScoresInsight(null));
        } else if (response && response.latest_test) {
          setScoresInsightData(response);
          dispatch(setScoresInsight(response));
        } else {
          setScoresInsightData(null);
          dispatch(setScoresInsight(null));
        }
      } catch (err) {
        console.error("Error fetching scores insight:", err);
        setScoresInsightData(null);
        dispatch(setScoresInsight(null));
      } finally {
        setScoresLoading(false);
      }
    };

    fetchScoresData();
  }, [dieticianId, profileId, selectedDate, dispatch]);

  // Build months list from graphData.data
  const monthOptions = useMemo(() => {
    const list = graphData?.data || [];
    const map = new Map();

    list.forEach((item) => {
      const d = new Date(item.date);
      if (isNaN(d.getTime())) return;

      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const key = `${y}-${m}`;
      const label = d.toLocaleDateString("en-GB", { month: "short", year: "numeric" });

      map.set(key, label);
    });

    return Array.from(map.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, label]) => ({ key, label }));
  }, [graphData]);

  // Default select latest month once data arrives
  useEffect(() => {
    if (!monthOptions.length) return;

    const latest = monthOptions[monthOptions.length - 1];
    if (!firstSelectedMonth) setFirstSelectedMonth(latest.key);
    if (!secondSelectedMonth) setSecondSelectedMonth(latest.key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthOptions]);

 

  // Active marker
  const getActiveMarker = () => {
    switch (active) {
      case "Digestive Balance Trend":
        return { name: "Hydrogen", value: scoresInsightData?.latest_test?.ppm?.h2, unit: "ppm" };
      case "Fuel & Energy Trend":
        return { name: "Acetone", value: scoresInsightData?.latest_test?.ppm?.acetone, unit: "ppm" };
      case "Metabolic Recovery Trend":
        return { name: "Ethanol", value: scoresInsightData?.latest_test?.ppm?.ethanol, unit: "ppm" };
      default:
        return { name: "Hydrogen", value: scoresInsightData?.latest_test?.ppm?.h2, unit: "ppm" };
    }
  };

  const activeMarker = getActiveMarker();
  console.log("Active Marker3308:", activeMarker);

  const getMarkersForScoreType = (scoreType) => {
    switch (scoreType) {
      case "absorptive":
      case "detoxification":
        return [
          { position: "0%", label: "0" },
          { position: "50%", label: "50" },
          { position: "80%", label: "80" },
          { position: "100%", label: "100" },
        ];
      case "fermentative":
      case "glucose":
      case "hepatic_stress":
        return [
          { position: "0%", label: "0" },
          { position: "20%", label: "20" },
          { position: "30%", label: "30" },
          { position: "100%", label: "100" },
        ];
      case "fat":
        return [
          { position: "0%", label: "0" },
          { position: "70%", label: "70" },
          { position: "80%", label: "80" },
          { position: "100%", label: "100" },
        ];
      default:
        return [
          { position: "0%", label: "0" },
          { position: "100%", label: "100" },
        ];
    }
  };

  const getZoneSegmentsForScoreType = (scoreType) => {
    switch (scoreType) {
      case "fermentative":
      case "glucose":
      case "hepatic_stress":
        return [
          { color: "#3FAF58", width: "20%" },
          { color: "#FFBF2D", width: "10%" },
          { color: "#E48326", width: "70%" },
        ];
      case "absorptive":
      case "detoxification":
        return [
          { color: "#E48326", width: "50%" },
          { color: "#FFBF2D", width: "30%" },
          { color: "#3FAF58", width: "20%" },
        ];
      case "fat":
        return [
          { color: "#E48326", width: "70%" },
          { color: "#FFBF2D", width: "10%" },
          { color: "#3FAF58", width: "20%" },
        ];
      default:
        return [{ color: "#E1E6ED", width: "100%" }];
    }
  };

  // Titles
  const getTitles = () => {
    switch (active) {
      case "Digestive Balance Trend":
        return {
          firstTitle: "Nutrient Utilization Trend",
          secondTitle: "Digestive Activity Trend",
          firstScoreType: "absorptive",
          secondScoreType: "fermentative",
        };
      case "Fuel & Energy Trend":
        return {
          firstTitle: "Fuel Utilization Trend",
          secondTitle: "Energy Source Trend",
          firstScoreType: "fat",
          secondScoreType: "glucose",
        };
      case "Metabolic Recovery Trend":
        return {
          firstTitle: "Recovery Activity Trend",
          secondTitle: "Metabolic Load Trend",
          firstScoreType: "detoxification",
          secondScoreType: "hepatic_stress",
        };
      default:
        return {
          firstTitle: "Nutrient Utilization Trend",
          secondTitle: "Digestive Activity Trend",
          firstScoreType: "absorptive",
          secondScoreType: "fermentative",
        };
    }
  };

  const titles = getTitles();

  // Progress bars: default / no data / actual
  const getDefaultProgressBarConfigs = () => {
    return [
      {
        percentage: "-",
        colors: getZoneSegmentsForScoreType(titles.firstScoreType),
        markers: getMarkersForScoreType(titles.firstScoreType),
        status: "Optimal",
        statusColor: "#3FAF58",
        interpretation: "-",
        intervention: "-",
      },
      {
        percentage: "-",
        colors: getZoneSegmentsForScoreType(titles.secondScoreType),
        markers: getMarkersForScoreType(titles.secondScoreType),
        status: "Optimal",
        statusColor: "#3FAF58",
        interpretation: "-",
        intervention: "-",
      },
    ];
  };

  const getNoDataProgressBarConfigs = () => {
    return [
      {
        percentage: 0,
        colors: [
          { color: "#E1E6ED", width: "30%" },
          { color: "#E1E6ED", width: "40%" },
          { color: "#E1E6ED", width: "30%" },
        ],
        markers: [
          { position: "0%", label: "0" },
          { position: "30%", label: "60" },
          { position: "70%", label: "80" },
          { position: "100%", label: "100" },
        ],
        status: "No Data",
        statusColor: "#A1A1A1",
        interpretation: "No test data available for the selected date",
        intervention: "Please select a different date with available test results",
      },
      {
        percentage: 0,
        colors: [
          { color: "#E1E6ED", width: "30%" },
          { color: "#E1E6ED", width: "40%" },
          { color: "#E1E6ED", width: "30%" },
        ],
        markers: [
          { position: "0%", label: "0" },
          { position: "30%", label: "60" },
          { position: "70%", label: "80" },
          { position: "100%", label: "100" },
        ],
        status: "No Data",
        statusColor: "#A1A1A1",
        interpretation: "No test data available for the selected date",
        intervention: "Please select a different date with available test results",
      },
    ];
  };

  const normalizeZone = (z) => String(z || "").trim().toLowerCase();

const zoneToColor = (zone) => {
  const z = normalizeZone(zone);
  if (z === "optimal") return "#3FAF58";
  if (z === "moderate") return "#FFBF2D";
  if (z === "focus") return "#E48326";
  return "#3FAF58";
};



  const getProgressBarConfigs = () => {
    if (scoresInsightData?.noData) return getNoDataProgressBarConfigs();
    if (!scoresInsightData || !scoresInsightData.latest_test) return getDefaultProgressBarConfigs();

    const testJson = scoresInsightData.latest_test.test_json;
    const scores = scoresInsightData.latest_test.scores;

    const hasActualData = testJson && testJson.Metabolism_Score_Analysis;
    const hasOnlyRawData = testJson && testJson.raw;

    if (hasOnlyRawData) return getNoDataProgressBarConfigs();
    if (!hasActualData) return getNoDataProgressBarConfigs();

    const metabolismData = testJson.Metabolism_Score_Analysis;

    // const getZoneColor = (zone) => {
    //   switch (zone) {
    //     case "Optimal":
    //       return "#3FAF58";
    //     case "Moderate":
    //       return "#FFBF2D";
    //     case "Focus":
    //       return "#E48326";
    //     default:
    //       return "#3FAF58";
    //   }
    // };

    switch (active) {
      case "Digestive Balance Trend":
        return [
          {
            percentage: scores.absorptive || 0,
            colors: getZoneSegmentsForScoreType("absorptive"),
            markers: getMarkersForScoreType("absorptive"),
            status: metabolismData.Nutrient_Utilization_Trend?.zone || "N/A",
            statusColor: zoneToColor(metabolismData.Nutrient_Utilization_Trend?.zone),
            interpretation: metabolismData.Nutrient_Utilization_Trend?.interpretation || "No interpretation available",
            intervention: metabolismData.Nutrient_Utilization_Trend?.intervention || "No intervention available",
          },
          {
            percentage: scores.fermentative || 0,
            colors: getZoneSegmentsForScoreType("fermentative"),
            markers: getMarkersForScoreType("fermentative"),
            status: metabolismData.Digestive_Activity_Trend?.zone || "N/A",
            statusColor: zoneToColor(metabolismData.Digestive_Activity_Trend?.zone),
            interpretation: metabolismData.Digestive_Activity_Trend?.interpretation || "No interpretation available",
            intervention: metabolismData.Digestive_Activity_Trend?.intervention || "No intervention available",
          },
        ];

      case "Fuel & Energy Trend":
        return [
          {
            percentage: scores.fat || 0,
            colors: getZoneSegmentsForScoreType("fat"),
            markers: getMarkersForScoreType("fat"),
            status: metabolismData.Fuel_Utilization_Trend?.zone || "N/A",
            statusColor: zoneToColor(metabolismData.Fuel_Utilization_Trend?.zone),
            interpretation: metabolismData.Fuel_Utilization_Trend?.interpretation || "No interpretation available",
            intervention: metabolismData.Fuel_Utilization_Trend?.intervention || "No intervention available",
          },
          {
            percentage: scores.glucose || 0,
            colors: getZoneSegmentsForScoreType("glucose"),
            markers: getMarkersForScoreType("glucose"),
            status: metabolismData.Energy_Source_Trend?.zone || "N/A",
            statusColor: zoneToColor(metabolismData.Energy_Source_Trend?.zone),
            interpretation: metabolismData.Energy_Source_Trend?.interpretation || "No interpretation available",
            intervention: metabolismData.Energy_Source_Trend?.intervention || "No intervention available",
          },
        ];

      case "Metabolic Recovery Trend":
        return [
          {
            percentage: scores.detoxification || 0,
            colors: getZoneSegmentsForScoreType("detoxification"),
            markers: getMarkersForScoreType("detoxification"),
            status: metabolismData.Recovery_Activity_Trend?.zone || "N/A",
            statusColor: zoneToColor(metabolismData.Recovery_Activity_Trend?.zone),
            interpretation: metabolismData.Recovery_Activity_Trend?.interpretation || "No interpretation available",
            intervention: metabolismData.Recovery_Activity_Trend?.intervention || "No intervention available",
          },
          {
            percentage: scores.hepatic_stress || 0,
            colors: getZoneSegmentsForScoreType("hepatic_stress"),
            markers: getMarkersForScoreType("hepatic_stress"),
            status: metabolismData.Metabolic_Load_Trend?.zone || "N/A",
            statusColor: zoneToColor(metabolismData.Metabolic_Load_Trend?.zone),
            interpretation: metabolismData.Metabolic_Load_Trend?.interpretation || "No interpretation available",
            intervention: metabolismData.Metabolic_Load_Trend?.intervention || "No intervention available",
          },
        ];

      default:
        return getDefaultProgressBarConfigs();
    }
  };

  const progressBarConfigs = getProgressBarConfigs();


  const ProgressBarSection = ({ config }) => (
    <div className="flex flex-col gap-5 w-full lg:w-auto">
      <div className="flex flex-col gap-[5px] w-full relative">
        <div className="w-full rounded-[10px] h-[22px] flex gap-0.5 relative items-center">
          {config.colors.map((colorConfig, index) => (
            <div
              key={index}
              className="h-2.5 rounded-[5px]"
              style={{
                backgroundColor: colorConfig.color,
                width: colorConfig.width,
              }}
            />
          ))}
          <div
            className="absolute top-1/2 w-1 h-[22px] border-[10px] border-[#252525] rounded-[10px] transform -translate-y-1/2"
            style={{
              left:
                config.percentage === "-"
                  ? "0%"
                  : `${Math.max(0, Math.min(100, Number(config.percentage) || 0))}%`,
            }}
          />
        </div>

        <div className="relative w-full">
          {config.markers.map((marker, index) => (
            <span
              key={index}
              className="absolute -translate-x-1/2 text-[8px] text-[#252525] font-normal"
              style={{ left: marker.position }}
            >
              {marker.label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center">
        {/* <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">
          {config.percentage === "-" ? "-" : `${Math.floor(Number(config.percentage) || 0)}%`}
        </p> */}

        <p className="text-[#252525] text-[20px] md:text-[25px] font-semibold">
  {config.percentage === "-"
    ? "-"
    : `${Number(config.percentage || 0).toFixed(0)}%`}
</p>


        <div className="mx-3 h-4 w-px bg-[#252525]"></div>

        <p className="text-[20px] md:text-[25px] font-semibold" style={{ color: config.statusColor }}>
          {config.status}
        </p>
      </div>

      <div className="flex flex-col gap-[5px]">
        <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">
          Interpretation:
        </span>
        <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px]">
          {config.interpretation}
        </span>
      </div>

      <div className="border-b border-[#E1E6ED]"></div>

      <div className="flex flex-col gap-[5px]">
        <span className="text-[#252525] text-[12px] font-semibold leading-normal tracking-[-0.24px]">
          Intervention:
        </span>
        <span className="text-[#535359] text-[12px] font-normal leading-normal tracking-[-0.24px] break-words">
          {config.intervention}
        </span>
      </div>
    </div>
  );

  const formatDateLabel = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Invalid Date";
      const day = String(date.getDate()).padStart(2, "0");
      const month = date.toLocaleDateString("en-GB", { month: "short" });
      return `${day} ${month}`;
    } catch {
      return "Invalid Date";
    }
  };

  // Monthly aggregation by selected month
  const aggregateDataByWeek = (data, scoreType, selectedMonthKey) => {
    if (!data || data.length === 0) return { labels: [], values: [] };

    let targetMonth, targetYear;

    if (selectedMonthKey) {
      const [y, m] = selectedMonthKey.split("-");
      targetYear = Number(y);
      targetMonth = Number(m) - 1;
    } else {
      const lastDate = new Date(data[data.length - 1].date);
      targetMonth = lastDate.getMonth();
      targetYear = lastDate.getFullYear();
    }

    const monthData = data.filter((item) => {
      const d = new Date(item.date);
      return d.getMonth() === targetMonth && d.getFullYear() === targetYear;
    });

    if (monthData.length === 0) return { labels: [], values: [] };

    const weeklyData = {};

    const monthShort = (d) => d.toLocaleDateString("en-GB", { month: "short" });

    const formatDayMonth = (d) => {
      const day = String(d.getDate()).padStart(2, "0");
      return `${day} ${monthShort(d)}`;
    };

    const getWeekStartMonday = (dateObj) => {
      const d = new Date(dateObj);
      const day = d.getDay();
      const diff = day === 0 ? -6 : 1 - day;
      d.setDate(d.getDate() + diff);
      d.setHours(0, 0, 0, 0);
      return d;
    };

    const getWeekEndSunday = (mondayObj) => {
      const d = new Date(mondayObj);
      d.setDate(d.getDate() + 6);
      d.setHours(0, 0, 0, 0);
      return d;
    };

    const getScore = (item) => {
      switch (scoreType) {
        case "absorptive":
          return parseInt(item.absorptive_metabolism_score) || 0;
        case "fermentative":
          return parseInt(item.fermentative_metabolism_score) || 0;
        case "fat":
          return parseInt(item.fat_metabolism_score) || 0;
        case "glucose":
          return parseInt(item.glucose_metabolism_score) || 0;
        case "detoxification":
          return parseInt(item.detoxification_metabolism_score) || 0;
        case "hepatic_stress":
          return parseInt(item.hepatic_stress_metabolism_score) || 0;
        default:
          return 0;
      }
    };

    monthData.forEach((item) => {
      const dateObj = new Date(item.date);

      const monday = getWeekStartMonday(dateObj);
      const sunday = getWeekEndSunday(monday);

      const monthStart = new Date(targetYear, targetMonth, 1);
      const monthEnd = new Date(targetYear, targetMonth + 1, 0);

      const start = monday < monthStart ? monthStart : monday;
      const end = sunday > monthEnd ? monthEnd : sunday;

      const weekLabel = `${formatDayMonth(start)} - ${formatDayMonth(end)}`;

      if (!weeklyData[weekLabel]) weeklyData[weekLabel] = [];
      weeklyData[weekLabel].push(getScore(item));
    });

    const result = { labels: [], values: [] };

    const sortedLabels = Object.keys(weeklyData).sort((a, b) => {
      const parseStart = (label) => {
        const [startPart] = label.split(" - ");
        const [dd, mon] = startPart.split(" ");
        const monthIndex = new Date(`${mon} 01, ${targetYear}`).getMonth();
        return new Date(targetYear, monthIndex, Number(dd));
      };
      return parseStart(a) - parseStart(b);
    });

    sortedLabels.forEach((label) => {
      const arr = weeklyData[label];
      const avg = arr.reduce((sum, v) => sum + v, 0) / arr.length;
      result.labels.push(label);
      result.values.push(Math.round(avg));
    });

    return result;
  };

  // Main data processing for Weekly / Monthly
  const getProcessedData = (scoreType, timeRange) => {
    if (!graphData || !graphData.data) return { labels: [], values: [] };

    const sortedData = [...graphData.data].sort((a, b) => new Date(a.date) - new Date(b.date));

    if (timeRange === "Weekly") {
      const last7 = sortedData.slice(-7);

      const labels = last7.map((item) => formatDateLabel(item.date));
      const values = last7.map((item) => {
        switch (scoreType) {
          case "absorptive":
            return parseInt(item.absorptive_metabolism_score) || 0;
          case "fermentative":
            return parseInt(item.fermentative_metabolism_score) || 0;
          case "fat":
            return parseInt(item.fat_metabolism_score) || 0;
          case "glucose":
            return parseInt(item.glucose_metabolism_score) || 0;
          case "detoxification":
            return parseInt(item.detoxification_metabolism_score) || 0;
          case "hepatic_stress":
            return parseInt(item.hepatic_stress_metabolism_score) || 0;
          default:
            return 0;
        }
      });

      return { labels, values };
    }

    if (timeRange === "Monthly") {
      const selectedMonthKey =
        scoreType === titles.firstScoreType ? firstSelectedMonth : secondSelectedMonth;

      return aggregateDataByWeek(sortedData, scoreType, selectedMonthKey);
    }

    return { labels: [], values: [] };
  };

  const handleFirstTimeRangeChange = (newRange) => {
    setFirstTimeRange(newRange);
    setFirstShowDropdown(false);
    setFirstMonthDropdown(false);

    if (newRange === "Weekly") {
      setFirstSelectedMonth(null);
    } else if (newRange === "Monthly" && !firstSelectedMonth && monthOptions.length) {
      setFirstSelectedMonth(monthOptions[monthOptions.length - 1].key);
    }
  };

  const handleSecondTimeRangeChange = (newRange) => {
    setSecondTimeRange(newRange);
    setSecondShowDropdown(false);
    setSecondMonthDropdown(false);

    if (newRange === "Weekly") {
      setSecondSelectedMonth(null);
    } else if (newRange === "Monthly" && !secondSelectedMonth && monthOptions.length) {
      setSecondSelectedMonth(monthOptions[monthOptions.length - 1].key);
    }
  };

//   const getTabColor = (tabLabel) => {
//     const metabolismData = scoresInsightData?.latest_test?.test_json?.Metabolism_Score_Analysis;


//     if (!metabolismData) {
//       if (tabLabel === "Digestive Balance Trend") return "#E48326";
//       if (tabLabel === "Fuel & Energy Trend") return "#3FAF58";
//       if (tabLabel === "Metabolic Recovery Trend") return "#3FAF58";
//       return "#E1E6ED";
//     }

//     let zone1 = "";
//     let zone2 = "";

//     switch (tabLabel) {
//       case "Digestive Balance Trend":
//         zone1 = metabolismData.Nutrient_Utilization_Trend
// ?.zone || "";
//         zone2 = metabolismData.Digestive_Activity_Trend
// ?.zone || "";
//         break;
//       case "Fuel & Energy Trend":
//         zone1 = metabolismData.Fuel_Utilization_Trend
// ?.zone || "";
//         zone2 = metabolismData.Energy_Source_Trend
// ?.zone || "";
//         break;
//       case "Metabolic Recovery Trend":
//         zone1 = metabolismData.Recovery_Activity_Trend?.zone || "";
//         zone2 = metabolismData.metabolism_score_summary
// ?.zone || "";
//         break;
//       default:
//         break;
//     }

//     const z1 = zone1.toLowerCase();
//     const z2 = zone2.toLowerCase();

//     if (z1 === "Focus" || z2 === "Focus") return "#E48326";
//     if (z1 === "Moderate" || z2 === "Moderate") return "#FFBF2D";
//     if (z1 === "Optimal" || z2 === "Optimal") return "#3FAF58";

//     return "#E1E6ED";
//   };


const getTabColor = (tabLabel) => {
  const metabolismData = scoresInsightData?.latest_test?.test_json?.Metabolism_Score_Analysis;

  if (!metabolismData) return "#E1E6ED";

  let zone1 = "";
  let zone2 = "";

  switch (tabLabel) {
    case "Digestive Balance Trend":
      zone1 = metabolismData.Nutrient_Utilization_Trend?.zone;
      zone2 = metabolismData.Digestive_Activity_Trend?.zone;
      break;

    case "Fuel & Energy Trend":
      zone1 = metabolismData.Fuel_Utilization_Trend?.zone;
      zone2 = metabolismData.Energy_Source_Trend?.zone;
      break;

    case "Metabolic Recovery Trend":
      zone1 = metabolismData.Recovery_Activity_Trend?.zone;
      zone2 = metabolismData.Metabolic_Load_Trend?.zone;
      break;

    default:
      break;
  }

  const z1 = normalizeZone(zone1);
  const z2 = normalizeZone(zone2);

  if (z1 === "focus" || z2 === "focus") return "#E48326";
  if (z1 === "moderate" || z2 === "moderate") return "#FFBF2D";
  if (z1 === "optimal" || z2 === "optimal") return "#3FAF58";

  return "#E1E6ED";
};




  const tabs = [
    { label: "Digestive Balance Trend" },
    { label: "Fuel & Energy Trend" },
    { label: "Metabolic Recovery Trend" },
  ];

  const firstSectionData = useMemo(
    () => getProcessedData(titles.firstScoreType, firstTimeRange),
    [graphData, titles.firstScoreType, firstTimeRange, firstSelectedMonth, monthOptions]
  );

  const secondSectionData = useMemo(
    () => getProcessedData(titles.secondScoreType, secondTimeRange),
    [graphData, titles.secondScoreType, secondTimeRange, secondSelectedMonth, monthOptions]
  );


const hasTrendData = (graphData?.data?.length || 0) > 0;
if (!loading && !error && (!hasTrendData || apiMessage)) {
  return null;
}


  if (loading) {
    return <div className="flex-1 min-w-0 rounded-[15px] mx-2 p-4">Loading graph data...</div>;
  }

  if (error) {
    return (
      <div className="flex-1 min-w-0 rounded-[15px] mx-2 p-4 text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="flex-1 min-w-0 rounded-[15px] mx-2">
      <div className="mt-[15px] ml-[13px]">
        <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[0.4px]">
          Score Analysis
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {/* Tabs */}
        <div className="flex w-full gap-6 mt-[18px] border-b border-[#E1E6ED]">
          {tabs.map((tab) => {
            const isActive = active === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setActive(tab.label)}
                className={`flex gap-2.5 items-center pb-[13px] pl-[5px] pr-[25px] cursor-pointer ${
                  isActive ? "border-b-2 border-[#308BF9]" : ""
                }`}
              >
                <span
                  className={`text-[12px] font-semibold leading-[110%] tracking-[-0.24px] ${
                    isActive ? "text-[#308BF9]" : "text-[#A1A1A1]"
                  }`}
                >
                  {tab.label}
                </span>
                <div
                  className="w-[6px] h-[6px] rounded-full"
                  style={{ backgroundColor: getTabColor(tab.label) }}
                />
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-9 pt-1.5 pl-[5px] pr-[13px] rounded-[15px]">
          {/* Main Marker */}
          {showMainMarker && (
            <div className="flex flex-col gap-[5px] px-[15px] py-[18px] bg-[#F0F0F0] rounded-[15px]">
              <span className="text-[#252525] text-[12px] font-semibold leading-[130%] tracking-[-0.24px]">
                Main Marker: {activeMarker.name}
              </span>
              <span className="text-[#252525] text-[20px] font-semibold leading-[110%] tracking-[-0.4px]">
                {activeMarker.value
                  ? `${parseFloat(activeMarker.value).toFixed(3)} ${activeMarker.unit}`
                  : "-"}
              </span>
            </div>
          )}

          {/* ✅ COMPACT MODE (used in ClientReminder) */}
          {compactGraphs ? (
            <div className="mx-[15px] my-4">
              <div className="flex justify-center items-center gap-6">
                {/* LEFT GRAPH */}
                <div className="w-[500px] max-w-full flex-none ">
                  <div className="flex gap-3 mb-3">
                    {/* Weekly/Monthly */}
                    <div className="relative">
                      <div
                        className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
                        onClick={() => setFirstShowDropdown(!firstShowDropdown)}
                      >
                        <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                          {firstTimeRange}
                        </span>
                        <IoIosArrowDown className="w-5 h-5" />
                      </div>

                      {firstShowDropdown && (
                        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
                          <div
                            className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
                            onClick={() => handleFirstTimeRangeChange("Weekly")}
                          >
                            <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                              Weekly
                            </span>
                          </div>
                          <div
                            className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
                            onClick={() => handleFirstTimeRangeChange("Monthly")}
                          >
                            <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                              Monthly
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Month dropdown */}
                    {firstTimeRange === "Monthly" && (
                      <div className="relative">
                        <div
                          className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
                          onClick={() => setFirstMonthDropdown(!firstMonthDropdown)}
                        >
                          <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                            {monthOptions.find((m) => m.key === firstSelectedMonth)?.label ||
                              "Select Month"}
                          </span>
                          <IoIosArrowDown className="w-5 h-5" />
                        </div>

                        {firstMonthDropdown && (
                          <div className="absolute top-full right-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
                            {monthOptions.map((m) => (
                              <div
                                key={m.key}
                                className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
                                onClick={() => {
                                  setFirstSelectedMonth(m.key);
                                  setFirstMonthDropdown(false);
                                }}
                              >
                                <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                                  {m.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {apiMessage ? (
                    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="text-center">
                        <p className="text-gray-500 text-lg font-medium">{apiMessage}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="h-[200px]">
                    <Graph
                      title={titles.firstTitle}
                      labels={firstSectionData.labels}
                      values={firstSectionData.values}
                    />
                    </div>
                  )}
                </div>

                {/* RIGHT GRAPH */}
                <div className="w-[500px] max-w-full flex-none">
                  <div className="flex gap-3 mb-3 justify-end">
                    {/* Weekly/Monthly */}
                    <div className="relative">
                      <div
                        className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
                        onClick={() => setSecondShowDropdown(!secondShowDropdown)}
                      >
                        <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                          {secondTimeRange}
                        </span>
                        <IoIosArrowDown className="w-5 h-5" />
                      </div>

                      {secondShowDropdown && (
                        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
                          <div
                            className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
                            onClick={() => handleSecondTimeRangeChange("Weekly")}
                          >
                            <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                              Weekly
                            </span>
                          </div>
                          <div
                            className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
                            onClick={() => handleSecondTimeRangeChange("Monthly")}
                          >
                            <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                              Monthly
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Month dropdown */}
                    {secondTimeRange === "Monthly" && (
                      <div className="relative">
                        <div
                          className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
                          onClick={() => setSecondMonthDropdown(!secondMonthDropdown)}
                        >
                          <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                            {monthOptions.find((m) => m.key === secondSelectedMonth)?.label ||
                              "Select Month"}
                          </span>
                          <IoIosArrowDown className="w-5 h-5" />
                        </div>

                        {secondMonthDropdown && (
                          <div className="absolute top-full right-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
                            {monthOptions.map((m) => (
                              <div
                                key={m.key}
                                className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
                                onClick={() => {
                                  setSecondSelectedMonth(m.key);
                                  setSecondMonthDropdown(false);
                                }}
                              >
                                <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                                  {m.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {apiMessage ? (
                    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="text-center">
                        <p className="text-gray-500 text-lg font-medium">{apiMessage}</p>
                      </div>
                    </div>
                  ) : (
                     <div className="h-[200px]">
                    <Graph
                      title={titles.secondTitle}
                      labels={secondSectionData.labels}
                      values={secondSectionData.values}
                      showGradient={true}
                    />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* ✅ NORMAL MODE (your original layout) */
            <div className="flex flex-col gap-[42px]">
              {/* First Section */}
              <div className="flex flex-col gap-5">
                <div className="pb-5 border-b border-[#E1E6ED]">
                  <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">
                    {titles.firstTitle}
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row gap-[30px] items-start">
                  {/* Graph */}
                  <div className="flex-1 w-full lg:w-1/2 min-w-0">
                    <div className="mx-[15px] my-4">
                      <div className="flex justify-between gap-3">
                        {/* Weekly/Monthly */}
                        <div className="relative">
                          <div
                            className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
                            onClick={() => setFirstShowDropdown(!firstShowDropdown)}
                          >
                            <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                              {firstTimeRange}
                            </span>
                            <IoIosArrowDown className="w-5 h-5" />
                          </div>

                          {firstShowDropdown && (
                            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
                              <div
                                className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
                                onClick={() => handleFirstTimeRangeChange("Weekly")}
                              >
                                <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                                  Weekly
                                </span>
                              </div>
                              <div
                                className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
                                onClick={() => handleFirstTimeRangeChange("Monthly")}
                              >
                                <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                                  Monthly
                                </span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Month dropdown */}
                        {firstTimeRange === "Monthly" && (
                          <div className="relative">
                            <div
                              className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
                              onClick={() => setFirstMonthDropdown(!firstMonthDropdown)}
                            >
                              <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                                {monthOptions.find((m) => m.key === firstSelectedMonth)?.label ||
                                  "Select Month"}
                              </span>
                              <IoIosArrowDown className="w-5 h-5" />
                            </div>

                            {firstMonthDropdown && (
                              <div className="absolute top-full right-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
                                {monthOptions.map((m) => (
                                  <div
                                    key={m.key}
                                    className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
                                    onClick={() => {
                                      setFirstSelectedMonth(m.key);
                                      setFirstMonthDropdown(false);
                                    }}
                                  >
                                    <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                                      {m.label}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {apiMessage ? (
                      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="text-center">
                          <p className="text-gray-500 text-lg font-medium">{apiMessage}</p>
                        </div>
                      </div>
                    ) : (
                      <Graph
                        title={titles.firstTitle}
                        labels={firstSectionData.labels}
                        values={firstSectionData.values}
                      />
                    )}
                  </div>

                  {/* Progress Bar */}
                  {showMainMarker && (
                    <div className="flex-1 w-full lg:w-1/2 min-w-0">
                      <ProgressBarSection config={progressBarConfigs[0]} />
                    </div>
                  )}
                </div>
              </div>

              {/* Second Section */}
              <div className="flex flex-col gap-5">
                <div className="pb-5 border-b border-[#E1E6ED]">
                  <span className="text-[#252525] text-[15px] font-semibold leading-[110%] tracking-[-0.6px]">
                    {titles.secondTitle}
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row gap-[30px] items-start">
                  {/* Graph */}
                  <div className="flex-1 w-full lg:w-1/2 min-w-0">
                    <div className="mx-[15px] my-4">
                      <div className="flex justify-between gap-3">
                        {/* Weekly/Monthly */}
                        <div className="relative">
                          <div
                            className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
                            onClick={() => setSecondShowDropdown(!secondShowDropdown)}
                          >
                            <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                              {secondTimeRange}
                            </span>
                            <IoIosArrowDown className="w-5 h-5" />
                          </div>

                          {secondShowDropdown && (
                            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
                              <div
                                className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
                                onClick={() => handleSecondTimeRangeChange("Weekly")}
                              >
                                <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                                  Weekly
                                </span>
                              </div>
                              <div
                                className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
                                onClick={() => handleSecondTimeRangeChange("Monthly")}
                              >
                                <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                                  Monthly
                                </span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Month dropdown */}
                        {secondTimeRange === "Monthly" && (
                          <div className="relative">
                            <div
                              className="flex gap-6 items-center rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] cursor-pointer"
                              onClick={() => setSecondMonthDropdown(!secondMonthDropdown)}
                            >
                              <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                                {monthOptions.find((m) => m.key === secondSelectedMonth)?.label ||
                                  "Select Month"}
                              </span>
                              <IoIosArrowDown className="w-5 h-5" />
                            </div>

                            {secondMonthDropdown && (
                              <div className="absolute top-full right-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[5px] shadow-lg z-10">
                                {monthOptions.map((m) => (
                                  <div
                                    key={m.key}
                                    className="py-[11px] px-[15px] hover:bg-gray-50 cursor-pointer"
                                    onClick={() => {
                                      setSecondSelectedMonth(m.key);
                                      setSecondMonthDropdown(false);
                                    }}
                                  >
                                    <span className="text-[#535359] text-[12px] font-normal leading-[110%] tracking-[-0.24px] capitalize">
                                      {m.label}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {apiMessage ? (
                      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="text-center">
                          <p className="text-gray-500 text-lg font-medium">{apiMessage}</p>
                        </div>
                      </div>
                    ) : (
                      <Graph
                        title={titles.secondTitle}
                        labels={secondSectionData.labels}
                        values={secondSectionData.values}
                        showGradient={true}
                      />
                    )}
                  </div>

                  {/* Progress Bar */}
                  {showMainMarker && (
                    <div className="flex-1 w-full lg:w-1/2 min-w-0">
                      <ProgressBarSection config={progressBarConfigs[1]} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(TrendsComponent);

