import type { Metadata } from "next"

import { OnboardingQuiz } from "@/components/quiz/onboarding-quiz"

export const metadata: Metadata = {
  title: "Onboarding | MindfulCampus",
  description: "Tell us about yourself to personalize your experience",
}

export default function OnboardingPage() {
  return (
    <div className="container max-w-3xl py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome to MindfulCampus</h1>
          <p className="text-muted-foreground">
            Let's personalize your experience by understanding your goals and needs
          </p>
        </div>
        <OnboardingQuiz />
      </div>
    </div>
  )
}
