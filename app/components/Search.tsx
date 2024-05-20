import React, { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";

type SearchProps = {
  onSearch: (query: string) => void;
};

export default function Search({ onSearch }: SearchProps) {
  const [query, setQuery] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(query);
    }
  };

  // testing -- doesn't work te way i want
  // const handleOnInput = (e: ChangeEvent<HTMLInputElement>) => {
  //   setQuery(e.target.value);
  //   onSearch(query);
  // };

  console.log(query);
  return (
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
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-full bg-transparent outline-none focus:outline-none"
          placeholder="Search"
          value={query}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          // onInput={handleOnInput}
        />
      </form>
    </div>
  );
}
