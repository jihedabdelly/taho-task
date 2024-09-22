import React, { useState } from 'react';
import { createSpending } from '../../services/api';
import { useNavigate } from "react-router-dom";


const AddSpendingForm: React.FC = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userid: 0,
    count: 0,
    type: 'Food',
    model: 'Cash'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createSpending(formData);
      alert('Spending added successfully!');
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error('Failed to add spending', error);
      alert('Error adding spending');
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <div className="mb-4">
        <label>UserID</label>
        <input name="userid" min={1} required type="number" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label>Count</label>
        <input name="count" min={1} required type="number" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label>Type</label>
        <select name="type" defaultValue="Food"  id="type-id" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Gadget">Gadget</option>
        </select>
      </div>
      <div className="mb-4">
        <label>Model</label>
        <select name="model" defaultValue="Cash" required id="model-id" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="Cash">Cash</option> 
          <option value="Credit Card">Credit Card</option>
          <option value="Crypto">Crypto</option>
        </select>
      </div>
      <div className=" flex justify-center"></div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-5">
        Add Spending
      </button>
    </form>
  );
};

export default AddSpendingForm;
