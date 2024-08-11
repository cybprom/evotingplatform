"use client";
import React, { useState } from "react";
import AddDescription from "./AddDescription";
import AddVotingOption from "./AddVotingOption";
import AddVotingDuration from "./AddVotingDuration";
import Preview from "./Preview";
import LoadingModal from "./LoadingModal";
import SuccessModal from "./SucessModal";

// This is thhe  parent component
// This component will control and manage steps and data

// Step 1: Proposal title and description
// Step 2: Choose voting options
// Step 3: Durations
// Step 4: Preview

// Success message
interface Option {
  id: number;
  value: string;
  saved: boolean;
}
interface FormDataProps {
  title: string;
  description: string;
  type: string;
  options: Option[];
  votesNo: number;
  imgLink: string;
}

const steps = [
  { id: "Step 1", name: "Proposal Description" },
  { id: "Step 2", name: "Proposal Description" },
  { id: "Step 3", name: "Proposal Description" },
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [formData, setFormData] = useState<FormDataProps>({
    title: "",
    description: "",
    type: "Public",
    options: [],
    votesNo: 0,
    imgLink: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const updateSelectedFile = (file: React.SetStateAction<File | null>) => {
    setSelectedFile(file);
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFinalSubmit = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  console.log(formData);
  console.log(selectedFile);

  // Temporary
  const resetForm = () => {
    // setStep(1);
    // setFormData({ name: "", email: "", address: "" });
    setSuccess(false);
  };

  return (
    <>
      <div>
        {currentStep === 1 && (
          <AddDescription
            onNext={nextStep}
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            handleTextArea={handleTextArea}
            onUpdateSelectedFile={updateSelectedFile}
            selectedFile={selectedFile}
          />
        )}
      </div>
      <div>
        {currentStep === 2 && (
          <AddVotingOption
            onPrev={prevStep}
            onSubmit={nextStep}
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
        )}
      </div>
      <div>
        {currentStep === 3 && (
          <AddVotingDuration
            onNext={nextStep}
            onPrev={prevStep}
            onSubmit={nextStep}
            formData={formData}
            handleChange={handleChange}
            handleSelectOption={handleSelectOption}
          />
        )}
      </div>
      <div>
        {currentStep === 4 && (
          <Preview
            onPrev={prevStep}
            onSubmit={handleFinalSubmit}
            formData={formData}
          />
        )}
      </div>
      {loading && <LoadingModal />}
      {success && <SuccessModal resetForm={resetForm} />}
    </>
  );
}
