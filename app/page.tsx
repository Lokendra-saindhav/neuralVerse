import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { LoginForm } from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "NeuroVerse - Student Mental Health Support",
  description: "Supporting student mental health through personalized resources and collaborative learning",
}

export default function AuthPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-teal-900">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            width={1920}
            height={1080}
            alt="Authentication background"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M7 14.5s0 2 2.5 2 2.5-2 2.5-2" />
            <path d="M7 9h.01" />
            <path d="M17 9h.01" />
          </svg>
          NeuroVerse
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "This app has been a game-changer for my mental health journey. The solo exercises help me reflect, while
              the group activities connect me with others facing similar challenges."
            </p>
            <footer className="text-sm">Sofia Chen, Psychology Student</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] max-w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
          </div>
          <LoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
