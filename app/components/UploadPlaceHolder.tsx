import React from "react";

export default function UploadPlaceHolder() {
  return (
    <div className="w-full flex flex-col items-center">
      <span className="mb-2">
        <svg
          width="51"
          height="51"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20.5" cy="20.5" r="20" fill="#1C1C1C" />
          <path
            d="M18.5001 19.1667C19.2365 19.1667 19.8334 18.5697 19.8334 17.8333C19.8334 17.097 19.2365 16.5 18.5001 16.5C17.7637 16.5 17.1667 17.097 17.1667 17.8333C17.1667 18.5697 17.7637 19.1667 18.5001 19.1667Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.1666 13.8333H18.4999C15.1666 13.8333 13.8333 15.1666 13.8333 18.4999V22.4999C13.8333 25.8333 15.1666 27.1666 18.4999 27.1666H22.4999C25.8333 27.1666 27.1666 25.8333 27.1666 22.4999V19.1666"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23 15.8333H26.6667"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M24.8333 17.6667V14"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M14.28 25.1333L17.5667 22.9266C18.0934 22.5733 18.8534 22.6133 19.3267 23.02L19.5467 23.2133C20.0667 23.66 20.9067 23.66 21.4267 23.2133L24.2 20.8333C24.72 20.3866 25.56 20.3866 26.08 20.8333L27.1667 21.7666"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span className="text-[#4A4A4A] text-sm">1 mb max size</span>
    </div>
  );
}
