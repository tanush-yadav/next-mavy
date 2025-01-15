'use client'

import { CalendarIcon } from '@/components/icons/CalendarIcon'
import { ConfigIcon } from '@/components/icons/ConfigIcon'
import { HomeIcon } from '@/components/icons/HomeIcon'
import { NetworkIcon } from '@/components/icons/NetworkIcon'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'

interface NavItemProps {
  icon: string
  text: string
  active?: boolean
  onClick?: () => void
}

function NavItem({ icon, text, active = false, onClick }: NavItemProps) {
  const { theme } = useTheme()

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

  // Use #FFFFFF for dark mode, otherwise use the original logic
  const iconColor =
    theme === 'dark'
      ? '#FFFFFF'
      : active
      ? 'hsl(var(--primary-blue))'
      : 'currentColor'

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 ${active ? '' : 'opacity-60'}`}
    >
      <IconComponent color={iconColor} />
      <span
        className={`text-base font-inter ${
          active
            ? 'font-semibold text-primary-blue dark:text-white'
            : 'font-medium text-foreground dark:text-white'
        }`}
      >
        {text}
      </span>
    </button>
  )
}

export function Sidebar() {
  const [activeNav, setActiveNav] = useState('Home')
  const { theme, setTheme } = useTheme()

  const navItems = [
    { icon: 'home', text: 'Home' },
    { icon: 'calendar', text: 'Calendar' },
    { icon: 'network', text: 'Network' },
    { icon: 'config', text: 'Config' },
  ]

  return (
    <div className="fixed left-0 top-0 h-screen w-[219px] bg-sidebar-bg shadow-sm flex flex-col">
      <div className="pl-10 pr-[70px] pt-10 flex flex-col gap-[60px] h-full">
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

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="mt-auto mb-8 flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
          <span className="text-sm font-medium text-foreground">
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </span>
        </button>
      </div>
    </div>
  )
}
