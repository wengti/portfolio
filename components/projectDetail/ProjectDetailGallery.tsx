'use client'
import { ProjectsDataType } from "@/type/type";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../tailgrids/core/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function ProjectDetailGallery({ data }: { data: ProjectsDataType }) {
    return (
        <div className="w-full max-w-180 mx-auto lg:w-1/2 lg:grow">
            <Carousel
                opts={{
                    align: "start",
                    loop: true
                }}
                plugins={[
                    Autoplay({
                        delay: 5000
                    })
                ]}
                className="w-full">
                <CarouselContent>
                    {[1, 2, 3, 4].map(el => (
                        <CarouselItem key={el}>
                            <div className="border border-fd-border bg-card-black flex items-center justify-center relative rounded-xl">
                                <Image
                                    src={`/${data.filename}/${el}.png`}
                                    alt={`The feature image for the project ${data.name}.`}
                                    height={1080}
                                    width={1920}
                                    className="rounded-xl"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
            </Carousel>
        </div>
    )
}