import { ProjectsDataType } from "@/type/type";

export default function ProjectDetailChallenges({data}: {data:ProjectsDataType}){

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {data.challenges.map((challenge, idx) => {
                const solution = data.solutions[idx]

                return(
                    <div key={idx} className='bg-card-black border border-edge-gray border-l-6 border-l-letter-yellow px-4 py-6 rounded-xl min-h-40'>
                        <h3 className='font-semibold text-letter-white text-lg mb-1'>
                            {challenge}
                        </h3>
                        <p className='text-letter-mute2 text-sm leading-6 grow'>
                            {solution}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}