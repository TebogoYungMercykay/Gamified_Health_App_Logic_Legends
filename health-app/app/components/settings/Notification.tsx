'use client'
import React, {useState} from 'react'

const Notification = () => {
    const [isNotificationOn, setIsNotificationOn] = useState(false);

    const toggleNotification = () => {
        setIsNotificationOn(!isNotificationOn);
    };
    return (
        <div className=' setting-field'>
            <div>Notifications</div>
            <label htmlFor="notification-toggle" className="flex items-center cursor-pointer">
                <div
                    className={`relative w-11 h-6  flex rounded-full items-center  ${
                        isNotificationOn ? 'bg-blue-400' : 'bg-gray-300'
                    }`}
                >
                    <input
                        type="checkbox"
                        id="notification-toggle"
                        className="hidden"
                        checked={isNotificationOn}
                        onChange={toggleNotification}
                    />
                    <div className="toggle w-6 h-6 rounded-full absolute left-0 transform transition-transform translate-x-0"></div>
                    <div
                        className={`circle w-6 h-6 rounded-full absolute left-0 transform transition-transform ${
                            isNotificationOn ? 'translate-x-full' : 'translate-x-0'
                        } bg-white`}
                    ></div>
                </div>
            </label>
        </div>
    )
}
export default Notification
