import Link from "next/link";

export default function HomeAbout() {

    return (
        <section className='px-6 pt-12 pb-10 border-b border-edge-gray lg:flex lg:gap-2'>

            <div className='grow'>
                {/* Badge */}
                <div className='bg-card-yellow text-letter-yellow font-bold text-sm border border-edge-yellow rounded-full w-fit py-1 px-3'>
                    AVAILABLE FOR WORK
                </div>

                {/* Name */}
                <h1 className='text-3xl font-semibold mt-4 flex flex-col lg:flex-row lg:gap-2'>
                    <span className='text-letter-white'>Wong</span>
                    <span className='text-letter-yellow'>Weng Ti</span>
                </h1>

                {/* Short Description */}
                <p className='text-sm mt-2'>
                    EEE grad pivoting into full-stack web development. Buildring real products with React, Next.js & Supabase.
                </p>
            </div>

            {/* Button Group */}
            <div className='mt-6 text-xl flex justify-center items-end gap-4 lg:w-2/7 lg:mt-0'>
                <button className='text-letter-white font-semibold border border-edge-white rounded-md py-2 w-3/7 lg:h-fit'>
                    View <br /> Projects
                </button>
                <button className='text-letter-white font-semibold border border-edge-white rounded-md py-2 w-3/7 lg:h-fit'>
                    <Link href='https://drive.google.com/drive/folders/1wW6CfjJ3K_bTFNeFafgp9Aup87z3yCFm?usp=sharing' target='_blank'>
                        Download <br /> CV
                    </Link>
                </button>
            </div>

        </section>
    )
}