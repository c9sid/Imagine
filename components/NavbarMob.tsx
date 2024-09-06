"use client"

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { DarkMode } from './DarkMode';
import { menulist } from '@/lib/data';
import Login from './Login';

const NavbarMob = () => {

    const pathname = usePathname();
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <div className='sticky top-0 bg-background/70 backdrop-blur-sm z-50 flex md:hidden items-center justify-between p-5 border-b'>
                <div className="logo">
                    <Link href={'/'} className='hover:text-primary text-lg'>Imagine</Link>
                </div>
                <div className="menu flex gap-5">
                    <button onClick={() => setNavbar(!navbar)}>
                        {navbar ? (<X className='hover:text-primary transition-all hover:scale-110 cursor-pointer' />) : (<Menu className='hover:text-primary transition-all hover:scale-110 cursor-pointer' />)}
                    </button>
                </div>
            </div>
            <div className={`w-full fixed z-10 ease-in-out duration-300 ${navbar ? "translate-x-0" : "translate-x-full"}`}>
                <div className='flex justify-start items-start'>
                    <div className='h-screen fixed md:hidden w-full bg-background shadow-md rounded-md'>
                        <div className='space-y-1 pt-4 pb-2'>
                            {menulist.map((link) => {
                                const isActive = pathname.endsWith(link.href);
                                return (
                                    <Link key={link.name} className={`${isActive ? "text-primary" : "text-zinc-500"} flex hover:bg-primary/10 rounded hover:text-primary py-2 px-3 mx-3`} onClick={() => setNavbar(!navbar)} href={link.href}>{link.name}</Link>
                                )
                            })}
                        </div>
                        <hr />
                        <div className="icons flex gap-3 py-5 px-2 mx-2 justify-between items-center">
                            <div className=''>
                                <Login />
                            </div>
                            <div>
                                <DarkMode />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarMob