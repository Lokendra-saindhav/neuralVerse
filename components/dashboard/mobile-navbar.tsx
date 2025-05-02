"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  Smile,
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
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

export function MobileNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const NavItem = ({
    href,
    icon: Icon,
    children,
  }: { href: string; icon: React.ElementType; children: React.ReactNode }) => {
    const active = isActive(href)
    return (
      <Link
        href={href}
        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
          active ? "bg-teal-100 text-teal-900 font-medium" : "hover:bg-muted"
        }`}
        onClick={() => setOpen(false)}
      >
        <Icon className="h-4 w-4" />
        {children}
      </Link>
    )
  }

  return (
    <div className="sticky top-0 z-40 w-full bg-background border-b md:hidden">
      <div className="flex h-14 items-center px-4">
        <div className="flex items-center gap-2 mr-auto">
          <Smile className="h-6 w-6 text-teal-500" />
          <span className="font-bold">NeuroVerse</span>
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
                <Smile className="h-6 w-6 text-teal-500" />
                <span className="font-bold text-lg">NeuroVerse</span>
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
