'use client'
import { projectsData } from "@/data/projects";
import Image from "next/image";
import { motion } from 'motion/react'
import Link from "next/link";
import HomeProjectsGrid from "./HomeProjectsGrid";

export default function HomeProjects() {

    return (
        <section className='px-6 flex flex-col gap-2'>

            {/* Heading of the section */}
            <div className='flex justify-between'>
                <h2 className='text-letter-yellow font-bold text-lg'>
                    FEATURED PROJECTS
                </h2>
                <Link href='/projects' className='self-end'>
                    <p className='underline text-xs md:text-sm mr-2 cursor-pointer text-letter-white hover:text-letter-yellow active:text-letter-yellow'>
                        See All
                    </p>
                </Link>
            </div>

            <HomeProjectsGrid projectsData={projectsData.filter((data) => data.isFeatured)} />
        </section>
    )
}