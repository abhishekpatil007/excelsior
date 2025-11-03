"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { useModal } from "./ui/modal-provider"
import { LeLoLogo } from "./lelo-logo"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

export function Header() {
  const { openContactModal } = useModal()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(currentScrollY > 50)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { href: "/why-us", label: "Why Us" },
    { href: "/about-us", label: "About Us" },
    { href: "/pricing", label: "Course" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <header
        className={`
          fixed top-2 md:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out w-[95%] md:w-auto
          ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        <div
          className={`
            flex items-center justify-between gap-2 md:gap-8 px-3 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl border transition-all duration-300 max-w-6xl
            ${
              isScrolled
                ? "bg-background/90 backdrop-blur-xl border-border/40 shadow-2xl"
                : "bg-background/95 backdrop-blur-lg border-border/30 shadow-lg"
            }
          `}
        >
          <a href="/" className="transform transition-transform duration-200 hover:scale-105 flex items-center">
            <LeLoLogo />
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-foreground/80 hover:text-foreground transition-all duration-300 group px-3 py-1 rounded-lg hover:bg-foreground/5 transform hover:scale-110 hover:rotate-1 hover:skew-x-1"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-4"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <Button
              size="sm"
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground transform transition-all duration-200 hover:scale-105 hover:shadow-lg rounded-xl"
              onClick={() => openContactModal("Enroll Now", "Share your details and our team will reach out to you")}
            >
              Enroll Now
            </Button>
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[85vw] sm:w-[420px] p-0 bg-gradient-to-b from-background via-background/95 to-background backdrop-blur-xl border-l border-border/50"
              >
                <div className="flex flex-col h-full">
                  <SheetHeader className="px-6 pt-6 pb-4 border-b border-border/30 bg-gradient-to-r from-primary/10 via-transparent to-transparent">
                    <SheetTitle className="text-left">
                      <LeLoLogo />
                    </SheetTitle>
                  </SheetHeader>
                  
                  <nav className="flex flex-col gap-2 px-6 py-6 flex-1 overflow-y-auto">
                    <AnimatePresence>
                      {navLinks.map((link, index) => (
                        <motion.a
                          key={link.href}
                          href={link.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1,
                            ease: [0.4, 0, 0.2, 1]
                          }}
                          className="group relative text-lg font-medium text-foreground/90 hover:text-foreground transition-all duration-300 py-4 px-4 rounded-xl hover:bg-primary/10 hover:pl-6 border border-transparent hover:border-primary/20 bg-background/50 hover:shadow-lg hover:shadow-primary/5"
                          onClick={() => setIsMobileMenuOpen(false)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="relative z-10">{link.label}</span>
                            <motion.div
                              className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100"
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>
                          <motion.div
                            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/50 rounded-l-xl opacity-0 group-hover:opacity-100"
                            initial={{ scaleY: 0 }}
                            whileHover={{ scaleY: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.a>
                      ))}
                    </AnimatePresence>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="mt-6 pt-6 border-t border-border/30"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform transition-all duration-300 hover:scale-105 py-6 text-lg font-semibold rounded-xl"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          openContactModal("Enroll Now", "Share your details and our team will reach out to you")
                        }}
                      >
                        Enroll Now
                      </Button>
                    </motion.div>
                  </nav>
                  
                  <div className="px-6 pb-6 pt-4 border-t border-border/30">
                    <p className="text-xs text-foreground/50 text-center">
                      © 2025 Excelsior. All rights reserved.
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
