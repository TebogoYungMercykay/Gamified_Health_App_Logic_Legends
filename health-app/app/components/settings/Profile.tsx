import React from 'react'

const Profile = () => {
    return (
        <div className=' w-full flex flex-col gap-6 items-center'>
            <div className=' w-72 h-72 rounded-full bg-red-700 overflow-hidden'></div>
            <h2>Tumi</h2>
            <button className=' bg-blue-500 py-3 px-6 text-white rounded-3xl mb-7'>Edit Profile</button>
        </div>
    )
}
export default Profile
