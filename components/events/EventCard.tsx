'use client'

import Image from 'next/image'

interface EventCardProps {
  title: string
  image: string
}

export function EventCard({ title, image }: EventCardProps) {
  return (
    <div className="w-full h-[200px] relative overflow-hidden rounded-xl">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="opacity-90 flex items-center">
          <span className="text-white text-sm font-medium leading-tight">
            {title}{' '}
          </span>
          <span className="text-white text-sm font-medium font-inter leading-tight ml-1">
            →
          </span>
        </div>
      </div>
    </div>
  )
}
