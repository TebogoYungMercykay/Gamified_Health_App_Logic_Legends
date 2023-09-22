'use client'
import React, { useMemo, useEffect, useState } from 'react';
import TopCard from "@/app/components/leaderboard/TopCard";
import LeaderBoardData from "@/app/components/data/LeaderBoardData";

interface  dataWithAverageType {
    average: number;
    name: string;
    avatar: string;
    nickname: string;
    CurlsPoints: number;
    WeightPoints: number;
    SquatsPoints: number;
}


const calculateAverage = (leaderboard_data: any) => {
    return (leaderboard_data.CurlsPoints + leaderboard_data.WeightPoints + leaderboard_data.SquatsPoints) / 3;
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
                            avatar = {data[1].avatar}
                            name = {data[1].name}
                            subName = {data[1].nickname}
                            imageSrc = "https://i.pinimg.com/736x/98/5d/35/985d350fbb0c495a5d106f7f48773d04.jpg"
                        />
                    )}
                    {data[0] && (
                        <TopCard
                            backgroundColor = "#7febc3"
                            backgroundImage = "linear-gradient(to right,#47ad90, #0a553c)"
                            avatar = {data[0].avatar}
                            name = {data[0].name}
                            subName = {data[0].nickname}
                            imageSrc = "https://img.freepik.com/free-vector/number-one-award-winner-golden-label-design_1017-27871.jpg"
                        />
                    )}
                    {data[2] && (
                        <TopCard
                            backgroundColor = "#aad8fe"
                            backgroundImage = "linear-gradient(to right,#1b88cc, #2d2d2d)"
                            avatar = {data[2].avatar}
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
                            Weight (Points)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Curls (Points)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Squats (Points)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Average
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {
                        data.map((leaderboard_data: any) => (
                        <tr key={leaderboard_data.name}>
                            <td className="px-6 py-4 whitespace-nowrap">{leaderboard_data.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{leaderboard_data.CurlsPoints}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{leaderboard_data.WeightPoints}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{leaderboard_data.SquatsPoints}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{leaderboard_data.average.toFixed(2)}</td>
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
        const data = LeaderBoardData.map((item) => ({
            ...item,
            average: calculateAverage(item),
        }));
        setDataWithAverage(data);
    }, []);

    const sortedData = useMemo(() => sortDataByAverage(dataWithAverage), [dataWithAverage]);

    return <LeaderBoardTable data={sortedData} />;
};

export default LeaderBoard;