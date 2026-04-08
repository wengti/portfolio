import { ProjectsDataType } from '@/type/type'
import { motion } from 'motion/react'
import Image from 'next/image'

export default function ProjectsSingleCard({data, isHiddenOnLargeScreen}: {data: ProjectsDataType, isHiddenOnLargeScreen: boolean}) {


    const hiddenCls = isHiddenOnLargeScreen ? 'lg:hidden' : ''

    return (
        <motion.div
            key={data.name}
            className={`flex flex-col gap-2 bg-card-black py-2 border-2 border-edge-yellow rounded-2xl min-h-125 ${hiddenCls}`}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
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
}