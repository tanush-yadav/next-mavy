'use client'

import { EventSetup } from '@/components/events/EventSetup'
import { Sidebar } from '@/components/layout/Sidebar'
import { Schedule } from '@/components/schedule/Schedule'
import { useEffect, useRef, useState } from 'react'

export default function Dashboard() {
  const leftSideRef = useRef<HTMLDivElement>(null)
  const [leftHeight, setLeftHeight] = useState<number>(0)

  useEffect(() => {
    const updateHeight = () => {
      if (leftSideRef.current) {
        setLeftHeight(leftSideRef.current.offsetHeight)
      }
    }

    // Create a ResizeObserver to watch for size changes
    const resizeObserver = new ResizeObserver(updateHeight)

    if (leftSideRef.current) {
      resizeObserver.observe(leftSideRef.current)
    }

    // Also watch for window resize events
    window.addEventListener('resize', updateHeight)

    // Initial height update
    updateHeight()

    return () => {
      if (leftSideRef.current) {
        resizeObserver.unobserve(leftSideRef.current)
      }
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateHeight)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="pl-[219px] min-h-screen">
        <div className="max-w-[1280px] mx-auto p-8">
          <div className="grid grid-cols-12 gap-8">
            <div ref={leftSideRef} className="col-span-7">
              <EventSetup />
            </div>
            <div className="col-span-5">
              <Schedule minHeight={leftHeight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
