import { ProjectsDataType } from "@/type/type";

export default function ProjectDetailTechCard({ data }: { data: ProjectsDataType }) {

    return (
        <div className='bg-card-black border border-edge-gray rounded-xl px-6 py-6 md:w-1/2 flex flex-col max-w-160'>
            <h3 className='mb-4 text-sm font-semibold tracking-widest'>
                TECH STACK
            </h3>
            <div className='grow my-auto flex flex-col justify-center'>
                <div>
                    {
                        Object.keys(data.fullTech).map(type => {
                            return (
                                <div key={type} className='w-full flex justify-between gap-4 border-b border-edge-gray py-2'>
                                    <p className='block w-40 text-letter-mute2 text-sm'>
                                        {type[0].toUpperCase() + type.slice(1)}
                                    </p>
                                    <p className='block text-right grow text-letter-white'>
                                        {data.fullTech[type]}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}