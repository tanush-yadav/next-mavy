import { DownArrow } from '@/components/icons/DownArrow'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'

const PreferencesPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#f6f6f6]">
      <div className="max-w-2xl mx-auto pt-2 px-6">
        <div className="text-2xl font-medium text-[#101010] mb-6">
          Preferences
        </div>

        {/* Main content area with scroll */}
        <div className="space-y-4 pb-6 max-h-[calc(100vh-120px)] overflow-y-auto">
          {/* Duration div */}
          <div className="space-y-2 py-2">
            <div className="text-sm font-medium text-black/50 uppercase tracking-wide">
              Duration
            </div>
            <div className="space-y-3 py-2">
              <div className="h-fill w-full p-4 bg-white rounded-xl justify-between items-center inline-flex">
                <div className="opacity-90 text-[#101010] text-base font-medium leading-tight">
                  In-Person meeting
                </div>
                <Select defaultValue="30">
                  <SelectTrigger className="w-[13%] border-0 bg-transparent p-0 h-auto focus:ring-0">
                    <SelectValue />
                    <DownArrow className="w-5 h-5" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 min</SelectItem>
                    <SelectItem value="30">30 min</SelectItem>
                    <SelectItem value="45">45 min</SelectItem>
                    <SelectItem value="60">60 min</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="h-full w-full p-4 bg-white rounded-xl justify-between items-center inline-flex">
                <div className="opacity-90 text-[#101010] text-base font-medium leading-tight">
                  Virtual meeting
                </div>
                <Select defaultValue="30">
                  <SelectTrigger className="w-[13%] border-0 bg-transparent p-0 h-auto focus:ring-0">
                    <SelectValue />
                    <DownArrow className="w-5 h-5" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 min</SelectItem>
                    <SelectItem value="30">30 min</SelectItem>
                    <SelectItem value="45">45 min</SelectItem>
                    <SelectItem value="60">60 min</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="h-full w-full p-4 bg-white rounded-xl justify-between items-center inline-flex">
                <div className="opacity-90 text-[#101010] text-base font-medium leading-tight">
                  Buffer between virtual meetings
                </div>
                <Select defaultValue="None">
                  <SelectTrigger className="w-[12%] border-0 bg-transparent p-0 h-auto focus:ring-0">
                    <SelectValue />
                    <DownArrow className="w-5 h-5" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="None">None</SelectItem>
                    <SelectItem value="15">15 min</SelectItem>
                    <SelectItem value="30">30 min</SelectItem>
                    <SelectItem value="45">45 min</SelectItem>
                    <SelectItem value="60">60 min</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Follow-up Settings div */}
          <div className="space-y-2 py-2">
            <div className="text-sm font-medium text-black/50 uppercase tracking-wide">
              Follow-up settings
            </div>
            <div className="space-y-3 py-2">
              <div className="h-full w-full p-4 bg-white rounded-xl justify-between items-center inline-flex">
                <div className="opacity-90 text-[#101010] text-base font-medium leading-tight">
                  Email
                </div>
                <Switch defaultChecked className="bg-[#f6f6f6]" />
              </div>

              <div className="h-full w-full p-4 bg-white rounded-xl justify-between items-center inline-flex">
                <div className="opacity-90 text-[#101010] text-base font-medium leading-tight">
                  Frequency
                </div>
                <Select defaultValue="2days">
                  <SelectTrigger className="w-[130px] border-0 bg-transparent p-0 h-auto focus:ring-0">
                    <SelectValue />
                    <DownArrow className="w-5 h-5" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Every day</SelectItem>
                    <SelectItem value="2days">Every two days</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="h-full w-full p-4 bg-white rounded-xl justify-between items-center inline-flex">
                <div className="opacity-90 text-[#101010] text-base font-medium leading-tight">
                  Limit
                </div>
                <Select defaultValue="Twice">
                  <SelectTrigger className="w-[12%] border-0 bg-transparent p-0 h-auto focus:ring-0">
                    <SelectValue />
                    <DownArrow className="w-5 h-5" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Twice">Twice</SelectItem>
                    <SelectItem value="Once">Once</SelectItem>
                    <SelectItem value="None">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Reminder div */}
          <div className="space-y-2 py-2">
            <div className="text-sm font-medium text-black/50 uppercase tracking-wide">
              Reminder
            </div>
            <div className="space-y-3 py-2">
              <div className="h-full w-full p-4 bg-white rounded-xl justify-between items-center inline-flex">
                <div className="opacity-90 text-[#101010] text-base font-medium leading-tight">
                  Email
                </div>
                <Switch defaultChecked className="bg-[#f6f6f6]" />
              </div>

              <div className="h-full w-full p-4 bg-white rounded-xl justify-between items-center inline-flex">
                <div className="opacity-90 text-[#101010] text-base font-medium leading-tight">
                  Time
                </div>
                <Select defaultValue="10">
                  <SelectTrigger className="w-[13%] border-0 bg-transparent p-0 h-auto focus:ring-0">
                    <SelectValue />
                    <DownArrow className="w-5 h-5" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 min</SelectItem>
                    <SelectItem value="10">10 min</SelectItem>
                    <SelectItem value="15">15 min</SelectItem>
                    <SelectItem value="20">20 min</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreferencesPage
