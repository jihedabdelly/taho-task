import React, { useState, useEffect } from 'react';
import { getSpendings } from '../services/api';
import SpendingChart from '../components/charts/SpendingChart';
import SpendingTable from '../components/spendings/SpendingTable';
import AddSpendingBtn from '../components/buttons/AddSpendingBtn';
import ResetFiltersButton from '../components/buttons/ResetFiltersBtn';

const Home: React.FC = () => {
  const [spendings, setSpendings] = useState([]);
	const [filters, setFilters] = useState({
		userid: 0,
		startdate: '',
		enddate: '',
		type: '',
		model: '',
	});
	
  useEffect(() => {
    const fetchData = async () => {
			let data
			if(filters.userid === 0 && filters.startdate=== "" && filters.enddate==="" && filters.type==="" && filters.model==="") {
				data = await getSpendings();
			} else {
				data = await getSpendings(filters);
			}
      setSpendings(data);
    };
    fetchData();
  }, [filters]);


	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

	const resetFilters = () => {
    setFilters({
			userid: 0,
			startdate: '',
			enddate: '',
			type: '',
			model: '',
		});
  };


  return (
    <div className=" p-4" >
      <h1 className="text-2xl font-bold mt-4 mb-10 flex justify-center">User Spendings</h1>
      <SpendingChart data={spendings} />
			<AddSpendingBtn />

			{/* Filter Form */}
      <div className="mb-4 flex justify-center">
        <input
          type="number"
          name="userid"
          placeholder="User ID"
          value={filters.userid}
          onChange={handleFilterChange}
          className="border p-2 mr-2"
        />
        <input
          type="date"
          name="startdate"
          placeholder="Start Date"
          value={filters.startdate}
          onChange={handleFilterChange}
          className="border p-2 mr-2"
        />
        <input
          type="date"
          name="enddate"
          placeholder="End Date"
          value={filters.enddate}
          onChange={handleFilterChange}
          className="border p-2 mr-2"
        />
        <select
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          className="border p-2 mr-2"
        >
          <option value="">All Types</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Gadget">Gadget</option>
        </select>
        <select
          name="model"
          value={filters.model}
          onChange={handleFilterChange}
          className="border p-2"
        >
          <option value="">All Models</option>
          <option value="Cash">Cash</option> 
          <option value="Credit Card">Credit Card</option>
          <option value="Crypto">Crypto</option>
        </select>

				<ResetFiltersButton onReset={resetFilters} />
      </div>
			

      <SpendingTable data={spendings} />
    </div>
  );
};

export default Home;
