"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  // Safety check - ensure items exists and has length
  const safeItems = items && items.length > 0 ? items : []
  const defaultName = safeItems[0]?.name || "Home"

  const [activeTab, setActiveTab] = useState(defaultName)
  const [isMobile, setIsMobile] = useState(false)
  const [pathname, setPathname] = useState<string>("/")
  
  // Early return if no items (after hooks are called)
  if (safeItems.length === 0) {
    return null
  }
  
  // Track pathname using window.location and listen for changes
  useEffect(() => {
    if (typeof window === "undefined") return
    
    // Set initial pathname
    setPathname(window.location.pathname)
    
    // Function to update pathname
    const updatePathname = () => {
      setPathname(window.location.pathname)
    }
    
    // Listen for popstate (browser back/forward)
    window.addEventListener("popstate", updatePathname)
    
    // Listen for Next.js route changes (custom event)
    const handleNextRouteChange = () => {
      updatePathname()
    }
    
    // Check pathname periodically (Next.js client-side routing doesn't always trigger popstate)
    const interval = setInterval(() => {
      const currentPath = window.location.pathname
      setPathname(prevPath => {
        if (currentPath !== prevPath) {
          return currentPath
        }
        return prevPath
      })
    }, 200)
    
    // Also listen for clicks on links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      if (link && link.href) {
        setTimeout(() => {
          setPathname(window.location.pathname)
        }, 100)
      }
    }
    
    document.addEventListener("click", handleLinkClick)
    
    return () => {
      window.removeEventListener("popstate", updatePathname)
      document.removeEventListener("click", handleLinkClick)
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    // Set active tab based on current pathname
    if (pathname && safeItems.length > 0) {
      const currentItem = safeItems.find(item => item.url === pathname)
      if (currentItem) {
        setActiveTab(currentItem.name)
      } else if (pathname === "/") {
        setActiveTab("Home")
      }
    }
  }, [pathname, safeItems])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-4 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-0",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {safeItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
