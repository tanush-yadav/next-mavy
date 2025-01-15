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
      className={`w-full p-4 ${
        isActive
          ? 'bg-gradient-to-r from-primary-blue to-primary-blue-light'
          : 'bg-gradient-to-r from-primary-blue/10 to-background'
      } rounded-2xl flex items-start gap-3 transition-all duration-200`}
    >
      {isActive && (
        <div className="w-0.5 h-12 opacity-20 bg-[#d9d9d9] rounded-[31px]" />
      )}
      <div className="grow flex flex-col gap-1.5">
        <div
          className={`${
            isActive
              ? 'text-background dark:text-white opacity-90'
              : 'text-foreground opacity-70'
          } text-base font-medium`}
        >
          {title}
        </div>
        <div
          className={`${
            isActive
              ? 'text-background dark:text-white opacity-60'
              : 'text-foreground opacity-50'
          } text-sm font-medium`}
        >
          {time}
        </div>
      </div>
      {isActive && (
        <button
          className="
          px-4
          py-1.5
          bg-background
          rounded-full
          shadow-sm
          hover:bg-primary-light/90
          active:bg-primary-light
          transition-colors
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
