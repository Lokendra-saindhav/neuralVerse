"use client"

import { useState } from "react"
import { RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const affirmations = [
  "I am capable of handling whatever challenges come my way today.",
  "I deserve to take care of my mental health and well-being.",
  "My feelings are valid, and I allow myself to experience them fully.",
  "I am growing and learning every day, even when progress feels slow.",
  "I am worthy of love and support from others and from myself.",
  "Today, I choose peace over worry and trust over fear.",
  "I have the power to create positive change in my life.",
  "I celebrate my strengths and accept my limitations with compassion.",
  "I am resilient and can bounce back from setbacks.",
  "My self-care is a priority, not a luxury.",
]

export function DailyAffirmation() {
  const [currentAffirmation, setCurrentAffirmation] = useState(() => {
    // Get a random affirmation to start with
    const randomIndex = Math.floor(Math.random() * affirmations.length)
    return affirmations[randomIndex]
  })

  const getNewAffirmation = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * affirmations.length)
    } while (affirmations[newIndex] === currentAffirmation)

    setCurrentAffirmation(affirmations[newIndex])
  }

  return (
    <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-100">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Daily Affirmation
          <Button variant="ghost" size="icon" onClick={getNewAffirmation} className="h-8 w-8 rounded-full">
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">Refresh affirmation</span>
          </Button>
        </CardTitle>
        <CardDescription>Take a moment to reflect on today's affirmation</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <blockquote className="border-l-4 border-teal-500 pl-4 italic text-lg min-h-[80px] flex items-center">
          "{currentAffirmation}"
        </blockquote>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Repeat this affirmation to yourself throughout the day
      </CardFooter>
    </Card>
  )
}
