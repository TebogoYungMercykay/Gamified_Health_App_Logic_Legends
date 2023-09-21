'use client'
import React, {useState} from 'react'

const Preferences = () => {
    const [isNightModeOn, setIsNightModeOn] = useState(false);

    const toggleNightMode = () => {
        setIsNightModeOn(!isNightModeOn);
    };

    return (
        <div className='setting-field'>
            <div>Night Mode</div>
            <label htmlFor="night-mode-toggle" className="flex items-center cursor-pointer">
                <div
                    className={`relative w-11 h-6 flex rounded-full items-center ${
                        isNightModeOn ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                >
                    <input
                        type="checkbox"
                        id="night-mode-toggle"
                        className="hidden"
                        checked={isNightModeOn}
                        onChange={toggleNightMode}
                    />
                    <div className="toggle w-6 h-6 rounded-full absolute left-0 transform transition-transform translate-x-0"></div>
                    <div
                        className={`circle w-6 h-6 rounded-full absolute left-0 transform transition-transform ${
                            isNightModeOn ? 'translate-x-full' : 'translate-x-0'
                        } bg-white`}
                    ></div>
                </div>
            </label>
        </div>
    );
}
export default Preferences