'use client'
import Image from 'next/image'
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
    <div className="flex justify-between items-center px-2 py-1">
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

export function Schedule() {
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
    {
      title: 'Late Evening Chat',
      time: '11:00PM - 12:00AM',
      start: '11:00PM',
      end: '12:00AM',
    },
  ]

  // Convert each event's start/end to minutes for spacing logic
  const eventsWithMinutes = events.map((ev) => ({
    ...ev,
    startMinutes: convertTimeToMinutes(ev.start),
    endMinutes: convertTimeToMinutes(ev.end),
  }))

  return (
    <div
      className="
        grid grid-rows-[auto_1fr]
        max-h-[clamp(500px,75vh,900px)]
        bg-card
        rounded-xl
        shadow-[0px_4px_33.2px_0px_rgba(0,0,0,0.05)]
        overflow-y-auto
      "
    >
      <ScheduleHeader />

      {/* Timeline with dynamic event placement */}
      <div className="relative px-4 pb-8 py-2 h-full">
        <div className="absolute left-8 top-0 bottom-0 w-[37px] opacity-10 bg-gradient-to-b from-background via-primary-blue to-background" />

        <div className="h-full flex flex-col">
          {eventsWithMinutes.map((event, idx) => {
            // Calculate margin-top based on time-gap from previous event
            let marginTop = 0
            if (idx > 0) {
              const gapInMinutes =
                event.startMinutes - eventsWithMinutes[idx - 1].endMinutes
              // e.g. 0.5px per minute difference
              marginTop = Math.max(0, gapInMinutes) * 0.5
            }

            return (
              <div key={event.title} className="relative" style={{ marginTop }}>
                {/* Our new timeline segment with diagonal lines */}
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
