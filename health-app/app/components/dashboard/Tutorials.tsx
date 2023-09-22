import React from 'react'
import Link from "next/link";
import { IoLogoYoutube } from 'react-icons/io5';
import HealthTutorials from "@/app/components/data/TutorialsData";

const Tutorials = () => {
    return (
        <div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
            <strong className="text-gray-700 text-xl flex justify-center">
                Challenge Tutorials
            </strong>
            <div className="mt-4 flex flex-col gap-3">
                {
                    HealthTutorials.map((Tutorial) => (
                    <Link
                        key={Tutorial.id}
                        href={`#`}
                        className="flex items-start hover:no-underline"
                    >
                        <div className="w-10 h-10 min-w-[2.5rem] rounded-sm">
                            <IoLogoYoutube
                                className="w-full h-full text-red-700"
                                size={40}
                            />
                        </div>
                        <div className="ml-4 flex-1">
                            <p className="text-sm text-gray-800">{Tutorial.Tutorial_name}</p>
                            <span
                                className={`${Tutorial.Tutorial_status !== "Open" ?'text-red-500': Tutorial.Tutorial_participants > 20 ? 'text-green-500' : 'text-orange-500' } text-xs font-medium`}
                            >
								{Tutorial.Tutorial_status !== "Open" ? 'Closed Challenge' : Tutorial.Tutorial_participants + ' Views'}
							</span>
                        </div>
                        <div className="text-xs text-gray-400 pl-1.5">{Tutorial.Tutorial_instructor}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Tutorials;