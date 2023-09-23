import React from 'react'
import Image from "next/image";
import qrcode from "@/public/qrcode.png"
import Link from "next/link";

interface CreateQrCodeProp {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const CreateQrCode = ({setOpen}: CreateQrCodeProp ) => {

    return (
        <div className=' w-full h-full bg-white flex flex-col gap-4 p-3'>
            <h1 className=' w-full flex justify-center uppercase'>
                qr code
            </h1>
            <Image
                src={qrcode}
                alt='qr code'
                width={192}
                height={192}
            />

            <Link
                href='../../../public/qrcode.png'
                className=' px-3 text-white text-center bg-blue-500 transform transition duration-500 ease-in-out active:scale-90'
                download="logiclengend.png"
                onClick={() => setOpen(prevState => !prevState)}
            >
                Download
            </Link>
        </div>
    )
}
export default CreateQrCode

