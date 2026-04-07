'use client'

import Link from "next/link";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
import { usePathname } from "next/navigation";

export default function Header() {

    /* Getting Pathname to make current active page in yellow in header */
    const pathname = usePathname()
    const homeClsName = pathname === '/' ? 'text-letter-yellow cursor-pointer' : 'cursor-pointer'
    const projectsClsName = pathname.startsWith('/projects') ? 'text-letter-yellow cursor-pointer' : 'cursor-pointer'
    const contactsClsName = pathname.startsWith('/contacts') ? 'text-letter-yellow cursor-pointer' : 'cursor-pointer'

    return (
        <header className='py-4 px-6 border-b border-edge-gray'>
            <ul className='flex justify-between items-center'>

                {/* Logo */}
                <li>
                    <Link href='/'>
                        <h2 className='font-bold text-2xl text-letter-yellow w-27.5'>WWT</h2>
                    </Link>
                </li>

                <div className='gap-6 hidden md:flex'>
                    {/* Home */}
                    <li className={`${homeClsName}`}>
                        Home
                    </li>

                    {/* Projects */}
                    <li className={`${projectsClsName}`}>
                        Projects
                    </li>

                    {/* Contacts */}
                    <li className={`${contactsClsName}`}>
                        Contacts
                    </li>
                </div>

                {/* Download CV */}
                <li className='hidden md:block border border-edge-white font-extrabold py-2 px-4 rounded-xl text-letter-white'>
                    <Link href='https://drive.google.com/drive/folders/1wW6CfjJ3K_bTFNeFafgp9Aup87z3yCFm?usp=sharing' target='_blank'>
                        Download CV
                    </Link>
                </li>

                {/* Hamburger Menu - only available in md screen size */}
                <li className='md:hidden'>
                    <HamburgerMenu />
                </li>
            </ul>
        </header>
    )
}