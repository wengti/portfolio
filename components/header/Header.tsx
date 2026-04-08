'use client'

import Link from "next/link";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { motion } from 'motion/react'

export default function Header() {

    /* Getting Pathname to make current active page in yellow in header */
    const pathname = usePathname()
    const homeClsName = pathname === '/' ? 'text-letter-yellow cursor-pointer hover:text-letter-yellow' : 'cursor-pointer hover:text-letter-yellow'
    const projectsClsName = pathname.startsWith('/projects') ? 'text-letter-yellow cursor-pointer hover:text-letter-yellow' : 'cursor-pointer hover:text-letter-yellow'
    const contactsClsName = pathname.startsWith('/contact') ? 'text-letter-yellow cursor-pointer hover:text-letter-yellow' : 'cursor-pointer hover:text-letter-yellow'

    /* Make header appear when scrolling up */
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, 'change', (current) => {
        const previous = scrollY.getPrevious() ?? 0
        if (current > previous && current > 150) setHidden(true)
        else setHidden(false)
    })

    return (
        <motion.header
            className='py-4 px-6 border-b border-edge-gray h-17 sticky top-0 bg-background-black'
            animate={{
                y: hidden ? -140 : 0,
                opacity: hidden ? 0 : 1,
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
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
                        <Link href='/'>
                            Home
                        </Link>
                    </li>

                    {/* Projects */}
                    <li className={`${projectsClsName}`}>
                        <Link href='/projects'>
                            Projects
                        </Link>
                    </li>

                    {/* Contacts */}
                    <li className={`${contactsClsName}`}>
                        <Link href='/contact'>
                            Contact
                        </Link>
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
        </motion.header>
    )
}