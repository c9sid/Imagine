"use client"

import React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { carouselImage } from "@/lib/data"

const CarouselHome = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 2000 })
  )

  return (
    <div className="flex justify-center items-center p-4">
      <Carousel
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent>
          {
            carouselImage.map((img) => (
              <CarouselItem key={img.index}>
            <div className="p-1 flex justify-center">
            <img className="rounded-md w-full h-auto md:h-[80vh]" src={img.image} />
            </div>
          </CarouselItem>
            ))
          }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}

export default CarouselHome