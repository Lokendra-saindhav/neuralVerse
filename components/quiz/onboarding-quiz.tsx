"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle2, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export function OnboardingQuiz() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const totalSteps = 5

  // Form state
  const [formData, setFormData] = useState({
    stressLevel: "",
    primaryGoal: "",
    challenges: [] as string[],
    preferredActivities: [] as string[],
    additionalInfo: "",
  })

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    // In a real app, you would submit the form data to a server here
    setTimeout(() => {
      console.log("Form submitted:", formData)
      router.push("/dashboard")
    }, 1500)
  }

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleCheckboxChange = (field: string, value: string, checked: boolean) => {
    if (checked) {
      updateFormData(field, [...(formData[field as keyof typeof formData] as string[]), value])
    } else {
      updateFormData(
        field,
        (formData[field as keyof typeof formData] as string[]).filter((item) => item !== value),
      )
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Personalization Quiz</CardTitle>
        <CardDescription>
          Step {step} of {totalSteps}
        </CardDescription>
        <Progress value={(step / totalSteps) * 100} className="h-2" />
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">How would you rate your current stress level?</h3>
            <RadioGroup
              value={formData.stressLevel}
              onValueChange={(value) => updateFormData("stressLevel", value)}
              className="grid grid-cols-1 gap-4 pt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="stress-low" />
                <Label htmlFor="stress-low">Low - I'm managing well most of the time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="moderate" id="stress-moderate" />
                <Label htmlFor="stress-moderate">Moderate - I feel stressed sometimes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="stress-high" />
                <Label htmlFor="stress-high">High - I often feel overwhelmed</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="very-high" id="stress-very-high" />
                <Label htmlFor="stress-very-high">Very High - I'm constantly stressed and struggling</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">What is your primary goal for using NeuroVerse?</h3>
            <RadioGroup
              value={formData.primaryGoal}
              onValueChange={(value) => updateFormData("primaryGoal", value)}
              className="grid grid-cols-1 gap-4 pt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="stress-management" id="goal-stress" />
                <Label htmlFor="goal-stress">Manage academic stress and anxiety</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="academic-performance" id="goal-academic" />
                <Label htmlFor="goal-academic">Improve academic performance and focus</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mental-wellbeing" id="goal-wellbeing" />
                <Label htmlFor="goal-wellbeing">Enhance overall mental wellbeing</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="social-connection" id="goal-social" />
                <Label htmlFor="goal-social">Build better social connections</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sleep-improvement" id="goal-sleep" />
                <Label htmlFor="goal-sleep">Improve sleep quality</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">What challenges are you currently facing? (Select all that apply)</h3>
            <div className="grid grid-cols-1 gap-3 pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="challenge-exams"
                  checked={formData.challenges.includes("exam-stress")}
                  onCheckedChange={(checked) => handleCheckboxChange("challenges", "exam-stress", checked as boolean)}
                />
                <Label htmlFor="challenge-exams">Exam stress and test anxiety</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="challenge-workload"
                  checked={formData.challenges.includes("workload")}
                  onCheckedChange={(checked) => handleCheckboxChange("challenges", "workload", checked as boolean)}
                />
                <Label htmlFor="challenge-workload">Heavy academic workload</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="challenge-time"
                  checked={formData.challenges.includes("time-management")}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("challenges", "time-management", checked as boolean)
                  }
                />
                <Label htmlFor="challenge-time">Time management difficulties</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="challenge-social"
                  checked={formData.challenges.includes("social-anxiety")}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("challenges", "social-anxiety", checked as boolean)
                  }
                />
                <Label htmlFor="challenge-social">Social anxiety or isolation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="challenge-sleep"
                  checked={formData.challenges.includes("sleep-issues")}
                  onCheckedChange={(checked) => handleCheckboxChange("challenges", "sleep-issues", checked as boolean)}
                />
                <Label htmlFor="challenge-sleep">Sleep problems</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="challenge-focus"
                  checked={formData.challenges.includes("focus-concentration")}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("challenges", "focus-concentration", checked as boolean)
                  }
                />
                <Label htmlFor="challenge-focus">Difficulty focusing or concentrating</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="challenge-motivation"
                  checked={formData.challenges.includes("motivation")}
                  onCheckedChange={(checked) => handleCheckboxChange("challenges", "motivation", checked as boolean)}
                />
                <Label htmlFor="challenge-motivation">Lack of motivation</Label>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">
              Which activities are you most interested in? (Select all that apply)
            </h3>
            <div className="grid grid-cols-1 gap-3 pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="activity-meditation"
                  checked={formData.preferredActivities.includes("meditation")}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("preferredActivities", "meditation", checked as boolean)
                  }
                />
                <Label htmlFor="activity-meditation">Guided meditation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="activity-journaling"
                  checked={formData.preferredActivities.includes("journaling")}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("preferredActivities", "journaling", checked as boolean)
                  }
                />
                <Label htmlFor="activity-journaling">Journaling exercises</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="activity-breathing"
                  checked={formData.preferredActivities.includes("breathing")}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("preferredActivities", "breathing", checked as boolean)
                  }
                />
                <Label htmlFor="activity-breathing">Breathing exercises</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="activity-games"
                  checked={formData.preferredActivities.includes("games")}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("preferredActivities", "games", checked as boolean)
                  }
                />
                <Label htmlFor="activity-games">Mental wellness games</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="activity-group"
                  checked={formData.preferredActivities.includes("group-sessions")}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("preferredActivities", "group-sessions", checked as boolean)
                  }
                />
                <Label htmlFor="activity-group">Group support sessions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="activity-planning"
                  checked={formData.preferredActivities.includes("planning")}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("preferredActivities", "planning", checked as boolean)
                  }
                />
                <Label htmlFor="activity-planning">Academic planning tools</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="activity-resources"
                  checked={formData.preferredActivities.includes("resources")}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("preferredActivities", "resources", checked as boolean)
                  }
                />
                <Label htmlFor="activity-resources">Educational resources</Label>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Is there anything else you'd like to share with us?</h3>
            <Textarea
              placeholder="Tell us about any specific needs, concerns, or goals you have..."
              className="min-h-[150px]"
              value={formData.additionalInfo}
              onChange={(e) => updateFormData("additionalInfo", e.target.value)}
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleBack} disabled={step === 1 || isSubmitting}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        {step < totalSteps ? (
          <Button onClick={handleNext} disabled={isSubmitting}>
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Complete
                <CheckCircle2 className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
