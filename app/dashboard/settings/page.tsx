import type { Metadata } from "next"
import { Bell, Globe, Lock, Moon, Palette, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Settings | NeuroVerse",
  description: "Customize your app experience",
}

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Customize your app experience and manage your account settings</p>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Manage your account details and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <div className="flex gap-4">
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue="Alex Johnson"
                  />
                  <Button>Save</Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="flex gap-4">
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue="alex.johnson@example.com"
                  />
                  <Button>Save</Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <input
                  id="current-password"
                  type="password"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <input
                  id="new-password"
                  type="password"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <input
                  id="confirm-password"
                  type="password"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <Button>Change Password</Button>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-red-600">
                <Shield className="mr-2 h-5 w-5" />
                Danger Zone
              </CardTitle>
              <CardDescription>Irreversible account actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-red-200 p-4">
                <h3 className="text-lg font-medium">Delete Account</h3>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <Button variant="destructive" className="mt-4">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appearance" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="mr-2 h-5 w-5" />
                Appearance
              </CardTitle>
              <CardDescription>Customize how the app looks and feels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Theme</h3>
                <RadioGroup defaultValue="light" className="grid grid-cols-3 gap-4">
                  <div>
                    <RadioGroupItem value="light" id="light" className="sr-only" />
                    <Label
                      htmlFor="light"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 [&:has([data-state=checked])]:border-primary"
                    >
                      <div className="mb-2 rounded-md bg-white p-2 shadow-sm">
                        <div className="h-2 w-8 rounded-lg bg-gray-200" />
                      </div>
                      Light
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="dark" id="dark" className="sr-only" />
                    <Label
                      htmlFor="dark"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-gray-950 p-4 hover:bg-gray-900 [&:has([data-state=checked])]:border-primary"
                    >
                      <div className="mb-2 rounded-md bg-gray-800 p-2 shadow-sm">
                        <div className="h-2 w-8 rounded-lg bg-gray-600" />
                      </div>
                      <span className="text-white">Dark</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="system" id="system" className="sr-only" />
                    <Label
                      htmlFor="system"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-gradient-to-r from-white to-gray-950 p-4 hover:from-gray-50 hover:to-gray-900 [&:has([data-state=checked])]:border-primary"
                    >
                      <div className="mb-2 rounded-md bg-gradient-to-r from-white to-gray-800 p-2 shadow-sm">
                        <div className="h-2 w-8 rounded-lg bg-gradient-to-r from-gray-200 to-gray-600" />
                      </div>
                      <span className="bg-gradient-to-r from-black to-white bg-clip-text text-transparent">System</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Moon className="h-5 w-5" />
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                  </div>
                  <Switch id="dark-mode" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Color Scheme</h3>
                <RadioGroup defaultValue="teal" className="grid grid-cols-5 gap-4">
                  <div>
                    <RadioGroupItem value="teal" id="teal" className="sr-only" />
                    <Label
                      htmlFor="teal"
                      className="flex aspect-square flex-col items-center justify-center rounded-md bg-teal-500 p-2 text-white [&:has([data-state=checked])]:ring-2 [&:has([data-state=checked])]:ring-offset-2"
                    >
                      Teal
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="indigo" id="indigo" className="sr-only" />
                    <Label
                      htmlFor="indigo"
                      className="flex aspect-square flex-col items-center justify-center rounded-md bg-indigo-500 p-2 text-white [&:has([data-state=checked])]:ring-2 [&:has([data-state=checked])]:ring-offset-2"
                    >
                      Indigo
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="rose" id="rose" className="sr-only" />
                    <Label
                      htmlFor="rose"
                      className="flex aspect-square flex-col items-center justify-center rounded-md bg-rose-500 p-2 text-white [&:has([data-state=checked])]:ring-2 [&:has([data-state=checked])]:ring-offset-2"
                    >
                      Rose
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="amber" id="amber" className="sr-only" />
                    <Label
                      htmlFor="amber"
                      className="flex aspect-square flex-col items-center justify-center rounded-md bg-amber-500 p-2 text-white [&:has([data-state=checked])]:ring-2 [&:has([data-state=checked])]:ring-offset-2"
                    >
                      Amber
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="emerald" id="emerald" className="sr-only" />
                    <Label
                      htmlFor="emerald"
                      className="flex aspect-square flex-col items-center justify-center rounded-md bg-emerald-500 p-2 text-white [&:has([data-state=checked])]:ring-2 [&:has([data-state=checked])]:ring-offset-2"
                    >
                      Emerald
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button variant="outline">Reset to Default</Button>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>Manage how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-activities">Activity Reminders</Label>
                    <Switch id="email-activities" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Receive reminders about upcoming activities and sessions
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-updates">App Updates</Label>
                    <Switch id="email-updates" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">Get notified about new features and improvements</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-newsletter">Weekly Newsletter</Label>
                    <Switch id="email-newsletter" />
                  </div>
                  <p className="text-sm text-muted-foreground">Receive weekly mental wellness tips and resources</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Push Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-activities">Activity Reminders</Label>
                    <Switch id="push-activities" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Receive reminders about upcoming activities and sessions
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-messages">Messages</Label>
                    <Switch id="push-messages" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">Get notified when you receive new messages</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-achievements">Achievements</Label>
                    <Switch id="push-achievements" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">Receive notifications when you earn new achievements</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Schedule</h3>
                <div className="space-y-2">
                  <Label>Quiet Hours</Label>
                  <div className="flex items-center gap-2">
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>10:00 PM</option>
                      <option>11:00 PM</option>
                      <option>12:00 AM</option>
                    </select>
                    <span>to</span>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>6:00 AM</option>
                      <option>7:00 AM</option>
                      <option>8:00 AM</option>
                    </select>
                  </div>
                  <p className="text-sm text-muted-foreground">No notifications will be sent during quiet hours</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button variant="outline">Reset to Default</Button>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="privacy" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-2 h-5 w-5" />
                Privacy Settings
              </CardTitle>
              <CardDescription>Control your data and privacy preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Data Sharing</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="share-usage">Usage Analytics</Label>
                    <Switch id="share-usage" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">Share anonymous usage data to help improve the app</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="share-profile">Public Profile</Label>
                    <Switch id="share-profile" />
                  </div>
                  <p className="text-sm text-muted-foreground">Allow other users to view your profile information</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="share-activity">Activity Visibility</Label>
                    <Switch id="share-activity" />
                  </div>
                  <p className="text-sm text-muted-foreground">Show your activity status to other users</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Data Management</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Download My Data
                  </Button>
                  <p className="text-sm text-muted-foreground">Request a copy of all your personal data</p>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Delete My Data
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Request deletion of all your personal data (this will not delete your account)
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Cookies</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="cookies-essential">Essential Cookies</Label>
                    <Switch id="cookies-essential" defaultChecked disabled />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Required for the app to function properly (cannot be disabled)
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="cookies-preferences">Preference Cookies</Label>
                    <Switch id="cookies-preferences" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">Remember your settings and preferences</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="cookies-analytics">Analytics Cookies</Label>
                    <Switch id="cookies-analytics" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">Help us understand how you use the app</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button variant="outline">Reset to Default</Button>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="accessibility" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                Accessibility Settings
              </CardTitle>
              <CardDescription>Customize the app to meet your accessibility needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Text Size</h3>
                <RadioGroup defaultValue="medium" className="grid grid-cols-3 gap-4">
                  <div>
                    <RadioGroupItem value="small" id="text-small" className="sr-only" />
                    <Label
                      htmlFor="text-small"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <span className="text-sm">Small</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="medium" id="text-medium" className="sr-only" />
                    <Label
                      htmlFor="text-medium"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <span className="text-base">Medium</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="large" id="text-large" className="sr-only" />
                    <Label
                      htmlFor="text-large"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <span className="text-lg">Large</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Contrast</h3>
                <RadioGroup defaultValue="normal" className="grid grid-cols-2 gap-4">
                  <div>
                    <RadioGroupItem value="normal" id="contrast-normal" className="sr-only" />
                    <Label
                      htmlFor="contrast-normal"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-background p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      Normal
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="high" id="contrast-high" className="sr-only" />
                    <Label
                      htmlFor="contrast-high"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-black text-white p-4 hover:bg-gray-900 [&:has([data-state=checked])]:border-primary"
                    >
                      High Contrast
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Additional Settings</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="reduce-motion">Reduce Motion</Label>
                    <Switch id="reduce-motion" />
                  </div>
                  <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="screen-reader">Screen Reader Support</Label>
                    <Switch id="screen-reader" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">Optimize the app for screen readers</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="keyboard-navigation">Keyboard Navigation</Label>
                    <Switch id="keyboard-navigation" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">Enable enhanced keyboard navigation</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button variant="outline">Reset to Default</Button>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
