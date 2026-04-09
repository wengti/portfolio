'use client'
import { motion } from 'motion/react'

export default function ProjectDetailPublications({ references }: { references: string[] }) {

    return (
        <ul className='flex flex-col gap-2'>
            {
                references.map((reference, idx) => {
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <li className='text-letter-mute2'>
                                <span className='text-letter-yellow'>{idx + 1}.</span> {reference}
                            </li>
                        </motion.div>
                    )
                })
            }
        </ul >
    )
}