import ProjectDetailChallenges from "@/components/projectDetail/ProjectDetailChallenges";
import ProjectDetailFeatureCard from "@/components/projectDetail/ProjectDetailFeatureCard";
import ProjectDetailGallery from "@/components/projectDetail/ProjectDetailGallery";
import ProjectDetailSummary from "@/components/projectDetail/ProjectDetailSummary";
import ProjectDetailTechCard from "@/components/projectDetail/ProjectDetailTechCard";
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

            <div className='pt-12 pb-6 flex flex-col gap-8 lg:flex-row-reverse justify-center items-center'>
                <ProjectDetailGallery data={data} />
                <ProjectDetailSummary data={data} />
            </div>

            <div className='pt-6 pb-12 border-t border-edge-gray flex flex-col gap-6'>
                {/* Overview */}
                <div>
                    <h2 className='text-letter-yellow font-semibold text-sm mb-1'>OVERVIEW</h2>
                    <p className='text-letter-mute2'>{data.overview}</p>
                </div>

                <div className='flex flex-col gap-4'>
                    <h2 className='text-letter-yellow font-semibold text-sm'>IMPLEMENTATION</h2>
                    <div className='flex flex-col gap-4 md:flex-row md:gap-8 justify-center'>
                        <ProjectDetailTechCard data={data} />
                        <ProjectDetailFeatureCard data={data} />
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <h2 className='text-letter-yellow font-semibold text-sm'>CHALLENGES & SOLUTIONS</h2>
                    <ProjectDetailChallenges data={data} />
                </div>

                {
                    data.references &&
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-letter-yellow font-semibold text-sm'>PUBLICATION</h2>
                        <ul className='flex flex-col gap-2'>
                            {
                                data.references.map((reference, idx) => {
                                    return (
                                        <li className='text-letter-mute2'><span className='text-letter-yellow'>{idx+1}.</span> {reference}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }

                <div>
                    {/* Button to last and next project */}
                </div>

            </div>
        </section>
    )
}