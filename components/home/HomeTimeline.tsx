import { timelineData } from "@/data/timeline";

export default function HomeTimeline() {

    return (
        <section className='px-6 pt-6 pb-10 lg:flex lg:gap-2 sm:pt-0 flex flex-col gap-3'>

            {/* Heading of the section */}
            <h2 className='text-letter-yellow font-bold text-lg'>
                TIMELINE
            </h2>

            <div className='flex flex-col gap-2'>
                {
                    timelineData.map((data, idx) => {

                        /* Class Name for the last item on the timeline to not have left border */
                        let contentClsName = 'ml-1 pl-3 pb-2 border-l'
                        if(idx === timelineData.length-1) {
                            contentClsName = 'ml-1 pl-3'
                        }

                        return (
                            <div className=''>

                                {/* div for time */}
                                <div className='flex gap-2 items-center'>
                                    {/* Yellow Circle */}
                                    <div className='w-2.25 h-2.25 rounded-full bg-letter-yellow'>
                                        <p className='hidden'>_</p> 
                                    </div>

                                    {/* Start - End */}
                                    <p className='text-letter-yellow text-sm'>
                                        {data.start}{data.end ? `- ${data.end}` : ''}
                                    </p>
                                </div>

                                {/* Div for content */}
                                <div className={contentClsName}>
                                    <p className='text-letter-white font-semibold'>
                                        {data.title}
                                    </p>
                                    <p className='text-sm -mt-1'>
                                        {data.subtitle}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}