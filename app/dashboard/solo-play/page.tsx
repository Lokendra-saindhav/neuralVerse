import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Music, Pencil } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BreathingExercise } from "@/components/mental-health/breathing-exercise"

export const metadata: Metadata = {
  title: "Solo Play | NeuroVerse",
  description: "Self-paced mental wellness activities",
}

export default function SoloPlayPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Solo Play</h1>
        <p className="text-muted-foreground">Self-paced activities for your individual mental wellness journey</p>
      </div>

      <BreathingExercise />

      <Tabs defaultValue="meditation" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="meditation">Meditation</TabsTrigger>
          <TabsTrigger value="journaling">Journaling</TabsTrigger>
          <TabsTrigger value="sleep">Sleep</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="meditation" className="space-y-4 pt-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Beginner Meditation</CardTitle>
                <CardDescription>5-minute session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Beginner meditation"
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
                <Button variant="outline" className="w-full">
                  Start Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Anxiety Relief</CardTitle>
                <CardDescription>10-minute session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Anxiety relief meditation"
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
                <Button variant="outline" className="w-full">
                  Start Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Focus & Concentration</CardTitle>
                <CardDescription>15-minute session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Focus meditation"
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
                <Button variant="outline" className="w-full">
                  Start Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button variant="outline">
              View All Meditations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="journaling" className="space-y-4 pt-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <Card>
              <CardHeader>
                <CardTitle>Gratitude Journal</CardTitle>
                <CardDescription>Daily appreciation practice</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Record three things you're grateful for to cultivate positivity.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Pencil className="mr-2 h-4 w-4" />
                  Write Entry
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mood Tracker</CardTitle>
                <CardDescription>Monitor your emotional state</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track your daily moods and identify patterns to better understand your emotions.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Pencil className="mr-2 h-4 w-4" />
                  Log Mood
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Reflection Journal</CardTitle>
                <CardDescription>Process thoughts and feelings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A space for free-form writing to explore your thoughts and emotions.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Pencil className="mr-2 h-4 w-4" />
                  Start Writing
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="sleep" className="space-y-4 pt-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Ocean Waves</CardTitle>
                <CardDescription>20-minute sleep story</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image src="/placeholder.svg?height=720&width=1280" alt="Ocean waves" fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="secondary" size="icon" className="rounded-full h-12 w-12">
                      <Music className="h-6 w-6" />
                      <span className="sr-only">Play</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Listen Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Gentle Rain</CardTitle>
                <CardDescription>30-minute ambient sound</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image src="/placeholder.svg?height=720&width=1280" alt="Gentle rain" fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="secondary" size="icon" className="rounded-full h-12 w-12">
                      <Music className="h-6 w-6" />
                      <span className="sr-only">Play</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Listen Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Forest Journey</CardTitle>
                <CardDescription>15-minute sleep story</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Forest journey"
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
                <Button variant="outline" className="w-full">
                  Listen Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="education" className="space-y-4 pt-4">
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
                <Button variant="outline" className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Start Learning
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mindfulness Basics</CardTitle>
                <CardDescription>Introductory course</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Discover the principles of mindfulness and how to apply them in daily life.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Start Course
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Stress Management</CardTitle>
                <CardDescription>Practical techniques</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn effective methods to manage stress in academic and personal settings.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Explore Techniques
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-100">
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
            <CardDescription>Track your solo activities and achievements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Meditation Minutes</span>
                <span className="text-sm text-muted-foreground">42/60 mins</span>
              </div>
              <div className="h-2 w-full bg-teal-100 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500 rounded-full" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Journal Entries</span>
                <span className="text-sm text-muted-foreground">3/5 entries</span>
              </div>
              <div className="h-2 w-full bg-cyan-100 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Educational Modules</span>
                <span className="text-sm text-muted-foreground">1/3 completed</span>
              </div>
              <div className="h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: "33%" }}></div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard/profile">
                View Full Progress
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
