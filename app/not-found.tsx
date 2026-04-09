import Link from "next/link";

export default function NotFound(){

    return (
        <section className='grow flex flex-col justify-center items-center gap-4'>
            <div className='text-3xl font-semibold'>
                404: <span className='text-letter-yellow'>Page not found</span>
            </div>
            <Link href='/' className='bg-card-black border border-edge-gray font-semibold text-xl px-4 py-2 rounded-xl text-letter-white hover:bg-edge-yellow active:bg-edge-yellow'>
                Back to Home
            </Link>
        </section>
    )
}