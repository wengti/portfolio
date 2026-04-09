import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: "The contact page for Wong Weng Ti's portfolio site."
}

export default function ContactPage() {

    return (
        <div className='grow flex flex-col justify-center'>
            <div className='my-8'>
                <ContactForm />
            </div>
        </div>
    )
}