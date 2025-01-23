interface TaskCardProps {
  emoji: string
  title: string
  opacity?: number
}

export function TaskCard({ emoji, title, opacity = 100 }: TaskCardProps) {
  return (
    <div
      className={`w-full h-[136px] relative bg-black/50 rounded-3xl backdrop-blur-[80px] overflow-hidden`}
      style={{ opacity: opacity / 100 }}
    >
      {/* Emoji icon */}
      <div className="absolute left-7 top-3 text-white text-xl">{emoji}</div>

      {/* Title with line clamp */}
      <div className="absolute left-7 top-[50px] w-[173px]">
        <p className="text-white text-sm font-medium leading-normal line-clamp-2">
          {title}
        </p>
      </div>

      {/* CC text with proper spacing */}
      <div className="absolute left-7 bottom-4 text-white/60 text-sm font-medium">
        cc: mavy
      </div>
    </div>
  )
}
