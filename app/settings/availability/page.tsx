import { AvailabilitySchedule } from './availability-schedule'

const AvailabilityPage = () => {
  return (
    <div className="w-full min-h-full bg-background px-6">
      <div className="max-w-2xl mx-auto">
        {/* Main Card */}
        <div className="h-full px-8 py-6 bg-card rounded-3xl flex flex-col gap-6">
          {/* Header */}
          <div className="text-foreground/90 text-2xl font-semibold font-crimson leading-loose">
            Availability
          </div>
          {/* Divider */}
          <div className="h-px bg-muted" />
          <AvailabilitySchedule />
        </div>
      </div>
    </div>
  )
}

export default AvailabilityPage
