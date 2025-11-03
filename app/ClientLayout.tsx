"use client"

import type React from "react"
import { Suspense } from "react"
import { ModalProvider } from "@/components/ui/modal-provider"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ModalProvider>
        {children}
      </ModalProvider>
    </Suspense>
  )
}
