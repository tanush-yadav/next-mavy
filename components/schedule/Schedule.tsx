'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { ScheduleCard } from './ScheduleCard'
import { TimelineSegment } from './TimelineSegment'

function convertTimeToMinutes(time12h: string) {
  const [time, meridian] = [time12h.slice(0, -2), time12h.slice(-2)]
  let [hours, minutes] = time.split(':').map(Number)
  if (meridian.toLowerCase() === 'pm' && hours < 12) {
    hours += 12
  } else if (meridian.toLowerCase() === 'am' && hours === 12) {
    hours = 0
  }
  return hours * 60 + (minutes || 0)
}

function ScheduleHeader() {
  return (
    <div className="flex justify-between items-center px-2">
      <div className="px-6">
        <div className="text-sm font-medium text-foreground/90">
          14th February, 2025
        </div>
        <div className="text-xl font-semibold font-crimson bg-gradient-to-r from-foreground to-primary-blue bg-clip-text text-transparent mt-0.5">
          Today's schedule
        </div>
      </div>
      <div className="relative w-[45%]">
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

interface ScheduleProps {
  minHeight?: number
}

export function Schedule({ minHeight }: ScheduleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Sample event data
  const events = [
    {
      title: 'Daily Sync',
      time: '2:00PM - 3:00PM',
      start: '2:00PM',
      end: '3:00PM',
      isActive: true,
    },
    {
      title: 'Shubham <> Saurabh',
      time: '3:30PM - 4:00PM',
      start: '3:30PM',
      end: '4:00PM',
    },
    {
      title: 'Shubham <> Tanush',
      time: '4:00PM - 4:30PM',
      start: '4:00PM',
      end: '4:30PM',
    },
    {
      title: 'Shubham <> Tanush',
      time: '5:30PM - 6:00PM',
      start: '5:30PM',
      end: '6:00PM',
    },
    {
      title: 'Shubham <> Steven',
      time: '7:00PM - 8:00PM',
      start: '7:00PM',
      end: '8:00PM',
    },
  ]

  // Fixed spacing between cards
  const CARD_SPACING = {
    FIRST: 0, // First card starts at top
    SECOND: 15, // Second card has 15px margin
    THIRD: 90, // Third card has 90px margin
  }

  return (
    <div
      ref={containerRef}
      style={{ minHeight: minHeight ? `${minHeight}px` : undefined }}
      className="
        grid grid-rows-[auto_1fr]
        bg-card
        rounded-xl
        shadow-[0px_4px_33.2px_0px_rgba(0,0,0,0.05)]
        overflow-hidden
      "
    >
      <ScheduleHeader />

      {/* Timeline with fixed card placement */}
      <div
        ref={scrollContainerRef}
        className="relative px-4 pb-6 py-2 h-full overflow-y-auto scroll-smooth"
      >
        <div className="absolute left-8 top-0 bottom-0 w-[37px] opacity-10 bg-gradient-to-b from-background via-primary-blue to-background" />

        <div className="h-full flex flex-col">
          {events.map((event, idx) => {
            // Determine margin based on position
            let marginTop = 0
            if (idx === 1) marginTop = CARD_SPACING.SECOND
            if (idx === 2) marginTop = CARD_SPACING.THIRD

            return (
              <div key={event.title} className="relative" style={{ marginTop }}>
                {/* Timeline segment with diagonal lines */}
                <div className="absolute left-[18.5px] top-1/2 -translate-y-1/2">
                  <TimelineSegment isActive={!!event.isActive} />
                </div>

                {/* The actual schedule card */}
                <div className="pl-16">
                  <ScheduleCard
                    title={event.title}
                    time={event.time}
                    isActive={!!event.isActive}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
