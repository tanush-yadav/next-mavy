'use client'

import { CalendarIcon } from '@/components/icons/CalendarIcon'
import { ConfigIcon } from '@/components/icons/ConfigIcon'
import { HomeIcon } from '@/components/icons/HomeIcon'
import { NetworkIcon } from '@/components/icons/NetworkIcon'
import { useState } from 'react'

interface NavItemProps {
  icon: string
  text: string
  active?: boolean
  onClick?: () => void
}

function NavItem({ icon, text, active = false, onClick }: NavItemProps) {
  // Decide which icon component to render
  const IconComponent = (() => {
    switch (icon) {
      case 'calendar':
        return CalendarIcon
      case 'config':
        return ConfigIcon
      case 'network':
        return NetworkIcon
      default:
        return HomeIcon
    }
  })()

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 ${active ? '' : 'opacity-60'}`}
    >
      <IconComponent color={active ? '#1575D2' : '#000000'} />
      <span
        className={`text-base font-inter ${
          active ? 'font-semibold text-[#1575D2]' : 'font-medium text-black'
        }`}
      >
        {text}
      </span>
    </button>
  )
}

export function Sidebar() {
  const [activeNav, setActiveNav] = useState('Home')

  const navItems = [
    { icon: 'home', text: 'Home' },
    { icon: 'calendar', text: 'Calendar' },
    { icon: 'network', text: 'Network' },
    { icon: 'config', text: 'Config' },
  ]

  return (
    <div className="fixed left-0 top-0 h-screen w-[219px] bg-[#e2e7eb] shadow-sm flex flex-col">
      <div className="pl-10 pr-[70px] pt-10 flex flex-col gap-[60px]">
        {/* Navigation */}
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <NavItem
              key={item.text}
              icon={item.icon}
              text={item.text}
              active={item.text === activeNav}
              onClick={() => setActiveNav(item.text)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
