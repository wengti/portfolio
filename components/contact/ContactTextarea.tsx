import { Dispatch, SetStateAction } from "react";

type ContactTextareaPropsType = {
    label: string, 
    placeholder: string, 
    value: string, 
    valueSetter: Dispatch<SetStateAction<string>>,
    isPending: boolean
}

export default function ContactTextarea({label, placeholder, value, valueSetter, isPending}: ContactTextareaPropsType){

    return (
        <div className='flex flex-col gap-1'>
            <label className='text-sm font-semibold text-letter-white pl-1'>
                {label}
            </label>
            <textarea
                id={label}
                name={label}
                placeholder={placeholder}
                value={value}
                onChange={(event) => valueSetter(event.target.value)}
                className='bg-form-gray border border-edge-gray rounded-lg text-letter-white placeholder-letter-mute2 p-2 resize-none h-40'
                disabled={isPending}
                required
            />
        </div>
    )
}