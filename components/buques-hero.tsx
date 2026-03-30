import { Heart, Flower2 } from "lucide-react"

export function BuquesHero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24">
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--primary)) 0%, transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        {/* Badge */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-accent" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent">
            <Flower2 className="h-3.5 w-3.5" aria-hidden="true" />
            Floricultura Flor do Campo
          </span>
          <div className="h-px w-10 bg-accent" aria-hidden="true" />
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl font-bold text-balance text-foreground sm:text-4xl lg:text-5xl">
          Buquês de Flores para{" "}
          <span className="text-gold-gradient">Presente em Manaus</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Buquês frescos preparados com carinho para presentear em aniversários,
          namoro, datas especiais e surpresas românticas.
        </p>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-accent" aria-hidden="true" />
            Flores frescas diariamente
          </span>
          <span className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-accent" aria-hidden="true" />
            Entrega em Manaus
          </span>
          <span className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-accent" aria-hidden="true" />
            Pedido pelo WhatsApp
          </span>
        </div>
      </div>
    </section>
  )
}
