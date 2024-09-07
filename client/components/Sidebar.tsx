'use client'
import React from 'react'
import { Button } from './ui/button'
import { Menu, Bell, Sun, Settings, LucideIcon, Layout } from "lucide-react";
import { useAppDispatch, useAppSelector } from '../app/redux';
import { setIsSidebarCollapsed } from '../state';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SidebarItems } from '../constant';

interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
}

const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed
}: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");
    return (
        <Link href={href}>
            <div className={`cursor-pointer flex items-center 
                ${isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"} 
                hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors 
                ${isActive ? "bg-blue-200 text-white" : ""}`}>
                    <Icon className='w-6 h-5 !text-gray-700'/>
                    <span className={`${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}>
                        {label}
                    </span>
            </div>
        </Link>
    )
};

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    };

    const sidebarClassNames = `fixed flex flex-col h-full ${
        isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
    } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

    return (
        <div className={sidebarClassNames}>
            <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"}`}>
                <div aria-label="Sidebar Logo">Logo</div>
                <h1 className={`${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>
                    LogoName
                </h1>
            </div>

            <Button
                className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
                onClick={toggleSidebar}
                aria-label="Toggle Sidebar"
            >
                <Menu className="w-4 h-4" />
            </Button>

            <div className="flex-row mt-8">
                {SidebarItems.map((item) => (
                    <SidebarLink
                        key={item.href}
                        href={item.href}
                        icon={item.icon}
                        label={item.label}
                        isCollapsed={isSidebarCollapsed}
                    />
                ))}
            </div>

            
        </div>
    );
};

export default Sidebar;
