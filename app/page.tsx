"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Clock,
  Users,
  Target,
  ArrowRight,
  Zap,
  TrendingUp,
  Shield,
  Sparkles,
  Brain,
  Cpu,
} from "lucide-react"
import Image from "next/image"

export default function AIEdgeSessionLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">Mohios</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#results" className="text-muted-foreground hover:text-foreground transition-colors">
                Results
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <Button variant="outline" size="sm">
                Contact
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-primary/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] opacity-60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.08),transparent_50%)] opacity-40"></div>
          {/* Subtle grid pattern for tech feel */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="max-w-2xl">
              <Badge className="mb-6 bg-accent text-accent-foreground">
                <Sparkles className="w-3 h-3 mr-1" />
                Auckland-Based AI Experts
              </Badge>
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                AI Automation Consulting &amp; Training in Auckland
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Start with an AI Edge Session and discover where AI can save you time, cut costs, and give your business
                a competitive edge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg"
                  onClick={() => window.open("https://calendar.app.google/swyBFrFRYuA3ug8N8", "_blank")}
                >
                  Book Your AI Edge Session
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg bg-transparent border-accent/30 hover:bg-accent/10"
                  onClick={() => window.open("https://perspective.co/quiz", "_blank")}
                >
                  Take the AI Savings Quiz
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                ✓ No commitment required ✓ Immediate insights
              </p>
            </div>

            {/* Right Column - Image Collage */}
            <div className="relative">
              {/* Main featured image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/workshop-2.jpg"
                  alt="AI consulting workshop in Auckland - collaborative strategic planning session"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating accent images */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-xl overflow-hidden shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300 border-4 border-background">
                <Image
                  src="/images/workshop-4.jpg"
                  alt="Strategic planning with sticky notes and workflow mapping"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 w-40 h-28 rounded-xl overflow-hidden shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300 border-4 border-background">
                <Image
                  src="/images/workshop-1.jpg"
                  alt="Hands-on AI strategy development and business process analysis"
                  width={160}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* AI-themed floating elements */}
              <div className="absolute top-1/4 -left-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30">
                <Brain className="w-6 h-6 text-accent" />
              </div>

              <div className="absolute bottom-1/3 -right-4 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
                <Cpu className="w-5 h-5 text-primary" />
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              What You'll Get from Your AI Edge Session
            </h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive diagnostic and strategic roadmap tailored to your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="font-heading font-semibold">Workflow Diagnostic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deep analysis of your current business processes to identify inefficiencies and automation
                  opportunities.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="font-heading font-semibold">Automation Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pinpoint exactly where AI can eliminate manual tasks and streamline your operations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="font-heading font-semibold">Strategic AI Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A clear, prioritized plan for implementing AI solutions that deliver maximum ROI for your business.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="font-heading font-semibold">Immediate Actionable Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Walk away with specific actions you can implement immediately to start seeing results.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="font-heading font-semibold">Auckland-Based Experts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Local expertise that understands the New Zealand business landscape and regulatory environment.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow bg-accent/5">
              <CardHeader>
                <Shield className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="font-heading font-semibold">Clarity & Leverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our signature approach: gain clarity on AI opportunities and leverage them for competitive advantage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="results" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
                Real Results from Auckland Businesses
              </h2>
              <p className="text-lg text-muted-foreground">
                See how AI automation transformed this local SME's operations
              </p>
            </div>

            <div className="mb-12 text-center">
              <div className="relative inline-block rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/workshop-3.jpg"
                  alt="Real AI workshop session - collaborative ideation and strategic planning"
                  width={600}
                  height={400}
                  className="w-full max-w-2xl h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                    Real workshop session: Collaborative AI strategy development with Auckland entrepreneurs
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="p-8 bg-destructive/5 border-destructive/20">
                <CardHeader className="pb-4">
                  <Badge variant="destructive" className="w-fit mb-2">
                    Before
                  </Badge>
                  <CardTitle className="font-heading font-semibold text-xl">Manual Process Overload</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-destructive" />
                    <span>15 hours/week on manual data entry</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-destructive" />
                    <span>3 days to process customer inquiries</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-destructive" />
                    <span>$2,400/month in administrative costs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-destructive" />
                    <span>High error rates in reporting</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-8 bg-accent/5 border-accent/20">
                <CardHeader className="pb-4">
                  <Badge className="w-fit mb-2 bg-accent text-accent-foreground">After AI Edge Session</Badge>
                  <CardTitle className="font-heading font-semibold text-xl">Streamlined & Automated</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>2 hours/week on data management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>30 minutes average inquiry response time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>$800/month in admin cost savings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>99.5% accuracy in automated reporting</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Card className="inline-block p-6 bg-accent/10 border-accent/30">
                <CardContent className="p-0">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">$19,200</div>
                  <p className="text-muted-foreground">Annual savings achieved</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about the AI Edge Session</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <CardHeader className="pb-3">
                <CardTitle className="font-heading font-semibold text-lg">
                  How does the AI Edge Session process work?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our simple 3-step process takes you from assessment to implementation roadmap:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <strong>Take the AI Savings Quiz:</strong> Quick, tailored assessment of your business to
                      understand your current state and potential.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <strong>Join your AI Edge Session:</strong> 70% diagnosis, 30% strategy & training in a focused
                      2-hour session tailored to your business.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <strong>Get your Custom Roadmap:</strong> Practical AI implementation plan with prioritized next
                      steps and expected ROI.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader className="pb-3">
                <CardTitle className="font-heading font-semibold text-lg">What if I'm completely new to AI?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Perfect! The AI Edge Session is designed for business owners who are new to AI. We start with the
                  basics and focus on practical applications specific to your industry and business model. No technical
                  background required.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader className="pb-3">
                <CardTitle className="font-heading font-semibold text-lg">
                  How do you ensure data privacy and security?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We follow strict data protection protocols and comply with New Zealand privacy laws. All business
                  information shared during the session is kept confidential, and we can sign NDAs if required. We only
                  discuss general processes, not sensitive data.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader className="pb-3">
                <CardTitle className="font-heading font-semibold text-lg">
                  Do you offer follow-up support after the session?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! Your package includes 2 weeks of email support to answer questions about your roadmap. We also
                  offer ongoing implementation support and training services for businesses ready to move forward with
                  AI automation.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader className="pb-3">
                <CardTitle className="font-heading font-semibold text-lg">
                  Can the session be conducted remotely?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  While we're based in Auckland and offer in-person sessions, we also conduct highly effective virtual
                  sessions via video conference. The diagnostic process and strategic planning work equally well
                  remotely.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader className="pb-3">
                <CardTitle className="font-heading font-semibold text-lg">
                  What size businesses do you work with?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We specialize in SMEs and growing businesses with 5-50 employees. Our approach is particularly
                  effective for businesses that have established processes but are looking to scale efficiently through
                  automation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Investment in Your AI Future
            </h2>
            <p className="text-lg text-muted-foreground">Comprehensive AI assessment and strategic roadmap</p>
          </div>
          <div className="max-w-lg mx-auto">
            <Card className="p-8 border-accent/30 bg-background shadow-lg">
              <CardHeader className="text-center pb-6">
                <Badge className="mx-auto mb-4 bg-accent text-accent-foreground">Introductory Offer</Badge>
                <div className="text-4xl font-heading font-bold text-foreground mb-2">NZD $800</div>
                <p className="text-muted-foreground">Complete AI Edge Session Package</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>AI Savings Quiz analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>2-hour strategic AI session</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>Detailed implementation roadmap</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>Prioritized action items</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>Follow-up email support</span>
                </div>
                <div className="pt-6">
                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-lg"
                    onClick={() => window.open("https://calendar.app.google/swyBFrFRYuA3ug8N8", "_blank")}
                  >
                    Book Your AI Edge Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Ready to Give Your Business the AI Edge?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Auckland entrepreneurs who are already saving time and money with AI automation. Start with our quick
              assessment or book directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg"
                onClick={() => window.open("https://calendar.app.google/swyBFrFRYuA3ug8N8", "_blank")}
              >
                Book Your AI Edge Session
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg bg-transparent"
                onClick={() => window.open("https://perspective.co/quiz", "_blank")}
              >
                Take the AI Savings Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Questions? Email us at{" "}
              <a href="mailto:danny@mohios.com" className="hover:text-foreground transition-colors">
                danny@mohios.com
              </a>{" "}
              or call{" "}
              <a href="tel:+64210305430" className="hover:text-foreground transition-colors">
                +64 21 030 5430
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">M</span>
                </div>
                <span className="font-heading font-bold text-xl text-foreground">Mohios</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Clarity & Leverage Through AI. Helping Auckland businesses automate processes and gain competitive
                advantage through strategic AI implementation.
              </p>
              <p className="text-sm text-muted-foreground">Based in Auckland, New Zealand</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    AI Edge Session
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    AI Automation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Strategic Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Training & Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:danny@mohios.com" className="hover:text-foreground transition-colors">
                    danny@mohios.com
                  </a>
                </li>
                <li>
                  <a href="tel:+64210305430" className="hover:text-foreground transition-colors">
                    +64 21 030 5430
                  </a>
                </li>
                <li>Auckland, New Zealand</li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Mohios. All rights reserved. | Clarity &amp; Leverage Through AI</p>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border p-4 shadow-lg">
        <div className="flex gap-3 max-w-sm mx-auto">
          <Button
            size="sm"
            className="flex-1 text-sm border-accent/30 hover:bg-accent/10 bg-transparent"
            onClick={() => window.open("https://perspective.co/quiz", "_blank")}
          >
            Take Quiz
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-[2] bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-semibold"
            onClick={() => window.open("https://calendar.app.google/swyBFrFRYuA3ug8N8", "_blank")}
          >
            Book AI Edge Session
          </Button>
        </div>
      </div>
    </div>
  )
}
