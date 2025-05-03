"use client"

import { useState } from "react"
import { RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const affirmations = [
  "I embrace this day with courage and an open heart, ready to face challenges with resilience and grace.",
  "My well-being is a priority. I give myself permission to rest, recharge, and nurture my mind and body.",
  "I acknowledge all my feelings without judgment, understanding they are temporary guides on my journey.",
  "Every experience, positive or challenging, contributes to my growth. I am constantly evolving.",
  "I am inherently worthy of love, respect, and kindness – both from others and, most importantly, from myself.",
  "I release worries about the future and regrets about the past. I choose to be fully present in this moment.",
  "I possess the inner strength and wisdom to navigate life's complexities and make choices aligned with my values.",
  "I celebrate my unique talents and forgive my imperfections. I am whole and complete just as I am.",
  "Setbacks are opportunities for learning and redirection. I trust my ability to bounce back stronger.",
  "Investing in my self-care nourishes my spirit and allows me to show up more fully in the world.",
  "I attract positive energy by radiating kindness, compassion, and gratitude.",
  "I am capable of creating a life filled with joy, purpose, and meaningful connections.",
  "I trust the timing of my life and have patience with my own unfolding process.",
  "Today, I will focus on progress, not perfection, and celebrate small victories along the way.",
  "My voice matters, and I express my needs and boundaries with confidence and clarity."
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
