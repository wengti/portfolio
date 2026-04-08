'use client'

import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { Pagination } from "@/components/tailgrids/core/pagination";
import { projectsData } from "@/data/projects";
import { ProjectsDataType } from "@/type/type";
import { useEffect, useState } from "react";

export default function ProjectsPage() {

    /* State - Pagination */
    const [currentPage, setCurrentPage] = useState(1)
    const numItemsPerPage = 6
    const totalPages = Math.ceil(projectsData.length / numItemsPerPage)

    function handlePageChange(page: number) {
        setCurrentPage(page)
    }

    /* State - ProjectsData */
    const [allProjectsData, setAllProjectsData] = useState<ProjectsDataType[]>(projectsData)

    /* Use Effect */
    useEffect( () => {
        window.scrollTo({top: 0, behavior:'smooth'})
    }, [currentPage])


    return (
        <section className='px-6 pt-12 flex flex-col gap-2'>
            {/* Heading of the section */}
            <div className='flex justify-between'>
                <h2 className='text-letter-yellow font-bold text-lg'>
                    ALL PROJECTS
                </h2>
            </div>

            {/* Sort */}

            {/* Search */}

            {/* Projects Grid */}
            <ProjectsGrid 
                projectsData={allProjectsData.slice((currentPage - 1) * numItemsPerPage, (currentPage) * numItemsPerPage)} 
            />


            {/* Pagination */}
            <div className='my-6'>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => handlePageChange(page)}
                />
            </div>
        </section>
    )
}