import React from 'react'

const Profile = () => {
    return (
        <div className=' w-full flex flex-col gap-6 items-center'>
            <div className=' w-72 h-72 rounded-full bg-red-700 overflow-hidden'></div>
            {/*  Name  */}
            <h3>Tumi</h3>
            <button className=' bg-blue-500 p-3 text-white rounded-sm mb-7'>Edit Profile</button>
        </div>
    )
}
export default Profile
