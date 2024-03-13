"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mt-2">
      <div className="fixed top-0 right-0 left-0 flex justify-between items-center bg-[#0D0D0D] z-20 border-b border-[#434343] p-4 px-5 pb-3 md:p-6 md:px-14 md:pb-4 mx-auto">
        {/* <h1 className="text-2xl text-[#C3C3C3] font-bold">evoting platform</h1> */}
        <Image
          src="/evotingLogo.svg"
          width={180}
          height={35}
          alt="Logo"
          className="w-[160px] md:w-[190px]"
        />
        <div className="flex items-center">
          <button className=" text-white border-[#2B2B2B] border-2 rounded-full md:px-5 md:py-3">
            Connect wallet
          </button>
          <div className="relative">
            <button
              className=" p-1 ml-4 md:ml-5 md:p-2 border-[1.5px] border-[#2B2B2B] md:border-2 rounded-full"
              onClick={handleDropdownToggle}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10ZM19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10Z"
                  fill="#808080"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className=" absolute right-0 top-11 md:top-14 bg-[#0D0D0D] border-2 border-[#434343] rounded-2xl w-max px-2 py-4 md:px-2 md:py-4 text-white space-y7 md:space-y-2">
                <Link
                  href={"/create"}
                  className="flex items-center hover:bg-[#1C1C1C] hover:rounded-2xl px-2 py-3 md:px-5 md:py-3"
                >
                  <span className="mr-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.00002 1.33334C9.79252 1.33334 11.2546 2.74821 11.3303 4.52208L11.3334 4.66668V6.66668C12.4379 6.66668 13.3334 7.56211 13.3334 8.66668V12.6667C13.3334 13.7712 12.4379 14.6667 11.3334 14.6667H4.66669C3.56212 14.6667 2.66669 13.7712 2.66669 12.6667V8.66668C2.66669 7.56211 3.56212 6.66668 4.66669 6.66668V4.66668C4.66669 2.82573 6.15907 1.33334 8.00002 1.33334ZM11.3334 8.00001H4.66669C4.2985 8.00001 4.00002 8.29849 4.00002 8.66668V12.6667C4.00002 13.0349 4.2985 13.3333 4.66669 13.3333H11.3334C11.7015 13.3333 12 13.0349 12 12.6667V8.66668C12 8.29849 11.7015 8.00001 11.3334 8.00001ZM8.11754 2.67007L8.00002 2.66668C6.9349 2.66668 6.06425 3.49929 6.00342 4.54916L6.00002 4.66668V6.66668H10V4.66668C10 3.60156 9.16741 2.7309 8.11754 2.67007L8.00002 2.66668L8.11754 2.67007Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Create a private proposal
                </Link>
                <Link
                  href={"/create"}
                  className="flex items-center hover:bg-[#1C1C1C] hover:rounded-2xl px-2 py-3 md:px-5 md:py-3"
                >
                  {" "}
                  <span className=" mr-2">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.99998 1.83333C11.6819 1.83333 14.6666 4.8181 14.6666 8.5C14.6666 12.1819 11.6819 15.1667 7.99998 15.1667C4.31808 15.1667 1.33331 12.1819 1.33331 8.5C1.33331 4.8181 4.31808 1.83333 7.99998 1.83333ZM9.98161 9.16718H6.01835C6.09231 10.5028 6.38607 11.7188 6.83553 12.6178C7.25412 13.4549 7.70142 13.8333 7.99998 13.8333C8.29854 13.8333 8.74584 13.4549 9.16443 12.6178C9.61389 11.7188 9.90765 10.5028 9.98161 9.16718ZM13.292 9.16732L11.3168 9.1675C11.2362 10.7901 10.8646 12.2415 10.308 13.3102C11.9067 12.5411 13.0634 10.9983 13.292 9.16732ZM4.68315 9.1675L2.70799 9.16732C2.93654 10.9983 4.09326 12.541 5.69241 13.3096C5.17021 12.3082 4.81098 10.97 4.70165 9.46968L4.68315 9.1675ZM5.69201 3.68984L5.67457 3.69896C4.0845 4.47055 2.93547 6.00879 2.70792 7.83321L4.68311 7.83316C4.7637 6.21028 5.13527 4.75862 5.69201 3.68984ZM7.99998 3.16666L7.94579 3.17061C7.6489 3.21277 7.2295 3.59429 6.83553 4.38223C6.386 5.2813 6.09221 6.49755 6.01831 7.83347H9.98165C9.90775 6.49755 9.61396 5.2813 9.16443 4.38223C8.74584 3.54505 8.29854 3.16666 7.99998 3.16666ZM10.3076 3.69035L10.3226 3.71815C10.8713 4.7843 11.237 6.22485 11.3169 7.83362L13.2921 7.83334C13.0637 6.00204 11.9069 4.45908 10.3076 3.69035Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Create a public proposal
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
