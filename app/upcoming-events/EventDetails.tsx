import { Clock, Users } from 'lucide-react'

interface EventDetailsProps {
  event: {
    title: string
    time: string
    date: string
  }
}

export function EventDetails({ event }: EventDetailsProps) {
  return (
    <div className="p-8 h-full">
      <div className="space-y-8">
        <div>
          <div className="flex items-center">
            <div className="text-xl font-medium opacity-90">{event.title}</div>
            <span className="text-xs font-medium opacity-50 ml-2 mt-1">
              30min
            </span>
          </div>
          <p className="text-sm font-medium opacity-80 mt-1">{event.date}</p>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 opacity-60">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium">3PM</span>
            </div>
            <div className="flex items-center gap-2 opacity-60">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium">3:30PM</span>
            </div>
          </div>

          <div className="h-px bg-foreground/5" />

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 opacity-50" />
              <div>
                <div className="text-sm font-medium">3 Participants</div>
                <div className="text-xs font-medium opacity-60">
                  1 yes, 1 no, 1 awaiting
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {['Aryaman Bhatnagar', 'Shubham Ranga', 'Mavy'].map((name) => (
                <div key={name} className="flex items-center gap-1">
                  <div className="w-5 h-5 bg-neutral-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium">
                      {name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium opacity-90">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-foreground/5" />

          <p className="text-sm font-medium opacity-90">
            A brief 20 minute stand-up to increase team synergy and ensure
            everyone is on the same page about the progress of the current
            project. Scheduled by <span className="underline">Mavy</span>.
          </p>

          <div className="h-px bg-foreground/5" />
        </div>
      </div>
    </div>
  )
}
