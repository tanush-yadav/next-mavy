'use client'

import { Sidebar } from '@/components/layout/Sidebar'

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-h-full bg-background">
      <Sidebar />
      <div className="max-h-full bg-[#f6f6f6]">
        <div className="max-w-screen mx-auto p-6">{children}</div>
      </div>
    </div>
  )
}
