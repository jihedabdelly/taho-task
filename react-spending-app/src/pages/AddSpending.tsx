import React from 'react';
import AddSpendingForm from '../components/spendings/AddSpendingForm';

const AddSpending: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mt-8 mb-14 flex justify-center">Add New Spending</h1>
      <AddSpendingForm />
    </div>
  );
};

export default AddSpending;
