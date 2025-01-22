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
    <div className="w-full min-h-full bg-background px-6 py-2">
      <div className="max-w-2xl mx-auto">
        {/* Main Card */}
        <div className="h-full px-8 py-6 bg-card rounded-3xl flex flex-col gap-6">
          {/* Header */}
          <div className="text-foreground/90 text-2xl font-semibold font-crimson leading-loose">
            Preferences
          </div>

          {/* Divider */}
          <div className="h-px bg-muted" />

          {/* Duration Section */}
          <div className="flex flex-col">
            <div className="text-foreground/60 text-xs font-medium  uppercase leading-7">
              Duration
            </div>
            <div className="flex flex-col gap-3">
              <div className="py-4 bg-card rounded-xl flex justify-between items-center">
                <div className="text-foreground/90 text-base font-medium  leading-tight">
                  In-Person meeting
                </div>
                <Select defaultValue="30">
                  <SelectTrigger className="w-[13%] border-0 bg-transparent p-0 h-auto focus:ring-0">
                    <SelectValue className="text-foreground/90 text-sm font-medium  leading-tight" />
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

              {/* Virtual meeting - similar structure */}
              <div className="py-4 bg-card rounded-xl flex justify-between items-center">
                <div className="text-foreground/90 text-base font-medium  leading-tight">
                  Virtual meeting
                </div>
                <Select defaultValue="30">
                  <SelectTrigger className="w-[13%] border-0 bg-transparent p-0 h-auto focus:ring-0">
                    <SelectValue className="text-foreground/90 text-sm font-medium  leading-tight" />
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

              {/* Buffer between meetings */}
              <div className="py-4 bg-card rounded-xl flex justify-between items-center">
                <div className="text-foreground/90 text-base font-medium  leading-tight">
                  Buffer between virtual meetings
                </div>
                <Select defaultValue="None">
                  <SelectTrigger className="w-[12%] border-0 bg-transparent p-0 h-auto focus:ring-0">
                    <SelectValue className="text-foreground/90 text-sm font-medium  leading-tight" />
                    <DownArrow className="w-5 h-5" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="None">None</SelectItem>
                    <SelectItem value="15">15 min</SelectItem>
                    <SelectItem value="30">30 min</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-muted" />

          {/* Follow-up Settings */}
          <div className="flex flex-col">
            <div className="text-foreground/60 text-xs font-medium  uppercase leading-7">
              Follow-up settings
            </div>
            <div className="flex flex-col gap-3">
              <div className="py-4 bg-card rounded-xl flex justify-between items-center">
                <div className="text-foreground/90 text-base font-medium  leading-tight">
                  Email
                </div>
                <Switch defaultChecked className="bg-muted" />
              </div>

              {/* Frequency */}
              <div className="py-4 bg-card rounded-xl flex justify-between items-center whitespace-nowrap">
                <div className="text-foreground/90 text-base font-medium leading-tight">
                  Frequency
                </div>
                <Select defaultValue="2days">
                  <SelectTrigger className="w-auto min-w-[80px] border-0 bg-transparent p-0 h-auto focus:ring-0 flex items-center gap-2">
                    <SelectValue className="text-foreground/90 text-sm font-medium leading-tight " />
                    <DownArrow className="w-5 h-5 flex-shrink-0" />
                  </SelectTrigger>
                  <SelectContent align="end" className="w-auto min-w-[140px]">
                    <SelectItem value="daily">Every day</SelectItem>
                    <SelectItem value="2days">Every two days</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Limit */}
              <div className="py-4 bg-card rounded-xl flex justify-between items-center">
                <div className="text-foreground/90 text-base font-medium  leading-tight">
                  Limit
                </div>
                <Select defaultValue="Twice">
                  <SelectTrigger className="w-[12%] border-0 bg-transparent p-0 h-auto focus:ring-0">
                    <SelectValue className="text-foreground/90 text-sm font-medium  leading-tight" />
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

          {/* Divider */}
          <div className="h-px bg-muted" />

          {/* Reminder Section */}
          <div className="flex flex-col">
            <div className="text-foreground/60 text-xs font-medium  uppercase leading-7">
              Reminder
            </div>
            <div className="flex flex-col gap-3">
              <div className="py-4 bg-card rounded-xl flex justify-between items-center">
                <div className="text-foreground/90 text-base font-medium  leading-tight">
                  Email
                </div>
                <Switch defaultChecked className="bg-muted" />
              </div>

              {/* Time */}
              <div className="py-4 bg-card rounded-xl flex justify-between items-center">
                <div className="text-foreground/90 text-base font-medium  leading-tight">
                  Time
                </div>
                <Select defaultValue="10">
                  <SelectTrigger className="w-[12%] border-0 bg-transparent p-0 h-auto focus:ring-0">
                    <SelectValue className="text-foreground/90 text-sm font-medium  leading-tight" />
                    <DownArrow className="w-5 h-5" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 min</SelectItem>
                    <SelectItem value="10">10 min</SelectItem>
                    <SelectItem value="15">15 min</SelectItem>
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
