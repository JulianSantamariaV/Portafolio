

import { CarouselProps } from '@/utils/ICarouselProps'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'



export function CarouselMain({ dataProp, type, direction, className = "" }: CarouselProps) {

    const autoplay = React.useRef(
        Autoplay({
            delay: 2000,
            stopOnInteraction: true,
        })
    )

    const filtered = dataProp.filter(tech => tech.type === type)
    console.log(`🧪 ${type} Carousel contains:`, filtered.map(f => f.name))


    return (
        <div className={`w-full relative py-4 ${className}`}
            onMouseLeave={() => autoplay.current?.play()}
            onMouseEnter={() => autoplay.current?.stop()}
        >
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                    duration: 800,
                    slidesToScroll: 1,
                    skipSnaps: false,
                    direction: direction
                }}
                plugins={[autoplay.current]}
                className="w-full"
            >
                <CarouselContent
                    className={`-ml-2 md:-ml-4 flex-nowrap ${direction === 'rtl' ? 'flex-row-reverse' : ''
                        }`}
                >
                    {filtered.map(tech => (
                        <CarouselItem
                            key={tech.name}
                            className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                        >
                            <div className="p-2 md:p-4 h-full flex flex-col items-center justify-center gap-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors">
                                <tech.icon className="w-8 h-8 text-zinc-200" />
                                <span className="text-zinc-200 text-sm font-medium">{tech.name}</span>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                    <CarouselPrevious className="bg-zinc-800/50 hover:bg-zinc-700/50 border-zinc-700" />
                </div>
                <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                    <CarouselNext className="bg-zinc-800/50 hover:bg-zinc-700/50 border-zinc-700" />
                </div>
            </Carousel>
        </div>
    )
}
