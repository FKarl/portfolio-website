import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Research } from "@/components/research"
import { Publications } from "@/components/publications"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Research />
        <Publications />
        <About />
        <Projects />
      </main>
      <SiteFooter />
    </>
  )
}
