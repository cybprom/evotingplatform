// components/SuccessModal.tsx
import React from "react";

interface SuccessModalProps {
  resetForm: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ resetForm }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center md:justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
      <div className="fixed bottom-0 w-full md:relative bg-[#151515] md:border md:border-[#434343] p-9 md:rounded-2xl shadow-lg md:w-1/3">
        <button onClick={resetForm} className="absolute top-2 right-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.4142 10L15.7072 5.70701C16.0982 5.31601 16.0982 4.68401 15.7072 4.29301C15.3162 3.90201 14.6842 3.90201 14.2933 4.29301L10.0002 8.58601L5.70725 4.29301C5.31625 3.90201 4.68425 3.90201 4.29325 4.29301C3.90225 4.68401 3.90225 5.31601 4.29325 5.70701L8.58625 10L4.29325 14.293C3.90225 14.684 3.90225 15.316 4.29325 15.707C4.48825 15.902 4.74425 16 5.00025 16C5.25625 16 5.51225 15.902 5.70725 15.707L10.0002 11.414L14.2933 15.707C14.4882 15.902 14.7443 16 15.0002 16C15.2562 16 15.5122 15.902 15.7072 15.707C16.0982 15.316 16.0982 14.684 15.7072 14.293L11.4142 10Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center justify-center mt-3">
          <div className="">
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
                r="87.5"
                fill="#65D990"
                fillOpacity="0.1"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M87.5 122C106.277 122 121.5 106.778 121.5 88C121.5 69.2224 106.277 54 87.5 54C68.7227 54 53.5 69.2224 53.5 88C53.5 106.778 68.7227 122 87.5 122ZM74.4688 86.4685C75.0938 85.8438 76.1064 85.8438 76.7314 86.4685L83.5391 93.2761L96.8105 78.5295C97.4023 77.8728 98.4141 77.8196 99.0703 78.4106C99.7275 79.0017 99.7803 80.0134 99.1895 80.6702L84.7891 96.6702C84.1758 97.3516 83.1172 97.3794 82.4688 96.7312L74.4688 88.7312C73.8438 88.1064 73.8438 87.0933 74.4688 86.4685Z"
                fill="#65D990"
              />
            </svg>
          </div>
          <p className="text-center mt-4 text-xl">Proposal created!</p>

          <div className="flex items-center rounded-2xl bg-[#1C1C1C] py-2 px-5 mt-4">
            <span className="mr-5 cursor-pointer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 14L3.11662 13.9933C3.5757 13.9399 3.93995 13.5757 3.99327 13.1166L4 13V4H13L13.1166 3.99327C13.614 3.93551 14 3.51284 14 3C14 2.48716 13.614 2.06449 13.1166 2.00673L13 2H3L2.88338 2.00673C2.4243 2.06005 2.06005 2.4243 2.00673 2.88338L2 3V13L2.00673 13.1166C2.06005 13.5757 2.4243 13.9399 2.88338 13.9933L3 14ZM17 18L17.1166 17.9933C17.5757 17.9399 17.9399 17.5757 17.9933 17.1166L18 17V7L17.9933 6.88338C17.9444 6.46255 17.6343 6.12142 17.2293 6.02641L17.1166 6.00673L17 6H7L6.88338 6.00673C6.4243 6.06005 6.06005 6.4243 6.00673 6.88338L6 7V17L6.00673 17.1166C6.05561 17.5374 6.36575 17.8786 6.77071 17.9736L6.88338 17.9933L7 18H17ZM8 8V16H16V8H8Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="cursor-pointer">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_57_730)">
                  <path
                    d="M10.1105 7.69914L16.4349 0.5H14.9367L9.44297 6.74964L5.05837 0.5H0L6.63182 9.95146L0 17.4999H1.49815L7.29596 10.8987L11.9274 17.4999H16.9858M2.03886 1.60634H4.34044L14.9356 16.448H12.6335"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_730">
                    <rect
                      width="16.9858"
                      height="17"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>

          {/* View explorer */}
          <div className="mt-6 flex items-center cursor-pointer underline text-[#4463D1] ">
            <p className="text[#4463D1]">View on explorer</p>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.29726 7.1573L8.29208 7.07372C8.29215 6.73401 8.54641 6.45362 8.87498 6.41244L8.95857 6.40723L15.5551 6.40588L15.5953 6.40708V6.40708L15.6533 6.41305V6.41305L15.7394 6.43168V6.43168L15.8177 6.45959V6.45959L15.884 6.49255V6.49255L15.9673 6.54858V6.54858L16.0262 6.60096V6.60096L16.0604 6.63772V6.63772L16.1113 6.70506V6.70506L16.1498 6.77144V6.77144L16.1815 6.84448V6.84448L16.2027 6.91506V6.91506L16.2173 6.99913V6.99913L16.2213 7.0721L16.22 13.6686C16.2199 14.0366 15.9215 14.335 15.5535 14.3351C15.2138 14.3352 14.9335 14.081 14.8924 13.7525L14.8873 13.6689L14.8874 8.68192L7.54307 16.0263C7.28279 16.2866 6.86088 16.2867 6.6007 16.0265C6.34053 15.7663 6.34062 15.3444 6.6009 15.0841L13.9462 7.73881L8.9583 7.73993C8.61859 7.74 8.33831 7.48585 8.29726 7.1573L8.29208 7.07372L8.29726 7.1573Z"
                fill="#4463D1"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
