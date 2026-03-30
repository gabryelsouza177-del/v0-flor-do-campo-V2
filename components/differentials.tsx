import { Clock, Truck, Flower2 } from "lucide-react"

const items = [
  {
    icon: Clock,
    title: "Atendimento 24h",
    description:
      "Estamos disponíveis a qualquer hora do dia ou da noite. Sabemos que esses momentos não escolhem horário e estamos aqui para ajudar.",
  },
  {
    icon: Truck,
    title: "Entrega em toda Manaus",
    description:
      "Realizamos entregas rapidas em todos os bairros de Manaus, incluindo cemiterios, igrejas e velorios.",
  },
  {
    icon: Flower2,
    title: "Flores Frescas",
    description:
      "Trabalhamos apenas com flores naturais selecionadas e de alta qualidade, garantindo arranjos com beleza e durabilidade.",
  },
]

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="bg-background py-16 sm:py-24"
      aria-labelledby="diferenciais-heading"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-accent" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Por que nos escolher
            </span>
            <div className="h-px w-10 bg-accent" aria-hidden="true" />
          </div>
          <h2
            id="diferenciais-heading"
            className="font-serif text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance"
          >
            Compromisso com Respeito e Agilidade
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Com mais de 10 anos de experiencia no mercado de floricultura em Manaus, cuidamos de cada
            detalhe para que voce possa prestar suas homenagens com dignidade e tranquilidade.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-bold text-card-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
