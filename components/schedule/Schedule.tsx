'use client'

import Image from 'next/image'
import { ScheduleCard } from './ScheduleCard'

function ScheduleHeader() {
  return (
    <div className="flex justify-between items-center px-4 py-1">
      <div className="px-4">
        <div className="text-sm font-medium text-foreground/90">
          14th February, 2025
        </div>
        <div className="text-xl font-semibold font-crimson bg-gradient-to-r from-foreground to-primary-blue bg-clip-text text-transparent mt-0.5">
          Today's schedule
        </div>
      </div>
      <div className="relative w-1/2">
        <Image
          src="/calendar-icon.png"
          alt="Calendar"
          width={130}
          height={121}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export function Schedule() {
  return (
    <div
      className="
      grid grid-rows-[auto_1fr]
      min-h-[70vh]
      max-h-[800px]
      bg-card
      rounded-xl
      shadow-[0px_4px_33.2px_0px_rgba(0,0,0,0.05)]
    "
    >
      <ScheduleHeader />

      <div className="relative px-4 pb-4 h-full">
        {/* Timeline Indicator with enhanced gradient */}
        <div className="absolute left-8 top-0 bottom-0 w-[29px] opacity-10 bg-gradient-to-b from-background via-primary-blue to-background" />

        {/* Events List */}
        <div className="h-full flex flex-col">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-7 h-[71px] bg-primary-blue rounded-[9px]" />
            <div className="pl-16">
              <ScheduleCard
                title="Daily Sync"
                time="2:00PM - 3:00PM"
                isActive
              />
            </div>
          </div>

          <div className="relative -mt-1">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-7 h-[71px] bg-[#bedbfa] rounded-[9px]" />
            <div className="pl-16">
              <ScheduleCard title="Shubham <> Saurabh" time="4:00PM - 4:30PM" />
            </div>
          </div>

          <div className="relative mt-auto">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-7 h-[71px] bg-[#bedbfa] rounded-[9px]" />
            <div className="pl-16">
              <ScheduleCard title="Shubham <> Steven" time="4:00PM - 4:30PM" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
