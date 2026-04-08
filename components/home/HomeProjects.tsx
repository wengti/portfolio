'use client'
import { projectsData } from "@/data/projects";
import Image from "next/image";
import { motion } from 'motion/react'

export default function HomeProjects() {

    return (
        <section className='px-6 flex flex-col gap-2'>

            {/* Heading of the section */}
            <div className='flex justify-between'>
                <h2 className='text-letter-yellow font-bold text-lg'>
                    FEATURED PROJECTS
                </h2>
                <p className='underline text-xs md:text-sm self-end mr-2 cursor-pointer'>
                    See All
                </p>
            </div>

            {/* Grid Area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 content-center max-w-400 mx-auto">

                {/* Individual Project Card */}
                {
                    projectsData.map((data, idx) => {
                        return (
                            <motion.div
                                key={data.name}
                                className='flex flex-col gap-2 bg-card-black py-2 border-2 border-edge-yellow rounded-2xl'
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.25 * idx }}
                                viewport={{ once: true }}
                            >

                                {/* Cover Image for each project */}
                                <div>
                                    <Image
                                        src={`/${data.filename}/1.png`}
                                        alt={`The feature image for the project ${data.name}.`}
                                        height={1080}
                                        width={1920}
                                        className="rounded-2xl w-14/15 mx-auto"
                                    />
                                </div>

                                {/* Description of the project */}
                                <div className='px-4 text-xs flex flex-col gap-1'>
                                    <p>
                                        {data.type.toUpperCase()} | {data.year}
                                    </p>
                                    <h3 className='font-bold text-letter-white text-2xl'>
                                        {data.name}
                                    </h3>
                                    <div className='flex gap-1 flex-wrap'>
                                        {
                                            data.tech.map(item =>
                                                <div className='bg-card-yellow text-letter-yellow border border-edge-yellow rounded-sm w-fit px-2 py-1' key={item}>
                                                    {item}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <p className='leading-6 text-base mt-2'>
                                        {data.description}
                                    </p>
                                </div>
                            </motion.div>

                        )
                    })
                }
            </div>
        </section>
    )
}