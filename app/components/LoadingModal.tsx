import React from "react";

const LoadingModal: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex md:items-center md:justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
      <div className="fixed bottom-0 w-full md:relative bg-[#151515] md:border md:border-[#434343] p-9 py-11 md:rounded-2xl shadow-lg md:w-1/3">
        <div className=" py8 flex flex-col justify-center items-center mb-8 md:mb-0">
          <svg
            width="175"
            height="175"
            viewBox="0 0 175 175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="87.5"
              cy="87.5"
              r="28"
              fill="#4463D1"
              fillOpacity="0.4"
            />
            <circle
              cx="87.5"
              cy="87.5"
              r="55"
              fill="#4463D1"
              fillOpacity="0.2"
            />
            <circle
              cx="87.5"
              cy="87.5"
              r="87.5"
              fill="#4463D1"
              fillOpacity="0.1"
            />
            <circle cx="87.5" cy="87.5" r="12" fill="#4463D1" />
          </svg>

          <p className="text-center mt-8">Creating proposal...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
