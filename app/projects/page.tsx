'use client'

import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { Pagination } from "@/components/tailgrids/core/pagination";
import { projectsData } from "@/data/projects";
import { ProjectsDataType } from "@/type/type";
import { useEffect, useState } from "react";
import { GoSortDesc, GoSortAsc } from "react-icons/go";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function ProjectsPage() {

    /* State - Pagination */
    const [currentPage, setCurrentPage] = useState(1)
    const numItemsPerPage = 6
    const totalPages = Math.ceil(projectsData.length / numItemsPerPage)

    function handlePageChange(page: number) {
        setCurrentPage(page)
    }

    /* State - sort and search */
    const [sortDesc, setSortDesc] = useState<boolean>(true)
    const [searchVal, setSearchVal] = useState<string>('')

    /* Use Effect - Scroll to the top at page change */
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [currentPage])


    /* Data Filtering */
    let filteredData = structuredClone(projectsData) /* Create a deep copy */

    /* filter based on search */
    if (searchVal !== '') {
        filteredData = filteredData.filter(data => {
            /* Split the search entry into multiple words, separated by space */
            const lowerSearchVals = searchVal.toLowerCase().split(' ')

            /* If the project does not contain any of the searched words, it is considered not matched */
            let matched = true
            for (let lowerSearchVal of lowerSearchVals) {
                if (!(
                    data.description.toLowerCase().includes(lowerSearchVal) ||
                    data.name.toLowerCase().includes(lowerSearchVal) ||
                    data.type.toLowerCase().includes(lowerSearchVal) ||
                    data.tech.some(element => element.toLowerCase().includes(lowerSearchVal))
                )) {
                    matched = false
                    break
                }
            }
            return matched

        })
    }

    /* filter based on sort by asc or desc */
    if (!sortDesc) {
        filteredData.reverse() /* Reverse is done in place */
    }



    return (
        <section className='px-6 pt-12 flex flex-col gap-2 grow'>

            {/* Heading of the section */}
            <div className='flex flex-col gap-1 sm:flex-row sm:justify-between sm:mb-4'>

                {/* Title */}
                <div className='flex justify-between'>
                    <h2 className='text-letter-yellow font-bold text-lg'>
                        ALL PROJECTS
                    </h2>
                </div>

                <div className='flex gap-2 w-full mb-4 sm:w-fit sm:mb-0'>
                    {/* Sort */}
                    <button
                        className='text-letter-white text-xl hover:text-letter-yellow active:text-letter-yellow'
                        onClick={() => { setSortDesc((prevVal) => !prevVal) }}
                    >
                        {sortDesc ? <GoSortDesc /> : <GoSortAsc />}
                    </button>

                    {/* Search */}
                    <div className='flex bg-form-gray border border-edge-gray items-center px-2 rounded-lg grow sm:grow-0'>
                        <FaMagnifyingGlass className='text-letter-white' />
                        <input
                            type='text'
                            name='search'
                            id='search'
                            placeholder='Project name...'
                            value={searchVal}
                            onChange={(event) => setSearchVal(event.target.value)}
                            className='bg-transparent border-0 text-letter-white placeholder:text-letter-mute2 px-2 py-1 text-sm'
                        />
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            {
                filteredData.length > 0 ?
                    <ProjectsGrid
                        projectsData={filteredData.slice((currentPage - 1) * numItemsPerPage, (currentPage) * numItemsPerPage)}
                    /> :
                    <div className='grow text-center'>
                        <p>No result can be found.</p>
                    </div>
            }


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