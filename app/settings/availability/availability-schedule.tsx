'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Copy, Plus } from 'lucide-react'
import { useState } from 'react'

interface TimeSlot {
  startTime: string
  endTime: string
}

interface DaySchedule {
  day: string
  enabled: boolean
  timeSlots: TimeSlot[]
}

const INITIAL_SCHEDULE: DaySchedule[] = [
  {
    day: 'Monday',
    enabled: true,
    timeSlots: [{ startTime: '9:00 AM', endTime: '6:00 PM' }],
  },
  {
    day: 'Tuesday',
    enabled: true,
    timeSlots: [{ startTime: '9:00 AM', endTime: '6:00 PM' }],
  },
  {
    day: 'Wednesday',
    enabled: true,
    timeSlots: [{ startTime: '9:00 AM', endTime: '6:00 PM' }],
  },
  {
    day: 'Thursday',
    enabled: true,
    timeSlots: [{ startTime: '9:00 AM', endTime: '6:00 PM' }],
  },
  {
    day: 'Friday',
    enabled: true,
    timeSlots: [{ startTime: '9:00 AM', endTime: '6:00 PM' }],
  },
  {
    day: 'Saturday',
    enabled: true,
    timeSlots: [{ startTime: '9:00 AM', endTime: '6:00 PM' }],
  },
  {
    day: 'Sunday',
    enabled: false,
    timeSlots: [{ startTime: '9:00 AM', endTime: '6:00 PM' }],
  },
]

const TIME_OPTIONS = [
  '8:00 AM',
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
]

export function AvailabilitySchedule() {
  const [schedule, setSchedule] = useState<DaySchedule[]>(INITIAL_SCHEDULE)

  const handleToggleDay = (index: number) => {
    setSchedule((prev) =>
      prev.map((day, i) =>
        i === index ? { ...day, enabled: !day.enabled } : day
      )
    )
  }

  const handleTimeChange = (
    dayIndex: number,
    slotIndex: number,
    type: 'startTime' | 'endTime',
    value: string
  ) => {
    setSchedule((prev) =>
      prev.map((day, i) =>
        i === dayIndex
          ? {
              ...day,
              timeSlots: day.timeSlots.map((slot, j) =>
                j === slotIndex ? { ...slot, [type]: value } : slot
              ),
            }
          : day
      )
    )
  }

  const addTimeSlot = (dayIndex: number) => {
    setSchedule((prev) =>
      prev.map((day, i) =>
        i === dayIndex
          ? {
              ...day,
              timeSlots: [
                ...day.timeSlots,
                { startTime: '9:00 AM', endTime: '6:00 PM' },
              ],
            }
          : day
      )
    )
  }

  const copyTimeSlots = (fromDayIndex: number, toDayIndex: number) => {
    setSchedule((prev) =>
      prev.map((day, i) =>
        i === toDayIndex
          ? {
              ...day,
              timeSlots: [...prev[fromDayIndex].timeSlots],
            }
          : day
      )
    )
  }

  return (
    <div className="flex gap-[72px]">
      <div className="w-[153px] pt-1">
        {schedule.map((day, dayIndex) => (
          <div key={day.day} className="mb-8 flex items-center gap-6">
            <div className="h-6 p-0.5 bg-muted rounded-[44px] flex items-center">
              <Switch
                checked={day.enabled}
                onCheckedChange={() => handleToggleDay(dayIndex)}
              />
            </div>
            <span
              className={`w-[85px] text-base font-medium leading-loose ${
                day.enabled ? 'text-foreground/90' : 'text-foreground/60'
              }`}
            >
              {day.day}
            </span>
          </div>
        ))}
      </div>

      <div className="flex-1">
        {schedule.map((day, dayIndex) => (
          <div key={day.day} className="mb-6">
            {day.timeSlots.map((slot, slotIndex) => (
              <div key={slotIndex} className="flex items-center gap-4 mb-4">
                <Select
                  value={slot.startTime}
                  onValueChange={(value) =>
                    handleTimeChange(dayIndex, slotIndex, 'startTime', value)
                  }
                  disabled={!day.enabled}
                >
                  <SelectTrigger className="w-[100px] h-10 border-black/10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {TIME_OPTIONS.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <span className="text-foreground/60">→</span>

                <Select
                  value={slot.endTime}
                  onValueChange={(value) =>
                    handleTimeChange(dayIndex, slotIndex, 'endTime', value)
                  }
                  disabled={!day.enabled}
                >
                  <SelectTrigger className="w-[100px] h-10 border-black/10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {TIME_OPTIONS.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex items-center gap-6 ml-8">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-5 h-5"
                    onClick={() => addTimeSlot(dayIndex)}
                    disabled={!day.enabled}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-4 h-4"
                    onClick={() => copyTimeSlots(dayIndex, (dayIndex + 1) % 7)}
                    disabled={!day.enabled}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
