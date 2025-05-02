import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, MessageCircle, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "Multiplayer Learning | NeuroVerse",
  description: "Connect with peers in collaborative mental wellness activities",
}

export default function MultiplayerPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Multiplayer Learning Hub</h1>
        <p className="text-muted-foreground">
          Connect with peers and participate in collaborative mental wellness activities
        </p>
      </div>

      <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-100">
        <CardHeader>
          <CardTitle>Upcoming Group Sessions</CardTitle>
          <CardDescription>Join scheduled group activities with other students</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                <Users className="h-6 w-6" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center">
                  <p className="text-sm font-medium">Group Meditation</p>
                  <Badge variant="outline" className="ml-2">
                    Today
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">5:00 PM - 6:00 PM • 12 participants</p>
              </div>
              <Button size="sm">Join</Button>
            </div>
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center">
                  <p className="text-sm font-medium">Peer Support Circle</p>
                  <Badge variant="outline" className="ml-2">
                    Tomorrow
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">3:30 PM - 4:30 PM • 8 participants</p>
              </div>
              <Button size="sm" variant="outline">
                RSVP
              </Button>
            </div>
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center">
                  <p className="text-sm font-medium">Stress Management Workshop</p>
                  <Badge variant="outline" className="ml-2">
                    Friday
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">4:00 PM - 5:30 PM • 15 participants</p>
              </div>
              <Button size="sm" variant="outline">
                RSVP
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

      <Tabs defaultValue="groups" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="groups">Support Groups</TabsTrigger>
          <TabsTrigger value="workshops">Workshops</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
        </TabsList>
        <TabsContent value="groups" className="space-y-4 pt-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <Card>
              <CardHeader>
                <CardTitle>Anxiety Support</CardTitle>
                <CardDescription>Weekly discussions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    A safe space to share experiences and coping strategies for anxiety.
                  </p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Avatar key={i} className="border-2 border-background">
                        <AvatarImage src={`/placeholder.svg?text=${i}`} />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                    ))}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
                      +8
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Group</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mindfulness Practice</CardTitle>
                <CardDescription>Daily sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Group meditation sessions to build a consistent mindfulness practice.
                  </p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <Avatar key={i} className="border-2 border-background">
                        <AvatarImage src={`/placeholder.svg?text=${i}`} />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                    ))}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
                      +12
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Group</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Academic Stress</CardTitle>
                <CardDescription>Bi-weekly meetings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Support for managing academic pressure and preventing burnout.
                  </p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <Avatar key={i} className="border-2 border-background">
                        <AvatarImage src={`/placeholder.svg?text=${i}`} />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                    ))}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
                      +6
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Group</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="workshops" className="space-y-4 pt-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Stress Management</CardTitle>
                <CardDescription>Friday, 4:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Stress management workshop"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2">
                    <Clock className="mr-1 h-3 w-3" /> 90 min
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn practical techniques to manage stress during exams and deadlines.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  RSVP
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Healthy Relationships</CardTitle>
                <CardDescription>Monday, 5:30 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Healthy relationships workshop"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2">
                    <Clock className="mr-1 h-3 w-3" /> 60 min
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Explore the foundations of healthy relationships and communication skills.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  RSVP
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Mindful Eating</CardTitle>
                <CardDescription>Wednesday, 12:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Mindful eating workshop"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2">
                    <Clock className="mr-1 h-3 w-3" /> 45 min
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Develop a healthier relationship with food through mindfulness practices.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  RSVP
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="challenges" className="space-y-4 pt-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <Card>
              <CardHeader>
                <CardTitle>7-Day Meditation</CardTitle>
                <CardDescription>Build a daily practice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Join others in committing to meditate for 10 minutes daily for one week.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="font-medium">42</span> participants
                    </div>
                    <Badge variant="outline">Starts Monday</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Challenge</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Gratitude Journal</CardTitle>
                <CardDescription>14-day challenge</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Write three things you're grateful for each day for two weeks.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="font-medium">28</span> participants
                    </div>
                    <Badge variant="outline">In Progress</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Challenge</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Digital Detox</CardTitle>
                <CardDescription>Weekend challenge</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Reduce screen time and practice being present over the weekend.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="font-medium">16</span> participants
                    </div>
                    <Badge variant="outline">Starts Friday</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Challenge</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Your Multiplayer Activity</CardTitle>
            <CardDescription>Track your participation in group activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="space-y-1">
                  <p className="font-medium">Peer Support Circle</p>
                  <p className="text-sm text-muted-foreground">Last attended: 3 days ago</p>
                </div>
                <Badge>Active Member</Badge>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <div className="space-y-1">
                  <p className="font-medium">Gratitude Journal Challenge</p>
                  <p className="text-sm text-muted-foreground">Progress: 5/14 days</p>
                </div>
                <Badge variant="outline">In Progress</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Stress Management Workshop</p>
                  <p className="text-sm text-muted-foreground">Upcoming: Friday, 4:00 PM</p>
                </div>
                <Badge variant="outline">RSVP'd</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard/profile">
                View All Activities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
