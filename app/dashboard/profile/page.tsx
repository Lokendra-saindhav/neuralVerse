import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Award, Calendar, Clock, Edit, Heart, Star, Trophy, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export const metadata: Metadata = {
  title: "Profile | NeuroVerse",
  description: "Your mental wellness journey profile",
}

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
        <p className="text-muted-foreground">Track your progress and manage your mental wellness journey</p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-[1fr_2fr] w-full">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/placeholder.svg?text=A" alt="Alex Johnson" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold">Alex Johnson</h2>
              <p className="text-sm text-muted-foreground">Psychology Student</p>
              <div className="flex gap-2 mt-2">
                <Badge variant="outline" className="bg-amber-50">
                  <Star className="h-3 w-3 mr-1 text-amber-500" />
                  Gold Member
                </Badge>
                <Badge variant="outline" className="bg-teal-50">
                  <Trophy className="h-3 w-3 mr-1 text-teal-500" />
                  7-Day Streak
                </Badge>
              </div>
              <Button variant="outline" size="sm" className="mt-4 gap-2">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Wellness Overview</CardTitle>
            <CardDescription>Your mental wellness journey at a glance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Overall Wellness Score</span>
                <span className="text-sm text-muted-foreground">78/100</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Mindfulness</span>
                  <span className="text-sm text-muted-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Stress Management</span>
                  <span className="text-sm text-muted-foreground">72%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Sleep Quality</span>
                  <span className="text-sm text-muted-foreground">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Social Connection</span>
                  <span className="text-sm text-muted-foreground">80%</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="activity" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>
        <TabsContent value="activity" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Your recent mental wellness activities and sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Guided Meditation</p>
                    <p className="text-xs text-muted-foreground">Completed 10-minute session</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">Today, 9:30 AM</div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                    <User className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Peer Support Circle</p>
                    <p className="text-xs text-muted-foreground">Attended group session</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">Yesterday, 4:00 PM</div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Gratitude Journal</p>
                    <p className="text-xs text-muted-foreground">Completed daily entry</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">Yesterday, 9:15 PM</div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Stress Management Workshop</p>
                    <p className="text-xs text-muted-foreground">RSVP'd for upcoming session</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">2 days ago</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Activities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="achievements" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Achievements</CardTitle>
              <CardDescription>Milestones and badges earned on your wellness journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
                <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <Trophy className="h-8 w-8" />
                  </div>
                  <h3 className="text-center font-medium">7-Day Streak</h3>
                  <p className="text-center text-xs text-muted-foreground">
                    Completed activities for 7 consecutive days
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="text-center font-medium">Meditation Master</h3>
                  <p className="text-center text-xs text-muted-foreground">Completed 10 meditation sessions</p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                    <User className="h-8 w-8" />
                  </div>
                  <h3 className="text-center font-medium">Community Supporter</h3>
                  <p className="text-center text-xs text-muted-foreground">Participated in 5 group activities</p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg border p-4 opacity-50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-center font-medium">Sleep Champion</h3>
                  <p className="text-center text-xs text-muted-foreground">Complete 5 sleep stories (2/5)</p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg border p-4 opacity-50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-center font-medium">Gratitude Guru</h3>
                  <p className="text-center text-xs text-muted-foreground">Complete 14 days of journaling (5/14)</p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg border p-4 opacity-50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                    <Star className="h-8 w-8" />
                  </div>
                  <h3 className="text-center font-medium">Wellness Expert</h3>
                  <p className="text-center text-xs text-muted-foreground">Complete all educational modules (1/3)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="stats" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Wellness Statistics</CardTitle>
              <CardDescription>Detailed metrics of your mental wellness journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Activity Summary</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 w-full">
                  <div className="rounded-lg border p-3 text-center">
                    <div className="text-2xl font-bold">42</div>
                    <div className="text-xs text-muted-foreground">Meditation Minutes</div>
                  </div>
                  <div className="rounded-lg border p-3 text-center">
                    <div className="text-2xl font-bold">5</div>
                    <div className="text-xs text-muted-foreground">Journal Entries</div>
                  </div>
                  <div className="rounded-lg border p-3 text-center">
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-xs text-muted-foreground">Group Sessions</div>
                  </div>
                  <div className="rounded-lg border p-3 text-center">
                    <div className="text-2xl font-bold">1</div>
                    <div className="text-xs text-muted-foreground">Courses Completed</div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Weekly Activity</h3>
                <div className="h-[200px] w-full rounded-lg border p-4">
                  <div className="flex h-full items-end gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                      <div key={day} className="flex flex-1 flex-col items-center gap-2">
                        <div
                          className="w-full rounded-t bg-teal-500"
                          style={{
                            height: `${[30, 45, 20, 80, 60, 40, 0][i]}%`,
                            opacity: i === 6 ? 0.3 : 1,
                          }}
                        ></div>
                        <span className="text-xs">{day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Mood Tracking</h3>
                <div className="h-[100px] w-full rounded-lg border p-4">
                  <div className="flex h-full items-center gap-2">
                    {[3, 4, 3, 5, 4, 4, 3].map((value, i) => (
                      <div key={i} className="flex flex-1 flex-col items-center">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            value === 5
                              ? "bg-green-500"
                              : value === 4
                                ? "bg-teal-500"
                                : value === 3
                                  ? "bg-amber-500"
                                  : value === 2
                                    ? "bg-orange-500"
                                    : "bg-red-500"
                          }`}
                          style={{
                            marginBottom: `${(5 - value) * 15}px`,
                          }}
                        ></div>
                        <div className="h-[1px] w-full bg-border"></div>
                        <span className="text-xs">{["M", "T", "W", "T", "F", "S", "S"][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/analytics">
                  View Detailed Analytics
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="preferences" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Preferences</CardTitle>
              <CardDescription>Manage your account settings and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Personal Information</h3>
                <div className="rounded-lg border divide-y">
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="text-sm font-medium">Name</p>
                      <p className="text-sm text-muted-foreground">Alex Johnson</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit name</span>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">alex.johnson@example.com</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit email</span>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="text-sm font-medium">Password</p>
                      <p className="text-sm text-muted-foreground">••••••••••••</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Change password</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Notification Preferences</h3>
                <div className="rounded-lg border divide-y">
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="text-sm font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive updates and reminders via email</p>
                    </div>
                    <div className="h-6 w-11 rounded-full bg-teal-500 relative">
                      <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="text-sm font-medium">Push Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive alerts on your device</p>
                    </div>
                    <div className="h-6 w-11 rounded-full bg-teal-500 relative">
                      <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="text-sm font-medium">Activity Reminders</p>
                      <p className="text-sm text-muted-foreground">Get reminders for scheduled activities</p>
                    </div>
                    <div className="h-6 w-11 rounded-full bg-teal-500 relative">
                      <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
