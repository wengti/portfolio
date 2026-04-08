import { ProjectsDataType } from "@/type/type"
import { motion } from 'motion/react'
import Image from "next/image"
import ProjectsSingleCard from "./ProjectsSingleCard"
import ProjectsDoubleCard from "./ProjectDoubleCard"
import { Fragment } from "react/jsx-runtime"

export default function ProjectsGrid({ projectsData }: { projectsData: ProjectsDataType[] }) {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 content-center max-w-400 mx-auto">

            {/* Individual Project Card */}
            {
                projectsData.map((data, idx) => {

                    if(idx % 4 === 1 || idx % 4 === 2) {
                        return (
                            <Fragment key={idx}>
                                <ProjectsSingleCard data={data} isHiddenOnLargeScreen={true} key={`single-${idx}`}/>
                                <ProjectsDoubleCard data={data} isShownOnLargeScreen={true} key={`double-${idx}`}/>
                            </Fragment>
                        )
                    }
                    else {
                        return (
                            <ProjectsSingleCard data={data} isHiddenOnLargeScreen={false} key={idx}/>
                        )
                    }
                    
                })
            }
        </div>
    )
}