import React from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import ChallengesData from '@/app/components/data/ChallengesData';
import { getStatus } from '@/app/lib/index';

const Challenges = () => {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 text-3xl flex justify-center pb-6">
        Current Challenges
      </strong>
      <div className="border-x border-y border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left py-3">Tutorial ID</th>
              <th className="text-left py-3">Challenge Title</th>
              <th className="text-left py-3">Reward</th>
              <th className="text-left py-3">Participants</th>
              <th className="text-left py-3">Closing Date</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {ChallengesData.map((challenge) => (
              <tr key={challenge.challenge_id}>
                <td className="justify-center pl-3 py-3">
                  <Link href={`#`}>#{challenge.Tutorial_id}</Link>
                </td>
                <td className="justify-center py-3">{challenge.challenge_name}</td>
                <td className="justify-center py-3">{challenge.Reward}</td>
                <td className="justify-center py-3">
                  {challenge.Challenge_participants}
                </td>
                <td className="justify-center py-3">
                  {format(new Date(challenge.closing_date), 'dd MMM yyyy')}
                </td>
                <td className="justify-center py-3">
                  {getStatus(challenge.current_challenge_status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Challenges;