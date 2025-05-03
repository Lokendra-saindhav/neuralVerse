import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Brain, Calendar, CheckCircle2, Download, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { TokenDisplay } from "@/components/token/token-display"

export const metadata: Metadata = {
  title: "Assessment Results | MindfulCampus",
  description: "Your personalized mental health assessment results",
}

export default function QuizResultsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Your Assessment Results</h1>
          <TokenDisplay amount={100} size="lg" />
        </div>
        <p className="text-muted-foreground">
          Based on your responses, we've created personalized recommendations for your mental wellness journey
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-[2fr_1fr] w-full">
        <Card>
          <CardHeader>
            <CardTitle>Wellness Overview</CardTitle>
            <CardDescription>Your current mental health indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Overall Wellness Score</span>
                <span className="text-sm text-muted-foreground">72/100</span>
              </div>
              <Progress value={72} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Your overall wellness score indicates moderate mental health. There are some areas where you're doing
                well and others that could use some attention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Anxiety</span>
                  <span className="text-sm text-muted-foreground">Moderate</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Depression</span>
                  <span className="text-sm text-muted-foreground">Low</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Sleep Quality</span>
                  <span className="text-sm text-muted-foreground">Fair</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Academic Stress</span>
                  <span className="text-sm text-muted-foreground">High</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-base font-medium">Key Insights</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">Academic stress is your primary concern.</span> Your responses
                    indicate that academic pressures are significantly impacting your mental wellbeing.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">Your sleep quality could be improved.</span> Poor sleep may be
                    contributing to your stress and anxiety levels.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">You're using some effective coping strategies.</span> Your use of
                    exercise and social support are positive approaches to managing stress.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>Recommended actions for your wellness journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start" asChild>
              <Link href="/dashboard/planner">
                <Calendar className="mr-2 h-4 w-4" />
                Set up Academic Planner
              </Link>
            </Button>
            <Button className="w-full justify-start" asChild>
              <Link href="/dashboard/resources/stress-management">
                <FileText className="mr-2 h-4 w-4" />
                View Stress Management Guide
              </Link>
            </Button>
            <Button className="w-full justify-start" asChild>
              <Link href="/dashboard/solo-play">
                <Brain className="mr-2 h-4 w-4" />
                Try Guided Sleep Meditation
              </Link>
            </Button>
            <Button className="w-full justify-start" asChild>
              <Link href="/dashboard/resources/exam-anxiety">
                <Download className="mr-2 h-4 w-4" />
                Download Exam Anxiety Worksheet
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-100">
        <CardHeader>
          <CardTitle>Personalized Recommendations</CardTitle>
          <CardDescription>Based on your assessment results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Academic Stress Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your assessment shows high academic stress. We recommend using the Academic Planner to organize your
                  workload and break tasks into manageable chunks.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/planner">
                    Open Planner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sleep Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your sleep quality is fair. Try our sleep meditation exercises and establish a consistent sleep
                  schedule to improve your rest quality.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/solo-play">
                    Sleep Resources
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Anxiety Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your moderate anxiety levels could benefit from regular mindfulness practice and our cognitive games
                  designed to reduce stress.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/games">
                    Try Wellness Games
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" asChild>
            <Link href="/dashboard">
              Return to Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
