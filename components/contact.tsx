import { MapPin, Phone, Clock, Mail } from "lucide-react"

const WHATSAPP_URL_1 =
  "https://wa.me/5592985834285?text=Ol%C3%A1%2C%20preciso%20de%20uma%20coroa%20de%20flores%20com%20urg%C3%AAncia"

const WHATSAPP_URL_2 =

"https://wa.me/5592991115403?text=Ol%C3%A1%2C%20preciso%20de%20uma%20coroa%20de%20flores%20com%20urg%C3%AAncia"

export function Contact() {
  return (
    <section
      id="contato"
      className="bg-background py-16 sm:py-24"
      aria-labelledby="contato-heading"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-accent" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Fale Conosco
            </span>
            <div className="h-px w-10 bg-accent" aria-hidden="true" />
          </div>
          <h2
            id="contato-heading"
            className="font-serif text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance"
          >
            Estamos Prontos para Atender Você
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Entre em contato conosco a qualquer momento. Nossa equipe está de prontidão para oferecer
            todo o suporte que você precisa.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-card-foreground">Endereço</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Av. Joaquim Nabuco, n. 1446
                  <br />
                  Centro, Manaus - AM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-card-foreground">Telefone / WhatsApp</h3>
                <div className="mt-1 space-y-1">
                  <p className="text-sm text-muted-foreground">(92) 98583-4285</p>
                  <p className="text-sm text-muted-foreground">(92) 99111-5403</p>
                </div>
                <div className="mt-2 flex flex-col gap-1">
                  <a
                    href={WHATSAPP_URL_1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    WhatsApp 1 - (92) 98583-4285
                  </a>
                  <a
                    href={WHATSAPP_URL_2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    WhatsApp 2 - (92) 99111-5403
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-card-foreground">Horário</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Atendimento 24 horas
                  <br />
                  Todos os dias, inclusive feriados
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-card-foreground">E-mail</h3>
                <p className="mt-1 text-sm text-muted-foreground">contato@flordocampo.com.br</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              title="Localização da Flor do Campo no mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.061!2d-60.0217!3d-3.1316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c057b2ed26f53%3A0x0!2sAv.%20Joaquim%20Nabuco%2C%201446%20-%20Centro%2C%20Manaus%20-%20AM!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
