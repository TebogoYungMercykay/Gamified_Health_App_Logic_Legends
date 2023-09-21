'use client'
import React, {useState} from 'react'
import SignIn from "@/app/components/authentication/SignIn";
import SignUp from "@/app/components/authentication/SignUp";
import Image from "next/image";
import activity_tracker from "@/public/undraw_activity_tracker_re_2lvv.svg";
import fitness_tracker from "@/public/undraw_fitness_tracker_3033.svg"

const Authentication = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const authTranslate = (isLogin) ? ' auth-field before:translate-y-[-50%] before:right-[48%]' : 'auth-field before:translate-y-[-50%] before:translate-x-[100%] before:right-[52%]';
    const left_panel = (isLogin) ? 'panel pt-12 pr-[17%] pb-8 pl-[12%] panel-content' : 'panel pt-12 pr-[17%] pb-8 pl-[12%] panel-content translate-x-[-800px]'
    const right_panel = (isLogin) ? 'panel pt-12 pr-[12%] pb-8 pl-[17%] translate-x-[800px] panel-content' : 'panel pt-12 pr-[12%] pb-8 pl-[17%] translate-x-0 panel-content'
    const sign_in_sign_up = (isLogin) ? 'sign-in-sign-up' : 'sign-in-sign-up left-1/4'
    const handleAnimation = () => setIsLogin(prev => !prev);

    return (
        <div className={authTranslate}>
            <div className=' absolute w-full h-full top-0 left-0'>
                <div className={sign_in_sign_up}>
                    <SignIn isLogin={isLogin}/>
                    <SignUp isLogin={isLogin}/>
                </div>
                <div className=' absolute w-full h-full top-0 left-0 grid grid-cols-2'>
                {/*    Left Panel*/}
                    <div className={left_panel}>
                        <div className='text-white'>
                            <h3 className=' font-semibold text-2xl'>New here&#63;</h3>
                            <p className=' text-base p-3.5'>Time for a change in your routine &#45; putting the spotlight on health&#46;</p>
                            <button
                                className=' btn bg-transparent border-2 border-solid'
                                onClick={handleAnimation}
                            >
                                Sign up
                            </button>
                            <Image
                                src={fitness_tracker}
                                alt='activity tracker'
                            />
                        </div>
                    </div>
                    {/* Right Panel*/}
                    <div className={right_panel}>
                        <div className=' text-white'>
                            <h3 className=' font-semibold text-2xl'>One of us&#63;</h3>
                            <p className=' text-base p-3.5'>Continue to make a self-impact and influence others&#46;</p>
                            <button
                                className=' btn bg-transparent border-2 border-solid focus:scale-90'
                                onClick={handleAnimation}
                            >
                                Sign In
                            </button>
                            <Image
                                src={activity_tracker}
                                alt='activity tracker'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Authentication
