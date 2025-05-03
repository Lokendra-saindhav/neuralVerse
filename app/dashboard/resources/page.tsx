import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Brain, Download, FileText, Search, Tag, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { TokenDisplay } from "@/components/token/token-display"

export const metadata: Metadata = {
  title: "Resource Hub | NeuroVerse",
  description: "Curated mental health resources, guides, and expert-verified content",
}

export default function ResourceHubPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Resource Hub</h1>
        <p className="text-muted-foreground">
          Explore our curated collection of mental health resources, guides, and expert-verified content
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search resources..." className="pl-9" />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline" className="bg-teal-50 text-teal-700 cursor-pointer hover:bg-teal-100">
            Stress Management
          </Badge>
          <Badge variant="outline" className="bg-indigo-50 text-indigo-700 cursor-pointer hover:bg-indigo-100">
            Academic Success
          </Badge>
          <Badge variant="outline" className="bg-amber-50 text-amber-700 cursor-pointer hover:bg-amber-100">
            Mindfulness
          </Badge>
          <Badge variant="outline" className="bg-rose-50 text-rose-700 cursor-pointer hover:bg-rose-100">
            Mental Health
          </Badge>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-[2fr_1fr] w-full">
        <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-100">
          <CardHeader>
            <CardTitle>Featured Resource</CardTitle>
            <CardDescription>Expert-recommended content for students</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-4">
            <div className="aspect-video relative rounded-md overflow-hidden w-full md:w-1/2">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Exam Stress Management Guide"
                fill
                className="object-cover"
              />
              <Badge className="absolute top-2 right-2 bg-teal-500">
                <BookOpen className="mr-1 h-3 w-3" />
                Guide
              </Badge>
            </div>
            <div className="flex flex-col justify-between w-full md:w-1/2">
              <div>
                <h3 className="text-xl font-bold">Exam Stress Management Guide</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  A comprehensive guide to managing exam-related stress, with evidence-based techniques and strategies
                  from mental health professionals.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="bg-teal-50 text-teal-700">
                    <Tag className="mr-1 h-3 w-3" />
                    Stress Management
                  </Badge>
                  <Badge variant="outline" className="bg-indigo-50 text-indigo-700">
                    <Tag className="mr-1 h-3 w-3" />
                    Academic Success
                  </Badge>
                  <Badge variant="outline" className="bg-amber-50">
                    <TokenDisplay amount={25} size="sm" showTooltip={false} />
                    <span className="ml-1">Earn</span>
                  </Badge>
                </div>
              </div>
              <Button className="mt-4" asChild>
                <Link href="/dashboard/resources/exam-stress">
                  Read Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resource Categories</CardTitle>
            <CardDescription>Browse by topic</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/dashboard/resources/stress">
                <Brain className="mr-2 h-4 w-4 text-teal-500" />
                Stress Management
                <span className="ml-auto text-xs text-muted-foreground">12 resources</span>
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/dashboard/resources/academic">
                <BookOpen className="mr-2 h-4 w-4 text-indigo-500" />
                Academic Success
                <span className="ml-auto text-xs text-muted-foreground">8 resources</span>
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/dashboard/resources/mindfulness">
                <Brain className="mr-2 h-4 w-4 text-amber-500" />
                Mindfulness & Meditation
                <span className="ml-auto text-xs text-muted-foreground">15 resources</span>
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/dashboard/resources/mental-health">
                <Brain className="mr-2 h-4 w-4 text-rose-500" />
                Mental Health Basics
                <span className="ml-auto text-xs text-muted-foreground">10 resources</span>
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/dashboard/resources/sleep">
                <Brain className="mr-2 h-4 w-4 text-blue-500" />
                Sleep Improvement
                <span className="ml-auto text-xs text-muted-foreground">6 resources</span>
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/dashboard/resources/social">
                <Brain className="mr-2 h-4 w-4 text-purple-500" />
                Social Connection
                <span className="ml-auto text-xs text-muted-foreground">7 resources</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="worksheets">Worksheets</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4 pt-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <Card>
              <CardHeader className="pb-2">
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Exam Stress Management Guide"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-teal-500">
                    <BookOpen className="mr-1 h-3 w-3" />
                    Guide
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle className="text-lg">Exam Stress Management Guide</CardTitle>
                <CardDescription>Evidence-based techniques for managing exam anxiety</CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="bg-teal-50 text-teal-700">
                    <Tag className="mr-1 h-3 w-3" />
                    Stress Management
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/resources/exam-stress">
                    Read Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Mindfulness Meditation Video"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-amber-500">
                    <Video className="mr-1 h-3 w-3" />
                    Video
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle className="text-lg">Mindfulness Meditation for Beginners</CardTitle>
                <CardDescription>15-minute guided meditation for stress relief</CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="bg-amber-50 text-amber-700">
                    <Tag className="mr-1 h-3 w-3" />
                    Mindfulness
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/resources/mindfulness-video">
                    Watch Video
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Time Management Worksheet"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-indigo-500">
                    <FileText className="mr-1 h-3 w-3" />
                    Worksheet
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle className="text-lg">Time Management Worksheet</CardTitle>
                <CardDescription>Printable worksheet to improve study planning</CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="bg-indigo-50 text-indigo-700">
                    <Tag className="mr-1 h-3 w-3" />
                    Academic Success
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/resources/time-management">
                    Download
                    <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-6">
            <Button variant="outline">
              Load More Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="guides" className="space-y-4 pt-4">
          {/* Guides content */}
        </TabsContent>
        <TabsContent value="videos" className="space-y-4 pt-4">
          {/* Videos content */}
        </TabsContent>
        <TabsContent value="worksheets" className="space-y-4 pt-4">
          {/* Worksheets content */}
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Personalized Recommendations</CardTitle>
          <CardDescription>Based on your quiz results and activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <div className="flex flex-col gap-2 p-4 border rounded-lg">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
                  <Brain className="h-4 w-4 text-teal-700" />
                </div>
                <div>
                  <p className="text-sm font-medium">Stress Management Techniques</p>
                  <p className="text-xs text-muted-foreground">5-minute read</p>
                </div>
              </div>
              <Separator />
              <p className="text-xs text-muted-foreground">Recommended based on your stress level and academic goals</p>
              <Button variant="outline" size="sm" className="mt-auto" asChild>
                <Link href="/dashboard/resources/stress-techniques">Read Now</Link>
              </Button>
            </div>
            <div className="flex flex-col gap-2 p-4 border rounded-lg">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <Video className="h-4 w-4 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm font-medium">Focus Meditation</p>
                  <p className="text-xs text-muted-foreground">10-minute video</p>
                </div>
              </div>
              <Separator />
              <p className="text-xs text-muted-foreground">
                Recommended based on your interest in concentration improvement
              </p>
              <Button variant="outline" size="sm" className="mt-auto" asChild>
                <Link href="/dashboard/resources/focus-meditation">Watch Now</Link>
              </Button>
            </div>
            <div className="flex flex-col gap-2 p-4 border rounded-lg">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-indigo-700" />
                </div>
                <div>
                  <p className="text-sm font-medium">Exam Preparation Checklist</p>
                  <p className="text-xs text-muted-foreground">Printable worksheet</p>
                </div>
              </div>
              <Separator />
              <p className="text-xs text-muted-foreground">Recommended based on your upcoming exams and stress level</p>
              <Button variant="outline" size="sm" className="mt-auto" asChild>
                <Link href="/dashboard/resources/exam-checklist">Download</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
