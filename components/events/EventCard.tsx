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
        relative
        overflow-hidden
        rounded-xl
        shadow-[0_4px_20px_rgba(0,0,0,0.15)]
        w-full
        h-[200px]
      "
    >
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="flex items-center">
          <span className="text-white text-sm font-medium leading-tight">
            {title}
          </span>
          <span className="text-white text-base font-medium font-inter leading-tight ml-1">
            →
          </span>
        </div>
      </div>
    </div>
  )
}
