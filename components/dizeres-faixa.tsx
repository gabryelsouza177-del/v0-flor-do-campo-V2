"use client"

import { useState } from "react"
import { Copy, Check, BookOpen } from "lucide-react"

const categories = [
  {
    title: "Familia",
    phrases: [
      "Saudades eternas da familia",
      "Com todo amor e saudade, sua familia",
      "Descanse em paz. Com amor, seus filhos",
      "Eterna saudade. Sua esposa e filhos",
      "Para sempre em nossos coracoes. Familia [Sobrenome]",
      "Com amor e gratidao, sua familia",
    ],
  },
  {
    title: "Amigos",
    phrases: [
      "Saudades eternas dos amigos",
      "Homenagem dos amigos para sempre",
      "Descanse em paz, querido amigo. Sentiremos sua falta",
      "Com carinho e saudade, seus amigos",
      "Voce sempre estara em nossos coracoes. Seus amigos",
    ],
  },
  {
    title: "Colegas de trabalho",
    phrases: [
      "Sentimentos da equipe [Nome da Empresa]",
      "Em memoria do nosso colega. Equipe [Empresa]",
      "Com pesar e saudade. Diretoria e colaboradores",
      "Homenagem de todos os funcionarios da [Empresa]",
      "Nossos sinceros sentimentos. [Nome da Empresa]",
    ],
  },
  {
    title: "Mensagens gerais",
    phrases: [
      "Descanse em paz",
      "Saudades eternas",
      "Com amor e saudade",
      "Para sempre em nossas memorias",
      "Eternas saudades de quem tanto amou",
      "Que Deus o receba em sua infinita bondade",
      "Em memoria de uma pessoa especial",
    ],
  },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      aria-label={`Copiar: ${text}`}
      title="Copiar frase"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  )
}

export function DizeresFaixa() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section
      id="dizeres"
      className="bg-card py-16 sm:py-24"
      aria-labelledby="dizeres-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-accent" aria-hidden="true" />
            <BookOpen className="h-5 w-5 text-accent" aria-hidden="true" />
            <div className="h-px w-10 bg-accent" aria-hidden="true" />
          </div>
          <h2
            id="dizeres-heading"
            className="font-serif text-2xl font-bold text-card-foreground sm:text-3xl lg:text-4xl text-balance"
          >
            Modelos de Dizeres para Faixas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Nao sabe o que escrever na faixa da coroa? Escolha uma das frases abaixo ou use como
            inspiracao. Clique para copiar.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat, index) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(index)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Phrases list */}
        <div className="mt-8 space-y-3">
          {categories[activeCategory].phrases.map((phrase) => (
            <div
              key={phrase}
              className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background p-4 transition-colors hover:border-accent/50"
            >
              <p className="text-sm leading-relaxed text-foreground sm:text-base">
                {`"${phrase}"`}
              </p>
              <CopyButton text={phrase} />
            </div>
          ))}
        </div>

        {/* Info note */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Voce pode personalizar qualquer frase. Basta nos informar pelo WhatsApp o texto desejado.
        </p>
      </div>
    </section>
  )
}
