import { Search, Trash2 } from 'lucide-react'

export default function LocationsPage() {
  return (
    <div className="w-full min-h-full bg-background px-6">
      <div className="max-w-2xl mx-auto">
        {/* Main Card */}
        <div className="h-full px-8 py-6 bg-card rounded-3xl flex flex-col gap-6">
          {/* Header */}
          <div className="text-foreground/90 text-2xl font-semibold font-crimson leading-loose">
            Locations
          </div>

          {/* Map Search Area */}
          <div className="h-[175px] relative bg-white rounded-xl overflow-hidden w-full">
            <div className="w-full h-[379px] absolute -top-[102px] bg-gradient-to-b from-white to-[#ccd3db]" />
            <div className="absolute left-[18px] top-[18px] px-4 py-3 bg-[#151617]/50 rounded-[39px] backdrop-blur-[10px] flex items-center gap-2">
              <Search className="w-5 h-5 text-white" />
              <span className="opacity-90 text-white text-sm font-medium  leading-tight">
                Add a location
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-muted" />

          {/* Location Cards */}
          <div className="flex flex-col gap-3">
            <div className="text-foreground/60 text-xs font-medium  uppercase leading-tight">
              Your locations
            </div>
            <div className="flex gap-6">
              {/* Location Card 1 */}
              <LocationCard handle="@venic-cafe" />
              {/* Location Card 2 */}
              <LocationCard handle="@venic-cafe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface LocationCardProps {
  handle: string
}

function LocationCard({ handle }: LocationCardProps) {
  return (
    <div className="h-[141px] w-[280px] relative bg-white rounded-xl overflow-hidden">
      {/* Background Map Image */}
      <div className="w-[336px] h-[321px] absolute -left-6 -top-[90px] opacity-30 bg-gradient-to-b from-white to-[#ccd3db]" />

      {/* Location Handle */}
      <div className="absolute left-4 bottom-14 px-4 py-3 bg-white/10 rounded-[30px] backdrop-blur-[10px]">
        <span className="opacity-90 text-[#101010] text-sm font-medium  leading-tight">
          {handle}
        </span>
      </div>

      {/* Delete Button */}
      <button className="absolute right-4 top-4 p-3 bg-[#151617]/50 rounded-[30px] backdrop-blur-[10px]">
        <Trash2 className="w-5 h-5 text-white" />
      </button>
    </div>
  )
}
