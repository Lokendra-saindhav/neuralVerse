"use client"

import type React from "react"

import { usePathname } from "next/navigation"

import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { MobileNavbar } from "@/components/dashboard/mobile-navbar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen flex-col">
        <MobileNavbar />
        <div className="flex w-full overflow-hidden">
          <DashboardSidebar />
          <main suppressHydrationWarning className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
