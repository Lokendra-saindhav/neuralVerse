"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export function BreathingExercise() {
  const [isActive, setIsActive] = useState(false)
  const [currentPhase, setCurrentPhase] = useState<"inhale" | "hold" | "exhale" | "rest">("inhale")
  const [progress, setProgress] = useState(0)
  const [cycleCount, setCycleCount] = useState(0)

  const animationRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number | null>(null)

  // Breathing pattern durations in milliseconds
  const breathingPattern = {
    inhale: 4000, // 4 seconds
    hold: 2000, // 2 seconds
    exhale: 6000, // 6 seconds
    rest: 2000, // 2 seconds
  }

  const totalCycleDuration =
    breathingPattern.inhale + breathingPattern.hold + breathingPattern.exhale + breathingPattern.rest

  const getCurrentPhaseDuration = () => {
    return breathingPattern[currentPhase]
  }

  const getPhaseMessage = () => {
    switch (currentPhase) {
      case "inhale":
        return "Breathe in slowly..."
      case "hold":
        return "Hold your breath..."
      case "exhale":
        return "Breathe out slowly..."
      case "rest":
        return "Rest..."
      default:
        return ""
    }
  }

  const animate = (timestamp: number) => {
    if (!lastTimeRef.current) {
      lastTimeRef.current = timestamp
    }

    const elapsed = timestamp - lastTimeRef.current
    lastTimeRef.current = timestamp

    if (isActive) {
      // Update progress
      setProgress((prev) => {
        const newProgress = prev + (elapsed / getCurrentPhaseDuration()) * 100

        // Move to next phase if current phase is complete
        if (newProgress >= 100) {
          // Determine next phase
          if (currentPhase === "inhale") {
            setCurrentPhase("hold")
          } else if (currentPhase === "hold") {
            setCurrentPhase("exhale")
          } else if (currentPhase === "exhale") {
            setCurrentPhase("rest")
          } else if (currentPhase === "rest") {
            setCurrentPhase("inhale")
            setCycleCount((prev) => prev + 1)
          }

          return 0 // Reset progress for new phase
        }

        return newProgress
      })

      animationRef.current = requestAnimationFrame(animate)
    }
  }

  const toggleExercise = () => {
    setIsActive((prev) => !prev)
  }

  const resetExercise = () => {
    setIsActive(false)
    setCurrentPhase("inhale")
    setProgress(0)
    setCycleCount(0)
    lastTimeRef.current = null
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
  }

  useEffect(() => {
    if (isActive) {
      animationRef.current = requestAnimationFrame(animate)
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isActive, currentPhase])

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Breathing Exercise
          <Button
            variant="ghost"
            size="icon"
            onClick={resetExercise}
            className="h-8 w-8 rounded-full"
            disabled={isActive}
          >
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">Reset exercise</span>
          </Button>
        </CardTitle>
        <CardDescription>Follow the guided breathing pattern to reduce stress</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center justify-center space-y-2 min-h-[120px]">
          <div
            className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center transition-all duration-1000 ${
              currentPhase === "inhale"
                ? "bg-blue-100 scale-110"
                : currentPhase === "hold"
                  ? "bg-indigo-100 scale-110"
                  : currentPhase === "exhale"
                    ? "bg-blue-100 scale-90"
                    : "bg-indigo-50 scale-90"
            }`}
          >
            <div className="text-center">
              <div className="text-lg font-medium">{getPhaseMessage()}</div>
              <div className="text-sm text-muted-foreground">Cycle: {cycleCount}</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Slider value={[progress]} max={100} step={1} className="cursor-default" disabled />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={toggleExercise} className="w-full gap-2" variant={isActive ? "outline" : "default"}>
          {isActive ? (
            <>
              <Pause className="h-4 w-4" />
              Pause Exercise
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              Start Exercise
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
