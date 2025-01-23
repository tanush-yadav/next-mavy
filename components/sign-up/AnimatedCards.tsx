'use client'

import { useEffect, useState } from 'react'
import { TaskCard } from './TaskCard'

const CARDS = [
  { emoji: '🗒️', title: 'Setup a 1 on 1 with Emily for finance' },
  {
    emoji: '🥙',
    title: 'Setup a lunch appointment with Sarah for next Friday.',
  },
  {
    emoji: '✏️',
    title: 'Draft the quarterly report for the finance team.',
  },
  {
    emoji: '📅',
    title: 'Schedule a project kickoff meeting with the new team.',
  },
  {
    emoji: '💼',
    title: 'Prepare the presentation for the client meeting on Monday.',
  },
  {
    emoji: '📞',
    title: 'Call the IT department to resolve the network issue.',
  },
  {
    emoji: '🚀',
    title: 'Plan the product launch event for next month.',
  },
  {
    emoji: '🎨',
    title: 'Organize a creative brainstorming session with the design team.',
  },
  {
    emoji: '📊',
    title: 'Analyze the latest market research data for insights.',
  },
  {
    emoji: '🛠️',
    title: 'Coordinate with the engineering team for the new feature rollout.',
  },
  {
    emoji: '💡',
    title: 'Develop a new marketing strategy for the upcoming quarter.',
  },
  {
    emoji: '✈️',
    title: 'Book flights and accommodation for the upcoming business trip.',
  },
]

export function AnimatedCards() {
  const [position, setPosition] = useState(0)

  // Create a duplicated array for seamless infinite scroll
  const duplicatedCards = [...CARDS, ...CARDS]

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        // Reset position when we reach the end of original array
        if (prev >= CARDS.length) {
          return 0
        }
        return prev + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex gap-12 transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${position * 265}px)`,
          width: `${duplicatedCards.length * 265}px`,
        }}
      >
        {duplicatedCards.map((card, index) => {
          // Calculate the relative position considering the current scroll position
          const relativePosition =
            (index - position + duplicatedCards.length) % duplicatedCards.length

          return (
            <TaskCard
              key={`${card.title}-${index}`}
              emoji={card.emoji}
              title={card.title}
              opacity={
                // First 2 and last 3 visible cards should be inactive
                relativePosition < 2 ||
                relativePosition > duplicatedCards.length - 4
                  ? 30
                  : 100
              }
            />
          )
        })}
      </div>
    </div>
  )
}
