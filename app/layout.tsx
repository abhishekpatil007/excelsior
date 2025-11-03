import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Excelsior - Master Stock Market Trading & Investing",
  description: "Master the stock market with Excelsior's comprehensive trading course. Learn technical analysis, fundamental analysis, and proven strategies to build wealth through smart investing.",
  generator: "v0.app",
  icons: {
    icon: "/images/design-mode/logo.jpg",
    apple: "/images/design-mode/logo.jpg",
    shortcut: "/images/design-mode/logo.jpg"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
