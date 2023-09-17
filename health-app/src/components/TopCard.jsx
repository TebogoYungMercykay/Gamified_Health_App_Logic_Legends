import React from 'react';

export default function TopCard({ backgroundColor, backgroundImage, avatarSrc, name, subName, imageSrc }) {
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
                <img src={avatarSrc} alt="Avatar" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
                <h6 style={{ color: 'white' }}>{name}</h6>
                <p style={{ color: 'white' }}>{subName}</p>
            </div>
            <img src={imageSrc} alt="Leader_Profile" style={{ width: '151px', height: '151px', borderRadius: '50%', margin: '5px', objectFit: 'cover' }}
            />
        </div>
    );
}
