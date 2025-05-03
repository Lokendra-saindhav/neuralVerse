import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Music, Pencil, LucideIcon } from "lucide-react";
import * as React from "react"; // Import React for component definition

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BreathingExercise } from "@/components/mental-health/breathing-exercise";

export const metadata: Metadata = {
  title: "Solo Play | NeuroVerse",
  description: "Self-paced mental wellness activities",
};

// --- Data Definitions ---

type ActivityType = 'audio' | 'text' | 'module';

interface ActivityItem {
  id: number | string;
  title: string;
  description: string;
  type: ActivityType;
  imageAlt?: string; // Optional: Alt text for image (used for 'audio' type)
  content?: string; // Optional: Text content (used for 'text'/'module' types)
  buttonText: string;
  // Optional: Specific image source, defaults to placeholder
  imageSrc?: string;
}

const meditationData: ActivityItem[] = [
  { id: "med1", title: "Beginner Meditation", description: "5-minute session", imageAlt: "Beginner meditation", buttonText: "Start Session", type: 'audio' },
  { id: "med2", title: "Anxiety Relief", description: "10-minute session", imageAlt: "Anxiety relief meditation", buttonText: "Start Session", type: 'audio' },
  { id: "med3", title: "Focus & Concentration", description: "15-minute session", imageAlt: "Focus meditation", buttonText: "Start Session", type: 'audio' },
];

const journalingData: ActivityItem[] = [
  { id: "jour1", title: "Gratitude Journal", description: "Daily appreciation practice", content: "Record three things you're grateful for to cultivate positivity.", buttonText: "Write Entry", type: 'text' },
  { id: "jour2", title: "Mood Tracker", description: "Monitor your emotional state", content: "Track your daily moods and identify patterns to better understand your emotions.", buttonText: "Log Mood", type: 'text' },
  { id: "jour3", title: "Reflection Journal", description: "Process thoughts and feelings", content: "A space for free-form writing to explore your thoughts and emotions.", buttonText: "Start Writing", type: 'text' },
];

const sleepData: ActivityItem[] = [
 { id: "sleep1", title: "Ocean Waves", description: "20-minute sleep story", imageAlt: "Ocean waves", buttonText: "Listen Now", type: 'audio' },
 { id: "sleep2", title: "Gentle Rain", description: "30-minute ambient sound", imageAlt: "Gentle rain", buttonText: "Listen Now", type: 'audio' },
 { id: "sleep3", title: "Forest Journey", description: "15-minute sleep story", imageAlt: "Forest journey", buttonText: "Listen Now", type: 'audio' },
];

const educationData: ActivityItem[] = [
 { id: "edu1", title: "Understanding Anxiety", description: "Educational module", content: "Learn about the science of anxiety and effective coping strategies.", buttonText: "Start Learning", type: 'module' },
 { id: "edu2", title: "Mindfulness Basics", description: "Introductory course", content: "Discover the principles of mindfulness and how to apply them in daily life.", buttonText: "Start Course", type: 'module' },
 { id: "edu3", title: "Stress Management", description: "Practical techniques", content: "Learn effective methods to manage stress in academic and personal settings.", buttonText: "Explore Techniques", type: 'module' },
];

// --- Reusable Activity Card Component ---

interface ActivityCardProps {
  item: ActivityItem;
}

function ActivityCard({ item }: ActivityCardProps) {
  const hasImage = item.type === 'audio';
  const Icon = item.type === 'text' ? Pencil : item.type === 'module' ? BookOpen : null;
  const ButtonIcon = item.type === 'audio' ? ArrowRight : null;

  // Use provided imageSrc or generate a placeholder based on title
  const imgSrc = item.imageSrc || `/placeholder.svg?height=720&width=1280&text=${encodeURIComponent(item.title)}`;

  return (
    <Card>
      <CardHeader className={hasImage ? "pb-2" : ""}>
        <CardTitle className="text-lg">{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {hasImage ? (
          <div className="aspect-video relative rounded-md overflow-hidden border"> {/* Added border for better placeholder visibility */}
            <Image
              src={imgSrc}
              alt={item.imageAlt || item.title}
              fill
              className="object-cover w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10"> {/* Slightly darker overlay */}
              <Button variant="secondary" size="icon" className="rounded-full h-12 w-12">
                <Music className="h-6 w-6" />
                <span className="sr-only">Play {item.title}</span>
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">{item.content}</p>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          {Icon && <Icon className="mr-2 h-4 w-4" />}
          {item.buttonText}
          {ButtonIcon && <ButtonIcon className="ml-2 h-4 w-4" />}
        </Button>
      </CardFooter>
    </Card>
  );
}

// --- Main Page Component ---

export default function SoloPlayPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Solo Play</h1>
        <p className="text-muted-foreground">Self-paced activities for your individual mental wellness journey</p>
      </div>

      {/* Breathing Exercise Component */}
      <BreathingExercise />

      {/* Tabs Section */}
      <Tabs defaultValue="meditation" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4"> {/* Adjusted grid for smaller screens */}
          <TabsTrigger value="meditation">Meditation</TabsTrigger>
          <TabsTrigger value="journaling">Journaling</TabsTrigger>
          <TabsTrigger value="sleep">Sleep</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>

        {/* Meditation Tab */}
        <TabsContent value="meditation" className="space-y-4 pt-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {meditationData.map((item) => (
              <ActivityCard key={item.id} item={item} />
            ))}
          </div>
          <div className="flex justify-center pt-2"> {/* Added padding-top */}
            <Button variant="outline" asChild>
              <Link href="/dashboard/solo-play/meditation"> {/* Example link */}
                View All Meditations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </TabsContent>

        {/* Journaling Tab */}
        <TabsContent value="journaling" className="space-y-4 pt-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {journalingData.map((item) => (
              <ActivityCard key={item.id} item={item} />
            ))}
          </div>
           {/* Optional: Add "View All Journaling" button if needed */}
        </TabsContent>

        {/* Sleep Tab */}
        <TabsContent value="sleep" className="space-y-4 pt-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {sleepData.map((item) => (
              <ActivityCard key={item.id} item={item} />
            ))}
          </div>
           {/* Optional: Add "View All Sleep Aids" button if needed */}
        </TabsContent>

        {/* Education Tab */}
        <TabsContent value="education" className="space-y-4 pt-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {educationData.map((item) => (
              <ActivityCard key={item.id} item={item} />
            ))}
          </div>
           {/* Optional: Add "View All Education" button if needed */}
        </TabsContent>
      </Tabs>

      {/* Progress Card Section */}
      <div className="mt-6">
        <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 border-teal-100 dark:border-teal-800/50"> {/* Added dark mode gradient */}
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
            <CardDescription>Track your solo activities and achievements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Progress Bar Item */}
            <div className="space-y-1.5"> {/* Reduced spacing slightly */}
              <div className="flex justify-between items-baseline"> {/* Align baseline */}
                <span className="text-sm font-medium">Meditation Minutes</span>
                <span className="text-sm text-muted-foreground">42/60 mins</span>
              </div>
              <div className="h-2 w-full bg-teal-100 dark:bg-teal-800/50 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500 rounded-full" style={{ width: "70%" }}></div>
              </div>
            </div>
            {/* Progress Bar Item */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-medium">Journal Entries</span>
                <span className="text-sm text-muted-foreground">3/5 entries</span>
              </div>
              <div className="h-2 w-full bg-cyan-100 dark:bg-cyan-800/50 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
            {/* Progress Bar Item */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-medium">Educational Modules</span>
                <span className="text-sm text-muted-foreground">1/3 completed</span>
              </div>
              <div className="h-2 w-full bg-blue-100 dark:bg-blue-800/50 rounded-full overflow-hidden">
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
  );
}
