"use client";
import React, { useState } from "react";
import PopularProposal from "./PopularProposal";

export default function Tabs() {
  const [clicked, setClicked] = useState(1);

  const toggle = (i: number) => {
    setClicked(i);
  };
  return (
    <div className="">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center mb-4 mt-10">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center transition-colors"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="me-2 transition-all" role="presentation">
            <button
              className={`${
                clicked === 1
                  ? "textprimary md:bg-tabsbtn rounded-[32px] text-white"
                  : "text-nonactive hovertext-gray-600"
              } inline-block text-lg font-normal transition-colors p4`}
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              onClick={() => toggle(1)}
            >
              Popular proposals
            </button>
          </li>
          <li className="me-2 transition-all" role="presentation">
            <button
              className={`${
                clicked === 2
                  ? "textprimary md:bg-tabsbtn rounded-[32px] text-white"
                  : "text-nonactive hovertext-gray-600"
              } inline-block text-lg font-normal transition-colors p4`}
              id="proposals-tab"
              data-tabs-target="#proposals"
              type="button"
              role="tab"
              aria-controls="Proposals"
              aria-selected="false"
              onClick={() => toggle(2)}
            >
              My proposals
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`${
                clicked === 3
                  ? "textprimary md:bg-tabsbtn rounded-[32px] text-white"
                  : "text-nonactive hovertext-gray-600"
              } inline-block text-lg font-normal transition-colors p4`}
              id="voted-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="voted"
              aria-selected="false"
              onClick={() => toggle(3)}
            >
              Voted
            </button>
          </li>
        </ul>

        {/* SEARCH  */}
        <div className="flex items-center text-white border-[#2B2B2B] border rounded-full px-4 py-4 md:px-5 md:py-3">
          <span className=" mr-3">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.33333 0.333328C9.64704 0.333328 12.3333 3.01962 12.3333 6.33333C12.3333 7.74985 11.8425 9.05172 11.0215 10.0781L13.4714 12.5286C13.7317 12.7889 13.7317 13.2111 13.4714 13.4714C13.2311 13.7117 12.8529 13.7302 12.5914 13.5269L12.5286 13.4714L10.0781 11.0215C9.05172 11.8425 7.74985 12.3333 6.33333 12.3333C3.01962 12.3333 0.333328 9.64704 0.333328 6.33333C0.333328 3.01962 3.01962 0.333328 6.33333 0.333328ZM6.33333 1.66666C3.756 1.66666 1.66666 3.756 1.66666 6.33333C1.66666 8.91066 3.756 11 6.33333 11C8.91066 11 11 8.91066 11 6.33333C11 3.756 8.91066 1.66666 6.33333 1.66666Z"
                fill="#808080"
              />
            </svg>
          </span>
          <input
            type="search"
            className="w-full bg-transparent outline-none focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>

      {/*   CONTENT   */}

      <div id="default-tab-content" className=" mt-10">
        <div
          className={` ${
            clicked === 1 ? "block" : "hidden"
          } p4 rounded-lg bg-transparent bg-gray50 darkbg-gray-800 space-y-10`}
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          {/* <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Popular proposals tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p> */}
          <PopularProposal />
        </div>
        <div
          className={` ${
            clicked === 2 ? "block" : "hidden"
          } p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              My proposals tab&apos;s associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className={` ${
            clicked === 3 ? "block" : "hidden"
          } p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Voted tab&apos;s associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
}
