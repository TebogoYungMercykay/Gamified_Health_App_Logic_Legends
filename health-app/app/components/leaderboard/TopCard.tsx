import React from 'react'
import Image from "next/image";
import { IoPersonCircleOutline } from 'react-icons/io5';

const TopCard = ({ backgroundColor, backgroundImage, avatar, name, subName, imageSrc }:any) => {
    return (
        <div style={{
            display: 'inline-flex',
            borderRadius: '4px',
            backgroundColor: backgroundColor,
            margin: '16px',
            padding: '7px',
            backgroundImage: backgroundImage,
        }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="w-12 h-12 min-w-[2.5rem] rounded-sm">
                    <IoPersonCircleOutline
                        className="w-full h-full text-gray-300"
                        size={40}
                    />
                </div>
                <h6 style={{ color: 'white' }}>{name}</h6>
                <p style={{ color: 'white' }}>{subName}</p>
            </div>
            <Image
                src={imageSrc}
                alt="Leader_Profile"
                width={151}
                height={151}
                style={{ width: '151px', height: '151px', borderRadius: '50%', margin: '5px', objectFit: 'cover' }}
            />
        </div>
    );
}
export default TopCard