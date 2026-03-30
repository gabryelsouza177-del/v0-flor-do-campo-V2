"use client"

import { useState } from "react"
import { MessageCircle, X, Phone, Instagram } from "lucide-react"

const WHATSAPP_1 =
  "https://wa.me/5592985834285?text=Ol%C3%A1%2C%20preciso%20de%20uma%20coroa%20de%20flores%20com%20urg%C3%AAncia"
const WHATSAPP_2 =
  "https://wa.me/5592991115403?text=Ol%C3%A1%2C%20preciso%20de%20uma%20coroa%20de%20flores%20com%20urg%C3%AAncia"

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Instagram button */}
      <a
        href="https://www.instagram.com/flordocampoam"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E1306C] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#E1306C] focus:ring-offset-2 sm:h-14 sm:w-14"
        aria-label="Siga-nos no Instagram @flordocampoam"
      >
        <Instagram className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
      </a>
      {open && (
        <div className="mb-2 w-64 rounded-lg bg-card border border-border p-4 shadow-xl">
          <p className="mb-3 text-sm font-bold text-card-foreground">Fale conosco pelo WhatsApp:</p>
          <div className="flex flex-col gap-2">
            <a
              href={WHATSAPP_1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#1fad55]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              (92) 98583-4285
            </a>
            <a
              href={WHATSAPP_2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#1fad55]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              (92) 99111-5403
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:h-16 sm:w-16"
        aria-label={open ? "Fechar opcoes de WhatsApp" : "Abrir opcoes de WhatsApp"}
      >
        {open ? (
          <X className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
        )}
      </button>
    </div>
  )
}
