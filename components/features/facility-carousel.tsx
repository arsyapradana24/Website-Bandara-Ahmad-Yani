"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ASSETS } from "@/lib/constants"

interface FacilityImage {
  src: string
  alt: string
  title?: string
}

const facilityImages: FacilityImage[] = [
  { src: ASSETS.HOME, alt: "Terminal Bandara Ahmad Yani", title: "Terminal Modern" },
  { src: ASSETS.FACILITY_1, alt: "Fasilitas Terminal", title: "Area Check-in" },
  { src: ASSETS.FACILITY_3, alt: "Ruang Tunggu", title: "Ruang Tunggu" },
  { src: ASSETS.FACILITY_4, alt: "Fasilitas Bandara", title: "Area Boarding" },
  { src: ASSETS.HOME_1, alt: "Sejarah Bandara", title: "Tahun 1965" },
  { src: ASSETS.HOME_2, alt: "Perkembangan Bandara", title: "Tahun 1995" },
  { src: ASSETS.HOME_3, alt: "Terminal Baru", title: "Tahun 2018" },
]

interface FacilityCarouselProps {
  autoPlay?: boolean
  interval?: number
  className?: string
}

export function FacilityCarousel({
  autoPlay = true,
  interval = 5000,
  className,
}: FacilityCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isHovered, setIsHovered] = React.useState(false)

  const goToPrevious = React.useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? facilityImages.length - 1 : prev - 1
    )
  }, [])

  const goToNext = React.useCallback(() => {
    setCurrentIndex((prev) =>
      prev === facilityImages.length - 1 ? 0 : prev + 1
    )
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto play
  React.useEffect(() => {
    if (!autoPlay || isHovered) return

    const timer = setInterval(goToNext, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, isHovered, goToNext])

  return (
    <div
      className={cn("relative group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image Container */}
      <div className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl bg-[#F1F5F9]">
        {facilityImages.map((image, index) => (
          <div
            key={image.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Image Title */}
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-white font-display font-bold text-2xl md:text-3xl">
                  {image.title}
                </h3>
              </div>
            )}
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={goToPrevious}
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 z-10",
            "h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/90 backdrop-blur-sm",
            "flex items-center justify-center text-[#0A192F]",
            "transition-all duration-300 hover:bg-white hover:scale-110",
            "opacity-0 group-hover:opacity-100",
            "focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
          )}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        <button
          type="button"
          onClick={goToNext}
          className={cn(
            "absolute right-4 top-1/2 -translate-y-1/2 z-10",
            "h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/90 backdrop-blur-sm",
            "flex items-center justify-center text-[#0A192F]",
            "transition-all duration-300 hover:bg-white hover:scale-110",
            "opacity-0 group-hover:opacity-100",
            "focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
          )}
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {facilityImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:ring-offset-2",
              index === currentIndex
                ? "w-8 bg-[#0284C7]"
                : "w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Preview (Desktop Only) */}
      <div className="hidden lg:grid grid-cols-7 gap-2 mt-4">
        {facilityImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => goToSlide(index)}
            className={cn(
              "relative aspect-video rounded-lg overflow-hidden transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-[#0284C7]",
              index === currentIndex
                ? "ring-2 ring-[#0284C7] scale-105"
                : "opacity-60 hover:opacity-100"
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
