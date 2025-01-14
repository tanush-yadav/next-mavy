'use client'

import Image from 'next/image'

interface NavItemProps {
  icon: string
  text: string
  active?: boolean
}

function NavItem({ icon, text, active = false }: NavItemProps) {
  return (
    <div className={`flex items-center gap-2 ${active ? '' : 'opacity-70'}`}>
      <Image
        src={`/icons/${icon}.svg`}
        alt={text}
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <span
        className={`text-base font-${active ? 'semibold' : 'medium'} ${
          active ? 'text-[#1575D2]' : 'text-black'
        }`}
      >
        {text}
      </span>
    </div>
  )
}

export function Sidebar() {
  return (
    <div className="h-screen w-[219px] bg-[#e2e7eb] flex flex-col fixed left-0 top-0">
      <div className="pl-10 pr-[70px] pt-10 flex flex-col gap-[60px]">
        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <NavItem icon="home" text="Home" active />
          <NavItem icon="calendar" text="Calendar" />
          <NavItem icon="network" text="Network" />
          <NavItem icon="config" text="Config" />
        </div>
      </div>
    </div>
  )
}
