import HomeAbout from "@/components/home/HomeAbout";
import HomeProjects from "@/components/home/HomeProjects";
import HomeTech from "@/components/home/HomeTech";


export default function Home() {

    return (
        <>

            <HomeAbout />
            <HomeProjects />
            <div className='mt-12 flex flex-col gap-4 sm:flex-row'>
                <HomeTech />
            </div>
        </>
        

    )
}
