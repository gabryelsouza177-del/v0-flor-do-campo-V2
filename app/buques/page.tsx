import type { Metadata } from "next"
import { BuquesHeader } from "@/components/buques-header"
import { BuquesHero } from "@/components/buques-hero"
import { BuquesCatalog } from "@/components/buques-catalog"
import { FloresAvulsas } from "@/components/flores-avulsas"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Buques de Flores para Presente em Manaus | Flor do Campo",
  description:
    "Buques frescos preparados com carinho para aniversarios, namoro, datas especiais e surpresas romanticas. Entrega em Manaus. Pecas pelo WhatsApp!",
  keywords:
    "buques de flores manaus, buque de rosas manaus, flores para presente manaus, floricultura manaus, rosas manaus",
}

export default function BuquesPage() {
  return (
    <>
      <BuquesHeader />
      <main>
        <BuquesHero />
        <BuquesCatalog />
        <FloresAvulsas />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
