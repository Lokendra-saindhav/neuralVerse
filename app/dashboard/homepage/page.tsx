import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Brain, Clock, Heart, Music, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DailyAffirmation } from "@/components/mental-health/daily-affirmation"
import { BreathingExercise } from "@/components/mental-health/breathing-exercise"

export const metadata: Metadata = {
  title: "Homepage | NeuroVerse",
  description: "Mental wellness resources and activities",
}

export default function HomepagePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Mental Wellness Resources</h1>
        <p className="text-muted-foreground">Explore tools and activities to support your mental health journey</p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 w-full">
        <DailyAffirmation />
        <BreathingExercise />
      </div>

      <Tabs defaultValue="featured" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="mindfulness">Mindfulness</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>
        <TabsContent value="featured" className="space-y-4 pt-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Guided Meditation</CardTitle>
                <CardDescription>10-minute session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Meditation scene"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="secondary" size="icon" className="rounded-full h-12 w-12">
                      <Music className="h-6 w-6" />
                      <span className="sr-only">Play</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/solo-play">
                    Start Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Stress Management</CardTitle>
                <CardDescription>Interactive workshop</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Stress management workshop"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="secondary" size="icon" className="rounded-full h-12 w-12">
                      <BookOpen className="h-6 w-6" />
                      <span className="sr-only">Open</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/multiplayer">
                    Join Workshop
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Sleep Stories</CardTitle>
                <CardDescription>Calming bedtime narratives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Sleep stories"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="secondary" size="icon" className="rounded-full h-12 w-12">
                      <Music className="h-6 w-6" />
                      <span className="sr-only">Play</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/solo-play">
                    Listen Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/dashboard/homepage/all">
                View All Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="mindfulness" className="space-y-4 pt-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <Card>
              <CardHeader>
                <CardTitle>Guided Meditation</CardTitle>
                <CardDescription>Find your inner peace</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A collection of guided meditations for different needs and durations.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/solo-play">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Breathing Exercises</CardTitle>
                <CardDescription>Calm your mind and body</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Various breathing techniques to reduce stress and anxiety.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/solo-play">
                    Practice
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Body Scan</CardTitle>
                <CardDescription>Connect with your body</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A mindfulness practice to release tension and increase body awareness.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/solo-play">
                    Start
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="education" className="pt-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <Card>
              <CardHeader>
                <CardTitle>Understanding Anxiety</CardTitle>
                <CardDescription>Educational module</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn about the science of anxiety and effective coping strategies.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/solo-play">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Stress Management</CardTitle>
                <CardDescription>Interactive course</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Develop practical skills to manage stress in academic and personal life.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/solo-play">
                    Start Course
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Healthy Sleep Habits</CardTitle>
                <CardDescription>Sleep improvement guide</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Discover techniques for better sleep quality and establishing routines.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/solo-play">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="community" className="pt-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <Card>
              <CardHeader>
                <CardTitle>Peer Support Groups</CardTitle>
                <CardDescription>Connect with others</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Join moderated group sessions to share experiences and support each other.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/multiplayer">
                    Join Group
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Group Meditation</CardTitle>
                <CardDescription>Meditate together</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Experience the power of collective meditation in a supportive environment.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/multiplayer">
                    Schedule Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Wellness Challenges</CardTitle>
                <CardDescription>Group activities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Participate in community challenges to build healthy habits together.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/multiplayer">
                    Join Challenge
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 w-full">
        <Card>
          <CardHeader>
            <CardTitle>Solo Play</CardTitle>
            <CardDescription>Self-paced activities for individual practice</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Guided Breathing</p>
                <p className="text-sm text-muted-foreground">5-minute exercise</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Mindfulness Journal</p>
                <p className="text-sm text-muted-foreground">Daily reflection</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Sleep Stories</p>
                <p className="text-sm text-muted-foreground">Bedtime narratives</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/dashboard/solo-play">
                Explore Solo Activities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Multiplayer Learning</CardTitle>
            <CardDescription>Connect with peers in collaborative activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Peer Support Circles</p>
                <p className="text-sm text-muted-foreground">Group discussions</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Workshops</p>
                <p className="text-sm text-muted-foreground">Interactive learning</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-700">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Group Meditation</p>
                <p className="text-sm text-muted-foreground">Collective mindfulness</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/dashboard/multiplayer">
                Join Group Activities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
