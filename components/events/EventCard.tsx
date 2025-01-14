"use client";

import Image from "next/image";

interface EventCardProps {
  title: string;
  image: string;
}

export function EventCard({ title, image }: EventCardProps) {
  return (
    <div className="w-full h-[200px] relative overflow-hidden rounded-xl">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="text-white text-xl font-medium flex items-center">
          {title} <span className="ml-2 text-2xl">→</span>
        </div>
      </div>
    </div>
  );
}