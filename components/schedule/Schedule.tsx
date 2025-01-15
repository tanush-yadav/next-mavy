'use client'

import Image from 'next/image'
import { ScheduleCard } from './ScheduleCard'

function ScheduleHeader() {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="pl-4">
        <div className="text-sm font-medium text-[#101010]">
          14th February, 2025
        </div>
        <div
          className="text-xl font-semibold font-crimson"
          style={{
            background: 'linear-gradient(to right, #000000, #56ABFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Today's schedule
        </div>
      </div>
      <div className="relative w-[130px] h-[121px]">
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
    <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] h-full">
      <ScheduleHeader />
      <div className="relative px-4 pb-4">
        {/* Timeline Indicator */}
        <div className="absolute left-8 top-0 bottom-0 w-[37px] opacity-10 bg-gradient-to-b from-white via-[#007FFF] to-white" />

        {/* Events List */}
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute left-[20px] top-1/2 -translate-y-1/2 w-7 h-[71px] bg-[#3181db] rounded-[9px] overflow-hidden"></div>

            <div className="pl-16">
              <ScheduleCard
                title="Daily Sync"
                time="2:00PM - 3:00PM"
                isActive
              />
            </div>
          </div>

          <div className="pl-16">
            <ScheduleCard title="Shubham <> Saurabh" time="4:00PM - 4:30PM" />
          </div>

          <div className="pl-16">
            <ScheduleCard title="Shubham <> Steven" time="4:00PM - 4:30PM" />
          </div>

          <div className="pl-16">
            <ScheduleCard title="Shubham <> Steven" time="4:00PM - 4:30PM" />
          </div>

          <div className="pl-16">
            <ScheduleCard title="Shubham <> Steven" time="4:00PM - 4:30PM" />
          </div>
        </div>
      </div>
    </div>
  )
}
