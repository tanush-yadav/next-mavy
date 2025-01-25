'use client'
import Image from 'next/image'

interface EventCardProps {
  title: string
  image: string
}

export function EventCard({ title, image }: EventCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        shadow-[0_8px_28px_rgba(0,0,0,0.12)]
        dark:shadow-[0_8px_28px_rgba(0,0,0,0.25)]
        w-full
        aspect-[16/10]
        transition-all
        duration-300
        hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)]
        dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]
        hover:transform
        hover:scale-[1.02]
        cursor-pointer
      "
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center">
          <span className="text-white text-base font-medium leading-tight">
            {title}
          </span>
          <span className="text-white/80 text-lg font-medium ml-2 mt-0.5">
            →
          </span>
        </div>
      </div>
    </div>
  )
}
