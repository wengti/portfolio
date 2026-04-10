'use client'
import { motion } from 'motion/react'
import Link from "next/link";

export default function HomeAbout() {

    return (
        <section className='px-6 pt-12 pb-10 lg:flex lg:gap-2'>

            <div className='grow'>
                {/* Badge */}
                <div className='bg-card-yellow text-letter-yellow font-bold text-sm border border-edge-yellow rounded-full w-fit py-1 px-3'>
                    AVAILABLE FOR WORK
                </div>

                {/* Name */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className='text-3xl font-semibold mt-4 flex flex-col lg:flex-row lg:gap-2'>
                        <span className='text-letter-white'>Wong</span>
                        <span className='text-letter-yellow'>Weng Ti</span>
                    </h1>
                </motion.div>

                {/* Short Description */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <p className='text-sm mt-2'>
                        EEE grad dabbling into full-stack web development. Building real products with React, Next.js & Supabase.
                    </p>
                </motion.div>


            </div>

            {/* Button Group */}
            <motion.div
                className='mt-6 text-xl flex justify-center items-end gap-4 lg:w-2/7 lg:mt-0'
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Link
                    href='/projects'
                    className='text-letter-white font-semibold border border-edge-white rounded-md py-2 w-3/7 lg:h-fit hover:bg-edge-yellow active:bg-edge-yellow text-center'>
                    View <br /> Projects
                </Link>
                <Link
                    href='https://drive.google.com/drive/folders/1wW6CfjJ3K_bTFNeFafgp9Aup87z3yCFm?usp=sharing'
                    target='_blank'
                    className='text-letter-white font-semibold border border-edge-white rounded-md py-2 w-3/7 lg:h-fit hover:bg-edge-yellow active:bg-edge-yellow text-center'
                >
                    Download <br /> CV
                </Link>
            </motion.div>


        </section>
    )
}