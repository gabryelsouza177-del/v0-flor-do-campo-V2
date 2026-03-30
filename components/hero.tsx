"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Clock, Truck } from "lucide-react"
import { WhatsAppPicker } from "@/components/whatsapp-picker"

export function Hero() {
  const [showPicker, setShowPicker] = useState(false)

  const urgentMessage = "Ola, preciso de uma coroa de flores com urgencia. Gostaria de fazer o pedido!"

  return (
    <>
    <section className="relative overflow-hidden bg-primary" aria-labelledby="hero-heading">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-flowers.jpg"
          alt=""
          fill
          className="object-cover opacity-25"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:py-28 lg:py-36">
        {/* Gold accent line */}
        <div className="mb-6 h-px w-16 bg-accent" aria-hidden="true" />

        <span className="mb-4 inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
          Plantao 24 horas
        </span>

        <h1
          id="hero-heading"
          className="max-w-4xl font-serif text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl text-balance"
        >
          Flor do Campo: Coroas de Flores em Manaus - Plantao 24 Horas
        </h1>

        <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-bold text-accent sm:text-base">
          <Truck className="h-4 w-4" aria-hidden="true" />
          Entrega rapida em todos os cemiterios e velorios de Manaus
        </p>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
          Com mais de 10 anos de experiencia, honramos quem voce ama com arranjos florais de alta
          qualidade. Flores frescas selecionadas e entrega em toda Manaus com o cuidado que o momento exige.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => setShowPicker(true)}
            className="inline-flex items-center gap-2.5 rounded-md bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Solicitar Entrega Urgente
          </button>
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <a
              href="tel:+5592985834285"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              (92) 98583-4285
            </a>
            <a
              href="tel:+5592991115403"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              (92) 99111-5403
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70 sm:gap-10">
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
            Atendimento 24h
          </span>
          <span className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-accent" aria-hidden="true" />
            Entrega em toda Manaus
          </span>
          <span className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Flores sempre frescas
          </span>
        </div>
      </div>
    </section>

    {showPicker && (
      <WhatsAppPicker message={urgentMessage} onClose={() => setShowPicker(false)} />
    )}
    </>
  )
}
