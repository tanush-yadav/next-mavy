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
        w-[90%] p-4
        ${
          isActive
            ? 'bg-gradient-to-r from-primary-blue to-primary-blue-light'
            : 'bg-gradient-to-r from-primary-blue/10 to-white'
        }
        rounded-2xl
        flex items-start gap-3
        transition-all duration-200
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
            text-xs font-semibold
          `}
        >
          {time}
        </div>
      </div>
      {isActive && (
        <button
          className="
            px-3 py-1
            bg-background
            rounded-full
            hover:bg-primary-light/90
            active:bg-primary-light
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-primary-blue/20
          "
        >
          <span className="text-sm font-semibold leading-tight bg-gradient-to-r from-foreground to-primary-blue bg-clip-text text-transparent opacity-90">
            Join now
          </span>
        </button>
      )}
    </div>
  )
}
