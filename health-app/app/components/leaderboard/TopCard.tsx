import React from 'react'
import Image from "next/image";

const TopCard = ({ backgroundColor, backgroundImage, avatarSrc, name, subName, imageSrc }:any) => {
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
                <Image
                    src={avatarSrc}
                    alt="Avatar"
                    width={60}
                    height={60}
                    style={{ width: '60px', height: '60px', borderRadius: '50%' }}
                />
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