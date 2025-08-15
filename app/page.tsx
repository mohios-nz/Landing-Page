"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Target, MapPin, ArrowRight, Zap, TrendingUp, Shield } from "lucide-react"

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
              <Badge variant="secondary" className="ml-2 text-xs">
                Auckland
              </Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
                Process
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
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <MapPin className="w-3 h-3 mr-1" />
              Auckland-Based AI Experts
            </Badge>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              AI Automation Consulting & Training in Auckland Start with an AI Edge Session
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              In just 2 hours, discover where AI can save you time, cut costs, and give your business a competitive
              edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg">
                Take the AI Savings Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg bg-transparent"
                onClick={() => window.open("https://calendar.app.google/swyBFrFRYuA3ug8N8", "_blank")}
              >
                Book Your AI Edge Session
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              ✓ No commitment required • ✓ Auckland-based experts • ✓ Immediate insights
            </p>
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
              A comprehensive diagnostic and strategic roadmap tailored to your Auckland business
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

      {/* Process Section */}
      <section id="process" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">Simple 3-Step Process</h2>
            <p className="text-lg text-muted-foreground">
              From assessment to implementation roadmap in just a few steps
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Take the AI Savings Quiz</h3>
                <p className="text-muted-foreground">
                  Quick, tailored assessment of your business to understand your current state and potential.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Join your AI Edge Session</h3>
                <p className="text-muted-foreground">
                  70% diagnosis, 30% strategy & training in a focused 2-hour session tailored to your business.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Get your Custom Roadmap</h3>
                <p className="text-muted-foreground">
                  Practical AI implementation plan with prioritized next steps and expected ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-background">
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
                    <span>2 hours/week on data management (87% reduction)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>30 minutes average inquiry response time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>$800/month in administrative costs (67% savings)</span>
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
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg">
                Take the AI Savings Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg bg-transparent"
                onClick={() => window.open("https://calendar.app.google/swyBFrFRYuA3ug8N8", "_blank")}
              >
                Book Your AI Edge Session
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Questions? Email us at hello@mohios.com or call (09) 123-4567
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
                <li>hello@mohios.com</li>
                <li>(09) 123-4567</li>
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
            <p>&copy; 2024 Mohios. All rights reserved. | Clarity & Leverage Through AI</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
