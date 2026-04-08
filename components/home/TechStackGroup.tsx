'use client'
import { motion } from 'motion/react'
import { techData } from "@/data/tech"

export default function TechStackGroup({ title, techItems }: { title: string, techItems: string[] }) {

    return (
        <div className='flex flex-col gap-1'>
            <p className='text-sm font-semibold'>{title}</p>
            <div className='flex flex-wrap gap-2'>
                {techItems.map((item, idx) => {
                    if (techData.highlight.includes(item)) {
                        return (
                            <motion.div
                                key={item}
                                className='px-2 py-1 w-fit text-sm border border-edge-yellow bg-card-yellow text-letter-yellow rounded-sm'
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.1 * idx }}
                                viewport={{ once: true }}
                            >
                                {item}
                            </motion.div>
                        )
                    }
                    else {
                        return (
                            <motion.div
                                key={item}
                                className='px-2 py-1 w-fit text-sm border border-edge-gray bg-card-black text-letter-white rounded-sm'
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.05 * idx }}
                                viewport={{ once: true }}
                            >
                                {item}
                            </motion.div>
                        )
                    }
                }
                )}
            </div>
        </div>
    )
}