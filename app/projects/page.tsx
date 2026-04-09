
import { Metadata } from "next"
import ClientProjectsPage from "./client"

export const metadata: Metadata = {
    title: 'All Projects',
    description: "The page that hosts all the projects summary for Wong Weng Ti's portfolio site."
}

export default function ProjectsPage() {

    return <ClientProjectsPage />
    
}