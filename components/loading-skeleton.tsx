"use client"

import { cn } from "@/lib/utils"

interface LoadingSkeletonProps {
  className?: string
  variant?: "text" | "card" | "avatar" | "button"
}

export function LoadingSkeleton({ className, variant = "text" }: LoadingSkeletonProps) {
  const baseClasses = "loading-shimmer rounded"

  const variantClasses = {
    text: "h-4 w-full",
    card: "h-48 w-full",
    avatar: "h-12 w-12 rounded-full",
    button: "h-10 w-24",
  }

  return <div className={cn(baseClasses, variantClasses[variant], className)} />
}

export function LoadingCard() {
  return (
    <div className="p-6 border rounded-lg space-y-4">
      <LoadingSkeleton variant="avatar" />
      <LoadingSkeleton className="h-6 w-3/4" />
      <LoadingSkeleton className="h-4 w-full" />
      <LoadingSkeleton className="h-4 w-2/3" />
      <LoadingSkeleton variant="button" />
    </div>
  )
}
