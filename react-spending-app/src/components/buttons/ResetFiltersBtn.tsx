import React from 'react';

interface ResetFiltersButtonProps {
  onReset: () => void; // Function to reset the filters
}

const ResetFiltersButton: React.FC<ResetFiltersButtonProps> = ({ onReset }) => {
  return (
    <button
      onClick={onReset}
      className="bg-red-500 ml-5 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
    >
      Reset Filters
    </button>
  );
};

export default ResetFiltersButton;