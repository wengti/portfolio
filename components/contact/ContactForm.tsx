import Form from 'next/form'
import ContactTextInput from './ContactTextInput'
import ContactTextarea from './ContactTextarea'
import { IoMdSend } from "react-icons/io";

export default function ContactForm() {

    return (
        <section className='px-6 flex flex-col gap-2'>

            {/* Heading of the section */}
            <div className='flex flex-col gap-2'>
                <div>
                    <p className='text-sm text-letter-yellow font-semibold'>
                        GET IN TOUCH
                    </p>
                </div>
                <div>
                    <h2 className='text-letter-white font-bold text-2xl'>
                        Let's work together
                    </h2>
                    <p className='text-sm'>
                        Open to junior full-stack roles and freelance projects.
                    </p>
                </div>
            </div>

            {/* Form */}
            <Form
                action='/'
                className='mt-2 bg-card-black border border-edge-gray rounded-lg p-4 flex flex-col gap-4'
            >

                {/* Name and Email */}
                <div className='flex flex-col gap-4 sm:flex-row'>
                    <ContactTextInput
                        label='Name'
                        placeholder='John'
                    />
                    <ContactTextInput
                        label='Email'
                        placeholder='john@email.com'
                    />
                </div>

                {/* Message */}
                <ContactTextarea
                    label='Message'
                    placeholder='Tell me about your project...'
                />

                {/* Submit Button */}
                <button className='bg-background-black p-2 rounded-lg border border-edge-gray text-letter-white font-semibold flex gap-2 justify-center items-center min-w-50 w-3/7 mx-auto'>
                    <p>Send Message</p>
                    <IoMdSend />
                </button>


            </Form>
        </section>
    )
}