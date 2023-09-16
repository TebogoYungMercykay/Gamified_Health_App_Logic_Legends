import React, { useMemo, useEffect, useState } from 'react';

const calculateAverage = (item) => {
	return (item.WaterIntakePoint + item.WeightPoint + item.Sleep) / 3;
};

const sortDataByAverage = (data) => {
	return [...data].sort((a, b) => b.average - a.average);
};

const DashboardTable = ({ data }) => {
	return (
		<div className="overflow-x-auto">
			<table className="min-w-full">
				<colgroup>
					<col className="w-1/5" />
					<col className="w-1/5" />
					<col className="w-1/5" />
					<col className="w-1/5" />
					<col className="w-1/5" />
				</colgroup>
				<thead>
				<tr className="bg-gray-200">
					<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Name
					</th>
					<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Water Intake
					</th>
					<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Weight
					</th>
					<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Sleep
					</th>
					<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Average
					</th>
				</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
				{data.map((item) => (
					<tr key={item.name}>
						<td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
						<td className="px-6 py-4 whitespace-nowrap">{item.WaterIntakePoint}</td>
						<td className="px-6 py-4 whitespace-nowrap">{item.WeightPoint}</td>
						<td className="px-6 py-4 whitespace-nowrap">{item.Sleep}</td>
						<td className="px-6 py-4 whitespace-nowrap">{item.average.toFixed(2)}</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
};

const Dashboard = () => {
	const tempValue = [
		{
			name: 'John Doe',
			WaterIntakePoint: 90,
			WeightPoint: 70,
			Sleep: 92,
		},
		{
			name: 'Jane Smith',
			WaterIntakePoint: 90,
			WeightPoint: 75,
			Sleep: 88,
		},
	];

	const [dataWithAverage, setDataWithAverage] = useState([]);

	useEffect(() => {
		const data = tempValue.map((item) => ({
			...item,
			average: calculateAverage(item),
		}));
		setDataWithAverage(data);
	}, []);

	const sortedData = useMemo(() => sortDataByAverage(dataWithAverage), [dataWithAverage]);

	return <DashboardTable data={sortedData} />;
};
export default Dashboard;