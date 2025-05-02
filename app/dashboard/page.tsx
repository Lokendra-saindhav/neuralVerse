import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Brain, Calendar, Clock, Heart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DailyAffirmation } from "@/components/mental-health/daily-affirmation"

export const metadata: Metadata = {
  title: "Dashboard | NeuroVerse",
  description: "Your mental health journey dashboard",
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex</h1>
        <p className="text-muted-foreground">
          Track your mental wellness journey and explore resources to support your wellbeing.
        </p>
      </div>

      <DailyAffirmation />

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 w-full">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wellness Score</CardTitle>
            <Heart className="h-4 w-4 text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <Progress value={78} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+2% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mindfulness Minutes</CardTitle>
            <Clock className="h-4 w-4 text-teal-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42 mins</div>
            <Progress value={42} max={60} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">18 mins to daily goal</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Group Sessions</CardTitle>
            <Users className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-2">2 upcoming this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
            <Brain className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
            <Progress value={7} max={30} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Keep going for rewards!</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Activities</CardTitle>
            <CardDescription>Your scheduled sessions and activities for the week.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Group Meditation</p>
                  <p className="text-xs text-muted-foreground">Today, 5:00 PM</p>
                </div>
                <Button variant="ghost" size="sm">
                  Join
                </Button>
              </div>
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                  <Users className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Peer Support Circle</p>
                  <p className="text-xs text-muted-foreground">Tomorrow, 3:30 PM</p>
                </div>
                <Button variant="ghost" size="sm">
                  Join
                </Button>
              </div>
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <Brain className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Stress Management Workshop</p>
                  <p className="text-xs text-muted-foreground">Friday, 4:00 PM</p>
                </div>
                <Button variant="ghost" size="sm">
                  Join
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard/calendar">
                View Full Calendar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Access</CardTitle>
            <CardDescription>Jump to your favorite activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/dashboard/solo-play">
                  <Heart className="mr-2 h-4 w-4 text-rose-500" />
                  Guided Breathing
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/dashboard/solo-play">
                  <Brain className="mr-2 h-4 w-4 text-amber-500" />
                  Mindfulness Journal
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/dashboard/multiplayer">
                  <Users className="mr-2 h-4 w-4 text-indigo-500" />
                  Group Meditation
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/dashboard/solo-play">
                  <Clock className="mr-2 h-4 w-4 text-teal-500" />
                  Sleep Stories
                </Link>
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/dashboard/homepage">
                Explore All Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
