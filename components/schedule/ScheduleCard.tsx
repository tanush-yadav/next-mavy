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
          ? 'bg-gradient-to-r from-[#0e71d1] to-[#f1f7fc]'
          : 'bg-gradient-to-r from-[#1085f7]/10 to-white'
      } rounded-2xl flex items-start gap-3`}
    >
      {isActive && (
        <div className="w-0.5 h-12 opacity-20 bg-[#d9d9d9] rounded-[31px]" />
      )}
      <div className="grow flex flex-col gap-1.5">
        <div
          className={`${
            isActive ? 'text-white opacity-90' : 'text-black opacity-70'
          } text-base font-medium`}
        >
          {title}
        </div>
        <div
          className={`${
            isActive ? 'text-white opacity-60' : 'text-black opacity-50'
          } text-sm font-medium`}
        >
          {time}
        </div>
      </div>
      {isActive && (
        <button className="px-4 py-1.5 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
          <span
            className="text-sm font-semibold leading-tight"
            style={{
              background: 'linear-gradient(to right, #000000, #56ABFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Join now
          </span>
        </button>
      )}
    </div>
  )
}
