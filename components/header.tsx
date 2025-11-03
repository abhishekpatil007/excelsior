"use client"

import { useState } from "react"
import Image from "next/image"
import { 
  Sparkles, 
  Users, 
  BookOpen, 
  MessageSquare, 
  Mail,
  UserCheck,
  Menu
} from "lucide-react"
import { useModal } from "./ui/modal-provider"
import { NavBar } from "./ui/tubelight-navbar"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

export function Header() {
  const { openContactModal } = useModal()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", url: "/", icon: Sparkles },
    { name: "Why Us", url: "/why-us", icon: UserCheck },
    { name: "About Us", url: "/about-us", icon: Users },
    { name: "Course", url: "/pricing", icon: BookOpen },
    { name: "Testimonials", url: "/testimonials", icon: MessageSquare },
    { name: "Contact", url: "/contact", icon: Mail },
  ]

  return (
    <>
      {/* Logo at top left */}
      <div className="fixed top-8 left-4 sm:left-6 z-50 flex items-center">
        <a 
          href="/" 
          className="transform transition-transform duration-200 hover:scale-105 flex items-center"
        >
          <Image 
            src="/images/design-mode/logo.jpg" 
            alt="Excelsior Logo" 
            width={400}
            height={120}
            className="h-12 w-auto object-contain"
            style={{ backgroundColor: 'transparent' }}
          />
        </a>
      </div>

      {/* Mobile Burger Menu & Desktop Enroll Button */}
      <div className="fixed top-8 right-4 sm:right-6 z-50 flex items-center gap-2">
        {/* Burger Menu - Mobile Only */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[85vw] sm:w-[400px] p-0 bg-gradient-to-b from-background via-background/95 to-background backdrop-blur-xl border-l border-border/50"
          >
            <div className="flex flex-col h-full">
              <SheetHeader className="px-6 pt-6 pb-4 border-b border-border/30 bg-gradient-to-r from-primary/10 via-transparent to-transparent">
                <SheetTitle className="text-left">
                  <Image 
                    src="/images/design-mode/logo.jpg" 
                    alt="Excelsior Logo" 
                    width={200}
                    height={60}
                    className="h-10 w-auto object-contain"
                    style={{ backgroundColor: 'transparent' }}
                  />
                </SheetTitle>
              </SheetHeader>
              
              <nav className="flex flex-col gap-2 px-6 py-6 flex-1 overflow-y-auto">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      className="flex items-center gap-4 text-lg font-medium text-foreground/90 hover:text-foreground transition-all duration-300 py-4 px-4 rounded-xl hover:bg-primary/10 hover:pl-6 border border-transparent hover:border-primary/20 bg-background/50 hover:shadow-lg hover:shadow-primary/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon size={22} strokeWidth={2.5} />
                      <span>{item.name}</span>
                    </a>
                  )
                })}
                
                <div className="mt-6 pt-6 border-t border-border/30">
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform transition-all duration-300 hover:scale-105 py-6 text-lg font-semibold rounded-xl"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      openContactModal("Enroll Now", "Share your details and our team will reach out to you")
                    }}
                  >
                    Enroll Now
                  </Button>
                </div>
              </nav>
              
              <div className="px-6 pb-6 pt-4 border-t border-border/30">
                <p className="text-xs text-foreground/50 text-center">
                  © 2025 Excelsior. All rights reserved.
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Enroll Now button - Desktop Only */}
        <Button
          size="sm"
          className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground transform transition-all duration-200 hover:scale-105 hover:shadow-lg rounded-xl px-4 py-2"
          onClick={() => openContactModal("Enroll Now", "Share your details and our team will reach out to you")}
        >
          Enroll Now
        </Button>
      </div>

      {/* Tubelight Navbar - Desktop Only */}
      <div className="hidden md:block">
        <NavBar items={navItems} />
      </div>
    </>
  )
}
