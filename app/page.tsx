import { About } from "@/components/about/index"
import { Header } from "@/components/header"
import { Timeline } from "@/components/timeline"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"
import { Publications } from "@/components/publications"
import { Now } from "@/components/now"

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <Header />
      <About />
      <Now />
      <Timeline />
      <Publications />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
