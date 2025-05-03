import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import { CheckCircle2, ChevronRight, MessageSquare, Star, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { TokenDisplay } from "@/components/token/token-display"

export const metadata: Metadata = {
  title: "Feedback | NeuroVerse",
  description: "Share your thoughts and help us improve",
}

export default function FeedbackPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Feedback</h1>
        <p className="text-muted-foreground">Share your thoughts and suggestions to help us improve MindfulCampus</p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-[2fr_1fr] w-full">
        <Card>
          <CardHeader>
            <CardTitle>Submit Feedback</CardTitle>
            <CardDescription>Tell us what you think about MindfulCampus</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="feedback-type">Feedback Type</Label>
                <RadioGroup defaultValue="general" className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="general" id="general" />
                    <Label htmlFor="general">General Feedback</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="feature" id="feature" />
                    <Label htmlFor="feature">Feature Request</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bug" id="bug" />
                    <Label htmlFor="bug">Bug Report</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="content" id="content" />
                    <Label htmlFor="content">Content Suggestion</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Brief description of your feedback" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback">Your Feedback</Label>
                <Textarea
                  id="feedback"
                  placeholder="Please provide details about your experience, suggestions, or issues..."
                  className="min-h-[150px]"
                />
              </div>

              <div className="space-y-2">
                <Label>How would you rate your overall experience with MindfulCampus?</Label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Button key={rating} variant="outline" size="icon" className="h-10 w-10 rounded-full" type="button">
                      <Star
                        className={`h-5 w-5 ${rating <= 3 ? "text-muted-foreground" : "text-amber-500 fill-amber-500"}`}
                      />
                      <span className="sr-only">{rating} stars</span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email (optional)</Label>
                <Input id="email" type="email" placeholder="Your email for follow-up" />
                <p className="text-xs text-muted-foreground">
                  We'll only use this to follow up on your feedback if necessary.
                </p>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex items-center text-sm text-muted-foreground">
              <TokenDisplay amount={50} size="sm" />
              <span className="ml-2">for submitting feedback</span>
            </div>
            <Button>
              Submit Feedback
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Feedback Stats</CardTitle>
              <CardDescription>Your contribution matters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Your Submissions</span>
                  <span className="text-sm font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Tokens Earned</span>
                  <TokenDisplay amount={150} size="sm" />
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Implemented Suggestions</span>
                  <span className="text-sm font-medium">1</span>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Community Impact</h3>
                <div className="flex items-center gap-2 p-2 rounded-md bg-teal-50">
                  <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
                    <ThumbsUp className="h-4 w-4 text-teal-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Your feedback has helped improve the app!</p>
                    <p className="text-xs text-muted-foreground">
                      Your suggestion for improved meditation timers was implemented
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Surveys</CardTitle>
              <CardDescription>Help shape the future of MindfulCampus</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-md border">
                <div>
                  <p className="text-sm font-medium">Feature Prioritization Survey</p>
                  <p className="text-xs text-muted-foreground">5 minutes • 100 tokens</p>
                </div>
                <Button variant="outline" size="sm">
                  Take Survey
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 rounded-md border">
                <div>
                  <p className="text-sm font-medium">User Experience Survey</p>
                  <p className="text-xs text-muted-foreground">10 minutes • 200 tokens</p>
                </div>
                <Button variant="outline" size="sm">
                  Take Survey
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="recent" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recent">Recent Feedback</TabsTrigger>
          <TabsTrigger value="implemented">Implemented Ideas</TabsTrigger>
          <TabsTrigger value="popular">Popular Requests</TabsTrigger>
        </TabsList>
        <TabsContent value="recent" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Community Feedback</CardTitle>
              <CardDescription>Recent feedback from the MindfulCampus community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-lg border">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">More Guided Meditations</p>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700">
                        Feature Request
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "I would love to see more guided meditations specifically for test anxiety. The current ones are
                      great, but more variety would be helpful."
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Submitted by Sarah T.</span>
                      <span>2 days ago</span>
                      <div className="flex items-center">
                        <ThumbsUp className="mr-1 h-3 w-3" />
                        <span>24 upvotes</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg border">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Dark Mode Option</p>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700">
                        Feature Request
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Would it be possible to add a dark mode option? It would be easier on the eyes when using the app
                      at night."
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Submitted by Alex J.</span>
                      <span>3 days ago</span>
                      <div className="flex items-center">
                        <ThumbsUp className="mr-1 h-3 w-3" />
                        <span>42 upvotes</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg border">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Calendar Integration</p>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700">
                        Feature Request
                      </Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        In Progress
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "It would be great if the app could integrate with Google Calendar or Apple Calendar to sync
                      meditation sessions and other activities."
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Submitted by Jamie L.</span>
                      <span>1 week ago</span>
                      <div className="flex items-center">
                        <ThumbsUp className="mr-1 h-3 w-3" />
                        <span>37 upvotes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="implemented" className="space-y-4 pt-4">
          {/* Implemented ideas content */}
        </TabsContent>
        <TabsContent value="popular" className="space-y-4 pt-4">
          {/* Popular requests content */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
