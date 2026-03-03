"use client"
import { useState } from "react";
import Image from "next/image";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function ClientDetails() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [startIndex, setStartIndex] = useState(0); // Track the starting index of visible items

    const dateData = [
        { date: "04 Jul, 2025", score: "82%", status: "Optimal" },
        { date: "05 Jul, 2025", score: "78%", status: "Moderate" },
        { date: "06 Jul, 2025", score: "69%", status: "Focus" },
        { date: "07 Jul, 2025", score: "85%", status: "Optimal" },
        { date: "08 Jul, 2025", score: "80%", status: "Optimal" },
        { date: "09 Jul, 2025", score: "76%", status: "Moderate" },
        { date: "10 Jul, 2025", score: "90%", status: "Optimal" },
        { date: "11 Jul, 2025", score: "72%", status: "Focus" },
        { date: "12 Jul, 2025", score: "88%", status: "Optimal" },
        { date: "13 Jul, 2025", score: "79%", status: "Moderate" },
    ];

    const ITEMS_TO_SHOW = 4; // Number of items to display at once

    // 🔹 Go Back
    const handleBack = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
            // Update active index if it goes out of view
            if (activeIndex >= startIndex && activeIndex < startIndex + ITEMS_TO_SHOW) {
                // Active index is in current view, keep it
            } else {
                setActiveIndex(startIndex - 1);
            }
        }
    };

    // 🔹 Go Forward
    const handleForward = () => {
        if (startIndex + ITEMS_TO_SHOW < dateData.length) {
            setStartIndex(startIndex + 1);
            // Update active index if it goes out of view
            if (activeIndex >= startIndex + 1 && activeIndex < startIndex + 1 + ITEMS_TO_SHOW) {
                // Active index is in new view, keep it
            } else {
                setActiveIndex(startIndex + 1);
            }
        }
    };

    // Get visible items based on startIndex
    const visibleItems = dateData.slice(startIndex, startIndex + ITEMS_TO_SHOW);

    return (
        <>
            <div className="w-full bg-white px-[15px] pt-[23px] rounded-[15px]">

                {/* Header Section */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-[15px]">

                        <div className="bg-[#F0F0F0] rounded-full p-2 w-12 h-12 flex items-center justify-center">
                            <Image
                                src="/icons/hugeicons_user-circle-02.svg"
                                alt="user"
                                width={32}
                                height={32}
                            />
                        </div>

                        <div className="flex flex-col gap-3">

                            <div className="flex gap-3 items-center">
                                <p className="text-[#252525] text-[20px] font-semibold">
                                    Sagar Hosur
                                </p>

                                <div className="flex items-center justify-center px-2.5 py-2 rounded-[5px] bg-[#E9F3FF] text-[#006FFF] text-[10px] font-semibold">
                                    Weight Loss
                                </div>

                                <p className="text-[#535359] text-[12px]">
                                    32 tests taken
                                </p>
                            </div>

                            <div className="flex gap-1.5 items-center">
                                <p className="text-[#535359] text-[12px]">
                                    28 years, Male
                                </p>

                                <div className="mx-1.5">
                                    <Image
                                        src="/icons/Ellipse 765.svg"
                                        width={3}
                                        height={3}
                                        alt="dot"
                                    />
                                </div>

                                <p className="text-[#535359] text-[12px]">
                                    Joined on Aug 2024
                                </p>
                            </div>

                        </div>
                    </div>




                    <div className="flex gap-[30px]">
                        <Image
                            src="/icons/hugeicons_file-export.svg"
                            width={26}
                            height={26}
                            alt="export"
                            className="cursor-pointer"
                        />

                        <Image
                            src="/icons/right button.svg"
                            width={26}
                            height={26}
                            alt="right"
                            className="cursor-pointer"
                        />
                    </div>
                </div>




                {/* Date Section */}
                <div className="flex items-center gap-[26px] border-t border-b border-[#E1E6ED] pl-[38px] py-[5px] mt-[20px]">

                    <p className="text-[#535359] text-[15px] font-semibold whitespace-nowrap">
                        Select a date
                    </p>

                    <div className="flex gap-3 items-center w-full">

                        {/* 🔹 Back Arrow */}
                        <IoChevronBackOutline
                            onClick={handleBack}
                            className={`text-[#252525] w-6 h-6 cursor-pointer ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        />

                        <div className="flex gap-[5px] items-center overflow-x-auto no-scrollbar">

                            {visibleItems.map((item, index) => {
                                const actualIndex = startIndex + index;
                                return (
                                    <div
                                        key={actualIndex}
                                        onClick={() => setActiveIndex(actualIndex)}
                                        className={`flex flex-col gap-[5px] rounded-[8px] pl-[15px] pt-[15px] pr-[15px] pb-[15px] cursor-pointer min-w-[120px]
                                        ${activeIndex === actualIndex ? "bg-[#308BF9]" : ""}`}
                                    >
                                        <p className={`${activeIndex === actualIndex ? "text-white" : "text-[#535359]"} text-[12px] font-semibold`}>
                                            {item.date}
                                        </p>

                                        <div className="flex items-center">
                                            <p className={`${activeIndex === actualIndex ? "text-white" : "text-[#535359]"} text-[12px] font-semibold`}>
                                                {item.score}
                                            </p>

                                            <div className={`mx-2.5 border-r-2 h-[13px] ${activeIndex === actualIndex ? "border-white" : "border-[#A1A1A1]"}`}></div>

                                            <p className={`${activeIndex === actualIndex ? "text-white" : "text-[#535359]"} text-[12px] font-semibold`}>
                                                {item.status}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                        {/* 🔹 Forward Arrow */}
                        <div className="flex justify-end">
                            <IoChevronForwardOutline
                                onClick={handleForward}
                                className={`text-[#252525] w-6 h-6 cursor-pointer ${startIndex + ITEMS_TO_SHOW >= dateData.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                            />
                        </div>

                    </div>
                </div>


                <div className="flex">
                    <div className="flex items-center bg-[#252525] rounded-[6px] py-[11px] px-[31px] cursor-pointer ">
                        <p className="text-[#FFFFFF] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">Test Analysis</p>
                    </div>


                    <div className="flex items-center gap-2.5 bg-[#F5F7FA] rounded-[6px] py-[11px] px-[31px] cursor-pointer ">
                        <p className="text-[#535359] text-[12px] font-semibold leading-[110%] tracking-[-0.24px]">Diet Analysis</p>
                        <Image
                            src="/icons/hugeicons_information-circle1.svg"
                            alt="hugeicons_information-circle1.svg"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>

            </div>
        </>
    )
}