import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, Clock, Filter, Search, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { TokenDisplay } from "@/components/token/token-display"

export const metadata: Metadata = {
  title: "Marketplace | NeuroVerse",
  description: "Redeem your wellness tokens for rewards and benefits",
}

export default function MarketplacePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Marketplace</h1>
        <p className="text-muted-foreground">
          Redeem your wellness tokens for educational tools, therapy sessions, and wellness products
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-[1fr_3fr] w-full">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                <TokenDisplay amount={2450} size="lg" showTooltip={false} />
                <Button variant="outline" size="sm">
                  History
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search marketplace" className="pl-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Price Range</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    <TokenDisplay amount={100} size="sm" showTooltip={false} />
                    <span className="ml-1">& Under</span>
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    <TokenDisplay amount={500} size="sm" showTooltip={false} />
                    <span className="ml-1">& Under</span>
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    <TokenDisplay amount={1000} size="sm" showTooltip={false} />
                    <span className="ml-1">& Under</span>
                  </Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Categories</h3>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <input id="therapy" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="therapy" className="ml-2 text-sm">
                      Therapy Sessions
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input id="educational" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="educational" className="ml-2 text-sm">
                      Educational Tools
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input id="wellness" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="wellness" className="ml-2 text-sm">
                      Wellness Products
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input id="digital" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="digital" className="ml-2 text-sm">
                      Digital Resources
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input id="campus" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="campus" className="ml-2 text-sm">
                      Campus Services
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Availability</h3>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <input id="in-stock" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="in-stock" className="ml-2 text-sm">
                      In Stock
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input id="limited" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="limited" className="ml-2 text-sm">
                      Limited Time Offers
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full gap-2">
                <Filter className="h-4 w-4" />
                Apply Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-100">
            <CardHeader>
              <CardTitle>Featured Deal</CardTitle>
              <CardDescription>Limited time offer</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-4">
              <div className="aspect-video relative rounded-md overflow-hidden w-full md:w-1/2">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Therapy Session Voucher"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-amber-500">
                  <Clock className="mr-1 h-3 w-3" />
                  Limited Time
                </Badge>
              </div>
              <div className="flex flex-col justify-between w-full md:w-1/2">
                <div>
                  <h3 className="text-xl font-bold">30-Minute Therapy Session</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Redeem for a private session with a licensed therapist. Valid for in-person or virtual appointments.
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="flex items-center bg-white px-3 py-1 rounded-md border">
                      <TokenDisplay amount={500} size="md" showTooltip={false} />
                    </div>
                    <div className="ml-2 line-through text-sm text-muted-foreground">
                      <TokenDisplay amount={750} size="sm" showTooltip={false} />
                    </div>
                    <Badge variant="outline" className="ml-2 bg-green-50 text-green-700">
                      33% OFF
                    </Badge>
                  </div>
                </div>
                <Button className="mt-4">
                  Redeem Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All Items</TabsTrigger>
              <TabsTrigger value="therapy">Therapy</TabsTrigger>
              <TabsTrigger value="educational">Educational</TabsTrigger>
              <TabsTrigger value="wellness">Wellness</TabsTrigger>
              <TabsTrigger value="digital">Digital</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4 pt-4">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="aspect-video relative rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=720&width=1280"
                        alt="Study Guide Voucher"
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-blue-500">Educational</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle className="text-lg">Study Guide Voucher</CardTitle>
                    <CardDescription>Access premium study materials for your courses</CardDescription>
                    <div className="flex items-center">
                      <TokenDisplay amount={200} size="md" showTooltip={false} />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Redeem
                      <ShoppingBag className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="aspect-video relative rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=720&width=1280"
                        alt="Meditation App Subscription"
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-teal-500">Wellness</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle className="text-lg">Meditation App Subscription</CardTitle>
                    <CardDescription>1-month premium subscription to a leading meditation app</CardDescription>
                    <div className="flex items-center">
                      <TokenDisplay amount={350} size="md" showTooltip={false} />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Redeem
                      <ShoppingBag className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="aspect-video relative rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=720&width=1280"
                        alt="Campus Cafe Voucher"
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-amber-500">Campus</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle className="text-lg">Campus Cafe Voucher</CardTitle>
                    <CardDescription>$10 voucher for the campus cafe</CardDescription>
                    <div className="flex items-center">
                      <TokenDisplay amount={150} size="md" showTooltip={false} />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Redeem
                      <ShoppingBag className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center mt-6">
                <Button variant="outline">
                  Load More Items
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="therapy" className="space-y-4 pt-4">
              {/* Therapy content */}
            </TabsContent>
            <TabsContent value="educational" className="space-y-4 pt-4">
              {/* Educational content */}
            </TabsContent>
            <TabsContent value="wellness" className="space-y-4 pt-4">
              {/* Wellness content */}
            </TabsContent>
            <TabsContent value="digital" className="space-y-4 pt-4">
              {/* Digital content */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
