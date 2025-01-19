'use client'

interface ScheduleCardProps {
  title: string
  time: string
  isActive?: boolean
}

export function ScheduleCard({
  title,
  time,
  isActive = false,
}: ScheduleCardProps) {
  return (
    <div
      className={`
        w-full p-4
        ${
          isActive
            ? 'bg-gradient-to-r from-primary-blue to-primary-blue-light'
            : 'bg-gradient-to-r from-primary-blue/10 to-background'
        }
        rounded-2xl
        flex items-start gap-3
        transition-all duration-200
        hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-primary-blue/20
        group
      `}
    >
      {isActive && (
        <div className="w-0.5 h-12 opacity-20 bg-[#d9d9d9] rounded-[31px]" />
      )}
      <div className="grow flex flex-col gap-1.5">
        <div
          className={`
            ${
              isActive
                ? 'text-background dark:text-white opacity-90'
                : 'text-foreground opacity-70'
            }
            text-base font-medium tracking-wide
            group-hover:opacity-95 transition-opacity duration-200
          `}
        >
          {title}
        </div>
        <div
          className={`
            ${
              isActive
                ? 'text-background dark:text-white opacity-60'
                : 'text-foreground opacity-50'
            }
            text-sm font-medium
            group-hover:opacity-75 transition-opacity duration-200
          `}
        >
          {time}
        </div>
      </div>
      {isActive && (
        <button
          className="
            px-4 py-1.5
            bg-background
            rounded-full
            shadow-sm
            hover:shadow-md
            hover:shadow-blue-200/50
            hover:bg-primary-light/90
            active:bg-primary-light
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-primary-blue/20
            animate-soft-pulse
          "
        >
          <span className="text-sm font-semibold leading-tight bg-gradient-to-r from-foreground to-primary-blue bg-clip-text text-transparent">
            Join now
          </span>
        </button>
      )}
    </div>
  )
}
