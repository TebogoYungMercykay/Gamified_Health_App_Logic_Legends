import React from 'react'
import Profile from "@/app/components/settings/Profile";
import Notification from "@/app/components/settings/Notification";
import Privacy from "@/app/components/settings/Privacy";
import Preferences from "@/app/components/settings/Preferences";
import Support from "@/app/components/settings/Support";
import About from "@/app/components/settings/About";
import AdsPreferences from "@/app/components/settings/AdsPreferences";

const Setting = () => {
    return (
        <div className=' flex p-3 gap-8 flex-col'>
            <Profile />
            <Notification />
            <Privacy />
            <Preferences />
            <Support />
            <About />
            <AdsPreferences />
            <button className=' w-full bg-red-400'>Delete Account</button>
        </div>
    )
}
export default Setting
