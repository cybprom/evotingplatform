//// With Drag and Drop support functionality

import React, { ChangeEvent, DragEvent, SetStateAction, useState } from "react";
import UploadPlaceHolder from "./UploadPlaceHolder";

interface Option {
  id: number;
  value: string;
  saved: boolean;
}

interface fileUploadProps {
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
  onUpdateSelectedFile: (file: File | null) => void;
}

const CustomFileUpload = ({
  formData,
  setFormData,
  onUpdateSelectedFile,
}: fileUploadProps) => {
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processFile = (file: File) => {
    if (file.size > 2097152) {
      // 1MB limit == 1048576
      // 2MB limit
      setError("File size should not exceed 2 MB");
      // setSelectedFile(null);
      onUpdateSelectedFile(null);
      setPreviewUrl(null);
    } else {
      // setSelectedFile(file);
      onUpdateSelectedFile(file);

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
