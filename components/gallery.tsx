"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/gallery/entrega-1.jpg",
    alt: "Coroa de flores entregue - Homenagem com rosas vermelhas e crisântemos brancos",
  },
  {
    src: "/images/gallery/entrega-2.jpg",
    alt: "Coroa de flores entregue - Arranjo floral em homenagem",
  },
  {
    src: "/images/gallery/entrega-3.jpg",
    alt: "Coroa de flores entregue - Coroa com flores amarelas e brancas",
  },
  {
    src: "/images/gallery/entrega-4.jpg",
    alt: "Coroas de flores entregues - Arranjos diversos em velório",
  },
  {
    src: "/images/gallery/entrega-5.jpg",
    alt: "Coroa de flores entregue - Homenagem com rosas amarelas e crisântemos brancos",
  },
  {
    src: "/images/gallery/entrega-6.jpg",
    alt: "Coroa de flores entregue - Arranjo delicado com rosas cor-de-rosa",
  },
  {
    src: "/images/gallery/entrega-7.jpg",
    alt: "Coroa de flores entregue - Coroa com rosas pêssego e flores brancas",
  },
  {
    src: "/images/gallery/entrega-8.jpg",
    alt: "Coroa de flores entregue - Homenagem com rosas pêssego",
  },
  {
    src: "/images/gallery/entrega-9.jpg",
    alt: "Coroa de flores entregue - Arranjo com rosas amarelas e lírios brancos",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <section
        id="galeria"
        className="bg-secondary py-16 sm:py-24"
        aria-labelledby="galeria-heading"
      >
        <div className="mx-auto max-w-7xl px-4">
          {/* Section header */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-transparent via-accent to-transparent" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Nossa Galeria
              </span>
              <div className="h-px w-10 bg-gradient-to-r from-transparent via-accent to-transparent" aria-hidden="true" />
            </div>
            <h2
              id="galeria-heading"
              className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance"
            >
              Galeria de Homenagens
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Entregas realizadas com pontualidade e respeito em toda Manaus.
            </p>
          </div>

          {/* Gallery grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted shadow-md transition-shadow hover:shadow-xl"
                aria-label={`Ver foto ${index + 1} em tamanho grande`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay with badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 rounded-full bg-accent/95 px-3 py-1 text-xs font-bold text-accent-foreground shadow-lg">
                  Entrega Realizada
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da foto"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-card text-card-foreground shadow-lg transition-colors hover:bg-muted"
            aria-label="Fechar visualização"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}
