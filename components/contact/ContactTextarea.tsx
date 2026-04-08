export default function ContactTextarea({label, placeholder}: {label: string, placeholder: string}){

    return (
        <div className='flex flex-col gap-1'>
            <label className='text-sm font-semibold text-letter-white pl-1'>
                {label}
            </label>
            <textarea
                id={label}
                name={label}
                placeholder={placeholder}
                className='bg-form-gray border border-edge-gray rounded-lg text-letter-white placeholder-letter-mute2 p-2 resize-none h-40'
            />
        </div>
    )
}