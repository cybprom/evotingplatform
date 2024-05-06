// import { useState } from "react";

// const AddOptionButton = () => {
//   const [options, setOptions] = useState<string[]>([]);
//   const [currentInput, setCurrentInput] = useState("");

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setCurrentInput(e.target.value);
//   };

//   const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       if (currentInput.trim() !== "") {
//         setOptions([...options, currentInput.trim()]);
//         setCurrentInput("");
//       } else {
//         alert("Please enter an option.");
//       }
//     }
//   };

//   const handleEditOption = (index: number) => {
//     const newValue = prompt("Edit option:", options[index]);
//     if (newValue !== null) {
//       const newOptions = [...options];
//       newOptions[index] = newValue;
//       setOptions(newOptions);
//     }
//   };

//   return (
//     <div className="mt-4">
//       <div className="flex flex-col items-center flex-wrap">
//         {options.map((option, index) => (
//           <div
//             key={index}
//             className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full m-1 cursor-pointer"
//             onClick={() => handleEditOption(index)}
//           >
//             {option}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         placeholder="Enter Option"
//         value={currentInput}
//         onChange={handleInputChange}
//         onKeyPress={handleInputKeyPress}
//         className="mt-2 py-2 px-3 border border-gray-300 rounded"
//       />
//     </div>
//   );
// };

// export default AddOptionButton;

//////////
// import { useState } from "react";

// const AddOptionButton = () => {
//   const [showInput, setShowInput] = useState(false);
//   const [optionText, setOptionText] = useState("");

//   const handleAddOption = () => {
//     setShowInput(true);
//   };

//   const handleSaveOption = () => {
//     if (optionText.trim() !== "") {
//       setShowInput(false);
//     } else {
//       alert("Please enter an option.");
//     }
//   };

//   return (
//     <div className="mt-4">
//       {!showInput ? (
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={handleAddOption}
//         >
//           Add Option
//         </button>
//       ) : (
//         <div>
//           <input
//             type="text"
//             placeholder="Enter Option"
//             value={optionText}
//             onChange={(e) => setOptionText(e.target.value)}
//             className="py-2 px-3 border border-gray-300 rounded"
//           />
//           <button
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
//             onClick={handleSaveOption}
//           >
//             Save
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddOptionButton;

// /// editable
/////////

import { useRef, useState } from "react";

const EditableDiv = () => {
  const [content, setContent] = useState("Type  your content");

  const divRef = useRef<HTMLDivElement>(null);

  const handleContentChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    setContent(e.target.textContent || "");
  };

  const handleTest = (e: React.ChangeEvent<HTMLDivElement>) => {
    console.log(e.target.textContent);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (divRef.current) {
        divRef.current.blur();
      }
    }
  };

  return (
    <>
      <div
        contentEditable={true}
        suppressContentEditableWarning={true}
        // onBlur={handleContentChange}
        className="border border-gray-300 p-2 rounded"
        onBlur={handleTest}
        onKeyDown={handleKeyDown}
        ref={divRef}
      >
        {content}
      </div>
      {/*  Additional */}
      {/* <div
        contentEditable={true}
        onBlur={handleTest}
        onKeyDown={handleKeyDown}
        ref={divRef}
      >
        Lets see if its editable
      </div> */}
    </>
  );
};

export default EditableDiv;
