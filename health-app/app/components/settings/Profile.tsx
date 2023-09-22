import React from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5';

const Profile = () => {
    return (
        <div className=' w-full flex flex-col gap-6 items-center'>
            <div className='w-72 h-72 min-w-[2.5rem] rounded-full'>
                <IoPersonCircleOutline
                    className="w-full h-full text-gray-500"
                    size={100}
                />
            </div>
            <h2>Tumi Khumalo</h2>
            <button className=' bg-blue-500 py-3 px-6 text-white rounded-3xl mb-7'>Edit Profile</button>
        </div>
    )
}

export default Profile