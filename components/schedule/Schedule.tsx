'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
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
  const [pxPerMinute, setPxPerMinute] = useState(0.5)
  const CARD_HEIGHT = 80 // Height of each schedule card including padding

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
      title: 'Shubham <> Steven',
      time: '7:00PM - 8:00PM',
      start: '7:00PM',
      end: '8:00PM',
    },
  ]

  // Convert each event's start/end to minutes for spacing logic
  const eventsWithMinutes = events.map((ev) => ({
    ...ev,
    startMinutes: convertTimeToMinutes(ev.start),
    endMinutes: convertTimeToMinutes(ev.end),
  }))

  // Calculate total time span
  const earliestStart = Math.min(
    ...eventsWithMinutes.map((e) => e.startMinutes)
  )
  const latestEnd = Math.max(...eventsWithMinutes.map((e) => e.endMinutes))
  const totalTimeSpan = latestEnd - earliestStart

  useEffect(() => {
    if (!containerRef.current) return

    const containerHeight = minHeight || containerRef.current.clientHeight
    const headerHeight = 80 // Approximate header height
    const availableHeight = containerHeight - headerHeight

    // Total space needed for cards
    const totalCardsHeight = eventsWithMinutes.length * CARD_HEIGHT

    // Remaining space for gaps
    const availableForGaps = availableHeight - totalCardsHeight

    // Calculate optimal scale
    const maxScale = 0.5 // 0.3px per minute (18px per hour)
    const minScale = 0.05 // 0.05px per minute (3px per hour)

    let scale = availableForGaps / totalTimeSpan
    scale = Math.min(maxScale, Math.max(minScale, scale))

    setPxPerMinute(scale)
  }, [eventsWithMinutes.length, totalTimeSpan, minHeight])

  return (
    <div
      ref={containerRef}
      style={{ minHeight: minHeight ? `${minHeight}px` : undefined }}
      className="
        grid grid-rows-[auto_1fr]
        bg-card
        rounded-xl
        shadow-[0px_4px_33.2px_0px_rgba(0,0,0,0.05)]
        overflow-y-auto
      "
    >
      <ScheduleHeader />

      {/* Timeline with dynamic event placement */}
      <div className="relative px-4 pb-6 py-2 h-full">
        <div className="absolute left-8 top-0 bottom-0 w-[37px] opacity-10 bg-gradient-to-b from-background via-primary-blue to-background" />

        <div className="h-full flex flex-col">
          {eventsWithMinutes.map((event, idx) => {
            // Calculate gap from previous event or from earliest start time
            const previousEnd =
              idx > 0 ? eventsWithMinutes[idx - 1].endMinutes : earliestStart

            const timeGap = event.startMinutes - previousEnd
            const marginTop = Math.max(0, timeGap * pxPerMinute)

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
