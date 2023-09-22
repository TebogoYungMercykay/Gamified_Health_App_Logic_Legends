'use client'
import React from 'react'
import {ReadonlyURLSearchParams, useSearchParams} from 'next/navigation';
import { FaHeart } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import {DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS, SidebarLinkInterface} from '@/app/constants'
import Link from "next/link";

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

interface SidebarLinkProps {
    link: SidebarLinkInterface,
    router:  ReadonlyURLSearchParams
}

const Sidebar = () => {
    const router = useSearchParams();

    return (
        <div className="bg-neutral-800 w-70 p-3 flex flex-col">
            <div className="flex items-center gap-2 px-1 py-3">
                <FaHeart size={24} style={{ color: 'grey' }} />
                <span className="text-neutral-200 text-lg">_LogicLegends</span>
            </div>
            <div className="py-8 flex flex-1 flex-col gap-0.5">
                {
                    DASHBOARD_SIDEBAR_LINKS.map((link) => <SidebarLink key={link.key} link={link} router={router} />)
                }
            </div>

            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
                {
                    DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => <SidebarLink key={link.key} link={link} router={router} /> )
                }
                <div className={`cursor-pointer text-neutral-300 ${linkClass}`}>
                    <Link href="/" className=' flex justify-between items-center gap-2'>
                        <span className="text-xl">
                          <HiOutlineLogout />
                        </span>
                        <div className=' text-base'>Logout</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

const SidebarLink = ({ link, router }: SidebarLinkProps) => {
    const isActive = router.get('path') === link.path;
    const active_tab_style = (isActive) ? `bg-neutral-700 text-white ${linkClass}` : `text-neutral-400 ${linkClass}`;

    return (
        <Link
            href={link.path}
            className={ active_tab_style}
        >
            <span className="text-xl">{link.icon}</span>
            {link.label}
        </Link>
    );
}

export default Sidebar