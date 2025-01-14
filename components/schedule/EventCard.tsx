"use client";

interface EventCardProps {
  title: string;
  time: string;
  isActive?: boolean;
}

export function EventCard({ title, time, isActive = false }: EventCardProps) {
  return (
    <div
      className={`w-[257px] p-3 rounded-xl flex ${
        isActive
          ? "bg-gradient-to-r from-[#0e71d1] to-[#f1f7fc] text-white"
          : "bg-gradient-to-r from-[#1085f7] to-white text-black border"
      }`}
    >
      {isActive && (
        <div className="w-0.5 h-[47px] opacity-20 bg-[#d9d9d9] rounded-[31px] mr-2" />
      )}
      <div className="grow flex-col justify-start items-start gap-2">
        <div
          className={`text-sm font-medium leading-tight ${
            isActive ? "opacity-90" : "opacity-70"
          }`}
        >
          {title}
        </div>
        <div
          className={`text-sm font-medium leading-tight ${
            isActive ? "opacity-60" : "opacity-50"
          }`}
        >
          {time}
        </div>
      </div>
      {isActive && (
        <button className="h-7 px-3 py-1 bg-white rounded-[52px] border text-xs font-semibold text-[#101010] opacity-90">
          Join now
        </button>
      )}
    </div>
  );
}