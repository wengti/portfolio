import ContactForm from "@/components/contact/ContactForm";
import HomeAbout from "@/components/home/HomeAbout";
import HomeProjects from "@/components/home/HomeProjects";
import HomeTech from "@/components/home/HomeTech";
import HomeTimeline from "@/components/home/HomeTimeline";


export default function Home() {

    return (
        <>
            <HomeAbout />
            <HomeProjects />
            <div className='pt-6 flex flex-col gap-4 sm:flex-row sm:pb-6'>
                <HomeTech />
                <HomeTimeline />
            </div>
            <div className='mb-12'>
                <ContactForm />
            </div>
        </>
        

    )
}
