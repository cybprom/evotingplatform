"use client";
import { useRouter } from "next/navigation";
import React, { SetStateAction, useRef, useState, useEffect } from "react";

interface Option {
  id: number;
  value: string;
  saved: boolean;
}
interface votingOptionProps {
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
  setFormData: React.Dispatch<
    SetStateAction<{
      title: string;
      description: string;
      type: string;
      options: Option[];
      votesNo: number;
      imgLink: string;
    }>
  >;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AddVotingOption({
  onPrev,
  onSubmit,
  formData,
  setFormData,
  handleChange,
}: votingOptionProps) {
  const router = useRouter();

  const [options, setOptions] = useState<Option[]>([]);
  const latestInputRef = useRef<HTMLInputElement>(null);

  const handleCreateOptions = () => {
    const newOption = { id: Date.now(), value: "", saved: false };
    setOptions([...options, newOption]);
  };

  const handleInputChange = (id: number, value: string) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, value } : option
      )
    );
  };

  const saveOption = (id: number) => {
    setOptions(
      options.map((opt) => (opt.id === id ? { ...opt, saved: true } : opt))
    );
  };

  const handleDeleteOption = (index: number) => {
    setOptions((options) => options.filter((opt) => opt.id !== index));
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: number
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveOption(id);
    }
  };

  useEffect(() => {
    if (options.length > 0 && latestInputRef.current) {
      latestInputRef.current.focus();
    }
  }, [options.length]);

  ////////////////////

  //////////

  const handleSubmit = () => {
    // const { name, value } = e.target;
    setFormData({ ...formData, options: options });
    onSubmit();
    // console.log(formData);
  };

  const isButtonActive = options.length > 0;

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
          <div className=" space-y-5">
            <h2>Choose voting options</h2>
            <p className="text-[#4A4A4A]">Cast your vote</p>
            <div>
              <div className="mt-4 space-y-5">
                {options.map((option, index) => (
                  <div
                    key={option.id}
                    className="text-center border border-[#808080] rounded-[32px] py-2 py4 px-10 outline-none flex justify-between items-center"
                  >
                    <input
                      type="text"
                      value={option.value}
                      onChange={(e) =>
                        handleInputChange(option.id, e.target.value)
                      }
                      onKeyDown={(e) => handleKeyDown(e, option.id)}
                      disabled={option.saved}
                      className={`bg-transparent outline-none w-full`}
                      placeholder="Enter option"
                      ref={index === options.length - 1 ? latestInputRef : null}
                    />
                    {!option.saved && (
                      <button
                        onClick={() => saveOption(option.id)}
                        className="p-1 bg-[#4463D1] text-white rounded hover:bg[#4463D1] hover:opacity-90 ml-2"
                      >
                        save
                      </button>
                    )}
                    {option.saved && (
                      <div>
                        <button
                          onClick={() => handleDeleteOption(option.id)}
                          className=" text-white text-sm"
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.41425 6.00001L11.7072 1.70701C12.0982 1.31601 12.0982 0.684006 11.7072 0.293006C11.3162 -0.0979941 10.6842 -0.0979941 10.2933 0.293006L6.00025 4.58601L1.70725 0.293006C1.31625 -0.0979941 0.68425 -0.0979941 0.29325 0.293006C-0.09775 0.684006 -0.09775 1.31601 0.29325 1.70701L4.58625 6.00001L0.29325 10.293C-0.09775 10.684 -0.09775 11.316 0.29325 11.707C0.48825 11.902 0.74425 12 1.00025 12C1.25625 12 1.51225 11.902 1.70725 11.707L6.00025 7.41401L10.2933 11.707C10.4882 11.902 10.7443 12 11.0002 12C11.2562 12 11.5122 11.902 11.7072 11.707C12.0982 11.316 12.0982 10.684 11.7072 10.293L7.41425 6.00001Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <button
                onClick={handleCreateOptions}
                className=" mt-5 w-full text-center text-[#4A4A4A] hover:textwhite bg-[#181717] py-4 px-8 md:px16 font-medium rounded-[32px] flex justify-center transition-all duration-200"
              >
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
                      d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z"
                      fill="#4A4A4A"
                    />
                  </svg>
                </span>
                Add option
              </button>
              {/* continue button */}
              <div className="p-4 mb5 mt-12 -mb-4    flex justify-between">
                {/* Prev button */}
                {/* <button
                  // className={`text-center py-4 px-10 ${
                  //   isButtonActive
                  //     ? " bg-[#4463D1] text-white shadow-white-inset"
                  //     : "bg-[#1A1A1A] text-[#4A4A4A] "
                  // }  rounded-3xl flex justify-center shadow-white-inset transition-colors mlauto`}
                  onClick={onPrev}
                  className="wfull text-center py-4 px-10 rounded-3xl flex justify-center shadow-whiteinset transition-colors bg-[#1A1A1A]"
                  // style={{ boxShadow: "0px 3px 4px 0px #66666640 inset" }}
                >
                  Prev
                </button> */}
                {/* Continue button */}
                <button
                  className={`text-center py-4 px-8 ${
                    isButtonActive
                      ? " bg-[#4463D1] text-white shadow-whiteinset"
                      : "bg-[#1A1A1A] text-[#4A4A4A] "
                  }  rounded-3xl flex justify-center shadow-whiteinset transition-colors ml-auto`}
                  disabled={!isButtonActive}
                  onClick={handleSubmit}
                >
                  continue
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <VotingOption /> */}
      </div>
    </div>
  );
}
