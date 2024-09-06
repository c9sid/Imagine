"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { DarkMode } from './DarkMode';
import { menulist } from '@/lib/data';
import Login from './Login';


const Navbar = () => {

    const pathname = usePathname();

    return (
        <div className='hidden md:flex items-center justify-between p-6 border-b'>
            <div className="logo">
                <Link href={'/'} className='hover:text-primary text-lg'>Imagine</Link>
            </div>
            <div className="menu flex gap-5">
                {
                    menulist.map((menu) => {
                        const isActive = pathname.endsWith(menu.href);
                        return (
                            <div key={menu.name} className="menu">
                                <ul className='flex justify-between items-center gap-x-4'>
                                    <li className={isActive ? "text-primary transition ease-in-out duration-200" : "text-zinc-500 hover:text-primary transition duration-200"}><Link href={menu.href}>{menu.name}</Link></li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className="icons flex gap-3 items-center justify-center">
                <div>
                    <DarkMode />
                </div>
                <div className='flex justify-center items-center'>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default Navbar