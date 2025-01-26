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
      title: 'Shubham <> Aarav',
      time: '4:30PM - 5:00PM',
      start: '4:30PM',
      end: '5:00PM',
    },
  ]

  // Comment out current time logic for mocking
  // const now = new Date()
  // const currentMinutes = now.getHours() * 60 + now.getMinutes()

  // Mock current time (2:30 PM for testing)
  const currentMinutes = convertTimeToMinutes('2:30PM')

  // Show top 5 events regardless of time
  const upcomingEvents = events.slice(0, 5)

  return (
    <div
      ref={containerRef}
      className="
        grid grid-rows-[auto_1fr]
        bg-card
        rounded-xl
        shadow-[0px_4px_33.2px_0px_rgba(0,0,0,0.05)]
        max-h-[clamp(500px,75vh,900px)]
        max-w-[420px]
      "
    >
      <ScheduleHeader />

      <div className="relative px-4">
        {/* Fixed timeline gradient background */}
        <div className="absolute left-8 top-0 bottom-0 w-[37px] opacity-10 bg-gradient-to-b from-background via-[--blue-500] to-background" />

        <div className="relative flex flex-col justify-between h-full py-4 gap-5 pb-12">
          {upcomingEvents.map((event, idx) => (
            <div key={event.title} className="relative">
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
          ))}
        </div>
      </div>
    </div>
  )
}
