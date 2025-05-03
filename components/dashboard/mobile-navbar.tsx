"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  NotebookText, // Changed from Smile
  Home,
  BookOpen,
  Users,
  User,
  Calendar,
  Settings,
  Info,
  LifeBuoy,
  MessageSquare,
  LogOut,
  Gamepad2,
  BookMarked,
  Library,
  ShoppingBag,
  ClipboardList,
  MessageCircleQuestion,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function MobileNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const NavItem = ({
    href,
    icon: Icon,
    children,
    isNew,
  }: {
    href: string
    icon: React.ElementType
    children: React.ReactNode
    isNew?: boolean
  }) => {
    const active = isActive(href)
    return (
      <Link
        href={href}
        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
          active ? "bg-purple-100 text-purple-900 font-medium" : "hover:bg-muted" // Changed color
        }`}
        onClick={() => setOpen(false)}
      >
        <Icon className="h-4 w-4" />
        <span className="flex-1">{children}</span>
        {isNew && (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 text-xs"> {/* Changed color */}
            New
          </Badge>
        )}
      </Link>
    )
  }

  return (
    <div className="sticky top-0 z-40 w-full bg-background border-b md:hidden">
      <div className="flex h-14 items-center px-4">
        <div className="flex items-center gap-2 mr-auto">
          <NotebookText className="h-6 w-6 text-purple-600" /> {/* Changed icon and color */}
          <span className="font-bold text-purple-600">NeuroVerse</span> {/* Changed text and color */}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px] pr-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 py-4">
                <NotebookText className="h-6 w-6 text-purple-600" /> {/* Changed icon and color */}
                <span className="font-bold text-lg text-purple-600">NeuroVerse</span> {/* Changed text and color */}
              </div>
              <Separator />
              <div className="flex-1 overflow-auto py-4">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xs uppercase text-muted-foreground font-medium px-3">Navigation</h3>
                    <NavItem href="/dashboard" icon={Home}>
                      Dashboard
                    </NavItem>
                    <NavItem href="/dashboard/homepage" icon={BookOpen}>
                      Homepage
                    </NavItem>
                    <NavItem href="/dashboard/multiplayer" icon={Users}>
                      Multiplayer Learning
                    </NavItem>
                    <NavItem href="/dashboard/solo-play" icon={User}>
                      Solo Play
                    </NavItem>
                  </div>

                  <Separator />

                  <div className="space-y-1">
                    <h3 className="text-xs uppercase text-muted-foreground font-medium px-3">New Features</h3>
                    <NavItem href="/dashboard/games" icon={Gamepad2} isNew>
                      Wellness Games
                    </NavItem>
                    <NavItem href="/dashboard/planner" icon={BookMarked} isNew>
                      Academic Planner
                    </NavItem>
                    <NavItem href="/dashboard/resources" icon={Library}>
                      Resource Hub
                    </NavItem>
                    <NavItem href="/dashboard/marketplace" icon={ShoppingBag} isNew>
                      Marketplace
                    </NavItem>
                    <NavItem href="/dashboard/chatbot" icon={MessageCircleQuestion} isNew>
                      AI Therapist
                    </NavItem>
                    <NavItem href="/dashboard/feedback" icon={ClipboardList}>
                      Feedback
                    </NavItem>
                  </div>

                  <Separator />

                  <div className="space-y-1">
                    <h3 className="text-xs uppercase text-muted-foreground font-medium px-3">Account</h3>
                    <NavItem href="/dashboard/profile" icon={User}>
                      Profile
                    </NavItem>
                    <NavItem href="/dashboard/calendar" icon={Calendar}>
                      Calendar
                    </NavItem>
                    <NavItem href="/dashboard/settings" icon={Settings}>
                      Settings
                    </NavItem>
                  </div>

                  <Separator />

                  <div className="space-y-1">
                    <h3 className="text-xs uppercase text-muted-foreground font-medium px-3">Support</h3>
                    <NavItem href="/dashboard/about" icon={Info}>
                      About Us
                    </NavItem>
                    <NavItem href="/dashboard/help" icon={LifeBuoy}>
                      Help & Support
                    </NavItem>
                    <NavItem href="/dashboard/contact" icon={MessageSquare}>
                      Contact
                    </NavItem>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="py-4">
                <Link
                  href="/"
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
