'use client'
import React from 'react'
import DashboardStatsGrid from "@/app/components/dashboard/DashboardStatsGrid";
import UserActivity from "@/app/components/dashboard/UserActivity";
import UsersChart from "@/app/components/dashboard/UsersChart";
import Challenges from "@/app/components/dashboard/Challenges";
import Tutorials from "@/app/components/dashboard/Tutorials";

const Dashboard = () => {
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
export default Dashboard
