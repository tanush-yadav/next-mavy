'use client'

import { Sidebar } from '@/components/layout/Sidebar'

export default function UpcomingEventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="pl-[219px] min-h-screen bg-[#f6f6f6]">
        <div className="max-w-[1280px] mx-auto p-8">{children}</div>
      </div>
    </div>
  )
}
