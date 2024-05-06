// components/Step3.tsx
import React from "react";

interface Step3Props {
  onPrev: () => void;
  onSubmit: () => void;
  formData: { name: string; email: string; address: string };
}

const Step3: React.FC<Step3Props> = ({ onPrev, onSubmit, formData }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Preview</h2>
      <div className="mb-4">
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Address:</strong> {formData.address}
        </p>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={onSubmit}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step3;
