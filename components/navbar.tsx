"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { ThemeToggle } from "./theme-toggle"
import { ScrollProgress } from "./scroll-progress"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Publications", href: "#publications" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
] as const

export function Navbar() {
  const [active, setActive] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState<string>("")

  React.useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 50)

      const sections = navItems.map(item => ({
        id: item.href.slice(1),
        offset: document.getElementById(item.href.slice(1))?.offsetTop || 0
      }))

      const currentPosition = window.scrollY + window.innerHeight / 3
      const activeSection = sections.reduce((acc, section) => {
        return currentPosition >= section.offset ? section.id : acc
      }, sections[0].id)

      setActiveSection(activeSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <ScrollProgress />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          active && "bg-background/80 backdrop-blur-md border-b"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            >
              Fabian Karl
            </motion.a>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant={activeSection === item.href.slice(1) ? "secondary" : "ghost"}
                      className="relative"
                      asChild
                    >
                      <a href={item.href}>
                        {item.name}
                        {activeSection === item.href.slice(1) && (
                          <motion.div
                            layoutId="activeSection"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  )
}