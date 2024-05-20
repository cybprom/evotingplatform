import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ethers } from "ethers";
import voteContract from "@/ethereum/vote";
import proposal from "@/proposal.json";

interface ProposalProps {
  _id: number;
  creator: string;
  name: string;
  type: string;
  description: string;
  status: string;
  votes: number;
  date: string; // ISO 8601 date string or any date string format
  options: string[];
  amenities: string[];
  rates: {
    weekly: number;
    monthly: number;
  };
  seller_info: {
    name: string;
    email: string;
    phone: string;
  };
  images: string[];
  is_featured: boolean;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
}

interface PopularProposalProps {
  results: ProposalProps[];
}

export default function PopularProposal({ results }: PopularProposalProps) {
  return (
    <div>
      {/* MOBILE */}

      {results.length > 0 ? (
        results.map((proposal, index) => (
          <Link
            key={index}
            href={`/proposal/${proposal._id}`}
            className="h-[187px] flex flex-col justify-between bg-[#131313] rounded-lg py-6 px-3 mb-7 gap8 text-white md:hidden"
          >
            <div className="flex justify-between">
              <div className="flex">
                <div>
                  <Image
                    src="/classelection.png"
                    width={32}
                    height={32}
                    alt="election-logo"
                  />
                </div>
                <div className="ml-[14px]">
                  <h3>{proposal.name}</h3>
                  <p className="mt-2 text-[#808080]">{proposal.creator}</p>
                </div>

                {/* Private */}
              </div>

              {/* PRIVATE / PUBLIC */}
              <div className=" flex items-center self-start border border-[#808080] rounded-3xl py-[3px] px-[16px]">
                {proposal.type}
              </div>
            </div>

            {/* SEOND PART */}
            <div className="flex justify-between items-center">
              <div
                className={`${
                  proposal.status === "Active"
                    ? "text-[#65D990]"
                    : "text-[#D96565]"
                } w-fit px-4 py-1.5 rounded-3xl bg-[#dcfce71d] `}
              >
                {proposal.status}
              </div>

              {/* People who voted */}
              <div className="flex items-center">
                <div className="flex">
                  <span>{/* SVG */}</span>

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
                </div>
                <span className="ml-3 text-[#808080]">
                  +{proposal.votes} people have voted
                </span>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className=" p-4 text-white flex justify-center items-center md:hidden">
          No result found
        </p>
      )}

      {/* DESKTOP */}

      <div className="hidden md:block relative overflowx-auto">
        <table className="w-full text-sm textleft rtltext-right text-gray-500 dark:text-gray-400">
          <thead className="text-lg text-left font-medium text-[#ADADAD] border-b-[0.4px]  uppercasedark:text-gray-400">
            <tr>
              <th scope="col" className="px6 py-3">
                Proposal
              </th>
              <th scope="col" className="px-6 py-3">
                Creator
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Votes
              </th>
            </tr>
          </thead>
          <tbody className="text-white w-full">
            {results.length > 0 ? (
              results.map((proposal, index) => (
                <tr key={index} className="bgwhite darkbg-gray-800">
                  {/* <Link href={`/proposal/${proposal._id}`}></Link> */}
                  <th
                    scope="row"
                    className="px6 py-4 font-medium text-gray900 whitespace-nowrap darktext-white"
                  >
                    <Link
                      href={`/proposal/${proposal._id}`}
                      className="flex items-center space-x-3"
                    >
                      <span>
                        <Image
                          src="/classelection.png"
                          width={32}
                          height={32}
                          alt="election-logo"
                        />
                      </span>
                      <span className="">{proposal.name}</span>
                    </Link>
                  </th>
                  <td className="px-6 py-4">{proposal.creator}</td>
                  <td className="px-6 py-4">{proposal.date}</td>
                  <td className="px-6 py-4">{proposal.type}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      // className="px-3 py-1.5 rounded-3xl bg-[#dcfce71d] text-[#65D990]"
                      className={`${
                        proposal.status === "Active"
                          ? "text-[#65D990]"
                          : "text-[#D96565]"
                      } px-3 py-1.5 rounded-3xl bg-[#dcfce71d] `}
                    >
                      {proposal.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">+{proposal.votes}</td>
                  <td>
                    <span>
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
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="p5 w-full mt-5 flex justify-center ">
                No results found
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
