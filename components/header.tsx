"use client"

import Image from "next/image"
import { 
  Sparkles, 
  Users, 
  BookOpen, 
  MessageSquare, 
  Mail,
  UserCheck
} from "lucide-react"
import { useModal } from "./ui/modal-provider"
import { NavBar } from "./ui/tubelight-navbar"
import { Button } from "./ui/button"

export function Header() {
  const { openContactModal } = useModal()

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

      {/* Enroll Now button at top right */}
      <div className="fixed top-8 right-4 sm:right-6 z-50 flex items-center">
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground transform transition-all duration-200 hover:scale-105 hover:shadow-lg rounded-xl px-4 py-2"
          onClick={() => openContactModal("Enroll Now", "Share your details and our team will reach out to you")}
        >
          Enroll Now
        </Button>
      </div>

      {/* Tubelight Navbar */}
      <NavBar items={navItems} />
    </>
  )
}
