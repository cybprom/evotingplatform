// // pages/multistep.tsx
// "use client";
// import React, { useState } from "react";
// import Step1 from "../components/Step1";
// import Step2 from "../components/Step2";
// import Step3 from "../components/Step3";

// const MultiStep: React.FC = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//   });

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Multi-Step Form</h1>
//       {step === 1 && (
//         <Step1
//           onNext={nextStep}
//           formData={formData}
//           handleChange={handleChange}
//         />
//       )}
//       {step === 2 && (
//         <Step2
//           onPrev={prevStep}
//           onSubmit={nextStep}
//           formData={formData}
//           handleChange={handleChange}
//         />
//       )}
//       {step === 3 && (
//         <Step3 onPrev={prevStep} onSubmit={nextStep} formData={formData} />
//       )}
//     </div>
//   );
// };

// export default MultiStep;

// Shhow loading state

////////////////////////////

// pages/multistep.tsx
// "use client";
// import React, { useState } from "react";
// import Step1 from "../components/Step1";
// import Step2 from "../components/Step2";
// import Step3 from "../components/Step3";
// import LoadingModal from "../components/LoadingModal";
// import SuccessModal from "../components/SucessModal";
// import ErrorModal from "../components/ErrorModal";

// const MultiStepForm: React.FC = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     console.log(e.target.value);
//   };

//   const handleSubmit = async () => {
//     setLoading(true);
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 5000));
//       setSuccess(true);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetForm = () => {
//     setStep(1);
//     setFormData({ name: "", email: "", address: "" });
//     setSuccess(false);
//     setError(false);
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Multi-Step Form</h1>
//       {step === 1 && (
//         <Step1
//           onNext={nextStep}
//           formData={formData}
//           handleChange={handleChange}
//         />
//       )}
//       {step === 2 && (
//         <Step2
//           onPrev={prevStep}
//           onSubmit={nextStep}
//           formData={formData}
//           handleChange={handleChange}
//         />
//       )}
//       {step === 3 && (
//         <Step3 onPrev={prevStep} onSubmit={handleSubmit} formData={formData} />
//       )}
//       {loading && <LoadingModal />}
//       {success && <SuccessModal resetForm={resetForm} />}
//       {error && <ErrorModal resetForm={resetForm} />}
//     </div>
//   );
// };

// export default MultiStepForm;

"use client";

import { useState } from "react";

const MultiStepForm = () => {
  const [steps, setSteps] = useState<string[]>(["Step 1"]);

  const handleAddStep = () => {
    const newStep = `Step ${steps.length + 1}`;
    setSteps([...steps, newStep]);
  };

  const handleDeleteStep = (index: number) => {
    const updatedSteps = [...steps];
    updatedSteps.splice(index, 1);
    setSteps(updatedSteps);
  };

  return (
    <div className=" mt-40">
      <h1>Multi-Step Form</h1>
      {steps.map((step, index) => (
        <div key={index} className="step flex">
          <div>{step}</div>
          <button onClick={() => handleDeleteStep(index)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddStep}>Add Step</button>
    </div>
  );
};

export default MultiStepForm;
