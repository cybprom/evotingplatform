"use client";
import VoteButton from "@/app/components/VoteButton";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

interface Option {
  id: number;
  value: string;
  saved: boolean;
}
interface previewProps {
  onPrev: () => void;
  onSubmit: () => void;
  formData: {
    title: string;
    description: string;
    type: string;
    options: Option[];
    votesNo: number;
    imgLink: string;
  };
}

export default function Preview({ onPrev, onSubmit, formData }: previewProps) {
  const router = useRouter();

  const [voteWidth, setVoteWidth] = useState<number>(37);
  const totalVotes = 270;

  const [activeButton, setActiveButton] = useState(0);

  const [eligible, setEligible] = useState(true);

  const widthVar = (voteWidth / totalVotes) * 100;

  const style = {
    width: `${widthVar}%`,
  };
  return (
    <div className=" mt-24 text-white container p-4 px5 pb-3 space-y-5 md:p-6 md:px10 md:pb-4 mx-auto">
      <button
        onClick={() => router.push("/")}
        className=" -ml-3 text-lg text-[#808080]"
      >
        <span className=" text-xl">←</span> Back
      </button>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Preview</h1>
        <button
          // className={`text-center py-4 px-10 ${
          //   isButtonActive
          //     ? " bg-[#4463D1] text-white shadow-white-inset"
          //     : "bg-[#1A1A1A] text-[#4A4A4A] "
          // }  rounded-3xl flex justify-center shadow-white-inset transition-colors ml-auto`}
          type="button"
          onClick={onSubmit}
          className="wfull text-center py-[10px] md:py-3 px-10 rounded-3xl flex justify-center shadowwhite-inset transition-colors text-white bg-[#4463D1] ml-auto"
          // style={{ boxShadow: "0px 3px 4px 0px #66666640 inset" }}
        >
          Create
        </button>
      </div>

      {/* Container */}
      <div className="flex flex-col gap-10 p4 md:p-6 md:px-14 mx-auto">
        {/* First part */}
        <div className="flex items-start flex-col md:flex-row md:justify-between gap-10 md:gap-16">
          {/* Left content */}
          <div className=" bg-[#1F1E1E] rounded-2xl p-6 w-full md:w-[58%] w7/12 space-y-5 md:space-y-8">
            <div className="flex justify-between">
              <div className="flex items-center">
                {/* <div>
                  <Image
                    src="/classelection.png"
                    width={32}
                    height={32}
                    alt="election-logo"
                  />
                </div> */}
                {/* ///////////////// */}
                <div
                  className="w-10 h-10 rounded-full overflow-hidden shadow-lg bg-center bg-cover cursor-pointer"
                  style={{ backgroundImage: `url(${formData.imgLink})` }}
                ></div>
                {/* ///////////////// */}
                <div className="ml-[12px]">
                  {/* <h3>{proposal.name}</h3> */}
                  <h3>{formData.title}</h3>
                </div>
              </div>

              <div
                // className={`${
                //   proposal.status === "Active"
                //     ? "text-[#65D990]"
                //     : "text-[#D96565]"
                // } w-fit px-4 py-1.5 rounded-3xl bg-[#dcfce71d] `}
                className="text-[#65D990] w-fit px-4 py-1.5 rounded-3xl bg-[#dcfce71d] self-start"
              >
                Active
              </div>
            </div>

            {/* About */}
            <div className="mt5">
              <h2 className=" text-[#808080] mb-3">Description</h2>
              <p className=" text-sm font-normal break-words">
                {/* The End SARS is a protest currently going on in Nigeria to say
                NO to police burtality in the country. To enable a smooth and
                productive protests, Funds are needed and Crypto is the only way
                funds can be gotten without the government freezing the account
                of protest stakeholders. */}
                {formData.description}
              </p>
            </div>

            {/* Eligibilty Container */}
            <div className=" bg-[#383232] rounded-2xl p-4">
              {eligible ? (
                <div className="flex items-center text-[#65D990]">
                  <span className="mr-3">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.62577 1.33337C12.3077 1.33337 15.2924 4.31814 15.2924 8.00004C15.2924 11.6819 12.3077 14.6667 8.62577 14.6667C4.94387 14.6667 1.95911 11.6819 1.95911 8.00004C1.95911 4.31814 4.94387 1.33337 8.62577 1.33337ZM10.821 5.52864L7.29244 9.05723L6.43051 8.1953C6.17016 7.93495 5.74805 7.93495 5.4877 8.1953C5.22735 8.45565 5.22735 8.87776 5.4877 9.13811L6.82103 10.4714C7.08138 10.7318 7.50349 10.7318 7.76384 10.4714L11.7638 6.47145C12.0242 6.2111 12.0242 5.78899 11.7638 5.52864C11.5035 5.26829 11.0814 5.26829 10.821 5.52864Z"
                        fill="#65D990"
                      />
                    </svg>
                  </span>
                  You are eligible to vote in this private proposal.
                </div>
              ) : (
                <div className="flex flex-col text-[#D96565]">
                  <div className="flex">
                    <span className="mt-1 mr-3">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.62582 1.33337C12.3077 1.33337 15.2925 4.31814 15.2925 8.00004C15.2925 11.6819 12.3077 14.6667 8.62582 14.6667C4.94392 14.6667 1.95915 11.6819 1.95915 8.00004C1.95915 4.31814 4.94392 1.33337 8.62582 1.33337ZM7.95915 10.6667H9.29249V12H7.95915V10.6667ZM8.62582 4.00004C8.99401 4.00004 9.29249 4.29852 9.29249 4.66671V8.66671C9.29249 9.0349 8.99401 9.33337 8.62582 9.33337C8.25763 9.33337 7.95915 9.0349 7.95915 8.66671V4.66671C7.95915 4.29852 8.25763 4.00004 8.62582 4.00004Z"
                          fill="#D96565"
                        />
                      </svg>
                    </span>
                    You are not eligible to vote in this proposal, make sure you
                    meet the criteria for eligibility below.
                  </div>
                  <ul className=" list-disc p-4">
                    <li>Must hold $CSE token</li>
                  </ul>
                </div>
              )}
            </div>

            {/*  Type and number of people that voted */}
            <div className="flex justify-between items-center">
              {/* People who voted */}
              <div className="flex items-center">
                {/* <div className="flex">
                  <span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="6"
                        cy="6"
                        r="6"
                        fill="url(#paint0_radial_270_3056)"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_270_3056"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(7.3125 5.0625) rotate(119.578) scale(7.97702)"
                        >
                          <stop stopColor="#F0F0F0" />
                          <stop offset="0.5625" stopColor="#506FDD" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </span>
                </div> */}
                {/* <span className="ml-3 text-[#808080]">
                  +176 people have voted
                </span> */}
              </div>

              {/* Private / Public */}
              <div className=" flex items-center self-start border border-[#808080] rounded-3xl py-[3px] px-[16px]">
                Public
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className=" border border-[#2B2B2B] rounded-2xl h[656px] w[521px] w-full md:w-[38%]">
            <h1 className="p-6 font-semibold">Options</h1>
            <div className="w-full h-[1px] bg-[#2B2B2B]"></div>
            {/* Click to vote */}
            <div className="mt-3">
              <div className="wfull p-4 space-y-5">
                {/* {formData.options.map(() =>)} */}
                {/* Check this, there's a bug here ... the id */}
                {formData.options.map((option, id) => (
                  <VoteButton
                    id={id + 1}
                    key={id}
                    setActiveButton={setActiveButton}
                    activeButton={activeButton}
                  >
                    {/* Ige Adedamola{" "} */}
                    {option.value}
                  </VoteButton>
                ))}
                {/* <VoteButton
                  id={1}
                  setActiveButton={setActiveButton}
                  activeButton={activeButton}
                >
                  Ige Adedamola{" "}
                  
                </VoteButton>
                <VoteButton
                  id={2}
                  setActiveButton={setActiveButton}
                  activeButton={activeButton}
                >
                  Olaniyan Blessing{" "}
                </VoteButton>
                <VoteButton
                  id={3}
                  setActiveButton={setActiveButton}
                  activeButton={activeButton}
                >
                  Idowu Liberty{" "}
                </VoteButton>
                <VoteButton
                  id={4}
                  setActiveButton={setActiveButton}
                  activeButton={activeButton}
                >
                  Oladipupo Michael{" "}
                </VoteButton> */}
              </div>
              {/* vote button */}
              {/* <div className="p-4 mb-5">
                <button
                  className={`w-full text-center py-3 px-10 ${
                    activeButton ? "bg-[#4463D1]" : "bg-[#1A1A1A]"
                  }  rounded-3xl flex justify-center shadow-whiteinset transition-colors`}
                  style={{ boxShadow: "0px 3px 4px 0px #FFFFFF40 inset" }}
                >
                  Vote
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
