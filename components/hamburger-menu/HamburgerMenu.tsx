'use client'

import { RxHamburgerMenu } from "react-icons/rx"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../tailgrids/core/dropdown"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function HamburgerMenu() {
    
    /* General Class Name for all hamburger menu item */
    const generalClsName = 'cursor-pointer hover:bg-edge-gray rounded-lg'

    /* Getting Pathname to make current active item in yellow in hamburger menu */
    const pathname = usePathname()
    const homeClsName = pathname === '/' ? 'text-letter-yellow' : ''
    const projectsClsName = pathname.startsWith('/projects') ? 'text-letter-yellow' : ''
    const contactsClsName = pathname.startsWith('/contacts') ? 'text-letter-yellow' : ''

    return (
        <DropdownMenu>

            {/* Hamburger Menu Icon */}
            <DropdownMenuTrigger className='flex items-center'>
                <RxHamburgerMenu className=' text-letter-white text-2xl'/>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='bg-card-black border-2 border-edge-gray rounded-lg cursor-pointer p-1 text-letter-white'>
                {/* Home */}
                <DropdownMenuItem className={`${generalClsName} ${homeClsName}`}>
                    Home
                </DropdownMenuItem>

                {/* Projects */}
                <DropdownMenuItem className={`${generalClsName} ${projectsClsName}`}>
                    Projects
                </DropdownMenuItem>

                {/* Contact */}
                <DropdownMenuItem className={`${generalClsName} ${contactsClsName}`}>
                    Contact
                </DropdownMenuItem>

                {/* Download CV */}
                <DropdownMenuItem className={`${generalClsName}`}>
                    <Link href='https://drive.google.com/drive/folders/1wW6CfjJ3K_bTFNeFafgp9Aup87z3yCFm?usp=sharing' target='_blank'>
                        Download CV
                    </Link>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}