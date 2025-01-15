'use client'

import { PencilIcon } from '@/components/icons/PencilIcon'
import { EventCard } from './EventCard'

export function EventSetup() {
  return (
    <div className="bg-card rounded-xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] h-full">
      <div className="text-foreground/50 text-base font-medium">
        Getting started with Mavy
      </div>
      <h1 className="text-foreground/90 text-2xl font-semibold mt-2 font-crimson tracking-tight">
        What kind of event do you want to setup
      </h1>

      {/* Progress Bar */}
      <div className="mt-4 relative h-2">
        <div className="w-full h-2 bg-foreground/10 opacity-50 rounded-[49px]" />
        <div className="w-[27px] h-2 absolute top-0 left-0 bg-[#1ac06b] rounded-[49px]" />
      </div>

      {/* Event Cards Grid */}
      <div className="mt-8 grid grid-cols-2 gap-6">
        <EventCard title="Demo call with Mavy" image="/demo-call.jpg" />
        <EventCard title="Interview with candidate" image="/interview.jpg" />
        <EventCard title="Daily sync" image="/daily-sync.png" />
        <EventCard title="Sales call" image="/sales-call.jpg" />
      </div>

      {/* Write Your Own Button */}
      <button
        className="
          mt-8
          w-full
          p-3
          bg-primary-light
          rounded-md
          border
          border-border
          flex
          items-center
          gap-3
          hover:bg-primary-light/80
          transition-colors
        "
      >
        <PencilIcon className="opacity-90" />
        <span className="text-foreground/90 text-base font-medium">
          Write your own
        </span>
      </button>
    </div>
  )
}
