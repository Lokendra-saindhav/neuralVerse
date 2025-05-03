import type { Metadata } from "next"
import { Bot, Send, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { TokenDisplay } from "@/components/token/token-display"

export const metadata: Metadata = {
  title: "AI Therapist | NeuroVerse",
  description: "AI-driven mental health assistant for guidance and emotional support",
}

export default function ChatbotPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">AI Therapist</h1>
        <p className="text-muted-foreground">
          AI-driven mental health assistant offering guidance, coping strategies, and emotional check-ins
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-[3fr_1fr] w-full">
        <Card className="flex flex-col h-[600px]">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?text=AI" alt="AI Therapist" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <span>MindfulAI Assistant</span>
            </CardTitle>
            <CardDescription>Your personal mental health companion</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto p-4 space-y-4">
            <div className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?text=AI" alt="AI Therapist" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <div className="bg-muted p-3 rounded-lg rounded-tl-none">
                  <p className="text-sm">Hello Alex! How are you feeling today?</p>
                </div>
                <span className="text-xs text-muted-foreground">10:30 AM</span>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="flex flex-col gap-1 items-end">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none">
                  <p className="text-sm">I'm feeling a bit stressed about my upcoming exams.</p>
                </div>
                <span className="text-xs text-muted-foreground">10:31 AM</span>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?text=A" alt="Alex" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?text=AI" alt="AI Therapist" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <div className="bg-muted p-3 rounded-lg rounded-tl-none">
                  <p className="text-sm">
                    I understand how exams can be stressful. It's completely normal to feel this way. Let's talk about
                    some strategies that might help you manage this stress:
                  </p>
                  <ol className="list-decimal pl-5 mt-2 space-y-1 text-sm">
                    <li>Break your study sessions into smaller, manageable chunks</li>
                    <li>Use the focus timer in the Academic Planner to help structure your study time</li>
                    <li>Practice deep breathing exercises when you feel overwhelmed</li>
                    <li>Make sure you're getting enough sleep and taking breaks</li>
                  </ol>
                  <p className="text-sm mt-2">Would you like to explore any of these strategies in more detail?</p>
                </div>
                <span className="text-xs text-muted-foreground">10:32 AM</span>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="flex flex-col gap-1 items-end">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none">
                  <p className="text-sm">I'd like to know more about managing my study time effectively.</p>
                </div>
                <span className="text-xs text-muted-foreground">10:33 AM</span>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?text=A" alt="Alex" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?text=AI" alt="AI Therapist" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <div className="bg-muted p-3 rounded-lg rounded-tl-none">
                  <p className="text-sm">Great choice! Here are some effective study time management techniques:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>
                      <strong>Pomodoro Technique:</strong> Study for 25 minutes, then take a 5-minute break. After four
                      cycles, take a longer 15-30 minute break.
                    </li>
                    <li>
                      <strong>Task Prioritization:</strong> Use the Academic Planner to list tasks by importance and
                      deadline.
                    </li>
                    <li>
                      <strong>Time Blocking:</strong> Allocate specific time blocks for different subjects or tasks.
                    </li>
                    <li>
                      <strong>Active Study Methods:</strong> Use flashcards, practice tests, or teach concepts to
                      someone else instead of passive reading.
                    </li>
                  </ul>
                  <p className="text-sm mt-2">
                    Would you like me to help you create a personalized study schedule based on your upcoming exams?
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">10:35 AM</span>
              </div>
            </div>
          </CardContent>
          <Separator />
          <CardFooter className="p-4">
            <form className="flex w-full gap-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Conversation Stats</CardTitle>
              <CardDescription>Your interaction with MindfulAI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Total Sessions</span>
                  <span className="text-sm font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">This Week</span>
                  <span className="text-sm font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Tokens Earned</span>
                  <TokenDisplay amount={120} size="sm" />
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Mood Improvement</span>
                  <span className="text-sm font-medium text-green-600">+15%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Suggested Topics</CardTitle>
              <CardDescription>Based on your conversations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Bot className="mr-2 h-4 w-4" />
                Exam Anxiety
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Bot className="mr-2 h-4 w-4" />
                Time Management
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Bot className="mr-2 h-4 w-4" />
                Sleep Improvement
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Bot className="mr-2 h-4 w-4" />
                Social Connections
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
              <CardDescription>Helpful tools and information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Connect with Real Therapist
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Bot className="mr-2 h-4 w-4" />
                Mental Health Assessment
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Bot className="mr-2 h-4 w-4" />
                Guided Meditation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="chat" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="chat">Chat History</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
          <TabsTrigger value="settings">Preferences</TabsTrigger>
        </TabsList>
        <TabsContent value="chat" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Conversations</CardTitle>
              <CardDescription>Your chat history with MindfulAI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-md border">
                  <div>
                    <p className="text-sm font-medium">Exam Stress Management</p>
                    <p className="text-xs text-muted-foreground">Today, 10:30 AM</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Continue
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md border">
                  <div>
                    <p className="text-sm font-medium">Sleep Improvement Strategies</p>
                    <p className="text-xs text-muted-foreground">Yesterday, 9:15 PM</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Continue
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md border">
                  <div>
                    <p className="text-sm font-medium">Social Anxiety Discussion</p>
                    <p className="text-xs text-muted-foreground">May 1, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Continue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="insights" className="space-y-4 pt-4">
          {/* AI Insights content */}
        </TabsContent>
        <TabsContent value="settings" className="space-y-4 pt-4">
          {/* Preferences content */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
