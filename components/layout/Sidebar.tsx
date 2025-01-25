'use client'

import { CalendarIcon } from '@/components/icons/CalendarIcon'
import { ConfigIcon } from '@/components/icons/ConfigIcon'
import { HomeIcon } from '@/components/icons/HomeIcon'
import { NetworkIcon } from '@/components/icons/NetworkIcon'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface NavItemProps {
  icon: string
  text: string
  active?: boolean
  onClick?: () => void
  href?: string
  subItems?: { text: string; href: string }[]
}

function NavItem({
  icon,
  text,
  active = false,
  onClick,
  href,
  subItems,
}: NavItemProps) {
  const { theme } = useTheme()
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(active && !!subItems)
  const pathname = usePathname()

  // Decide which icon component to render
  const IconComponent = (() => {
    switch (icon) {
      case 'calendar':
        return CalendarIcon
      case 'settings':
        return ConfigIcon
      case 'network':
        return NetworkIcon
      default:
        return HomeIcon
    }
  })()

  const iconColor =
    theme === 'dark'
      ? '#FFFFFF'
      : active
      ? 'hsl(var(--primary-blue))'
      : 'currentColor'

  const content = (
    <>
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
    </>
  )

  return (
    <div>
      {href ? (
        <Link
          href={href}
          className={`flex items-center gap-2 ${active ? '' : 'opacity-60'}`}
          onClick={() => {
            if (subItems) setIsSubMenuOpen(!isSubMenuOpen)
            onClick?.()
          }}
        >
          {content}
        </Link>
      ) : (
        <button
          onClick={() => {
            if (subItems) setIsSubMenuOpen(!isSubMenuOpen)
            onClick?.()
          }}
          className={`flex items-center gap-2 ${active ? '' : 'opacity-60'}`}
        >
          {content}
        </button>
      )}

      {subItems && isSubMenuOpen && (
        <div className="ml-6 mt-2 flex flex-col gap-2">
          {subItems.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className={`text-sm ${
                pathname === item.href
                  ? 'font-semibold text-primary-blue dark:text-white'
                  : 'font-medium text-foreground/60 dark:text-white/60'
              }`}
            >
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Sidebar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const navItems = [
    { icon: 'home', text: 'Home', href: '/dashboard' },
    { icon: 'calendar', text: 'Calendar', href: '/upcoming-events' },
    { icon: 'network', text: 'Network', href: '/network' },
    {
      icon: 'settings',
      text: 'Settings',
      href: '/settings',
    },
  ]

  return (
    <div className="fixed left-0 top-0 h-screen w-[14%] bg-sidebar-bg shadow-sm flex flex-col">
      <div className="pl-10 pt-10 flex flex-col gap-15 h-full">
        {/* Navigation */}
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <NavItem
              key={item.text}
              {...item}
              active={
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)
              }
            />
          ))}
        </div>

        {/* Theme Toggle */}
        {/* <button
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
        </button> */}
      </div>
    </div>
  )
}
