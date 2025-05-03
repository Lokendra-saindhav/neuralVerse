"use client"

import { useState } from "react"
import { CalendarIcon, Clock, MapPin, Users, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function CalendarEventDetails() {
  const [open, setOpen] = useState(false)

  // This is a demo component - in a real app, you would pass the event data as props
  // or fetch it based on an ID

  return (
    <>
      {/* This button is just for demo purposes - in a real app, this dialog would be opened from the calendar */}
      <div className="flex justify-center">
        <Button variant="outline" onClick={() => setOpen(true)}>
          View Sample Event Details
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-indigo-500" />
                <DialogTitle>Group Meditation</DialogTitle>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="h-8 w-8">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <DialogDescription>Virtual group meditation session</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-[20px_1fr] items-start gap-2">
              <CalendarIcon className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm">Monday, May 3, 2025</p>
                <p className="text-sm text-muted-foreground">5:00 PM - 6:00 PM</p>
              </div>
            </div>
            <div className="grid grid-cols-[20px_1fr] items-start gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm">60 minutes</p>
                <p className="text-sm text-muted-foreground">Reminder set for 15 minutes before</p>
              </div>
            </div>
            <div className="grid grid-cols-[20px_1fr] items-start gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm">Virtual Session</p>
                <p className="text-sm text-muted-foreground">Zoom link will be sent 10 minutes before</p>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-sm font-medium mb-2">Description</h3>
              <p className="text-sm text-muted-foreground">
                Join our guided meditation session focused on stress reduction and mindfulness. This session is suitable
                for beginners and experienced practitioners alike. We'll practice breathing techniques and body scan
                meditation.
              </p>
            </div>
            <Separator />
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium">Participants (12)</h3>
                <Button variant="ghost" size="sm" className="h-8 gap-1">
                  <Users className="h-3.5 w-3.5" />
                  <span>View All</span>
                </Button>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Avatar key={i} className="border-2 border-background">
                    <AvatarImage src={`/placeholder.svg?text=${i}`} />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
                  +7
                </div>
              </div>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" className="sm:flex-1">
              Edit Event
            </Button>
            <Button className="sm:flex-1">Join Session</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
