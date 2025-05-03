"use client"

import { Coins } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface TokenDisplayProps {
  amount: number
  size?: "sm" | "md" | "lg"
  showTooltip?: boolean
}

export function TokenDisplay({ amount, size = "md", showTooltip = true }: TokenDisplayProps) {
  const sizeClasses = {
    sm: "text-sm gap-1",
    md: "text-base gap-1.5",
    lg: "text-lg gap-2",
  }

  const iconSizes = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  const display = (
    <div className={`flex items-center ${sizeClasses[size]}`}>
      <Coins className={`text-amber-500 ${iconSizes[size]}`} />
      <span className="font-medium">{amount.toLocaleString()}</span>
    </div>
  )

  if (showTooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{display}</TooltipTrigger>
          <TooltipContent>
            <p>Wellness Tokens</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return display
}
