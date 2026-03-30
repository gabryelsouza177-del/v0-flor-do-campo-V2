"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Clock, Menu, X } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5592991115403?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%20um%20buqu%C3%AA%20de%20flores."

const navLinks = [
  { label: "Buques", href: "#buques" },
  { label: "Flores Avulsas", href: "#flores-avulsas" },
  { label: "Coroas de Flores", href: "/" },
]

export function BuquesHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-xs sm:text-sm md:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              Atendimento 24 horas
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              (92) 98583-4285
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              (92) 99111-5403
            </span>
          </div>
          <span className="hidden items-center gap-1.5 md:flex">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Av. Joaquim Nabuco, 1446, Centro, Manaus
          </span>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Flor do Campo - Pagina Inicial">
            <Image
              src="/images/Logo.png"
              alt="Floricultura Flor do Campo"
              width={56}
              height={56}
              className="h-11 w-11 rounded-lg object-cover lg:h-12 lg:w-12"
              priority
            />
            <div>
              <span className="block font-serif text-lg font-bold leading-tight text-foreground lg:text-xl">
                Flor do Campo
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">
                Floricultura
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegacao principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Pedir Agora
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="border-t border-border bg-card px-4 pb-4 md:hidden" aria-label="Menu movel">
            <div className="flex flex-col gap-3 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Pedir Agora via WhatsApp
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
