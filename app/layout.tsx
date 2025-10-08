import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Excelsior - Master Stock Market Trading & Investing",
  description: "Master the stock market with Excelsior's comprehensive trading course. Learn technical analysis, fundamental analysis, and proven strategies to build wealth through smart investing.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
