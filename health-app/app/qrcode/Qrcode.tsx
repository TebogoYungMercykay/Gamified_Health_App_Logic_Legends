'use client'
import React, {useState} from 'react'
import {Box, Fade, Modal} from "@mui/material";
import QrCodeScannerFocusArea from "@/app/components/qrcode/QrCodeScannerFocusArea";
import QrCodeDecoder from "@/app/components/qrcode/QrCodeDecoder";
import CreateQrCode from "@/app/components/qrcode/CreateQrCode";

const styleBox = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '&:focus': {
        outline: 'none',
    },
};

const QrCode = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [display, setDisplay] = useState<number>(0);

    const handleOpen = (path: number) => {
        setDisplay(path);
        setOpen(true);
    }
    return (
        <div className=' w-full h-full flex flex-col gap-4  justify-center items-center'>
            <button
                className=" text-center w-[207px] p-3 bg-blue-300 hover:bg-blue-500 transform transition duration-500 ease-in-out active:scale-90 "
                onClick={() => handleOpen(1)}
            >
                Create QR Code
            </button>
            <button
                className=' text-center w-[207px] p-3 bg-gray-400 hover:bg-gray-500 transform transition duration-500 ease-in-out active:scale-90'
                onClick={() => handleOpen(2)}
            >
                Scan QR Code
            </button>
            <button
                className=' text-center w-[207px] p-3 bg-gray-300 hover:bg-gray-400 transform transition duration-500 ease-in-out active:scale-90'
                onClick={() => handleOpen(3)}
            >
                Decode QR Code
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
                        {
                            display == 1 ? <CreateQrCode setOpen = {setOpen} /> :  (display == 2) ? <QrCodeScannerFocusArea setOpen = {setOpen}/> : (<QrCodeDecoder setOpen={setOpen} />)
                        }
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}
export default QrCode