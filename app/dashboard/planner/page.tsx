import type { Metadata } from "next"
import { BookMarked, Calendar, CheckCircle2, Clock, Plus, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { TokenDisplay } from "@/components/token/token-display"

export const metadata: Metadata = {
  title: "Academic Planner | NeuroVerse",
  description: "Track assignments, deadlines, and study goals",
}

export default function PlannerPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Academic Planner</h1>
        <p className="text-muted-foreground">Track assignments, deadlines, and study goals to manage academic stress</p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-[2fr_1fr] w-full">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Track your assignments and exams</CardDescription>
            </div>
            <Button size="sm" className="gap-1">
              <Plus className="h-4 w-4" />
              Add Task
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-700">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Psychology Research Paper</p>
                    <Badge variant="outline" className="bg-red-50 text-red-700">
                      Due Tomorrow
                    </Badge>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>Due May 4, 2025 • 11:59 PM</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Tag className="mr-1 h-3 w-3" />
                    <span>PSY 301 • Professor Johnson</span>
                  </div>
                  <div className="pt-1">
                    <div className="flex justify-between text-xs">
                      <span>Progress</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-1 mt-1" />
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="sr-only">Mark as complete</span>
                </Button>
              </div>
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <BookMarked className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Statistics Midterm Exam</p>
                    <Badge variant="outline" className="bg-amber-50 text-amber-700">
                      3 Days Left
                    </Badge>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>May 6, 2025 • 2:00 PM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Tag className="mr-1 h-3 w-3" />
                    <span>STAT 202 • Professor Williams</span>
                  </div>
                  <div className="pt-1">
                    <div className="flex justify-between text-xs">
                      <span>Study Progress</span>
                      <span>40%</span>
                    </div>
                    <Progress value={40} className="h-1 mt-1" />
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="sr-only">Mark as complete</span>
                </Button>
              </div>
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <BookMarked className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Literature Review Assignment</p>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      1 Week Left
                    </Badge>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>May 10, 2025 • 11:59 PM</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Tag className="mr-1 h-3 w-3" />
                    <span>ENG 205 • Professor Garcia</span>
                  </div>
                  <div className="pt-1">
                    <div className="flex justify-between text-xs">
                      <span>Progress</span>
                      <span>20%</span>
                    </div>
                    <Progress value={20} className="h-1 mt-1" />
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="sr-only">Mark as complete</span>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Tasks
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Focus Timer</CardTitle>
            <CardDescription>Boost productivity with timed study sessions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold">25:00</div>
              <p className="text-sm text-muted-foreground mt-1">Pomodoro Timer</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" size="sm">
                15 min
              </Button>
              <Button variant="outline" size="sm" className="bg-teal-50">
                25 min
              </Button>
              <Button variant="outline" size="sm">
                45 min
              </Button>
            </div>
            <Button className="w-full">Start Focus Session</Button>
            <Separator />
            <div>
              <h3 className="text-sm font-medium mb-2">Today's Focus</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sessions Completed</span>
                  <span className="text-sm font-medium">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Focus Time</span>
                  <span className="text-sm font-medium">1h 15m</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Tokens Earned</span>
                  <TokenDisplay amount={75} size="sm" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tasks" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
        </TabsList>
        <TabsContent value="tasks" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Task Management</CardTitle>
              <CardDescription>Organize your academic tasks by priority</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">High Priority</h3>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <Plus className="h-3.5 w-3.5" />
                    <span>Add</span>
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-3 rounded-md border">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Complete Psychology Research Paper</p>
                      <p className="text-xs text-muted-foreground">Due May 4, 2025</p>
                    </div>
                    <Badge variant="outline" className="bg-red-50 text-red-700">
                      Due Tomorrow
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-md border">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Study for Statistics Midterm</p>
                      <p className="text-xs text-muted-foreground">Exam on May 6, 2025</p>
                    </div>
                    <Badge variant="outline" className="bg-amber-50 text-amber-700">
                      3 Days Left
                    </Badge>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Medium Priority</h3>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <Plus className="h-3.5 w-3.5" />
                    <span>Add</span>
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-3 rounded-md border">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Start Literature Review Assignment</p>
                      <p className="text-xs text-muted-foreground">Due May 10, 2025</p>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      1 Week Left
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-md border">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Read Chapters 5-7 for Biology</p>
                      <p className="text-xs text-muted-foreground">For next week's class</p>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      1 Week Left
                    </Badge>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Low Priority</h3>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <Plus className="h-3.5 w-3.5" />
                    <span>Add</span>
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-3 rounded-md border">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Research topics for final project</p>
                      <p className="text-xs text-muted-foreground">Due end of semester</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      4 Weeks Left
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="courses" className="space-y-4 pt-4">
          {/* Courses content */}
        </TabsContent>
        <TabsContent value="schedule" className="space-y-4 pt-4">
          {/* Schedule content */}
        </TabsContent>
        <TabsContent value="stats" className="space-y-4 pt-4">
          {/* Statistics content */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
