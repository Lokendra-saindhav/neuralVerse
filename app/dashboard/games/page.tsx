import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Brain, Gamepad2, Puzzle, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { TokenDisplay } from "@/components/token/token-display"

export const metadata: Metadata = {
  title: "Wellness Games | NeuroVerse",
  description: "Interactive games designed to reduce stress and improve focus",
}

export default function GamesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Wellness Games</h1>
        <p className="text-muted-foreground">
          Interactive games designed to reduce stress, improve focus, and earn wellness tokens
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-[2fr_1fr] w-full">
        <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-100">
          <CardHeader>
            <CardTitle>Featured Game: Memory Match</CardTitle>
            <CardDescription>Train your memory while reducing stress</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-4">
            <div className="aspect-video relative rounded-md overflow-hidden w-full md:w-1/2">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Memory Match Game"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="secondary" size="icon" className="rounded-full h-12 w-12">
                  <Gamepad2 className="h-6 w-6" />
                  <span className="sr-only">Play</span>
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-1/2">
              <div className="space-y-2">
                <p className="text-sm">
                  Challenge your memory with this relaxing card-matching game. Find pairs of matching cards to clear the
                  board.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="bg-indigo-50">
                    <Brain className="mr-1 h-3 w-3" />
                    Memory
                  </Badge>
                  <Badge variant="outline" className="bg-purple-50">
                    <Zap className="mr-1 h-3 w-3" />
                    Focus
                  </Badge>
                  <Badge variant="outline" className="bg-amber-50">
                    <TokenDisplay amount={75} size="sm" showTooltip={false} />
                  </Badge>
                </div>
              </div>
              <Button className="mt-4" asChild>
                <Link href="/dashboard/games/memory">
                  Play Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Game Stats</CardTitle>
            <CardDescription>Track your gaming progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Games Played</span>
                <span className="text-sm">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Tokens Earned</span>
                <TokenDisplay amount={875} size="sm" />
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Highest Score</span>
                <span className="text-sm">1,250 pts</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Time Played</span>
                <span className="text-sm">3h 45m</span>
              </div>
            </div>
            <div className="pt-2">
              <h3 className="text-sm font-medium mb-2">Recent Achievements</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 p-2 rounded-md bg-amber-50">
                  <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <Puzzle className="h-4 w-4 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Puzzle Master</p>
                    <p className="text-xs text-muted-foreground">Completed 10 puzzles</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-md bg-indigo-50">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Brain className="h-4 w-4 text-indigo-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Memory Expert</p>
                    <p className="text-xs text-muted-foreground">Perfect score in Memory Match</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Games</TabsTrigger>
          <TabsTrigger value="focus">Focus Games</TabsTrigger>
          <TabsTrigger value="relaxation">Relaxation Games</TabsTrigger>
          <TabsTrigger value="cognitive">Cognitive Games</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4 pt-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Memory Match</CardTitle>
                <CardDescription>Train your memory</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Memory Match Game"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="bg-indigo-50">
                    <Brain className="mr-1 h-3 w-3" />
                    Memory
                  </Badge>
                  <Badge variant="outline" className="bg-amber-50">
                    <TokenDisplay amount={75} size="sm" showTooltip={false} />
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/games/memory">
                    Play Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Breathing Puzzle</CardTitle>
                <CardDescription>Relax while solving puzzles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Breathing Puzzle Game"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="bg-teal-50">
                    <Zap className="mr-1 h-3 w-3" />
                    Relaxation
                  </Badge>
                  <Badge variant="outline" className="bg-amber-50">
                    <TokenDisplay amount={50} size="sm" showTooltip={false} />
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/games/breathing-puzzle">
                    Play Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Focus Flow</CardTitle>
                <CardDescription>Improve concentration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Focus Flow Game"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="bg-purple-50">
                    <Zap className="mr-1 h-3 w-3" />
                    Focus
                  </Badge>
                  <Badge variant="outline" className="bg-amber-50">
                    <TokenDisplay amount={100} size="sm" showTooltip={false} />
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/games/focus-flow">
                    Play Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="focus" className="space-y-4 pt-4">
          {/* Focus games content */}
        </TabsContent>
        <TabsContent value="relaxation" className="space-y-4 pt-4">
          {/* Relaxation games content */}
        </TabsContent>
        <TabsContent value="cognitive" className="space-y-4 pt-4">
          {/* Cognitive games content */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
