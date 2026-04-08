import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {

    return (
        <footer className='border-t border-edge-gray h-17 p-2 flex gap-2 justify-center items-center'>

            {/* Linkedin and Github */}
            <div className='flex gap-4 text-3xl text-letter-yellow'>
                <Link href='https://github.com/wengti' target='_blank'>
                    <FaGithub />
                </Link>
                <Link href='https://www.linkedin.com/in/wong-weng-ti-a78369151/' target='_blank'>
                    <FaLinkedin />
                </Link>
            </div>

            {/* Copyright */}
            <p className='text-center'>  | Created by Weng Ti Wong</p>
        </footer>
    )
}