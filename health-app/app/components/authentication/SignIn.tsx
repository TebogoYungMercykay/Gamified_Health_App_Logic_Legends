import React, {FormEvent} from 'react'
import {MdEmail} from "react-icons/md";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import {FaLock} from "react-icons/fa";
import axios from "axios";

interface props {
    isLogin: boolean
}

const SignIn = ({isLogin}: props) => {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const sign_in_form = (isLogin) ? 'col-span-1 col-end-2 row-span-1 row-end-2 z-[2] py-0 px-20' : 'col-span-1 col-end-2 row-span-1 row-end-2 z-[1] opacity-0 py-0 px-20'
    const handle_sign_in = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailInput = event.currentTarget.email as HTMLInputElement;
        const passwordInput = event.currentTarget.password as HTMLInputElement;

        const email = emailInput.value;
        const password = passwordInput.value;

        const userData = JSON.stringify({ email, password });
        console.log(userData);

        emailInput.value = "";
        passwordInput.value = "";

        const headers = {
            'Content-Type': 'application/json'
        };

        try {

            const response = await axios.post('http://localhost:3001/api/auth/login', userData, {
                headers: headers
            });

            console.log(response.data);
            // Redirect to the dashboard after successful registration
            router.push("/dashboard");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className={sign_in_form}>
            <form className=' form-field' onSubmit={handle_sign_in}>
                <h2 className=' text-4xl text-[#444] mb-2.5'>Sign in</h2>
                <div className=' input-field-parent'>
                    <MdEmail className=' icon-style' />
                    <input type='email' name='email' placeholder='Email' className=' input-field' />
                </div>
                <div className=' input-field-parent'>
                    <FaLock className=' icon-style' />
                    <input type='password' name='password' placeholder='Password' className=' input-field' />
                </div>
                <button type="submit"  className=' btn text-white' >login</button>
            </form>
        </div>
    )
}
export default SignIn