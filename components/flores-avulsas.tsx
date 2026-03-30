import Image from "next/image"

const WHATSAPP_NUMBER = "5592991115403"

const WHATSAPP_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const avulsas = [
  {
    name: "Girassol",
    price: "R$ 35,00",
    emoji: "🌻",
    description: "Flor alegre e vibrante, simbolo de felicidade e energia.",
  },
  {
    name: "Lirio",
    price: "R$ 40,00",
    emoji: "🌸",
    description: "Elegante e perfumado, perfeito para decoracao e presentes.",
  },
  {
    name: "Galho de Calabria",
    price: "R$ 15,00",
    emoji: "🌿",
    description: "Folhagem decorativa para complementar arranjos e buques.",
  },
  {
    name: "Mini Margarida",
    price: "R$ 15,00",
    emoji: "🌼",
    description: "Delicada e charmosa, ideal para composicoes florais.",
  },
  {
    name: "Gipso",
    price: "R$ 15,00",
    emoji: "✿",
    description: "Flores pequeninas e delicadas, perfeitas para complementar buques.",
  },
]

function buildWhatsAppUrl(productName: string, price: string) {
  const message = encodeURIComponent(
    `Ola, gostaria de encomendar: *${productName}*\nValor: ${price}`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

export function FloresAvulsas() {
  return (
    <section id="flores-avulsas" className="bg-background py-16 sm:py-24" aria-labelledby="avulsas-heading">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-accent" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Unidades
            </span>
            <div className="h-px w-10 bg-accent" aria-hidden="true" />
          </div>
          <h2 id="avulsas-heading" className="font-serif text-2xl font-bold text-balance text-foreground sm:text-3xl lg:text-4xl">
            Flores Avulsas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Compre flores avulsas para montar seu proprio arranjo ou complementar um presente especial.
          </p>
        </div>

        {/* Image + List layout */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/flores-avulsas.jpg"
              alt="Variedade de flores avulsas disponíveis na Flor do Campo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-lg font-bold text-white">
                Flores frescas todos os dias
              </p>
              <p className="mt-1 text-sm text-white/80">
                Disponivel na nossa floricultura em Manaus
              </p>
            </div>
          </div>

          {/* Flowers list */}
          <div>
            <ul className="flex flex-col gap-4" role="list">
              {avulsas.map((flor) => (
                <li
                  key={flor.name}
                  className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex flex-1 flex-col gap-0.5">
                    <span className="font-serif text-base font-bold text-card-foreground">
                      {flor.name}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {flor.description}
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <span className="font-serif text-xl font-bold text-accent">{flor.price}</span>
                    <a
                      href={buildWhatsAppUrl(flor.name, flor.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                      aria-label={`Pedir ${flor.name} no WhatsApp`}
                    >
                      {WHATSAPP_ICON}
                      Pedir
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Ola, gostaria de encomendar um buque de flores.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {WHATSAPP_ICON}
              Fazer Pedido Completo no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
