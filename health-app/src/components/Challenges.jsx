import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
import ChallengesData from './Data/ChallengesData'

export default function healthChallenge() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Current Challenges</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Tutorial ID</th>
							<th>Challenge Title</th>
							<th>Reward</th>
							<th>Participants</th>
							<th>Closing Date</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{ChallengesData.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`/order/${order.id}`}>#{order.id}</Link>
								</td>
								<td>
									<Link to={`/product/${order.Tutorial_id}`}>#{order.Tutorial_id}</Link>
								</td>
								<td>{order.challenge_name}</td>
								<td>{order.Reward}</td>
								<td>{order.Challenge_participants}</td>
								<td>{format(new Date(order.closing_date), 'dd MMM yyyy')}</td>
								<td>{getOrderStatus(order.current_challenge_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
