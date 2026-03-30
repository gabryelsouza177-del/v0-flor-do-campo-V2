"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageIcon } from "lucide-react"

const WHATSAPP_NUMBER = "5592991115403"

const WHATSAPP_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const bouquets = [
  { name: "Buque com 6 Rosas", roses: 6, price: "R$ 120,00", image: "/images/buque-6-rosas.jpg" },
  { name: "Buque com 7 Rosas", roses: 7, price: "R$ 140,00", image: "/images/buque-7-rosas.jpg" },
  { name: "Buque com 8 Rosas", roses: 8, price: "R$ 160,00", image: "/images/buque-8-rosas.jpg" },
  { name: "Buque com 9 Rosas", roses: 9, price: "R$ 180,00", image: "/images/buque-9-rosas.jpg" },
  { name: "Buque com 10 Rosas", roses: 10, price: "R$ 200,00", image: "/images/buque-10-rosas.jpg" },
  { name: "Buque com 11 Rosas", roses: 11, price: "R$ 220,00", image: "/images/buque-11-rosas.jpg" },
  { name: "Buque com 12 Rosas", roses: 12, price: "R$ 240,00", image: "/images/buque-12-rosas.jpg" },
]

function buildWhatsAppUrl(productName: string, price: string) {
  const message = encodeURIComponent(
    `Ola, gostaria de encomendar um buque de flores.\n\n*${productName}*\nValor: ${price}`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

function BouquetCard({
  name,
  roses,
  price,
  image,
}: {
  name: string
  roses: number
  price: string
  image: string
}) {
  const [hasError, setHasError] = useState(false)

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        {hasError ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <ImageIcon className="h-10 w-10" />
              <span className="text-xs">Foto em breve</span>
            </div>
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setHasError(true)}
          />
        )}
        <div className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow">
          {roses} rosas
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-bold text-card-foreground">{name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          Buque fresco preparado com carinho, ideal para presentear em datas especiais.
        </p>
        <span className="mt-4 font-serif text-2xl font-bold text-accent">{price}</span>
        <a
          href={buildWhatsAppUrl(name, price)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          {WHATSAPP_ICON}
          Pedir no WhatsApp
        </a>
      </div>
    </article>
  )
}

export function BuquesCatalog() {
  return (
    <section id="buques" className="bg-secondary/30 py-16 sm:py-24" aria-labelledby="buques-heading">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-accent" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Catalogo de Buques
            </span>
            <div className="h-px w-10 bg-accent" aria-hidden="true" />
          </div>
          <h2 id="buques-heading" className="font-serif text-2xl font-bold text-balance text-foreground sm:text-3xl lg:text-4xl">
            Nossos Buques de Rosas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Escolha o buque perfeito e encomende diretamente pelo WhatsApp. Entregamos em Manaus!
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {bouquets.map((bouquet) => (
            <BouquetCard key={bouquet.name} {...bouquet} />
          ))}
        </div>
        <div className="mt-14 rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
          <p className="font-serif text-lg font-bold text-foreground sm:text-xl">
            Quer um buque personalizado?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Entre em contato e criaremos o buque ideal para a sua ocasiao especial.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Ola, gostaria de encomendar um buque de flores.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {WHATSAPP_ICON}
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
