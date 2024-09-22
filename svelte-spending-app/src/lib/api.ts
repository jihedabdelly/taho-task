import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:5050/',
});




// Create Spending Record
export const createSpending = async (data: { userid: number; count: number; type: string; model: string }) => {
	const response = await api.post('/spendings', data);
	return response.data;
};

// Read Spending Records with Optional Filters
export const getSpendings = async (filters?: { userid?: number; startdate?: string; enddate?: string; type?: string; model?: string }) => {
	const filteredParams = filters ? Object.fromEntries(
		Object.entries(filters).filter(([key, value]) => value !== 0 && value !== '')
	) : {}
	
	const response = await api.get('/spendings', { params: filteredParams });
	return response.data;
};