'use client'

import Form from 'next/form'
import ContactTextInput from './ContactTextInput'
import ContactTextarea from './ContactTextarea'
import { IoMdSend } from "react-icons/io";
import { useActionState, useState } from 'react';


export default function ContactForm() {

    /* State - Form Entry */
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    /* Form Action and Form State */
    const [formState, formAction, isPending] = useActionState(
        async () => {

            /* Hitting API */
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name, email, message
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()

            /* Failed isntance of submission */
            if (!res.ok) return data.error

            /* Success instance of submission */
            setName('')
            setEmail('')
            setMessage('')
            return null
        },
        undefined
    )





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
                action={formAction}
                className='mt-2 bg-card-black border border-edge-gray rounded-lg p-4 flex flex-col gap-4'
            >

                {/* Name and Email */}
                <div className='flex flex-col gap-4 sm:flex-row'>
                    <ContactTextInput
                        label='Name'
                        placeholder='John'
                        type='text'
                        value={name}
                        valueSetter={setName}
                        isPending={isPending}
                    />
                    <ContactTextInput
                        label='Email'
                        placeholder='john@email.com'
                        type='email'
                        value={email}
                        valueSetter={setEmail}
                        isPending={isPending}
                    />
                </div>

                {/* Message */}
                <ContactTextarea
                    label='Message'
                    placeholder='Tell me about your project...'
                    value={message}
                    valueSetter={setMessage}
                    isPending={isPending}
                />

                {/* Submit Button */}
                <button
                    className='bg-background-black p-2 rounded-lg border border-edge-gray text-letter-white font-semibold flex gap-2 justify-center items-center min-w-50 w-3/7 mx-auto'
                    disabled={isPending}
                >
                    {
                        isPending ?
                            <p>Sending...</p> :
                            <>
                                <p>Send Message</p>
                                <IoMdSend />
                            </>
                    }

                </button>

                {/* Status Message */}
                {
                    (isPending || (formState === undefined)) ? 
                        <></> :
                        formState !== null ?
                            <p className='text-center text-red-500 text-sm -mt-4'>
                                {formState}
                            </p> :
                            <p className='text-center text-letter-yellow text-sm -mt-4'>
                                Your message has been sent.
                            </p>

                }


            </Form>
        </section>
    )
}