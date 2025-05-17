import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Mohios transformed our customer service workflow, reducing response times by 45% and increasing customer satisfaction scores.",
      name: "Sarah Johnson",
      title: "Customer Service Director, TechCorp",
      avatar: "SJ",
    },
    {
      quote:
        "The AI-powered analysis identified inefficiencies we never noticed. Our production process is now 30% more efficient.",
      name: "Michael Chen",
      title: "Operations Manager, InnovateCo",
      avatar: "MC",
    },
    {
      quote:
        "Implementing Mohios' workflow design saved us countless hours and significantly reduced human error in our financial processes.",
      name: "Jessica Williams",
      title: "CFO, Finance Plus",
      avatar: "JW",
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">There’s a Better Way</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mohios builds custom Operating Systems that bring structure, automation, and AI into the core of how your
            business runs — so your team is aligned, your tools work together, and your focus shifts from fixing
            problems to growing with clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-50">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg mb-6">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
