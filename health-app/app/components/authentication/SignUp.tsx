import React, {FormEvent} from 'react'
import {MdEmail} from "react-icons/md";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import {FaLock, FaUser} from "react-icons/fa";
import axios from "axios";

interface props {
    isLogin: boolean
}

const SignUp = ({isLogin}: props) => {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const sign_up_form = (isLogin) ? 'col-span-1 col-end-2 row-span-1 row-end-2 z-[1] opacity-0 py-0 px-20' : 'col-span-1 col-end-2 row-span-1 row-end-2 z-[2] py-0 px-20'

    const handle_sign_up = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const usernameInput = event.currentTarget.username as HTMLInputElement;
        const emailInput = event.currentTarget.email as HTMLInputElement;
        const passwordInput = event.currentTarget.password as HTMLInputElement;

        const name = usernameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;

        const userData = JSON.stringify({ name, email, password });
        console.log(userData);

        usernameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";

        const headers = {
            'Content-Type': 'application/json'
        };

        try {
            const response = await axios.post('http://localhost:3001/api/auth/register', userData, {
                headers: headers
            });

            console.log(response.data);
            // Redirect to the dashboard after successful registration
            router.push("/dashboard");

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className={sign_up_form}>
            <form className=' form-field' onSubmit={handle_sign_up}>
                <h2 className=' text-4xl text-[#444] mb-2.5'>Sign up</h2>
                <div className=' input-field-parent'>
                    <FaUser className=' icon-style' />
                    <input type='text' name='username' placeholder='Name' className=' input-field' />
                </div>

                <div className=' input-field-parent'>
                    <MdEmail className=' icon-style' />
                    <input type='email' name='email' placeholder='Email' className=' input-field' />
                </div>
                <div className=' input-field-parent'>
                    <FaLock className=' icon-style' />
                    <input type='password' name='password' placeholder='Password' className=' input-field' />
                </div>
                <button type="submit"  className=' btn text-white' >sign up</button>
            </form>
        </div>
    )
}
export default SignUp
