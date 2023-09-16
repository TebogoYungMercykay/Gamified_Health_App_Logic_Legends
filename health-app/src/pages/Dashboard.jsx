import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import UserActivity from '../components/UserActivity'
import Challenges from '../components/Challenges'
import UsersChart from '../components/UsersChart'
import Tutorials from '../components/Tutorials'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<UserActivity />
				<UsersChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<Challenges />
				<Tutorials />
			</div>
		</div>
	)
}
