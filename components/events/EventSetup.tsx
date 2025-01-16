'use client'

import { PencilIcon } from '@/components/icons/PencilIcon'
import { useState } from 'react'
import { EventCard } from './EventCard'
import { EventEmail } from './EventEmail'

const eventMessages = {
  'Demo call with Mavy': {
    subject: "Let's get you started! - Demo Call Invitation",
    message: `Hi there,

I'm thrilled to hear about your interest in our product. Let's connect for a demonstration call next week to walk you through its features and benefits. Mavy will help us find a convenient time.

Regards,
Tanush Yadav`,
    cc: 'mavy@mavex.ai',
  },
  'Interview with candidate': {
    subject: 'Interview Scheduling - Next Steps',
    message: `Hello,

Thank you for your interest in joining our team. I'd like to schedule an interview to discuss your experience and learn more about what you're looking for in your next role. Mavy will help us coordinate a suitable time.

Best regards,
Tanush Yadav`,
    cc: 'mavy@mavex.ai',
  },
  'Daily sync': {
    subject: 'Team Daily Sync - Schedule Setup',
    message: `Hi team,

Let's set up our daily sync meeting to keep everyone aligned and discuss our progress. Mavy will help us find the best time that works for everyone.

Best,
Tanush Yadav`,
    cc: 'mavy@mavex.ai',
  },
  'Sales call': {
    subject: 'Sales Discussion - Next Steps',
    message: `Hi there,

Thank you for expressing interest in our solutions. I'd love to schedule a call to understand your needs better and discuss how we can help. Mavy will assist in finding a convenient time.

Best regards,
Tanush Yadav`,
    cc: 'mavy@mavex.ai',
  },
}

export function EventSetup() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)
  const progressWidth = selectedEvent ? 'w-[138px]' : 'w-[27px]'

  if (selectedEvent) {
    // If user chooses 'Custom event', provide empty subject/message
    const emailData =
      selectedEvent === 'Custom event'
        ? {
            subject: '',
            message: '',
            cc: 'mavy@mavex.ai',
          }
        : eventMessages[selectedEvent as keyof typeof eventMessages]

    return (
      <EventEmail
        eventType={selectedEvent}
        emailData={emailData}
        onBack={() => setSelectedEvent(null)}
      />
    )
  }

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
        <div
          className={`h-2 absolute top-0 left-0 bg-[#1ac06b] rounded-[49px] transition-all duration-300 ${progressWidth}`}
        />
      </div>

      {/* Event Cards Grid */}
      <div className="mt-8 grid grid-cols-2 gap-6">
        <div onClick={() => setSelectedEvent('Demo call with Mavy')}>
          <EventCard title="Demo call with Mavy" image="/demo-call.jpg" />
        </div>
        <div onClick={() => setSelectedEvent('Interview with candidate')}>
          <EventCard title="Interview with candidate" image="/interview.jpg" />
        </div>
        <div onClick={() => setSelectedEvent('Daily sync')}>
          <EventCard title="Daily sync" image="/daily-sync.png" />
        </div>
        <div onClick={() => setSelectedEvent('Sales call')}>
          <EventCard title="Sales call" image="/sales-call.jpg" />
        </div>
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
          transition-all
          duration-200
          group
          dark:hover:bg-primary-light/20
        "
        onClick={() => setSelectedEvent('Custom event')}
      >
        <PencilIcon
          className="opacity-90 transition-opacity group-hover:opacity-100"
          color="currentColor"
        />
        <span className="text-foreground/90 text-base font-medium group-hover:text-foreground transition-colors">
          Write your own
        </span>
      </button>
    </div>
  )
}
