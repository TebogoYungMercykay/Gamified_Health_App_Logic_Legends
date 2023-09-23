import React from 'react'
import QrCodeScanner from "@/app/components/qrcode/QrCodeScanner";

interface QrCodeScannerFocusAreaProp {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const QrCodeScannerFocusArea = ({setOpen}: QrCodeScannerFocusAreaProp) => {
    return (
        <div className='relative w-64 h-64'>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[70%] z-50 w-56 h-40 border-2 border-blue-500">
                <div className="absolute top-0 left-0 w-8 h-8 border-2 border-blue-500 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-2 border-blue-500 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-2 border-blue-500 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-2 border-blue-500 rounded-br-lg"></div>
            </div>
            <QrCodeScanner setOpen = {setOpen} />
        </div>
    )
}
export default QrCodeScannerFocusArea
