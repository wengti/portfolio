import { techData } from "@/data/tech";
import TechStackGroup from "./TechStackGroup";

export default function HomeTech() {

    return (
        <section className='px-6 flex flex-col gap-2 sm:w-3/5'>

            {/* Heading of the section */}
            <h2 className='text-letter-yellow font-bold text-lg'>
                TECH STACK
            </h2>

            <div className='flex flex-col gap-3'>
                <TechStackGroup
                    title='Frontend'
                    techItems={techData.frontend}
                />

                <TechStackGroup
                    title='Backend'
                    techItems={techData.backend}
                />

                <TechStackGroup
                    title='Full stack'
                    techItems={techData.fullstack}
                />

                <TechStackGroup
                    title='Others'
                    techItems={techData.others}
                />

            </div>
        </section>
    )
}