"use client";
import React, { useState } from "react";
import AddDescription from "./AddDescription";

// This is thhe  parent component
// This component will control and manage steps and data

// Step 1: Proposal title and description
// Step 2: Choose voting options
// Step 3: Durations
// Step 4: Preview

// Success message

const initialFormData = {
  firstName: "",
  lastName: "",
  businessName: "",
  businessCity: "",
  businessWebsite: "",
  businessEmail: "",
  incomePerMonth: 0,
  taxPercentage: 0,
  agreeToTerms: false,
};

const steps = [
  { id: "Step 1", name: "Proposal Description" },
  { id: "Step 2", name: "Proposal Description" },
  { id: "Step 3", name: "Proposal Description" },
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((step) => step - 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  return <div>{currentStep === 1 && <AddDescription />}</div>;
}
