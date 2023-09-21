'use client'
import React, { useMemo, useEffect, useState } from 'react';
import TopCard from "@/app/components/leaderboard/TopCard";
import tempValue from "@/app/components/data/LeaderBoardData";

interface  dataWithAverageType {
    average: number;
    name: string;
    avatar: string;
    nickname: string;
    WaterIntakePoint: number;
    WeightPoint: number;
    Sleep: number;
}


const calculateAverage = (item: any) => {
    return (item.WaterIntakePoint + item.WeightPoint + item.Sleep) / 3;
};

const sortDataByAverage = (data: any) => {
    return [...data].sort((a, b) => b.average - a.average);
};

const LeaderBoardTable = ({data} : any) => {
    return (
        <div className="overflow-x-auto">
            <div className="flex flex-row gap4 w-full mb-2">
                <div className="mx-auto">
                    {data[1] && (
                        <TopCard
                            backgroundColor = "#aad8fe"
                            backgroundImage = "linear-gradient(to right,#1b88cc, #2d2d2d)"
                            avatar = 'https://cdn3d.iconscout.com/3d/premium/thumb/profile-5590850-4652486.png'
                            name = {data[1].name}
                            subName = {data[1].nickname}
                            imageSrc = "https://i.pinimg.com/736x/98/5d/35/985d350fbb0c495a5d106f7f48773d04.jpg"
                        />
                    )}
                    {data[0] && (
                        <TopCard
                            backgroundColor = "#7febc3"
                            backgroundImage = "linear-gradient(to right,#47ad90, #0a553c)"
                            avatar = 'https://cdn3d.iconscout.com/3d/premium/thumb/profile-5590850-4652486.png'
                            name = {data[0].name}
                            subName = {data[0].nickname}
                            imageSrc = "https://img.freepik.com/free-vector/number-one-award-winner-golden-label-design_1017-27871.jpg"
                        />
                    )}
                    {data[2] && (
                        <TopCard
                            backgroundColor = "#aad8fe"
                            backgroundImage = "linear-gradient(to right,#1b88cc, #2d2d2d)"
                            avatar = 'https://cdn3d.iconscout.com/3d/premium/thumb/profile-5590850-4652486.png'
                            name = {data[2].name}
                            subName = {data[2].nickname}
                            imageSrc = "https://us.123rf.com/450wm/imazydreams/imazydreams1508/imazydreams150800145/43247288-3rd-bronze-medal.jpg?ver=6"
                        />
                    )}
                </div>
            </div>
            <div className="flex flex-row gap4 w-full">
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
                    {
                        data.map((item: any) => (
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
        </div>
    );
};

const LeaderBoard = () => {

    const [dataWithAverage, setDataWithAverage] = useState<dataWithAverageType[]>([]);

    useEffect(() => {
        const data = tempValue.map((item) => ({
            ...item,
            average: calculateAverage(item),
        }));
        setDataWithAverage(data);
    }, []);

    const sortedData = useMemo(() => sortDataByAverage(dataWithAverage), [dataWithAverage]);

    return <LeaderBoardTable data={sortedData} />;
};

export default LeaderBoard;