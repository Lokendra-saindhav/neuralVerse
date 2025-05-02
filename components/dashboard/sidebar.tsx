"use client"

import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import {
  BookOpen,
  Calendar,
  Home,
  Info,
  LifeBuoy,
  LogOut,
  MessageSquare,
  Settings,
  Smile,
  User,
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

export function DashboardSidebar() {
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    router.push("/")
  }

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="z-30 w-[16rem] flex-shrink-0">
      <SidebarHeader className="py-4">
        <div className="flex items-center px-2 gap-2">
          <Smile className="h-6 w-6 text-teal-500" />
          <span className="font-bold text-lg">NeuroVerse</span>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard")} tooltip="Dashboard">
                  <Link href="/dashboard">
                    <Home />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/homepage")} tooltip="Homepage">
                  <Link href="/dashboard/homepage">
                    <BookOpen />
                    <span>Homepage</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/multiplayer")} tooltip="Multiplayer Learning">
                  <Link href="/dashboard/multiplayer">
                    <Users />
                    <span>Multiplayer Learning</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/solo-play")} tooltip="Solo Play">
                  <Link href="/dashboard/solo-play">
                    <User />
                    <span>Solo Play</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/profile")} tooltip="Profile">
                  <Link href="/dashboard/profile">
                    <User />
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/calendar")} tooltip="Calendar">
                  <Link href="/dashboard/calendar">
                    <Calendar />
                    <span>Calendar</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/settings")} tooltip="Settings">
                  <Link href="/dashboard/settings">
                    <Settings />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/about")} tooltip="About Us">
                  <Link href="/dashboard/about">
                    <Info />
                    <span>About Us</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/help")} tooltip="Help & Support">
                  <Link href="/dashboard/help">
                    <LifeBuoy />
                    <span>Help & Support</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/contact")} tooltip="Contact">
                  <Link href="/dashboard/contact">
                    <MessageSquare />
                    <span>Contact</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="ghost" className="w-full justify-start gap-2" onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
          <span>Log out</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
