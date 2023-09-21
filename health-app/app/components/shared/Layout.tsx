import React, {ReactNode} from 'react'
import Header from "@/app/components/shared/Header";
import Sidebar from "@/app/components/shared/Sidebar";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-neutral-100 h-screen top-0 left-0 fixed w-screen overflow-hidden flex flex-row">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Header />
                <div className="flex-1 p-4 min-h-0 overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Layout
