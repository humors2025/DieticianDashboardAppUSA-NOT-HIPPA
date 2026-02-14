"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { UserPlus } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { cookieManager } from "../lib/cookies";
import PendingRequest from "./modal/pending-popup";
import PendingPopUp from "./modal/pending-popup";

export const UserProfile = ({
  searchQuery = "",
  onSearchChange = () => { },
  onSortChange = () => { },
}) => {
  const pathname = usePathname();
  // const isClientPage =
  //   pathname?.startsWith("/client") || pathname?.startsWith("/clients");

const isClientPage =
  pathname?.startsWith("/client") ||
  pathname?.startsWith("/clients") ||
  pathname?.startsWith("/partners/client") ||
  pathname?.startsWith("/partners/clients");


  const isMessagesPage = pathname?.startsWith("/messages");

  const [dieticianName, setDieticianName] = useState('Dietician');
  const [currentDate, setCurrentDate] = useState('-');

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Recently Added');
  const [pendingRequest, setPendingRequest] = useState(false);

  const [dieticianId, setDieticianId] = useState(null);


  const options = [
    'Recently Added',
    'A to Z',
    'Z to A',
    'by Age'
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSortChange(option);
  };


  useEffect(() => {
  const dieticianData = cookieManager.getJSON('dietician');

  setDieticianName(dieticianData?.name || 'Dietician');
  setDieticianId(dieticianData?.dietician_id || null); // ✅ ADD THIS

  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
  setCurrentDate(date);
}, []);



  useEffect(() => {

    const dieticianData = cookieManager.getJSON('dietician');
    setDieticianName(dieticianData?.name || 'Dietician');


    const date = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
    setCurrentDate(date);
  }, []);

  const handlePendingRequest = () => {
    setPendingRequest(true);
  }


  return (
    <>
      <div
        // className={`flex w-full flex-wrap items-center justify-between gap-10 ${isClientPage || isMessagesPage ? "" : "mt-[130px] mb-[102px]"
        //   }`}

          className={`flex w-full flex-wrap items-center justify-between gap-10 ${isClientPage || isMessagesPage ? "" : "mt-[50px] mb-[50px]"
          }`}
      >
        {/* LEFT: Greeting OR Search/Sort */}
        <div className="flex-1">
          {isClientPage ? (
            <div className="flex gap-[22px] mt-[46px] mb-[32px]">
              <div className="flex gap-2.5 pl-2.5 pr-2.5 py-[5px] items-center border border-[#D9D9D9] rounded-[10px] bg-[#FFFFFF] w-[300px]">
                <Image
                  src="/icons/hugeicons_search-02.svg"
                  alt="hugeicons_search"
                  width={20}
                  height={20}
                />
                <input
                  type="text"
                  placeholder="Search...."
                  className="flex-1 text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px] outline-none bg-transparent"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>

              {/* Sort */}
              <div className="w-fit flex justify-center relative">
                <div className="rounded-l-[10px] border border-[#D9D9D9] pl-4 py-2 pr-2.5 bg-[#F0F0F0] text-center">
                  <p className="text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-normal">
                    Sort By
                  </p>
                </div>

                {/* Trigger */}
                <div
                  className="flex rounded-r-[10px] border border-[#D9D9D9] gap-[37px] text-center items-center pl-4 py-2 pr-2.5 bg-white relative cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <p className="text-[#252525] text-[12px] tracking-[-0.24px] leading-[110%] font-normal flex items-center gap-1">
                    {selectedOption === "By Age Asc" ? (
                      <>
                        Age Acending <IoIosArrowDown className="rotate-180 text-[14px]" />
                      </>
                    ) : selectedOption === "By Age Desc" ? (
                      <>
                        Age Decending <IoIosArrowDown className="text-[14px]" />
                      </>
                    ) : (
                      selectedOption
                    )}

                  </p>

                  <IoIosArrowDown
                    className={`text-[#A1A1A1] transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </div>

                {/* Menu */}
                {isOpen && (
                  <div className="absolute top-full right-0 mt-1 w-full bg-white border border-[#D9D9D9] rounded-[10px] shadow-lg z-10">
                    {[
                      "Recently Added",
                      "A to Z",
                      "Z to A",
                      "By Age Asc",
                      "By Age Desc",
                    ].map((option, index) => (
                      <div
                        key={option}
                        className={`px-4 py-2 text-[12px] tracking-[-0.24px] leading-[110%] font-normal cursor-pointer hover:bg-gray-50 ${selectedOption === option ? "text-[#308BF9] bg-blue-50" : "text-[#252525]"
                          } ${index === 0
                            ? "rounded-t-[10px]"
                            : index === 4
                              ? "rounded-b-[10px]"
                              : ""
                          }`}
                        onClick={() => handleOptionSelect(option)}
                      >
                        <div className="flex items-center gap-1">
                          {option === "By Age Asc" ? (
                            <>
                              Age Acending <IoIosArrowDown className="rotate-180 text-[14px]" />
                            </>
                          ) : option === "By Age Desc" ? (
                            <>
                              Age Decending <IoIosArrowDown className="text-[14px]" />
                            </>
                          ) : (
                            option
                          )}

                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>


            </div>
          ) : isMessagesPage ? (
            <div className="flex gap-[22px] mt-[46px] mb-[12px] mx-[10px]">
              <div className="flex gap-[15px] pl-[14px] pr-[14px] py-[10px] items-center border border-[#D9D9D9] rounded-3xl bg-[#F0F0F0] w-[300px]">
                <Image
                  src="/icons/hugeicons_search-02.svg"
                  alt="hugeicons_search"
                  width={20}
                  height={20}
                />
                <input
                  type="text"
                  placeholder="Search by name…"
                  className="flex-1 bg-transparent outline-none text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-[15px]">
              <p className="text-[#252525] text-[12px] font-normal leading-[110%] tracking-[-0.24px]">
                {currentDate}
              </p>
              <p className="text-[#252525] text-[34px] font-normal leading-none tracking-[-2.04px]">
                Hello, Dt. {dieticianName}
              </p>
            </div>
          )}
        </div>

        {/* RIGHT: Actions (hide on messages page) */}
       {/* {!isMessagesPage && (
        <div className="flex flex-wrap gap-[15px] shrink-0">
          <div className="flex gap-1.5 px-[20px] py-[15px] items-center bg-[#308BF9] rounded-[15px] cursor-pointer"
          onClick={handlePendingRequest}
          >
            <UserPlus size={20} className="text-white" />
            <p className="text-[12px] leading-[100%] font-semibold text-white space-x-0">
              Pending Request(6)
            </p>
          </div>

          <div className="flex gap-1.5 px-5 py-[15px] items-center bg-white rounded-[15px] cursor-alias">
            <Image
              src="/icons/hugeicons_file-export.svg"
              alt="add-icons"
              width={20}
              height={20}
            />
            <p className="text-[12px] font-semibold text-black space-x-0">
              Export Data
            </p>
          </div>
        </div>
      )}  */}
      </div>

      <PendingPopUp
        open={pendingRequest}
        onClose={() => setPendingRequest(false)}
      />
    </>
  );
};
