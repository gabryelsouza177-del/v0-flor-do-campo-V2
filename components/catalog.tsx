"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { X, ZoomIn, BookOpen } from "lucide-react"
import { WhatsAppPicker } from "@/components/whatsapp-picker"

function buildMessage(product: { name: string; description: string; image: string }) {
  const siteUrl = typeof window !== "undefined" ? window.location.origin : ""
  return `Ola, tenho interesse nesta coroa:\n\n` +
    `*${product.name}*\n` +
    `${product.description}\n\n` +
    `Foto: ${siteUrl}${product.image}\n\n` +
    `Gostaria de solicitar um orcamento!`
}

const wreaths = [
  {
    name: "Coroa Premium",
    description:
      "Arranjo exuberante com rosas brancas, orquídeas e folhagens nobres. Acabamento sofisticado com faixa personalizada.",
    image: "/images/coroa-premium.jpg",
    badge: "Mais vendida",
  },
  {
    name: "Coroa Luxo",
    description:
      "Composição elegante com rosas vermelhas, lírios brancos e folhagens selecionadas. Ideal para homenagens especiais.",
    image: "/images/coroa-luxo.jpg",
    badge: null,
  },
  {
    name: "Coroa Clássica",
    description:
      "Arranjo tradicional com crisântemos brancos e folhagens verdes. Beleza e simplicidade com todo o respeito que o momento pede.",
    image: "/images/coroa-classica.jpg",
    badge: null,
  },
]

function Lightbox({
  image,
  name,
  onClose,
}: {
  image: string
  name: string
  onClose: () => void
}) {
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ampliada: ${name}`}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-card text-card-foreground shadow-lg transition-colors hover:bg-muted"
        aria-label="Fechar foto"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="relative h-[85vh] w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>
    </div>
  )
}

export function Catalog() {
  const [lightbox, setLightbox] = useState<{ image: string; name: string } | null>(null)
  const [pickerMessage, setPickerMessage] = useState<string | null>(null)

  const openLightbox = useCallback((image: string, name: string) => {
    setLightbox({ image, name })
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
  }, [])

  return (
    <>
      <section
        id="catalogo"
        className="bg-secondary py-16 sm:py-24"
        aria-labelledby="catalogo-heading"
      >
        <div className="mx-auto max-w-7xl px-4">
          {/* Section header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="catalogo-heading"
              className="font-serif text-2xl font-bold text-secondary-foreground sm:text-3xl lg:text-4xl text-balance"
            >
              Coroas de Flores
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Cada arranjo é preparado com carinho e atenção para honrar a memória de quem partiu.
            </p>
            <a
              href="#dizeres"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-5 py-2.5 text-sm font-bold text-accent-foreground transition-colors hover:bg-accent/20"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Nao sabe o que escrever na faixa? Veja modelos
            </a>
          </div>

          {/* Wreaths */}
          <div className="mt-14">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {wreaths.map((item) => (
                <article
                  key={item.name}
                  className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
                >
                  <button
                    type="button"
                    onClick={() => openLightbox(item.image, item.name)}
                    className="relative block w-full cursor-pointer overflow-hidden aspect-[4/3]"
                    aria-label={`Ampliar foto: ${item.name}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {item.badge && (
                      <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                        {item.badge}
                      </span>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors group-hover:bg-foreground/20">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-card/90 text-card-foreground opacity-0 shadow transition-opacity group-hover:opacity-100">
                        <ZoomIn className="h-5 w-5" />
                      </span>
                    </div>
                  </button>
                  <div className="p-6">
                    <h4 className="font-serif text-lg font-bold text-card-foreground">{item.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => setPickerMessage(buildMessage(item))}
                      className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Solicitar Orcamento
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {lightbox && (
        <Lightbox image={lightbox.image} name={lightbox.name} onClose={closeLightbox} />
      )}

      {pickerMessage && (
        <WhatsAppPicker message={pickerMessage} onClose={() => setPickerMessage(null)} />
      )}
    </>
  )
}
