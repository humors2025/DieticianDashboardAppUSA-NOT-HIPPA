"use client";
import { useState } from "react";
import Image from "next/image";
import { UserProfile } from "./user-profile";

export default function ClientLists() {
  // 👇 First client active by default
  const [activeIndex, setActiveIndex] = useState(0);

  const clients = [
    {
      name: "Sagar Hosur",
      score: "82%",
      status: "Optimal",
      lastTested: "Last tested 23 mins ago",
      goal: "Weight Loss",
      goalBg: "#E9F3FF",
      goalText: "#006FFF",
      tests: "32 tests taken",
    },
    {
      name: "Emily Blunt",
      score: "82%",
      status: "Optimal",
      lastTested: "Last tested 23 mins ago",
      goal: "Muscle Gain",
      goalBg: "#FFFAF0",
      goalText: "#F6AD0B",
      tests: "32 tests taken",
    },
    {
      name: "Poornesh",
      score: "82%",
      status: "Optimal",
      lastTested: "Last tested 23 mins ago",
      goal: "Weight Gain",
      goalBg: "#EAFFEF",
      goalText: "#3FAF58",
      tests: "32 tests taken",
    },
    {
      name: "Manorajan",
      score: "82%",
      status: "Optimal",
      lastTested: "Last tested 23 mins ago",
      goal: "Weight Gain",
      goalBg: "#EAFFEF",
      goalText: "#3FAF58",
      tests: "32 tests taken",
    },
    {
      name: "Respyr",
      score: "92%",
      status: "Optimal",
      lastTested: "Last tested 23 mins ago",
      goal: "Weight Gain",
      goalBg: "#EAFFEF",
      goalText: "#3FAF58",
      tests: "32 tests taken",
    },
    {
      name: "Respyr Humors",
      score: "82%",
      status: "Optimal",
      lastTested: "Last tested 23 mins ago",
      goal: "Weight Loss",
      goalBg: "#E9F3FF",
      goalText: "#006FFF",
      tests: "32 tests taken",
    },
  ];

  return (
    <>
      <div className="bg-white rounded-[15px] px-[5px]">
        <div className="flex flex-col gap-6 mb-[22px]">
          <div className="flex gap-1.5 items-center pt-[22px] pl-[15px]">
            <Image
              src="/icons/Frame 383.svg"
              alt="Frame 383"
              width={32}
              height={32}
              className="cursor-pointer"
            />
            <p className="text-[#252525] text-[12px] font-semibold leading-[126%] tracking-[-0.24px]">
              Go to Dashboard
            </p>
          </div>

          <p className="pl-5 text-[#252525] text-[25px] font-semibold leading-normal tracking-[-1px]">
            Clients (340)
          </p>
        </div>

        <UserProfile showOnlySearch={true} />

        <div className="flex gap-2.5 ml-[15px] my-[15px]">
          <div className="bg-[#252525] rounded-[20px] py-[11px] px-[30px] cursor-pointer">
            <p className="text-[#FFFFFF] text-[12px] font-normal leading-normal tracking-[-0.24px]">
              All (300)
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E1E6ED] rounded-[20px] py-[11px] px-[30px] cursor-pointer">
            <p className="text-[#A1A1A1] text-[12px] font-normal leading-normal tracking-[-0.24px]">
              Weight Loss
            </p>
          </div>
        </div>

        {/* 👇 Scrollable Clients List */}
        <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
          {clients.map((client, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="flex flex-col gap-2.5 pl-5 py-[15px] pr-[15px] border-b border-[#E1E6ED] cursor-pointer"
              style={{
                backgroundColor:
                  activeIndex === index ? "#F0F6FD" : "#FFFFFF",
              }}
            >
              <div className="flex gap-1.5 items-center">
                <div>
                  <Image
                    src="/icons/Ellipse 668.svg"
                    width={40}
                    height={40}
                    alt="Ellipse 668.svg"
                    className="w-10 h-10"
                  />
                </div>

                <div>
                  <p className="text-[#252525] text-[15px] font-semibold leading-[126%] tracking-[-0.3px]">
                    {client.name}
                  </p>

                  <div className="flex items-center">
                    <p className="text-[#535359] text-[12px] font-semibold">
                      {client.score}
                    </p>

                    <div className="mx-2.5 border-r-2 border-[#D9D9D9]"></div>

                    <p className="text-[#3FAF58] text-[12px] font-semibold">
                      {client.status}
                    </p>

                    <div className="mx-1.5">
                      <Image
                        src="/icons/Ellipse 765.svg"
                        width={3}
                        height={3}
                        alt="Ellipse 765.svg"
                      />
                    </div>

                    <p className="text-[#535359] text-[10px] whitespace-nowrap">
                      {client.lastTested}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div
                  className="px-2.5 py-2 rounded-[5px]"
                  style={{ backgroundColor: client.goalBg }}
                >
                  <p
                    className="text-[10px] font-semibold"
                    style={{ color: client.goalText }}
                  >
                    {client.goal}
                  </p>
                </div>

                <p className="text-[#535359] text-[10px]">
                  {client.tests}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}