import React from 'react';

import { formatDate } from '../../utils/formatDate';

interface Spending {
	id: number;
	userid: number;
	count: number;
	type: string;
	model: string;
	createdat: string;
}

const SpendingTable: React.FC<{ data: Spending[] }> = ({ data }) => {
	return (
		<div className=" px-3 ">
			<table className="min-w-full table-auto border border-gray-300">
				<thead className="bg-gray-200">
					<tr>
						<th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Spending ID</th>
						<th className="px-4 py-2 text-left text-sm font-medium text-gray-700">User ID</th>
						<th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Count</th>
						<th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Type</th>
						<th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Model</th>
						<th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Created at</th>
					</tr>
				</thead>
				<tbody>
					{data.map((spending) => (
						<tr key={spending.id} className="border-b hover:bg-gray-100">
							<td className="px-4 py-2 text-sm text-gray-600">{spending.id}</td>
							<td className="px-4 py-2 text-sm text-gray-600">{spending.userid}</td>
							<td className="px-4 py-2 text-sm text-gray-600">{spending.count}</td>
							<td className="px-4 py-2 text-sm text-gray-600">{spending.type}</td>
							<td className="px-4 py-2 text-sm text-gray-600">{spending.model}</td>
							<td className="px-4 py-2 text-sm text-gray-600">{formatDate(spending.createdat)}</td>
							<td className="px-4 py-2 text-sm text-gray-600">
								
							{/* not required */}
							{/* <div className="flex space-x-2">
								<button
									className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
									onClick={() => console.log("edit")} // Replace with your edit handler
								>
									Edit
								</button>

								<button
									className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded"
									onClick={() => console.log("delete")} // Replace with your delete handler
								>
									Delete
								</button>
							</div> */}

							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SpendingTable;
