import { Dispatch, SetStateAction } from "react";

type ContactTextInput = {
    label: string, 
    placeholder: string, 
    type: string, 
    value: string, 
    valueSetter: Dispatch<SetStateAction<string>>,
    isPending: boolean
}

export default function ContactTextInput({label, placeholder, type, value, valueSetter, isPending}: ContactTextInput) {

    return (
        <div className='flex flex-col gap-1 sm:w-1/2'>
            <label className='text-sm font-semibold text-letter-white pl-1'>
                {label}
            </label>
            <input
                id={label}
                name={label}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(event) => valueSetter(event.target.value)}
                className='bg-form-gray border border-edge-gray rounded-lg text-letter-white placeholder-letter-mute2'
                disabled={isPending}
                required
            />
        </div>
    )
}