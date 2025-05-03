import type { Metadata } from "next"
import { CalendarIcon, ChevronLeft, ChevronRight, Clock, Filter, Plus, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarView } from "@/components/calendar/calendar-view"
import { CalendarEventDetails } from "@/components/calendar/calendar-event-details"

export const metadata: Metadata = {
  title: "Calendar | NeuroVerse",
  description: "Schedule and manage your mental wellness activities",
}

export default function CalendarPage() {
  // In a real app, these would come from an API or database
  const upcomingEvents = [
    {
      id: "1",
      title: "Group Meditation",
      date: "Today",
      time: "5:00 PM - 6:00 PM",
      type: "group",
      participants: 12,
      location: "Virtual",
    },
    {
      id: "2",
      title: "Peer Support Circle",
      date: "Tomorrow",
      time: "3:30 PM - 4:30 PM",
      type: "group",
      participants: 8,
      location: "Student Center, Room 204",
    },
    {
      id: "3",
      title: "Stress Management Workshop",
      date: "Friday",
      time: "4:00 PM - 5:30 PM",
      type: "workshop",
      participants: 15,
      location: "Virtual",
    },
    {
      id: "4",
      title: "Mindfulness Journal Reminder",
      date: "Daily",
      time: "9:00 PM",
      type: "solo",
      location: "App Notification",
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        <p className="text-muted-foreground">Schedule and manage your mental wellness activities</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="flex-1 order-2 md:order-1">
          <Tabs defaultValue="week" className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <TabsList className="w-full sm:w-auto">
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous</span>
                </Button>
                <Button variant="outline" className="font-medium">
                  Today
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next</span>
                </Button>
                <Select defaultValue="may">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="may">May 2025</SelectItem>
                    <SelectItem value="june">June 2025</SelectItem>
                    <SelectItem value="july">July 2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <TabsContent value="day" className="mt-0">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Monday, May 3, 2025</CardTitle>
                  <CardDescription>Your schedule for today</CardDescription>
                </CardHeader>
                <CardContent>
                  <CalendarView view="day" />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="week" className="mt-0">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>May 3 - May 9, 2025</CardTitle>
                  <CardDescription>Your schedule for this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <CalendarView view="week" />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="month" className="mt-0">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>May 2025</CardTitle>
                  <CardDescription>Your schedule for this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <CalendarView view="month" />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="w-full md:w-80 order-1 md:order-2">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Mini Calendar</span>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Event</span>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <Calendar mode="single" selected={new Date("2025-05-03")} className="rounded-md border shadow-sm" />
              <Separator className="my-4" />
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Event Types</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-teal-50 text-teal-700 hover:bg-teal-100">
                    <div className="mr-1 h-2 w-2 rounded-full bg-teal-500" />
                    Solo Activities
                  </Badge>
                  <Badge variant="outline" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
                    <div className="mr-1 h-2 w-2 rounded-full bg-indigo-500" />
                    Group Sessions
                  </Badge>
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-100">
                    <div className="mr-1 h-2 w-2 rounded-full bg-amber-500" />
                    Workshops
                  </Badge>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Upcoming Events</h3>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    <span>Filter</span>
                  </Button>
                </div>
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-start gap-3 rounded-md border p-3">
                      <div
                        className={`mt-0.5 h-6 w-1 rounded-full ${
                          event.type === "group"
                            ? "bg-indigo-500"
                            : event.type === "workshop"
                              ? "bg-amber-500"
                              : "bg-teal-500"
                        }`}
                      />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">{event.title}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <CalendarIcon className="mr-1 h-3 w-3" />
                          <span>
                            {event.date} • {event.time}
                          </span>
                        </div>
                        {event.type !== "solo" && (
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Users className="mr-1 h-3 w-3" />
                            <span>{event.participants} participants</span>
                          </div>
                        )}
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <CalendarEventDetails />
    </div>
  )
}
