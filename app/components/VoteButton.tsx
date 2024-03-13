import React from "react";

interface VoteComponentProps {
  id: number;
  setActiveButton: (value: number) => void;
  activeButton: number;
  children: React.ReactNode;
}

export default function VoteButton({
  id,
  setActiveButton,
  activeButton,
  children,
}: VoteComponentProps) {
  const isActive = activeButton === id;

  const handleClick = () => {
    setActiveButton(id);
  };
  return (
    <button
      onClick={handleClick}
      className={` w-full text-center border py-4 px-10 md:px16 font-medium md:textxl  rounded-3xl flex itemscenter justify-center ${
        isActive ? "border-[#4463D1]" : "border-[#808080]"
      }`}
    >
      {isActive && (
        <span className="">
          <svg
            width="20"
            height="20"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.4101 17.4959L4.20711 11.2929C3.81658 10.9024 3.18342 10.9024 2.79289 11.2929C2.40237 11.6835 2.40237 12.3166 2.79289 12.7071L9.79289 19.7071C10.2168 20.1311 10.9159 20.0893 11.2863 19.6179L22.2863 5.61786C22.6275 5.18359 22.5521 4.55494 22.1178 4.21372C21.6835 3.87251 21.0549 3.94795 20.7137 4.38222L10.4101 17.4959Z"
              fill="#4463D1"
            />
          </svg>
        </span>
      )}
      {children}
    </button>
  );
}
