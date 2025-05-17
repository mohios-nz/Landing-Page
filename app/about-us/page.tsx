import Header from "@/components/header"
import Footer from "@/components/footer"
import About from "@/components/about"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <About />
      </main>
      <Footer />
    </div>
  )
}
