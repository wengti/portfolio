'use client'

import { RxHamburgerMenu } from "react-icons/rx"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../tailgrids/core/dropdown"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function HamburgerMenu() {

    const pathname = usePathname()
    const generalClsName = 'cursor-pointer hover:bg-edge-gray rounded-lg'
    const homeClsName = pathname === '/' ? 'text-letter-yellow' : ''
    const projectsClsName = pathname.startsWith('/projects') ? 'text-letter-yellow' : ''
    const contactsClsName = pathname.startsWith('/contacts') ? 'text-letter-yellow' : ''

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center'>
                <RxHamburgerMenu className=' text-letter-white text-2xl'/>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='bg-card-black border-2 border-edge-gray rounded-lg cursor-pointer p-1 text-letter-white'>

                <DropdownMenuItem className={`${generalClsName} ${homeClsName}`}>
                    Home
                </DropdownMenuItem>

                <DropdownMenuItem className={`${generalClsName} ${projectsClsName}`}>
                    Projects
                </DropdownMenuItem>

                <DropdownMenuItem className={`${generalClsName} ${contactsClsName}`}>
                    Contact
                </DropdownMenuItem>

                <DropdownMenuItem className={`${generalClsName}`}>
                    <Link href='https://drive.google.com/drive/folders/1wW6CfjJ3K_bTFNeFafgp9Aup87z3yCFm?usp=sharing'>
                        Download CV
                    </Link>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}