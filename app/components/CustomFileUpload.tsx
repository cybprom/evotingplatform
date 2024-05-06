// // components/CustomFileUpload.tsx
// import Image from "next/image";
// import { ChangeEvent, useState } from "react";

// const CustomFileUpload = () => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//       const file = event.target.files[0];

//       // Check if the file size is greater than 2 MB
//       if (file.size > 2097152) {
//         // 1 MB = 1,048,576 bytes
//         // 2MB = 2,097,152 bytes
//         setError("File size should not exceed 2 MB");
//         setSelectedFile(null);
//         setPreviewUrl(null);
//         return;
//       }

//       setSelectedFile(file);
//       setPreviewUrl(URL.createObjectURL(file));
//       setError(null); // Clear any previous errors
//     } else {
//       setSelectedFile(null);
//       setPreviewUrl(null);
//       setError(null);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center w-full">
//       {!previewUrl && (
//         <label
//           htmlFor="file-upload"
//           className="flex flex-col justify-center items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-lg cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out mb-4"
//           style={{ width: "300px" }}
//         >
//           <span>{selectedFile ? selectedFile.name : "Upload a file"}</span>
//           <input
//             id="file-upload"
//             name="file-upload"
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={handleFileChange}
//           />
//         </label>
//       )}
//       {error && <p className="text-red-500">{error}</p>}
//       {previewUrl && (
//         <div
//           className="w-32 h-32 rounded-full overflow-hidden shadow-lg bg-center bg-cover"
//           style={{ backgroundImage: `url(${previewUrl})` }}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default CustomFileUpload;

//// With Drag and Drop support functionality

import React, { ChangeEvent, DragEvent, SetStateAction, useState } from "react";
import UploadPlaceHolder from "./UploadPlaceHolder";

interface fileUploadProps {
  formData: {
    title: string;
    description: string;
    type: string;
    options: string[];
    votesNo: number;
    imgLink: string;
  };
  setFormData: React.Dispatch<
    SetStateAction<{
      title: string;
      description: string;
      type: string;
      options: string[];
      votesNo: number;
      imgLink: string;
    }>
  >;
}

const CustomFileUpload = ({ formData, setFormData }: fileUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processFile = (file: File) => {
    if (file.size > 2097152) {
      // 1MB limit == 1048576
      // 2MB limit
      setError("File size should not exceed 2 MB");
      setSelectedFile(null);
      setPreviewUrl(null);
    } else {
      setSelectedFile(file);

      setPreviewUrl(URL.createObjectURL(file));
      setError(null);

      // Update formData with imgLink
      setFormData({ ...formData, imgLink: URL.createObjectURL(file) });
    }
  };

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }

    console.log(event.target.files);

    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
  };

  const onFileDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    console.log(files);
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const triggerFileInput = () => {
    document.getElementById("file-upload")?.click();
  };

  return (
    <div className="flex flex-col items-center">
      <div
        onClick={triggerFileInput}
        onDrop={onFileDrop}
        onDragOver={onDragOver}
        className="flex flex-col justify-center items-center bg-[#131313] text-white font-medium rounded-full shadow-lg cursor-pointer hover:bg-opacity-60 transition duration-300 ease-in-out mb-3 w-40 h-40 text-center"
      >
        {!previewUrl && <UploadPlaceHolder />}
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onFileChange}
        />
        {previewUrl && (
          <div
            className="w-32 h-32 rounded-full overflow-hidden shadow-lg bg-center bg-cover cursor-pointer"
            style={{ backgroundImage: `url(${previewUrl})` }}
          ></div>
        )}
      </div>
      {error && <div className="text-red-500">{error}</div>}
      {/* {previewUrl && (
        <div
          className="w-32 h-32 rounded-full overflow-hidden shadow-lg bg-center bg-cover"
          style={{ backgroundImage: `url(${previewUrl})` }}
        ></div>
      )} */}
    </div>
  );
};

export default CustomFileUpload;
