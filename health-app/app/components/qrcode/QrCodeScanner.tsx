'use client'
import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import { BrowserMultiFormatReader } from '@zxing/library';

interface QrCodeScannerProp {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const QrCodeScanner = ({setOpen}:QrCodeScannerProp) => {
    const webcamRef = useRef(null);
    const [scanning, setScanning] = useState(false);
    const [loading, setLoading] = useState(false); // Added loading state
    const codeReader = new BrowserMultiFormatReader();
    let codeReaderTimeout: any;

    const startScanning = () => {
        setScanning(true);
    };

    const stopScanning = () => {
        setScanning(false);
        setLoading(false);
    };

    useEffect(() => {
        const handleScan = () => {
            codeReader.listVideoInputDevices().then((videoInputDevices) => {

                const selectedDeviceId = videoInputDevices[0].deviceId;
                codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {
                    if (result) {
                        console.log('QR Code Result:', result.getText());

                        setLoading(true);
                        stopScanning();
                        setOpen(prevState => !prevState);
                    }
                    if (err && !scanning) {
                        console.error('QR Code Error:', err);
                        setOpen(prevState => !prevState);
                    }
                });
            });
        };

        if (scanning) {
            handleScan();
            codeReaderTimeout = setInterval(handleScan, 1000);
        } else {
            clearInterval(codeReaderTimeout);
        }

        return () => {
            clearInterval(codeReaderTimeout);
        };
    }, [scanning]);

    return (
        <div >
            <Webcam
                ref={webcamRef}
                audio={false}
                mirrored={true}
            />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <video
                    id="video"
                    autoPlay
                    playsInline
                    style={{ width: '100%', height: '100%' }}
                ></video>
            )}
        </div>
    );
};

export default QrCodeScanner;