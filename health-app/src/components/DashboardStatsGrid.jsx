import React from 'react'
import { IoWater, IoFitnessOutline, IoMoonOutline, IoWalkOutline } from 'react-icons/io5';

export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoWater className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Water Intake</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">232L</strong>
						<span className="text-sm text-green-500 pl-2">+43L</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<IoFitnessOutline className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Weight</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">40kg</strong>
						<span className="text-sm text-green-500 pl-2">-2.4kg</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<IoMoonOutline className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Sleep Time</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">76 Hours</strong>
						<span className="text-sm text-red-500 pl-2">+11 Hours</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<IoWalkOutline className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Steps</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">16432</strong>
						<span className="text-sm text-red-500 pl-2">+2045</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}