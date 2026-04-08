import { techData } from "@/data/tech"

export default function TechStackGroup({title, techItems}: {title: string, techItems: string[]}) {

    return (
        <div className='flex flex-col gap-1'>
            <p className='text-sm font-semibold'>{title}</p>
            <div className='flex flex-wrap gap-2'>
                {techItems.map(item => {
                    if (techData.highlight.includes(item)) {
                        return (
                            <div className='px-2 py-1 w-fit text-sm border border-edge-yellow bg-card-yellow text-letter-yellow rounded-sm' key={item}>
                                {item}
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className='px-2 py-1 w-fit text-sm border border-edge-gray bg-card-black text-letter-white rounded-sm' key={item}>
                                {item}
                            </div>
                        )
                    }
                }
                )}
            </div>
        </div>
    )
}