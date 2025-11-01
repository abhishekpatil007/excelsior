"use client"

import React, { createContext, useContext, useState } from 'react'
import { ContactModal } from './contact-modal'

interface ModalContextType {
  openContactModal: (title?: string, subtitle?: string) => void
  closeContactModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalProps, setModalProps] = useState<{ title?: string; subtitle?: string }>({})

  const openContactModal = (title?: string, subtitle?: string) => {
    setModalProps({ title, subtitle })
    setIsOpen(true)
  }

  const closeContactModal = () => {
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ openContactModal, closeContactModal }}>
      {children}
      <ContactModal
        isOpen={isOpen}
        onClose={closeContactModal}
        title={modalProps.title}
        subtitle={modalProps.subtitle}
      />
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
