import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import Script from 'next/script'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Flor do Campo | Coroas de Flores em Manaus - Atendimento 24h',
  description:
    'Floricultura Flor do Campo em Manaus. Especialistas em coroas de flores com entrega rápida em toda Manaus. Atendimento 24 horas. Ligue agora!',
  keywords: 'coroas de flores, floricultura manaus, flores fúnebres, entrega rápida flores, arranjos florais manaus',
}

export const viewport: Viewport = {
  themeColor: '#2d5a3d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17812875276"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17812875276');
            `,
          }}
        />
      </head>
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased relative`}>
        {/* Background watermark */}
        <div
          className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="h-[500px] w-[500px] bg-contain bg-center bg-no-repeat opacity-15 mix-blend-multiply sm:h-[600px] sm:w-[600px] lg:h-[700px] lg:w-[700px]"
            style={{ 
              backgroundImage: "url('/images/simbolo-marca.jpg')",
              filter: 'invert(1) brightness(0.95) sepia(0.2) hue-rotate(70deg)'
            }}
          />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
