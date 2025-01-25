'use client'

import { EventDetails } from '@/app/upcoming-events/EventDetails'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface Event {
  id: string
  title: string
  time: string
  date: string
  isActive?: boolean
}

export default function UpcomingEvents() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  const events = {
    today: [
      {
        id: '1',
        title: 'Daily Sync',
        time: '4:00PM - 4:30PM',
        date: 'Today, Nov 13',
      },
      {
        id: '2',
        title: 'Daily Sync',
        time: '2:00PM - 3:00PM',
        date: 'Today, Nov 13',
      },
    ],
    tomorrow: [
      {
        id: '3',
        title: 'Daily Sync',
        time: '2:00PM - 3:00PM',
        date: 'Tomorrow, Nov 14',
      },
      {
        id: '4',
        title: 'Daily Sync',
        time: '4:00PM - 4:30PM',
        date: 'Tomorrow, Nov 14',
      },
    ],
    later: [
      {
        id: '5',
        title: 'Daily Sync',
        time: '2:00PM - 3:00PM',
        date: 'Thursday, Nov 15',
      },
      {
        id: '6',
        title: 'Daily Sync',
        time: '4:00PM - 4:30PM',
        date: 'Thursday, Nov 15',
      },
    ],
  }

  const EventCard = ({ event }: { event: Event }) => (
    <div
      onClick={() => setSelectedEvent(event)}
      className={cn(
        'w-full p-3 bg-card border transition-all cursor-pointer',
        event.isActive
          ? 'border-foreground/80 hover:border-foreground'
          : 'border-foreground/10 hover:border-foreground/30'
      )}
    >
      <div className="flex justify-between items-start gap-2">
        <div className="space-y-3">
          <div className="text-sm font-medium opacity-90">{event.title}</div>
          <div className="text-sm font-medium opacity-60">{event.time}</div>
        </div>
        {event.isActive && (
          <button
            className="
            px-3 py-1
            bg-background
            rounded-full
            hover:bg-primary-light/90
            active:bg-primary-light
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-primary-blue/20
          "
        >
          <span className="text-sm font-semibold leading-tight bg-gradient-to-r from-foreground to-primary-blue bg-clip-text text-transparent opacity-90">
            Join meeting
          </span>
        </button>
        )}
      </div>
    </div>
  )

  const EventSection = ({
    title,
    events,
  }: {
    title: string
    events: Event[]
  }) => (
    <div className="space-y-3">
      <h2 className="text-base font-medium leading-loose">{title}</h2>
      <div className="space-y-2">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-medium leading-loose">Upcoming Events</h1>

      <div className="space-y-6">
        <EventSection title="Today, Nov 13" events={events.today} />
        <EventSection title="Tomorrow, Nov 14" events={events.tomorrow} />
        <EventSection title="Thursday, Nov 15" events={events.later} />
      </div>

      <Sheet
        open={!!selectedEvent}
        onOpenChange={() => setSelectedEvent(null)}
      >
        <SheetContent side="right" className="!w-[30%] p-0">
          {selectedEvent && <EventDetails event={selectedEvent} />}
        </SheetContent>
      </Sheet>
    </div>
  )
}
