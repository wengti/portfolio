import HomeAbout from "@/components/home/HomeAbout";
import HomeProjects from "@/components/home/HomeProjects";
import HomeTech from "@/components/home/HomeTech";
import HomeTimeline from "@/components/home/HomeTimeline";


export default function Home() {

    return (
        <>

            <HomeAbout />
            <HomeProjects />
            <div className='mt-6 flex flex-col gap-4 sm:flex-row'>
                <HomeTech />
                <HomeTimeline />
            </div>
        </>
        

    )
}
