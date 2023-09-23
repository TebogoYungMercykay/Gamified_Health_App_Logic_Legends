'use client'
import React, {useState} from 'react'
import { PNG } from 'pngjs';
import jsQR from "jsqr";

interface QrCodeDecoderProp {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const QrCodeDecoder = ({setOpen}:QrCodeDecoderProp) => {
    const [qrCodeData, setQRCodeData] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const handleImageUpload = async (e: any) => {
        const file = e.target.files[0];

        if (file) {
            try {
                const fileReader = new FileReader();
                fileReader.onload = (event : any) => {
                    // const imageData = new  Uint8ClampedArray(event.target.result);
                    const data = PNG.sync.read(Buffer.from(new Uint8Array(event.target.result)));
                    const code = jsQR(data.data, data.width, data.height);

                    if (code) {
                        // where Backend could be
                        setQRCodeData(code.data);
                        setOpen(prevState => !prevState);
                    } else {
                        setQRCodeData('No QR code found in the image.');
                        setOpen(prevState => !prevState);
                    }
                };

                fileReader.readAsArrayBuffer(file);
            } catch (error) {

                setQRCodeData('Error decoding QR code.');
                setOpen(prevState => !prevState);
            }
        }
    };

    return (
        <div className=' flex flex-col gap-4 bg-white p-3'>
            <h1 className=' w-full fex justify-between'>Decode QR Code</h1>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {qrCodeData && <p>Scanned QR Code Data: {qrCodeData}</p>}
        </div>
    );
}
export default QrCodeDecoder
