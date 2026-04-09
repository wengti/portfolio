import ProjectDetailGallery from "@/components/projectDetail/ProjectDetailGallery";
import ProjectDetailSummary from "@/components/projectDetail/ProjectDetailSummary";
import { projectsData } from "@/data/projects"
import Link from "next/link"
import { FaGithub } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";
import { LuPresentation } from "react-icons/lu";

export default async function ProjectDetailPage({ params }: { params: Promise<{ projectName: string }> }) {

    const { projectName } = await params
    const dataIdx = projectsData.findIndex((data) => data.filename === projectName)
    const data = projectsData[dataIdx]

    return (
        <section className='px-6 flex flex-col gap-2'>

            <div className='py-12 flex flex-col gap-8 lg:flex-row-reverse justify-center items-center'>
                <ProjectDetailGallery data={data}/>
                <ProjectDetailSummary data={data}/>
            </div>
        </section>
    )
}