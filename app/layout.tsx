import type { Metadata } from 'next'
import { Manrope, Poppins, Roboto, Playfair_Display } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-manrope',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'SaleDeed.com - Your Property Document Partner',
  description: 'Verify - Draft - Register. All Property Documents. Hassle Free. Your trusted platform to draft, verify, and register any property document — 100% legally verified.',
  keywords: 'property documentation, sale deed, gift deed, property registration, real estate services, legal compliance',
  icons: {
    icon: '/WhatsApp_Image_2025-10-12_at_14.25.14_6e8e2615-removebg-preview.png',
    shortcut: '/WhatsApp_Image_2025-10-12_at_14.25.14_6e8e2615-removebg-preview.png',
    apple: '/WhatsApp_Image_2025-10-12_at_14.25.14_6e8e2615-removebg-preview.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`light ${manrope.variable} ${poppins.variable} ${roboto.variable} ${playfair.variable}`}>
      <head>
        <Script src="https://unpkg.com/lucide@latest" strategy="beforeInteractive" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-background-light dark:bg-background-dark font-body text-text-light dark:text-text-dark">
        {children}
        <Script id="lucide-init" strategy="afterInteractive">
          {`lucide.createIcons();`}
        </Script>
      </body>
    </html>
  )
}