import { ProjectsDataType } from "@/type/type"
import { FaCheck } from "react-icons/fa6";

export default function ProjectDetailFeatureCard({ data }: { data: ProjectsDataType }) {

    return (
        <div className='bg-card-black border border-edge-gray rounded-xl px-6 py-6 md:w-1/2 flex flex-col max-w-160'>
            <h3 className='mb-4 text-sm font-semibold tracking-widest'>
                FEATURES
            </h3>
            <div className='grow flex flex-col justify-center'>
                <div>
                    {
                        data.feature.map((feat, idx) => {
                            return (
                                <div key={idx} className='w-full flex items-start gap-3 border-b border-edge-gray py-2'>
                                    <FaCheck className='text-letter-yellow shrink-0 mt-1' />
                                    <p className='text-letter-mute2'>
                                        {feat}
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