import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="Floricultura Flor do Campo"
                width={56}
                height={56}
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div>
                <span className="block font-serif text-xl font-bold text-primary-foreground">
                  Flor do Campo
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-primary-foreground/60">
                  Floricultura
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Especialistas em coroas de flores e arranjos florais com entrega em toda Manaus.
              Atendimento 24 horas com respeito e agilidade.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-base font-bold">Links Rápidos</h3>
            <nav className="mt-4 flex flex-col gap-2.5" aria-label="Links do rodapé">
              <a href="#diferenciais" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Diferenciais
              </a>
              <a href="#catalogo" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Catálogo
              </a>
              <a href="#galeria" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Galeria
              </a>
              <a href="#contato" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Contato
              </a>
              <a href="/buques" className="text-sm font-medium text-accent transition-colors hover:text-primary-foreground">
                Buquês de Flores
              </a>
              <a 
                href="https://www.instagram.com/flordocampoam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                Instagram
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base font-bold">Contato</h3>
            <address className="mt-4 flex flex-col gap-2.5 text-sm not-italic text-primary-foreground/70">
              <span className="font-bold text-primary-foreground">Av. Joaquim Nabuco, 1446, Centro</span>
              <span>Manaus - AM</span>
              <span className="font-medium">(92) 98583-4285 | (92) 99111-5403</span>
              <span className="mt-2 text-xs leading-relaxed text-primary-foreground/60">
                Entrega rapida em todos os cemiterios e velorios de Manaus
              </span>
            </address>
          </div>
        </div>

        {/* Divider & copyright */}
        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          <p>
            {'© '}
            {new Date().getFullYear()}
            {' Flor do Campo Floricultura. Todos os direitos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
