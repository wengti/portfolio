'use client'

import Link from "next/link";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname()

    const homeClsName = pathname === '/' ? 'text-letter-yellow cursor-pointer' : 'cursor-pointer'
    const projectsClsName = pathname.startsWith('/projects') ? 'text-letter-yellow cursor-pointer' : 'cursor-pointer'
    const contactsClsName = pathname.startsWith('/contacts') ? 'text-letter-yellow cursor-pointer' : 'cursor-pointer'

    return (
        <header className='py-4 px-6 border-b border-edge-gray'>
            <ul className='flex justify-between items-center'>
                <li>
                    <Link href='/'>
                        <h2 className='font-bold text-2xl text-letter-yellow w-27.5'>WWT</h2>
                    </Link>
                </li>

                <div className='gap-6 hidden md:flex'>
                    <li className={`${homeClsName}`}>
                        Home
                    </li>
                    <li>
                        Projects
                    </li>

                    <li>
                        Contacts
                    </li>
                </div>

                <li className='hidden md:block border border-edge-white font-extrabold py-2 px-4 rounded-xl text-letter-white'>
                    <Link href='https://drive.google.com/drive/folders/1wW6CfjJ3K_bTFNeFafgp9Aup87z3yCFm?usp=sharing' target='_blank'>
                        Download CV
                    </Link>
                </li>

                <li className='md:hidden'>
                    <HamburgerMenu />
                </li>
            </ul>
        </header>
    )
}