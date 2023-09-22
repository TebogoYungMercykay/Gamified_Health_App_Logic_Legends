import React, {ReactNode} from 'react';
import gridData from '../data/StatsGridData';
import {
    IoBarbellOutline,
    IoFitnessOutline,
    IoAccessibilityOutline,
    IoWalkOutline
} from 'react-icons/io5';

const getColor = (percentage: any) => {
    if (percentage >= 0.8) return 'text-green-500';
    if (percentage >= 0.7) return 'text-yellow-500';
    if (percentage >= 0.6) return 'text-orange-500';
    if (percentage >= 0.4) return 'text-pink-500';
    return 'text-red-500';
}
interface BoxWrapperProps {
    children: ReactNode;
}

const DashboardStatsGrid = () => {
    return (
        <div className = "flex gap-4">
            <BoxWrapper>
                <div className = "rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
                    <IoFitnessOutline className = "text-2xl text-white" />
                </div>
                <div className = "pl-4">
                    <span className = "text-sm text-gray-500 font-light">{gridData[0].category}</span>
                    <div className = "flex items-center">
                        <strong className = "text-xl text-gray-700 font-semibold">{gridData[0].target} KG</strong>
                        <span className = {`text-sm pl-2 ${getColor(gridData[0].progress / gridData[0].target)}`}>{gridData[0].progress} KG</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className = "rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
                    <IoWalkOutline className = "text-2xl text-white" />
                </div>
                <div className = "pl-4">
                    <span className = "text-sm text-gray-500 font-light">{gridData[1].category}</span>
                    <div className = "flex items-center">
                        <strong className = "text-xl text-gray-700 font-semibold">{gridData[1].target}</strong>
                        <span className = {`text-sm pl-2 ${getColor(gridData[1].progress / gridData[1].target)}`}>{gridData[1].progress}</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className = "rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
                    <IoAccessibilityOutline className = "text-2xl text-white" />
                </div>
                <div className = "pl-4">
                    <span className = "text-sm text-gray-500 font-light">{gridData[2].category}</span>
                    <div className = "flex items-center">
                        <strong className = "text-xl text-gray-700 font-semibold">{gridData[2].target}</strong>
                        <span className = {`text-sm pl-2 ${getColor(gridData[2].progress / gridData[2].target)}`}>{gridData[2].progress}</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className = "rounded-full h-12 w-12 flex items-center justify-center bg-sky-600">
                    <IoBarbellOutline className = "text-2xl text-white" />
                </div>
                <div className = "pl-4">
                    <span className = "text-sm text-gray-500 font-light">{gridData[3].category}</span>
                    <div className = "flex items-center">
                        <strong className = "text-xl text-gray-700 font-semibold">{gridData[3].target}</strong>
                        <span className = {`text-sm pl-2 ${getColor(gridData[3].progress / gridData[3].target)}`}>{gridData[3].progress}</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

const  BoxWrapper = ({children}: BoxWrapperProps) => {
    return <div className = "bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}

export default DashboardStatsGrid