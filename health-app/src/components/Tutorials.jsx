import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import Tutorials from './Data/TutorialsData'


function Tutorial() {
	return (
		<div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
			<strong className="text-gray-700 font-medium">Challenge Tutorials</strong>
			<div className="mt-4 flex flex-col gap-3">
				{Tutorials.map((Tutorial) => (
					<Link
						key={Tutorial.id}
						to={`/Tutorial/${Tutorial.id}`}
						className="flex items-start hover:no-underline"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={Tutorial.Tutorial_thumbnail}
								alt={Tutorial.Tutorial_name}
							/>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{Tutorial.Tutorial_name}</p>
							<span
								className={classNames(
									Tutorial.Tutorial_participants === 0
										? 'text-red-500'
										: Tutorial.Tutorial_participants > 50
										? 'text-green-500'
										: 'text-orange-500',
									'text-xs font-medium'
								)}
							>
								{Tutorial.Tutorial_participants === 0 ? 'Closed Tutorial' : Tutorial.Tutorial_participants + ' Views'}
							</span>
						</div>
						<div className="text-xs text-gray-400 pl-1.5">{Tutorial.Tutorial_instructor}</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Tutorial
