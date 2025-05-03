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
import { TokenDisplay } from "@/components/token/token-display"

export function MentalHealthQuiz() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const totalSteps = 6

  // Form state
  const [formData, setFormData] = useState({
    anxiety: "",
    depression: "",
    sleep: "",
    stress: "",
    coping: [] as string[],
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
      console.log("Quiz submitted:", formData)
      router.push("/dashboard/quiz/results")
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
        <CardTitle>Mental Health Assessment</CardTitle>
        <CardDescription>
          Step {step} of {totalSteps}
        </CardDescription>
        <Progress value={(step / totalSteps) * 100} className="h-2" />
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">
              Over the past 2 weeks, how often have you felt nervous, anxious, or on edge?
            </h3>
            <RadioGroup
              value={formData.anxiety}
              onValueChange={(value) => updateFormData("anxiety", value)}
              className="grid grid-cols-1 gap-4 pt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="not-at-all" id="anxiety-not-at-all" />
                <Label htmlFor="anxiety-not-at-all">Not at all</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="several-days" id="anxiety-several-days" />
                <Label htmlFor="anxiety-several-days">Several days</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="more-than-half" id="anxiety-more-than-half" />
                <Label htmlFor="anxiety-more-than-half">More than half the days</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nearly-every-day" id="anxiety-nearly-every-day" />
                <Label htmlFor="anxiety-nearly-every-day">Nearly every day</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">
              Over the past 2 weeks, how often have you felt down, depressed, or hopeless?
            </h3>
            <RadioGroup
              value={formData.depression}
              onValueChange={(value) => updateFormData("depression", value)}
              className="grid grid-cols-1 gap-4 pt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="not-at-all" id="depression-not-at-all" />
                <Label htmlFor="depression-not-at-all">Not at all</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="several-days" id="depression-several-days" />
                <Label htmlFor="depression-several-days">Several days</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="more-than-half" id="depression-more-than-half" />
                <Label htmlFor="depression-more-than-half">More than half the days</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nearly-every-day" id="depression-nearly-every-day" />
                <Label htmlFor="depression-nearly-every-day">Nearly every day</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">How would you rate your sleep quality over the past 2 weeks?</h3>
            <RadioGroup
              value={formData.sleep}
              onValueChange={(value) => updateFormData("sleep", value)}
              className="grid grid-cols-1 gap-4 pt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="very-good" id="sleep-very-good" />
                <Label htmlFor="sleep-very-good">Very good</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="good" id="sleep-good" />
                <Label htmlFor="sleep-good">Good</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fair" id="sleep-fair" />
                <Label htmlFor="sleep-fair">Fair</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="poor" id="sleep-poor" />
                <Label htmlFor="sleep-poor">Poor</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="very-poor" id="sleep-very-poor" />
                <Label htmlFor="sleep-very-poor">Very poor</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">How would you rate your current stress level related to academics?</h3>
            <RadioGroup
              value={formData.stress}
              onValueChange={(value) => updateFormData("stress", value)}
              className="grid grid-cols-1 gap-4 pt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no-stress" id="stress-no-stress" />
                <Label htmlFor="stress-no-stress">No stress</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mild" id="stress-mild" />
                <Label htmlFor="stress-mild">Mild stress</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="moderate" id="stress-moderate" />
                <Label htmlFor="stress-moderate">Moderate stress</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="stress-high" />
                <Label htmlFor="stress-high">High stress</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="severe" id="stress-severe" />
                <Label htmlFor="stress-severe">Severe stress</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">
              Which coping strategies do you currently use? (Select all that apply)
            </h3>
            <div className="grid grid-cols-1 gap-3 pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="coping-exercise"
                  checked={formData.coping.includes("exercise")}
                  onCheckedChange={(checked) => handleCheckboxChange("coping", "exercise", checked as boolean)}
                />
                <Label htmlFor="coping-exercise">Physical exercise</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="coping-meditation"
                  checked={formData.coping.includes("meditation")}
                  onCheckedChange={(checked) => handleCheckboxChange("coping", "meditation", checked as boolean)}
                />
                <Label htmlFor="coping-meditation">Meditation or mindfulness</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="coping-social"
                  checked={formData.coping.includes("social")}
                  onCheckedChange={(checked) => handleCheckboxChange("coping", "social", checked as boolean)}
                />
                <Label htmlFor="coping-social">Talking with friends or family</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="coping-hobbies"
                  checked={formData.coping.includes("hobbies")}
                  onCheckedChange={(checked) => handleCheckboxChange("coping", "hobbies", checked as boolean)}
                />
                <Label htmlFor="coping-hobbies">Engaging in hobbies</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="coping-professional"
                  checked={formData.coping.includes("professional")}
                  onCheckedChange={(checked) => handleCheckboxChange("coping", "professional", checked as boolean)}
                />
                <Label htmlFor="coping-professional">Professional support (therapy, counseling)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="coping-none"
                  checked={formData.coping.includes("none")}
                  onCheckedChange={(checked) => handleCheckboxChange("coping", "none", checked as boolean)}
                />
                <Label htmlFor="coping-none">I don't use any specific coping strategies</Label>
              </div>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">
              Is there anything else you'd like to share about your mental health?
            </h3>
            <Textarea
              placeholder="Share any additional information that might help us provide better recommendations..."
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
                Complete Assessment
                <CheckCircle2 className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </CardFooter>
      <div className="px-6 pb-4 flex items-center justify-center">
        <div className="flex items-center text-sm text-muted-foreground">
          <TokenDisplay amount={100} size="sm" />
          <span className="ml-2">for completing the assessment</span>
        </div>
      </div>
    </Card>
  )
}
