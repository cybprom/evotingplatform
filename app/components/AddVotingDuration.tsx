"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

interface Option {
  id: number;
  value: string;
  saved: boolean;
}
interface votingDurationProps {
  onPrev: () => void;
  onSubmit: () => void;
  formData: {
    title: string;
    description: string;
    type: string;
    options: Option[];
    votesNo: number;
  };
  onNext: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function AddVotingDuration({
  onNext,
  onPrev,
  onSubmit,
  formData,
  handleChange,
  handleSelectOption,
}: votingDurationProps) {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    onNext();
  };

  return (
    <div>
      <div className=" mt-20 text-white container p-4 px5 pb-3 space-y-9 md:p-6 md:px10 md:pb-4 mx-auto mb-10">
        <button
          onClick={() => router.push("/")}
          className=" -ml-3 text-lg text-[#808080] -mb-5"
        >
          <span className=" text-xl">←</span> Back
        </button>
        <div className="flex items-center px2 py3 md:px5 md:py3">
          <span className=" mr-2">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.99998 1.83333C11.6819 1.83333 14.6666 4.8181 14.6666 8.5C14.6666 12.1819 11.6819 15.1667 7.99998 15.1667C4.31808 15.1667 1.33331 12.1819 1.33331 8.5C1.33331 4.8181 4.31808 1.83333 7.99998 1.83333ZM9.98161 9.16718H6.01835C6.09231 10.5028 6.38607 11.7188 6.83553 12.6178C7.25412 13.4549 7.70142 13.8333 7.99998 13.8333C8.29854 13.8333 8.74584 13.4549 9.16443 12.6178C9.61389 11.7188 9.90765 10.5028 9.98161 9.16718ZM13.292 9.16732L11.3168 9.1675C11.2362 10.7901 10.8646 12.2415 10.308 13.3102C11.9067 12.5411 13.0634 10.9983 13.292 9.16732ZM4.68315 9.1675L2.70799 9.16732C2.93654 10.9983 4.09326 12.541 5.69241 13.3096C5.17021 12.3082 4.81098 10.97 4.70165 9.46968L4.68315 9.1675ZM5.69201 3.68984L5.67457 3.69896C4.0845 4.47055 2.93547 6.00879 2.70792 7.83321L4.68311 7.83316C4.7637 6.21028 5.13527 4.75862 5.69201 3.68984ZM7.99998 3.16666L7.94579 3.17061C7.6489 3.21277 7.2295 3.59429 6.83553 4.38223C6.386 5.2813 6.09221 6.49755 6.01831 7.83347H9.98165C9.90775 6.49755 9.61396 5.2813 9.16443 4.38223C8.74584 3.54505 8.29854 3.16666 7.99998 3.16666ZM10.3076 3.69035L10.3226 3.71815C10.8713 4.7843 11.237 6.22485 11.3169 7.83362L13.2921 7.83334C13.0637 6.00204 11.9069 4.45908 10.3076 3.69035Z"
                fill="white"
              />
            </svg>
          </span>
          Create a public proposal
        </div>
        {/* Add option */}
        <div className="border border-[#434343] rounded-2xl flex flex-col itemscenter justifycenter container mx-auto md:w-[40%] pt-12 pb-6 px-5">
          <form onSubmit={handleSubmit} className=" space-y-5">
            <div className="flex flex-col">
              <label htmlFor="duration">Duration</label>
              <select
                onChange={handleSelectOption}
                name="duration"
                id="duration"
                className="border border-[#434343] bg-[#131313] outline-none p-3 rounded-lg mt-3"
              >
                <option value="24 hours">24 hours</option>
                <option value="One week">One week</option>
                <option value="One month">One month</option>
                <option value="One year">One year</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="votesNo">Maximum number of votes</label>
              <input
                type="number"
                placeholder="0"
                className="border border-[#434343] bg-[#131313] outline-none p-3 rounded-lg mt-3"
                id="votesNo"
                name="votesNo"
                value={formData.votesNo}
                onChange={handleChange}
              />
            </div>
          </form>
          {/* preview button */}
          <div className="p-4 -mb-5 mt-12    flex justify-between">
            {/* Prev button */}
            {/* <button
              // className={`text-center py-4 px-10 ${
              //   isButtonActive
              //     ? " bg-[#4463D1] text-white shadow-white-inset"
              //     : "bg-[#1A1A1A] text-[#4A4A4A] "
              // }  rounded-3xl flex justify-center shadow-white-inset transition-colors mlauto`}
              onClick={onPrev}
              className="wfull text-center py-4 px-10 rounded-3xl flex justify-center shadow-white-inset transition-colors bg-[#1A1A1A]"
              // style={{ boxShadow: "0px 3px 4px 0px #66666640 inset" }}
            >
              Prev
            </button> */}
            <button
              // className={`text-center py-4 px-10 ${
              //   isButtonActive
              //     ? " bg-[#4463D1] text-white shadow-white-inset"
              //     : "bg-[#1A1A1A] text-[#4A4A4A] "
              // }  rounded-3xl flex justify-center shadow-white-inset transition-colors ml-auto`}
              onClick={onSubmit}
              className="wfull text-center py-4 px-8 rounded-3xl flex justify-center shadowwhite-inset transition-colors text-white bg-[#4463D1] ml-auto"
              // style={{ boxShadow: "0px 3px 4px 0px #66666640 inset" }}
            >
              preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
