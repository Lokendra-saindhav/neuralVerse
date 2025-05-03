import type { Metadata } from "next"
import Image from "next/image"
import { Mail, MessageCircle, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "About Us | NeuroVerse",
  description: "Learn about our mission and the team behind NeuroVerse",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">About NeuroVerse</h1>
        <p className="text-muted-foreground">
          Learn about our mission and the team behind the app
        </p>
      </div>

      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Team of mental health professionals"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-transparent flex items-center">
          <div className="p-8 max-w-md">
            <h2 className="text-2xl font-bold text-white mb-2">Our Mission</h2>
            <p className="text-white/90">
              Supporting student mental health through personalized resources, collaborative learning, and innovative technology.
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="about">Our Story</TabsTrigger>
          <TabsTrigger value="team">Our Team</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>The NeuroVerse Story</CardTitle>
              <CardDescription>
                How we started and where we're going
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                NeuroVerse was founded in 2023 by a team of mental health professionals, educators, and technology experts who recognized the growing mental health challenges faced by students in higher education.
              </p>
              <p>
                Our journey began when we observed that traditional mental health resources on campus were often overwhelmed and unable to meet the increasing demand for support. We saw an opportunity to leverage technology to create an accessible, engaging platform that could complement existing services and reach students where they are.
              </p>
              <p>
                What sets NeuroVerse apart is our commitment to both evidence-based practices and innovative approaches. We combine the science of mental wellness with the power of community and technology to create a comprehensive support system for students.
              </p>
              <p>
                Today, NeuroVerse serves thousands of students across multiple universities, providing them with tools to manage stress, anxiety, and other mental health challenges. Our vision is to create a world where every student has access to the mental health support they need to thrive academically and personally.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center text-center p-4 rounded-lg border">
                  <div className="text-3xl font-bold text-teal-500 mb-2">5,000+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg border">
                  <div className="text-3xl font-bold text-teal-500 mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Partner Universities</div>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg border">
                  <div className="text-3xl font-bold text-teal-500 mb-2">92%</div>
                  <div className="text-sm text-muted-foreground">User Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Values</CardTitle>
              <CardDescription>
                The principles that guide our work
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Accessibility</h3>
                  <p className="text-sm text-muted-foreground">
                    We believe mental health support should be accessible to all students, regardless of background or circumstances.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Evidence-Based</h3>
                  <p className="text-sm text-muted-foreground">
                    Our approach is grounded in research and proven mental health practices.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    We foster connection and support among students, recognizing the power of shared experiences.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    We continuously explore new ways to leverage technology to improve mental health support.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Privacy</h3>
                  <p className="text-sm text-muted-foreground">
                    We prioritize user privacy and data security in everything we do.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Inclusivity</h3>
                  <p className="text-sm text-muted-foreground">
                    We design our platform to be inclusive and respectful of diverse backgrounds and needs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="team" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Leadership Team</CardTitle>
              <CardDescription>
                Meet the people behind NeuroVerse
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?text=DR"
                      alt="Dr. Rebecca Chen"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium">Dr. Rebecca Chen</h3>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                  <p className="text-sm mt-2">
                    Clinical Psychologist with 15+ years of experience in student mental health
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?text=MJ"
                      alt="Michael Johnson"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium">Michael Johnson</h3>
                  <p className="text-sm text-muted-foreground">CTO</p>
                  <p className="text-sm mt-2">
                    Tech innovator with a passion for creating tools that improve mental wellbeing
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?text=SP"
                      alt="Dr. Sarah Patel"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium">Dr. Sarah Patel</h3>
                  <p className="text-sm text-muted-foreground">Head of Research</p>
                  <p className="text-sm mt-2">
                    Researcher specializing in digital interventions for mental health
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Advisors</CardTitle>
              <CardDescription>
                Experts who guide our approach and strategy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                    <Image
                      src="/placeholder.svg?text=JW"
                      alt="Dr. James Wilson"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base font-medium">Dr. James Wilson</h3>
                  <p className="text-xs text-muted-foreground">University Dean</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                    <Image
                      src="/placeholder.svg?text=EL"
                      alt="Elena Lopez"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base font-medium">Elena Lopez</h3>
                  <p className="text-xs text-muted-foreground">Student Advocate</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                    <Image
                      src="/placeholder.svg?text=DT"
                      alt="Dr. David Thompson"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base font-medium">Dr. David Thompson</h3>
                  <p className="text-xs text-muted-foreground">Mental Health Researcher</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                    <Image
                      src="/placeholder.svg?text=AK"
                      alt="Aisha Khan"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base font-medium">Aisha Khan</h3>
                  <p className="text-xs text-muted-foreground">Education Technology Expert</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="contact" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                We'd love to hear from you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2 w-full">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-teal-500" />
                    <div>
                      <h3 className="text-base font-medium">Email Us</h3>
                      <p className="text-sm text-muted-foreground">
                        support@neuroverse.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-teal-500" />
                    <div>
                      <h3 className="text-base font-medium">Call Us</h3>
                      <p className="text-sm text-muted-foreground">
                        (555) 123-4567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-teal-500" />
                    <div>
                      <h3 className="text-base font-medium">Live Chat</h3>
                      <p className="text-sm text-muted-foreground">
                        Available Monday-Friday, 9am-5pm EST
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button className="w-full">
                    Send Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Quick answers to common questions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-base font-medium">Is NeuroVerse a replacement for therapy?</h3>
                <p className="text-sm text-muted-foreground">
                  No, NeuroVerse is designed to complement professional mental health services, not replace them. We provide tools and resources for everyday mental wellness, but recommend seeking professional help for clinical concerns.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-base font-medium">How is my data protected?</h3>
                <p className="text-sm text-muted-foreground">
                  We take data privacy seriously. All personal information is encrypted, and we never share your data with third parties without your explicit consent. You can review our full privacy policy in the app settings.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-base font-medium">Can my university partner with NeuroVerse?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! We work with universities to provide customized mental health support for their students. Please contact our partnerships team at partnerships@neuroverse.com for more information.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-base font-medium">How can I provide feedback or suggestions?</h3>
                <p className="text-sm text-muted-foreground">
                  We welcome your feedback! Please use the contact form above or email us at feedback@neuroverse.com. Your suggestions help us improve the platform for everyone.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-base font-medium">Is my information confidential?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, all information you provide is kept strictly confidential and is only used to improve your experience on NeuroVerse. For more details, see our privacy policy.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
