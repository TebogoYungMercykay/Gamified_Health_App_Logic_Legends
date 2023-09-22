'use client'
import React, {useState} from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5';
import EditProfile from "@/app/components/settings/EditProfile";
import {Box, Fade, Modal} from "@mui/material";

const styleBox = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '&:focus': {
        outline: 'none',
    },
};
const Profile = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [name, setName] = useState<string>('Logic');
    const handleOpen = () => setOpen(true);
    return (
        <div className=' w-full flex flex-col gap-6 items-center'>
            <div className='w-72 h-72 min-w-[2.5rem] rounded-full'>
                <IoPersonCircleOutline
                    className="w-full h-full text-gray-500"
                    size={100}
                />
            </div>
            <h2>{name}</h2>
            <button
                className=' bg-blue-500 py-3 px-6 text-white rounded-3xl mb-7'
                onClick={handleOpen}
            >
                Edit Profile
            </button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box sx={styleBox}>
                        <EditProfile setOpen = {setOpen} />
                    </Box>
                </Fade>
            </Modal>

        </div>
    )
}

export default Profile