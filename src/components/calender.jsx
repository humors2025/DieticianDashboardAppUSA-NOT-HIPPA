// "use client";

// import { useMemo, useRef, useState } from "react";

// export default function Calender() {
//   const today = new Date();

//   const [calendarMonth, setCalendarMonth] = useState(() => ({
//     year: today.getFullYear(),
//     monthIndex: today.getMonth(), // 0=Jan
//   }));

//   const { year: currentYear, monthIndex: currentMonthIndex } = calendarMonth;

//   const monthLabel = useMemo(() => {
//     const date = new Date(currentYear, currentMonthIndex, 1);
//     return date.toLocaleString("en-US", { month: "short", year: "numeric" });
//   }, [currentYear, currentMonthIndex]);

//   const testsByDay = useMemo(
//     () => ({
//       1: 200,
//       2: 200,
//       3: 200,
//       4: 200,
//       5: 200,
//       6: 200,
//       7: 200,
//       9: 200,
//       11: 20012,
//       14: 200,
//       20: 200,
//       22: 200,
//       24: 1200,
//       29: 14200,
//       30: 1200,
//       31: 14500,
//     }),
//     []
//   );

//   const daysInMonth = useMemo(
//     () => new Date(currentYear, currentMonthIndex + 1, 0).getDate(),
//     [currentYear, currentMonthIndex]
//   );

//   const firstDayOfMonth = useMemo(
//     () => new Date(currentYear, currentMonthIndex, 1).getDay(),
//     [currentYear, currentMonthIndex]
//   );

//   // Convert Sunday-start (0) to Monday-start offset
//   const mondayStartOffset = useMemo(
//     () => (firstDayOfMonth + 6) % 7,
//     [firstDayOfMonth]
//   );

//   const calendarWeeks = useMemo(() => {
//     const calendarCells = [];

//     for (let i = 0; i < mondayStartOffset; i++) {
//       calendarCells.push({ type: "blank" });
//     }

//     for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
//       calendarCells.push({ type: "day", day: dayNumber });
//     }

//     const weeks = [];
//     for (let i = 0; i < calendarCells.length; i += 7) {
//       weeks.push(calendarCells.slice(i, i + 7));
//     }

//     // Fill last week to 7 cells
//     const lastWeek = weeks[weeks.length - 1] || [];
//     while (lastWeek.length < 7) lastWeek.push({ type: "blank" });

//     // Always show 6 weeks
//     while (weeks.length < 6) {
//       weeks.push(Array.from({ length: 7 }, () => ({ type: "blank" })));
//     }

//     return weeks;
//   }, [mondayStartOffset, daysInMonth]);

//   const totalTestsRecorded = useMemo(() => {
//     return Object.values(testsByDay).reduce(
//       (sum, value) => sum + (Number(value) || 0),
//       0
//     );
//   }, [testsByDay]);

//   const goToNextMonth = () => {
//     setCalendarMonth((prev) => {
//       const isDecember = prev.monthIndex === 11;
//       return {
//         year: isDecember ? prev.year + 1 : prev.year,
//         monthIndex: isDecember ? 0 : prev.monthIndex + 1,
//       };
//     });
//   };

//   const goToPreviousMonth = () => {
//     setCalendarMonth((prev) => {
//       const isJanuary = prev.monthIndex === 0;
//       return {
//         year: isJanuary ? prev.year - 1 : prev.year,
//         monthIndex: isJanuary ? 11 : prev.monthIndex - 1,
//       };
//     });
//   };

//   const isScrollLockedRef = useRef(false);

//   const handleCalendarScroll = (event) => {
//     // Prevent page scrolling when wheel is over calendar
//     event.preventDefault();

//     if (isScrollLockedRef.current) return;

//     const scrollDelta = event.deltaY;
//     const SCROLL_THRESHOLD = 60;
//     if (Math.abs(scrollDelta) < SCROLL_THRESHOLD) return;

//     isScrollLockedRef.current = true;

//     if (scrollDelta > 0) goToNextMonth();
//     else goToPreviousMonth();

//     setTimeout(() => {
//       isScrollLockedRef.current = false;
//     }, 350);
//   };

//   return (
//     <>
//       {/* Card */}
//       <div className="w-full max-w-[400px] rounded-[15px]  border-[#E1E6ED] bg-[#F5F7FA] px-2.5 pt-2.5">
//         <div className="flex flex-col gap-1 bg-[#DBDFE5] rounded-[15px]">
//             <div className="flex justify-between py-5 pl-[18px] pr-14">
//          <div className="flex flex-col gap-1.5">
//             <p className="text-[#252525] text-[15px] font-semibold leading-[126%] tracking-[-0.3px]">450</p>
//             <p className="text-[#535359] text-[10px] font-normal leading-normal tracking-normal-[-0.2px]">Total Clients</p>
//          </div>

//           <div className="flex flex-col gap-1.5">
//             <p className="text-[#252525] text-[15px] font-semibold leading-[126%] tracking-[-0.3px]">2000/10000</p>
//             <div className="flex gap-1.5">
//             <p className="text-[#535359] text-[10px] font-normal leading-normal tracking-normal-[-0.2px]">Test Usage</p>
//             <p className="text-[#308BF9] text-[10px] font-normal leading-normal tracking-normal-[-0.2px] underline cursor-pointer">Know more</p>
//          </div>
//          </div>
//          </div>
//         </div>

//         <div className="mt-2.5 px-5  flex flex-col gap-5">
//           <div className="flex flex-col gap-1">
//             <p className="text-[#252525] text-[34px] font-normal leading-normal tracking-[-2.04px]">
//               {monthLabel}
//             </p>
//             <p className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
//               {totalTestsRecorded} Tests Recorded
//             </p>
//           </div>

//           <div className="flex flex-col gap-2.5 pt-2.5">
//             {/* Week header */}
//             <div className="grid grid-cols-7 border-b border-[#E1E6ED] pb-2">
//               {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
//                 (dayLabel, dayIndex) => (
//                   <div
//                     key={dayLabel}
//                     className="flex items-center justify-center"
//                   >
//                     <p
//                       className={`text-[10px] font-normal tracking-[-0.2px] ${
//                         dayIndex === 6 ? "text-[#DA5747]" : "text-[#252525]"
//                       }`}
//                     >
//                       {dayLabel}
//                     </p>
//                   </div>
//                 )
//               )}
//             </div>

//             {/* Calendar body */}
//             <div
//               className="flex flex-col"
//               onWheel={handleCalendarScroll}
//               style={{
//                 overscrollBehavior: "contain",
//                 height: "500px",
//                 overflow: "hidden",
//               }}
//             >
//               {calendarWeeks.map((week, weekIndex) => (
//                 <div
//                   key={weekIndex}
//                   className={`grid grid-cols-7 ${
//                     weekIndex !== calendarWeeks.length - 1
//                       ? "border-b border-[#E1E6ED]"
//                       : ""
//                   }`}
//                 >
//                   {week.map((cell, dayIndex) => {
//                     if (cell.type === "blank") {
//                       return (
//                         <div
//                           key={`${weekIndex}-${dayIndex}`}
//                           className="min-h-[80px] px-2 py-2"
//                         />
//                       );
//                     }

//                     const dayNumber = cell.day;
//                     const testsCount = testsByDay[dayNumber] ?? null;
//                     const isSunday = dayIndex === 6;

//                     return (
//                       <div
//                         key={`${weekIndex}-${dayIndex}`}
//                         className="min-h-[80px] px-2 py-2 flex flex-col items-center justify-start gap-1"
//                       >
//                         <p
//                           className={`text-[10px] font-normal tracking-[-0.2px] ${
//                             isSunday ? "text-[#DA5747]" : "text-[#252525]"
//                           }`}
//                         >
//                           {dayNumber}
//                         </p>

//                         {testsCount ? (
//                           <div className="mt-2 flex flex-col items-center">
//                             <p
//                               className={`text-[11px] font-medium ${
//                                 isSunday ? "text-[#DA5747]" : "text-[#252525]"
//                               }`}
//                             >
//                               {testsCount}
//                             </p>
//                             <p
//                               className={`text-[10px] font-normal ${
//                                 isSunday ? "text-[#DA5747]" : "text-[#252525]"
//                               }`}
//                             >
//                               tests
//                             </p>
//                           </div>
//                         ) : (
//                           <div className="mt-2 h-[28px]" />
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }








// "use client";

// import { useMemo, useRef, useState } from "react";

// export default function Calender() {
//   const today = new Date();

//   const [calendarMonth, setCalendarMonth] = useState(() => ({
//     year: today.getFullYear(),
//     monthIndex: today.getMonth(), // 0=Jan
//   }));

//   const { year: currentYear, monthIndex: currentMonthIndex } = calendarMonth;

//   const monthLabel = useMemo(() => {
//     const date = new Date(currentYear, currentMonthIndex, 1);
//     return date.toLocaleString("en-US", { month: "short", year: "numeric" });
//   }, [currentYear, currentMonthIndex]);

//   const testsByDay = useMemo(
//     () => ({
//       1: 200,
//       2: 200,
//       3: 200,
//       4: 200,
//       5: 200,
//       6: 200,
//       7: 200,
//       9: 200,
//       11: 20012,
//       14: 200,
//       20: 200,
//       22: 200,
//       24: 1200,
//       29: 14200,
//       30: 1200,
//       31: 14500,
//     }),
//     []
//   );

//   const daysInMonth = useMemo(
//     () => new Date(currentYear, currentMonthIndex + 1, 0).getDate(),
//     [currentYear, currentMonthIndex]
//   );

//   const firstDayOfMonth = useMemo(
//     () => new Date(currentYear, currentMonthIndex, 1).getDay(),
//     [currentYear, currentMonthIndex]
//   );

//   // Convert Sunday-start (0) to Monday-start offset
//   const mondayStartOffset = useMemo(
//     () => (firstDayOfMonth + 6) % 7,
//     [firstDayOfMonth]
//   );

//   const calendarWeeks = useMemo(() => {
//     const calendarCells = [];

//     for (let i = 0; i < mondayStartOffset; i++) {
//       calendarCells.push({ type: "blank" });
//     }

//     for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
//       calendarCells.push({ type: "day", day: dayNumber });
//     }

//     const weeks = [];
//     for (let i = 0; i < calendarCells.length; i += 7) {
//       weeks.push(calendarCells.slice(i, i + 7));
//     }

//     // Fill last week to 7 cells
//     const lastWeek = weeks[weeks.length - 1] || [];
//     while (lastWeek.length < 7) lastWeek.push({ type: "blank" });

//     // Always show 6 weeks
//     while (weeks.length < 6) {
//       weeks.push(Array.from({ length: 7 }, () => ({ type: "blank" })));
//     }

//     return weeks;
//   }, [mondayStartOffset, daysInMonth]);

//   const totalTestsRecorded = useMemo(() => {
//     return Object.values(testsByDay).reduce(
//       (sum, value) => sum + (Number(value) || 0),
//       0
//     );
//   }, [testsByDay]);

//   const goToNextMonth = () => {
//     setCalendarMonth((prev) => {
//       const isDecember = prev.monthIndex === 11;
//       return {
//         year: isDecember ? prev.year + 1 : prev.year,
//         monthIndex: isDecember ? 0 : prev.monthIndex + 1,
//       };
//     });
//   };

//   const goToPreviousMonth = () => {
//     setCalendarMonth((prev) => {
//       const isJanuary = prev.monthIndex === 0;
//       return {
//         year: isJanuary ? prev.year - 1 : prev.year,
//         monthIndex: isJanuary ? 11 : prev.monthIndex - 1,
//       };
//     });
//   };

//   const isScrollLockedRef = useRef(false);

//   // Keep wheel-to-change-month, while allowing scrollbar (no preventDefault)
//   const handleCalendarScroll = (event) => {
//     if (isScrollLockedRef.current) return;

//     const scrollDelta = event.deltaY;
//     const SCROLL_THRESHOLD = 60;

//     if (Math.abs(scrollDelta) < SCROLL_THRESHOLD) return;

//     isScrollLockedRef.current = true;

//     if (scrollDelta > 0) goToNextMonth();
//     else goToPreviousMonth();

//     setTimeout(() => {
//       isScrollLockedRef.current = false;
//     }, 350);
//   };

//   return (
//     <>
//       {/* Card */}
//       <div className="w-full max-w-[400px] rounded-[15px] border border-[#E1E6ED] bg-[#F5F7FA] px-2.5 pt-2.5">
//         <div className="flex flex-col gap-1 bg-[#DBDFE5] rounded-[15px]">
//           <div className="flex justify-between py-5 pl-[18px] pr-14">
//             <div className="flex flex-col gap-1.5">
//               <p className="text-[#252525] text-[15px] font-semibold leading-[126%] tracking-[-0.3px]">
//                 450
//               </p>
//               <p className="text-[#535359] text-[10px] font-normal leading-normal tracking-normal-[-0.2px]">
//                 Total Clients
//               </p>
//             </div>

//             <div className="flex flex-col gap-1.5">
//               <p className="text-[#252525] text-[15px] font-semibold leading-[126%] tracking-[-0.3px]">
//                 2000/10000
//               </p>
//               <div className="flex gap-1.5">
//                 <p className="text-[#535359] text-[10px] font-normal leading-normal tracking-normal-[-0.2px]">
//                   Test Usage
//                 </p>
//                 <p className="text-[#308BF9] text-[10px] font-normal leading-normal tracking-normal-[-0.2px] underline cursor-pointer">
//                   Know more
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-2.5 px-5 flex flex-col gap-5">
//           <div className="flex flex-col gap-1">
//             <p className="text-[#252525] text-[34px] font-normal leading-normal tracking-[-2.04px]">
//               {monthLabel}
//             </p>
//             <p className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
//               {totalTestsRecorded} Tests Recorded
//             </p>
//           </div>

//           <div className="flex flex-col gap-2.5 pt-2.5">
//             {/* Week header */}
//             <div className="grid grid-cols-7 border-b border-[#E1E6ED] pb-2">
//               {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
//                 (dayLabel, dayIndex) => (
//                   <div
//                     key={dayLabel}
//                     className="flex items-center justify-center"
//                   >
//                     <p
//                       className={`text-[10px] font-normal tracking-[-0.2px] ${
//                         dayIndex === 6 ? "text-[#DA5747]" : "text-[#252525]"
//                       }`}
//                     >
//                       {dayLabel}
//                     </p>
//                   </div>
//                 )
//               )}
//             </div>

//             {/* Calendar body (Height fixed 500px + scrollbar visible) */}
//             <div
//               className="flex flex-col overflow-y-scroll"
//               onWheel={handleCalendarScroll}
//               style={{
//                 height: "500px", // ✅ keep 500px
//                 overscrollBehavior: "contain",
//                 overflowX: "hidden",
//                 scrollbarGutter: "stable", // ✅ keeps scrollbar space reserved (Chrome/Edge)
//               }}
//             >
//               {calendarWeeks.map((week, weekIndex) => (
//                 <div
//                   key={weekIndex}
//                   className={`grid grid-cols-7 ${
//                     weekIndex !== calendarWeeks.length - 1
//                       ? "border-b border-[#E1E6ED]"
//                       : ""
//                   }`}
//                 >
//                   {week.map((cell, dayIndex) => {
//                     if (cell.type === "blank") {
//                       return (
//                         <div
//                           key={`${weekIndex}-${dayIndex}`}
//                           className="min-h-[90px] px-2 py-2" // ✅ increased height to force overflow
//                         />
//                       );
//                     }

//                     const dayNumber = cell.day;
//                     const testsCount = testsByDay[dayNumber] ?? null;
//                     const isSunday = dayIndex === 6;

//                     return (
//                       <div
//                         key={`${weekIndex}-${dayIndex}`}
//                         className="min-h-[90px] px-2 py-2 flex flex-col items-center justify-start gap-1" // ✅ increased height to force overflow
//                       >
//                         <p
//                           className={`text-[10px] font-normal tracking-[-0.2px] ${
//                             isSunday ? "text-[#DA5747]" : "text-[#252525]"
//                           }`}
//                         >
//                           {dayNumber}
//                         </p>

//                         {testsCount ? (
//                           <div className="mt-2 flex flex-col items-center">
//                             <p
//                               className={`text-[11px] font-medium ${
//                                 isSunday ? "text-[#DA5747]" : "text-[#252525]"
//                               }`}
//                             >
//                               {testsCount}
//                             </p>
//                             <p
//                               className={`text-[10px] font-normal ${
//                                 isSunday ? "text-[#DA5747]" : "text-[#252525]"
//                               }`}
//                             >
//                               tests
//                             </p>
//                           </div>
//                         ) : (
//                           <div className="mt-2 h-[28px]" />
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               ))}
//             </div>

//             {/* Optional note */}
//             {/* <p className="text-[10px] text-[#535359]">Scroll inside calendar</p> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }









"use client";

import { useMemo, useRef, useState } from "react";

export default function Calender() {
  const today = new Date();

  const [calendarMonth, setCalendarMonth] = useState(() => ({
    year: today.getFullYear(),
    monthIndex: today.getMonth(),
  }));

  const { year: currentYear, monthIndex: currentMonthIndex } = calendarMonth;

  const monthLabel = useMemo(() => {
    const date = new Date(currentYear, currentMonthIndex, 1);
    return date.toLocaleString("en-US", { month: "short", year: "numeric" });
  }, [currentYear, currentMonthIndex]);

  const testsByDay = useMemo(
    () => ({
      1: 200,
      2: 200,
      3: 200,
      4: 200,
      5: 200,
      6: 200,
      7: 200,
      9: 200,
      11: 20012,
      14: 200,
      20: 200,
      22: 200,
      24: 1200,
      29: 14200,
      30: 1200,
      31: 14500,
    }),
    []
  );

  const daysInMonth = useMemo(
    () => new Date(currentYear, currentMonthIndex + 1, 0).getDate(),
    [currentYear, currentMonthIndex]
  );

  const firstDayOfMonth = useMemo(
    () => new Date(currentYear, currentMonthIndex, 1).getDay(),
    [currentYear, currentMonthIndex]
  );

  const mondayStartOffset = useMemo(
    () => (firstDayOfMonth + 6) % 7,
    [firstDayOfMonth]
  );

  const calendarWeeks = useMemo(() => {
    const calendarCells = [];

    for (let i = 0; i < mondayStartOffset; i++) {
      calendarCells.push({ type: "blank" });
    }

    for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
      calendarCells.push({ type: "day", day: dayNumber });
    }

    const weeks = [];
    for (let i = 0; i < calendarCells.length; i += 7) {
      weeks.push(calendarCells.slice(i, i + 7));
    }

    const lastWeek = weeks[weeks.length - 1] || [];
    while (lastWeek.length < 7) lastWeek.push({ type: "blank" });

    while (weeks.length < 6) {
      weeks.push(Array.from({ length: 7 }, () => ({ type: "blank" })));
    }

    return weeks;
  }, [mondayStartOffset, daysInMonth]);

  const totalTestsRecorded = useMemo(() => {
    return Object.values(testsByDay).reduce(
      (sum, value) => sum + (Number(value) || 0),
      0
    );
  }, [testsByDay]);

  const goToNextMonth = () => {
    setCalendarMonth((prev) => {
      const isDecember = prev.monthIndex === 11;
      return {
        year: isDecember ? prev.year + 1 : prev.year,
        monthIndex: isDecember ? 0 : prev.monthIndex + 1,
      };
    });
  };

  const goToPreviousMonth = () => {
    setCalendarMonth((prev) => {
      const isJanuary = prev.monthIndex === 0;
      return {
        year: isJanuary ? prev.year - 1 : prev.year,
        monthIndex: isJanuary ? 11 : prev.monthIndex - 1,
      };
    });
  };

  const isScrollLockedRef = useRef(false);

  const handleCalendarScroll = (event) => {
    if (isScrollLockedRef.current) return;

    const scrollDelta = event.deltaY;
    const SCROLL_THRESHOLD = 60;

    if (Math.abs(scrollDelta) < SCROLL_THRESHOLD) return;

    isScrollLockedRef.current = true;

    if (scrollDelta > 0) goToNextMonth();
    else goToPreviousMonth();

    setTimeout(() => {
      isScrollLockedRef.current = false;
    }, 350);
  };

  return (
    <>
      {/* Card */}
      <div className="w-full max-w-[400px] rounded-[15px] border border-[#E1E6ED] bg-[#F5F7FA] px-2.5 pt-2.5">
        <div className="flex flex-col gap-1 bg-[#DBDFE5] rounded-[15px]">
          <div className="flex justify-between py-5 pl-[18px] pr-14">
            <div className="flex flex-col gap-1.5">
              <p className="text-[#252525] text-[15px] font-semibold leading-[126%] tracking-[-0.3px]">
                450
              </p>
              <p className="text-[#535359] text-[10px] font-normal leading-normal tracking-normal-[-0.2px]">
                Total Clients
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <p className="text-[#252525] text-[15px] font-semibold leading-[126%] tracking-[-0.3px]">
                2000/10000
              </p>
              <div className="flex gap-1.5">
                <p className="text-[#535359] text-[10px] font-normal leading-normal tracking-normal-[-0.2px]">
                  Test Usage
                </p>
                <p className="text-[#308BF9] text-[10px] font-normal leading-normal tracking-normal-[-0.2px] underline cursor-pointer">
                  Know more
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2.5 pl-2 pr-0 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <p className="text-[#252525] text-[34px] font-normal leading-normal tracking-[-2.04px]">
              {monthLabel}
            </p>
            <p className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
              {totalTestsRecorded} Tests Recorded
            </p>
          </div>

          <div className="flex flex-col gap-2.5 pt-2.5 overflow-y-scroll custom-scrollbar">
            {/* Week header */}
            <div className="grid grid-cols-7 border-b scroll-hide border-[#E1E6ED] pb-2 hide-s">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (dayLabel, dayIndex) => (
                  <div
                    key={dayLabel}
                    className="flex items-center justify-center"
                  >
                    <p
                      className={`text-[10px] font-normal tracking-[-0.2px] ${
                        dayIndex === 6 ? "text-[#DA5747]" : "text-[#252525]"
                      }`}
                    >
                      {dayLabel}
                    </p>
                  </div>
                )
              )}
            </div>

            {/* ✅ Only change: added "custom-scrollbar" class here */}
            <div
              className="flex flex-col  f"
              onWheel={handleCalendarScroll}
              style={{
                height: "500px",
                // overscrollBehavior: "contain",
                // overflowX: "hidden",
                scrollbarGutter: "stable",
              }}
            >
              {calendarWeeks.map((week, weekIndex) => (
                <div
                  key={weekIndex}
                  className={`grid grid-cols-7 ${
                    weekIndex !== calendarWeeks.length - 1
                      ? "border-b border-[#E1E6ED]"
                      : ""
                  }`}
                >
                  {week.map((cell, dayIndex) => {
                    if (cell.type === "blank") {
                      return (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className="min-h-[90px] px-2 py-2"
                        />
                      );
                    }

                    const dayNumber = cell.day;
                    const testsCount = testsByDay[dayNumber] ?? null;
                    const isSunday = dayIndex === 6;

                    return (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className="min-h-[90px] px-2 py-2 flex flex-col items-center justify-start gap-1"
                      >
                        <p
                          className={`text-[10px] font-normal tracking-[-0.2px] ${
                            isSunday ? "text-[#DA5747]" : "text-[#252525]"
                          }`}
                        >
                          {dayNumber}
                        </p>

                        {testsCount ? (
                          <div className="mt-2 flex flex-col items-center">
                            <p
                              className={`text-[11px] font-medium ${
                                isSunday ? "text-[#DA5747]" : "text-[#252525]"
                              }`}
                            >
                              {testsCount}
                            </p>
                            <p
                              className={`text-[10px] font-normal ${
                                isSunday ? "text-[#DA5747]" : "text-[#252525]"
                              }`}
                            >
                              tests
                            </p>
                          </div>
                        ) : (
                          <div className="mt-2 h-[28px]" />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
