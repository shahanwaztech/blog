'use client'
import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import ThemeSwitch from "@/components/ThemeSwitch";

const NavigationObject = [
    {
        name: 'Blog',
        href: '/'
    },
    {
        name: 'About Us',
        href: '/about'
    },
    {
        name: 'Contact Us',
        href: '/contact_us'
    },
    {
        name: 'Login',
        href:'/login'
    }
];

const NavBar = () => {
    const router = usePathname();
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <div className="h-[60px] flex justify-between items-center">
            <h1 onClick={() => setToggle(false)} className='text-[#1A1A1A] dark:text-[#fff] text-[20px] font-bold uppercase cursor-pointer'>THE BLOG</h1>
            <div style={toggle ? { display: "none" } : { display: 'flex' }} className="flex flex-row gap-[14px] items-center">
                {NavigationObject.map((navItem, index) => (
                        <Link key={index} href={navItem.href} className={`text-[17px]  ${router === navItem.href ? 'font-bold underline' : 'font-normal'}`}>
                            {navItem.name}
                        </Link>
                ))}
                <ThemeSwitch />
                <div onClick={() => setToggle(true)}>toggle</div>
            </div>
        </div>
    );
}

export default NavBar;
