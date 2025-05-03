import type { Metadata } from "next"

import { MentalHealthQuiz } from "@/components/quiz/mental-health-quiz"

export const metadata: Metadata = {
  title: "Mental Health Quiz | MindfulCampus",
  description: "Assess your mental health and get personalized recommendations",
}

export default function QuizPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Mental Health Assessment</h1>
        <p className="text-muted-foreground">
          Complete this assessment to receive personalized recommendations and insights
        </p>
      </div>

      <MentalHealthQuiz />
    </div>
  )
}
