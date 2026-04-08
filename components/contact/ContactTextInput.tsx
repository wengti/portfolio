export default function ContactTextInput({label, placeholder}: {label: string, placeholder: string}) {

    return (
        <div className='flex flex-col gap-1 w-1/2'>
            <label className='text-sm font-semibold text-letter-white pl-1'>
                {label}
            </label>
            <input
                id={label}
                name={label}
                type='text'
                placeholder={placeholder}
                className='bg-form-gray border border-edge-gray rounded-lg text-letter-white placeholder-letter-mute2'
            />
        </div>
    )
}