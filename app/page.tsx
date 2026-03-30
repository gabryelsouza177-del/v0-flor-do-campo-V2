import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Differentials } from "@/components/differentials"
import { Catalog } from "@/components/catalog"
import { PriceCatalog } from "@/components/price-catalog"
import { Gallery } from "@/components/gallery"
import { DizeresFaixa } from "@/components/dizeres-faixa"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Differentials />
        <Catalog />
        <PriceCatalog />
        <Gallery />
        <DizeresFaixa />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
