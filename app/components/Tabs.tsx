"use client";
import React, { useState } from "react";
import PopularProposal from "./PopularProposal";
import Search from "./Search";

import proposal from "@/proposal.json";

export default function Tabs() {
  const [clicked, setClicked] = useState(1);

  // const [results, setResults] = useState<Proposal[]>(proposal);
  const [results, setResults] = useState(proposal);

  const toggle = (i: number) => {
    setClicked(i);
  };
  console.log(results);

  const handleSearch = (query: string) => {
    const filteredResults = proposal.filter((proposal) =>
      proposal.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
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
        <Search onSearch={handleSearch} />
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
          {/* <PopularProposal results={results} /> */}
          <PopularProposal results={results} />
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
