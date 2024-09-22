import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface Spending {
  userId: number;
  count: number;
  type: string;
}

// Aggregate data function
const aggregateData = (data: Spending[]) => {
    const aggregated: Record<string, number> = {};
  
    data.forEach(({ type, count }) => {
      if (aggregated[type]) {
        aggregated[type] += count;
      } else {
        aggregated[type] = count;
      }
    });
  
    return Object.entries(aggregated).map(([type, count]) => ({
      type,
      count,
    }));
  };

const SpendingChart: React.FC<{ data: Spending[] }> = ({ data }) => {
    const aggregatedData = aggregateData(data);

  return (
    <BarChart width={600} height={300} data={aggregatedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="type" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#82ca9d" />
    </BarChart>
  );
};

export default SpendingChart;
