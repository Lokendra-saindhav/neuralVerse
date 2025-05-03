"use client"

import { useState } from "react"

interface CalendarViewProps {
  view: "day" | "week" | "month"
}

export function CalendarView({ view }: CalendarViewProps) {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)

  // In a real app, these would come from an API or database
  const events = [
    {
      id: "1",
      title: "Group Meditation",
      start: "5:00 PM",
      end: "6:00 PM",
      day: "Monday",
      type: "group",
      color: "bg-indigo-500",
    },
    {
      id: "2",
      title: "Peer Support Circle",
      start: "3:30 PM",
      end: "4:30 PM",
      day: "Tuesday",
      type: "group",
      color: "bg-indigo-500",
    },
    {
      id: "3",
      title: "Stress Management Workshop",
      start: "4:00 PM",
      end: "5:30 PM",
      day: "Friday",
      type: "workshop",
      color: "bg-amber-500",
    },
    {
      id: "4",
      title: "Mindfulness Journal Reminder",
      start: "9:00 PM",
      end: "9:15 PM",
      day: "Monday",
      type: "solo",
      color: "bg-teal-500",
    },
    {
      id: "5",
      title: "Guided Meditation",
      start: "8:00 AM",
      end: "8:15 AM",
      day: "Wednesday",
      type: "solo",
      color: "bg-teal-500",
    },
    {
      id: "6",
      title: "Sleep Story",
      start: "10:00 PM",
      end: "10:30 PM",
      day: "Thursday",
      type: "solo",
      color: "bg-teal-500",
    },
  ]

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const hours = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
  ]

  const handleEventClick = (eventId: string) => {
    setSelectedEvent(eventId === selectedEvent ? null : eventId)
  }

  if (view === "day") {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          {hours.map((hour) => (
            <div key={hour} className="flex items-start">
              <div className="w-16 text-xs text-muted-foreground">{hour}</div>
              <div className="flex-1 border-t pt-2">
                {events
                  .filter((event) => event.start === hour && event.day === "Monday")
                  .map((event) => (
                    <div
                      key={event.id}
                      className={`rounded-md p-2 mb-1 cursor-pointer ${event.color} text-white`}
                      onClick={() => handleEventClick(event.id)}
                    >
                      <div className="font-medium">{event.title}</div>
                      <div className="text-xs">
                        {event.start} - {event.end}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (view === "week") {
    return (
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-7 gap-4 mb-4">
            {days.map((day) => (
              <div key={day} className="text-center font-medium">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-4">
            {days.map((day) => (
              <div key={day} className="min-h-[600px] border rounded-md p-2">
                {events
                  .filter((event) => event.day === day)
                  .map((event) => (
                    <div
                      key={event.id}
                      className={`rounded-md p-2 mb-2 cursor-pointer ${event.color} text-white`}
                      onClick={() => handleEventClick(event.id)}
                    >
                      <div className="font-medium">{event.title}</div>
                      <div className="text-xs">
                        {event.start} - {event.end}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Month view
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px]">
        <div className="grid grid-cols-7 gap-4 mb-4">
          {days.map((day) => (
            <div key={day} className="text-center font-medium">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 35 }).map((_, i) => {
            const day = (i % 7) + 1
            const week = Math.floor(i / 7)
            const date = week * 7 + day
            const isCurrentMonth = date > 0 && date <= 31
            const dayName = days[i % 7]

            return (
              <div
                key={i}
                className={`min-h-[100px] border rounded-md p-1 ${
                  isCurrentMonth ? "" : "bg-muted/20 text-muted-foreground"
                }`}
              >
                <div className="text-xs font-medium mb-1">{isCurrentMonth ? date : ""}</div>
                <div className="space-y-1">
                  {isCurrentMonth &&
                    events
                      .filter((event) => event.day === dayName)
                      .slice(0, 2)
                      .map((event) => (
                        <div
                          key={event.id}
                          className={`rounded-sm px-1 py-0.5 text-xs cursor-pointer ${event.color} text-white truncate`}
                          onClick={() => handleEventClick(event.id)}
                        >
                          {event.title}
                        </div>
                      ))}
                  {isCurrentMonth && events.filter((event) => event.day === dayName).length > 2 && (
                    <div className="text-xs text-muted-foreground px-1">
                      +{events.filter((event) => event.day === dayName).length - 2} more
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
