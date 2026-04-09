import ProjectDetailChallenges from "@/components/projectDetail/ProjectDetailChallenges";
import ProjectDetailFeatureCard from "@/components/projectDetail/ProjectDetailFeatureCard";
import ProjectDetailGallery from "@/components/projectDetail/ProjectDetailGallery";
import ProjectDetailSummary from "@/components/projectDetail/ProjectDetailSummary";
import ProjectDetailTechCard from "@/components/projectDetail/ProjectDetailTechCard";
import { projectsData } from "@/data/projects"
import Link from "next/link"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ProjectDetailOverview from "@/components/projectDetail/ProjectDetailOverview";
import ProjectDetailPublications from "@/components/projectDetail/ProjectDetailPublications";

export async function generateMetadata({ params }: { params: Promise<{ projectName: string }> }) {

    const { projectName } = await params
    return {
        title: projectName,
        description: projectsData.filter((data) => data.filename === projectName)[0].description
    }


}

export default async function ProjectDetailPage({ params }: { params: Promise<{ projectName: string }> }) {

    const { projectName } = await params
    const dataIdx = projectsData.findIndex((data) => data.filename === projectName)
    const data = projectsData[dataIdx]
    const lastData = dataIdx === 0 ? null : projectsData[dataIdx - 1]
    const nextData = dataIdx === (projectsData.length - 1) ? null : projectsData[dataIdx + 1]

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
                    <ProjectDetailOverview data={data} />
                </div>

                {/* Tech Stack and Feature */}
                <div className='flex flex-col gap-4'>
                    <h2 className='text-letter-yellow font-semibold text-sm'>IMPLEMENTATION</h2>
                    <div className='flex flex-col gap-4 md:flex-row md:gap-8 justify-center'>
                        <ProjectDetailTechCard data={data} />
                        <ProjectDetailFeatureCard data={data} />
                    </div>
                </div>

                {/* Challenges & Solutions */}
                <div className='flex flex-col gap-4'>
                    <h2 className='text-letter-yellow font-semibold text-sm'>CHALLENGES & SOLUTIONS</h2>
                    <ProjectDetailChallenges data={data} />
                </div>


                {/* Publication */}
                {
                    data.references &&
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-letter-yellow font-semibold text-sm'>PUBLICATION</h2>
                        <ProjectDetailPublications references={data.references} />
                    </div>
                }

                {/* Navigation button */}
                <div className='flex gap-4 justify-between mt-8'>
                    {
                        lastData ?
                            <button className='max-w-100 w-1/2'>
                                <Link
                                    href={`/projects/${lastData?.filename}`}
                                    className='flex flex-col px-4 py-2 text-left rounded-xl border border-edge-gray hover:bg-edge-yellow active:bg-edge-yellow'
                                >
                                    <div className='flex gap-2 items-center text-xs tracking-wide font-semibold'>
                                        <FaArrowLeftLong />
                                        <p>LAST PROJECT</p>
                                    </div>
                                    <p className="text-letter-white">{lastData.name.length > 23 ? lastData.name.slice(0, 20).trim() + '...' : lastData.name}</p>
                                </Link>
                            </button> :
                            <button className='max-w-100 w-1/2'></button>
                    }

                    {
                        nextData ?
                            <button className='max-w-100 w-1/2'>
                                <Link
                                    href={`/projects/${nextData?.filename}`}
                                    className='flex flex-col px-4 py-2 text-right rounded-xl border border-edge-gray hover:bg-edge-yellow active:bg-edge-yellow'
                                >
                                    <div className='flex gap-2 items-center justify-end text-xs tracking-wide font-semibold'>
                                        <p>NEXT PROJECT</p>
                                        <FaArrowRightLong />
                                    </div>
                                    <p className="text-letter-white">{nextData.name.length > 23 ? nextData.name.slice(0, 20).trim() + '...' : nextData.name}</p>
                                </Link>
                            </button> :
                            <button className='max-w-100 w-1/2'></button>
                    }
                </div>

            </div>
        </section>
    )
}