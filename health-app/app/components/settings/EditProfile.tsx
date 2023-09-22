'use client'
import React, { useState } from 'react';
import {IoPersonCircleOutline} from "react-icons/io5";
import Image from "next/image";

interface EditProfileProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const EditProfile = ({setOpen}: EditProfileProps) => {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@example.com');
    const [password, setPassword] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    const handleImageUpload = (event: any) => {
        const file = event.target.files[0];
        setProfileImage(file);
    };

    const handleSaveChanges = () => {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('New Password:', password);
        console.log('Profile Image:', profileImage);
        setOpen(prevState => !prevState);
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg">
            <h2 className=" w-full flex justify-center text-2xl font-semibold text-gray-800 mb-4">Edit Profile</h2>

            <div className="mb-4">
                {
                    profileImage ? (
                        <Image
                            src={URL.createObjectURL(profileImage)}
                            alt="Profile"
                            className="w-32 h-32 rounded-full mx-auto"
                            width={144}
                            height={144}
                            style={{ width: '144px', height: '144px', borderRadius: '50%', objectFit: 'cover' }}
                        />
                    ) : (
                        <IoPersonCircleOutline className="w-32 h-32 rounded-full mx-auto text-gray-500" />
                    )
                }

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mt-2 text-blue-600"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 p-2 w-full border focus:outline-none focus:ring focus:border-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 p-2 w-full border focus:outline-none focus:ring focus:border-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    New Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 p-2 w-full border focus:outline-none focus:ring focus:border-blue-500"
                />
            </div>

            <div className='w-full flex justify-between'>
                <button
                    className=' py-2 px-4 hover:outline hover:outline-gray-300 duration-500 ease-in-out'
                    onClick={() => setOpen(prevState => !prevState)}
                >
                    Cancel
                </button>

                <button
                    className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    onClick={handleSaveChanges}
                >
                    Save Changes
                </button>
            </div>

        </div>
    );
};

export default EditProfile;
