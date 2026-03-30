"use client"

import { useEffect } from "react"
import { X, Phone } from "lucide-react"

const WHATSAPP_1 = "5592985834285"
const WHATSAPP_2 = "5592991115403"

interface WhatsAppPickerProps {
  message: string
  onClose: () => void
}

export function WhatsAppPicker({ message, onClose }: WhatsAppPickerProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [onClose])

  const url1 = `https://wa.me/${WHATSAPP_1}?text=${encodeURIComponent(message)}`
  const url2 = `https://wa.me/${WHATSAPP_2}?text=${encodeURIComponent(message)}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Escolher numero de WhatsApp"
    >
      <div
        className="w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg font-bold text-card-foreground">
            Escolha o vendedor
          </h3>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-card-foreground"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-2 text-sm text-muted-foreground">
          Para qual numero deseja enviar seu pedido?
        </p>

        <div className="mt-5 flex flex-col gap-3">
          <a
            href={url1}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3.5 text-sm font-bold text-card-foreground transition-colors hover:border-primary hover:bg-primary/5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <span className="block">Vendedor 1</span>
              <span className="block text-xs font-normal text-muted-foreground">(92) 98583-4285</span>
            </div>
          </a>

          <a
            href={url2}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3.5 text-sm font-bold text-card-foreground transition-colors hover:border-primary hover:bg-primary/5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <span className="block">Vendedor 2</span>
              <span className="block text-xs font-normal text-muted-foreground">(92) 99111-5403</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
