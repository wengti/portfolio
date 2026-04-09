'use client'
import { ProjectsDataType } from "@/type/type";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";
import { LuPresentation } from "react-icons/lu";
import {motion} from 'motion/react'

export default function ProjectDetailSummary({ data }: { data: ProjectsDataType }) {

    return (
        <motion.div 
            className='flex flex-col gap-6 lg:w-1/2'
            initial={{opacity:0, y: 25}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 1}}
            viewport={{once: true}}
        >
            {/* tagline */}
            <p className='text-xs font-semibold'>
                {data.type.toUpperCase()} | {data.year}
            </p>

            {/* project title */}
            <h1 className='text-5xl font-semibold text-letter-white -mt-2'>
                {data.name}
            </h1>

            {/* subtitle */}
            <p className='text-letter-mute2 -mt-4'>
                {data.description}
            </p>

            {/* Tech label */}
            <div className='flex gap-1 flex-wrap'>
                {
                    data.tech.map(item =>
                        <div className='bg-card-yellow text-letter-yellow border border-edge-yellow rounded-sm text-xs w-fit px-2 py-1' key={item}>
                            {item}
                        </div>
                    )
                }
            </div>

            {/* Button Group */}
            <div className='flex gap-2'>
                {
                    data.liveSite &&
                    <button className='text-letter-white font-semibold border border-edge-white rounded-md py-2 w-3/7 lg:h-fit hover:bg-edge-yellow active:bg-edge-yellow'>
                        <Link href={data.liveSite} target='_blank' className='flex items-center justify-center gap-2 p-1'>
                            <GrDeploy />
                            <p>Live Site</p>
                        </Link>
                    </button>
                }
                {
                    data.gitHub &&
                    <button className='text-letter-white font-semibold border border-edge-white rounded-md py-2 w-3/7 lg:h-fit hover:bg-edge-yellow active:bg-edge-yellow'>
                        <Link href={data.gitHub} target='_blank' className='flex items-center justify-center gap-2 p-1'>
                            <FaGithub className='text-xl' />
                            <p>Github</p>
                        </Link>
                    </button>
                }
                {
                    data.demo &&
                    <button className='text-letter-white font-semibold border border-edge-white rounded-md py-2 w-3/7 lg:h-fit hover:bg-edge-yellow active:bg-edge-yellow'>
                        <Link href={data.demo} target='_blank' className='flex items-center justify-center gap-2 p-1'>
                            <LuPresentation className="text-xl" />
                            <p>Demo</p>
                        </Link>
                    </button>
                }
            </div>
        </motion.div>
    )
}