'use client'

import { PencilIcon } from '@/components/icons/PencilIcon'
import { EventCard } from './EventCard'

export function EventSetup() {
  return (
    <div className="bg-white rounded-xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] h-full">
      <div className="opacity-50 text-black text-base font-medium">
        Getting started with Mavy
      </div>
      <h1 className="opacity-90 text-black text-2xl font-semibold mt-2 font-crimson tracking-tight">
        What kind of event do you want to setup
      </h1>

      {/* Progress Bar */}
      <div className="mt-4 relative h-2">
        <div className="w-full h-2 opacity-50 bg-black/10 rounded-[49px]" />
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
          bg-neutral-100
          rounded-md
          border
          border-neutral-200
          flex
          items-center
          gap-3
          hover:bg-neutral-50
          transition-colors
        "
      >
        <PencilIcon className="w-6 h-6 opacity-90" />
        <span className="opacity-90 text-black text-base font-medium">
          Write your own
        </span>
      </button>
    </div>
  )
}
