'use client'
import { ProjectsDataType } from "@/type/type";
import { motion } from 'motion/react'
export default function ProjectDetailOverview({ data }: { data: ProjectsDataType }) {
    return (
        <motion.div 
            className='text-letter-mute2'
            initial={{opacity:0, x: 25}}
            whileInView={{opacity:1, x:0}}
            transition={{duration: 1 }}
            viewport={{once: true}}
        >
            {data.overview}
        </motion.div>
    )
}