export type ProjectsDataType = {
    isFeatured: boolean
    filename: string
    name: string
    type: string
    year: number
    liveSite: string
    gitHub: string
    demo: string
    description: string
    tech: string[]
    overview: string
    feature: string[]
    fullTech: Record<string, string>
    challenges: string[]
    solutions: string[]
    references?: string[]
}