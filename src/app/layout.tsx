import type { Metadata, Viewport } from "next"
import { Lato } from "next/font/google"
import "./globals.css"
import * as React from "react"
import Script from 'next/script'
import Snow from "@/components/Snow"

const lato = Lato({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  variable: '--font-lato',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://razorheads.se'),
  title: "Razorheads - TIK POWER | Official Band Site",
  description: "Home of Razorheads, creators of TIK POWER - the legendary song celebrating Timrå IK's qualification for Elitserien in 2000. Rock meets hockey in this historic tribute to TIK's achievement.",
  keywords: [
    "razorheads",
    "TIK POWER",
    "Timrå IK",
    "hockey",
    "elitserien",
    "2000",
    "band",
    "music",
  ],
  icons: {
    icon: [
      { url: "/razorheads-favicon.png" },
      { url: "/razorheads-favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/razorheads-favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/razorheads-favicon.png" },
    ],
  },
  openGraph: {
    title: "Razorheads - TIK POWER | Official Band Site",
    description: "Creators of TIK POWER - the legendary song celebrating Timrå IK's qualification for Elitserien in 2000.",
    type: "website",
    locale: "sv_SE",
    url: "https://razorheads.se",
    siteName: "Razorheads",
    images: [
      {
        url: "https://res.cloudinary.com/dj3cyyuz7/image/upload/v1734685679/TIK_POWER_album_cover_znk9eh.jpg",
        width: 1200,
        height: 1200,
        alt: "TIK POWER Album Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Razorheads - TIK POWER | Official Band Site",
    description: "Creators of TIK POWER - the legendary song celebrating Timrå IK's qualification for Elitserien in 2000.",
    images: ["https://res.cloudinary.com/dj3cyyuz7/image/upload/v1734685679/TIK_POWER_album_cover_znk9eh.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body 
        className={`${lato.className} ${lato.variable} antialiased`} 
        style={{ 
          margin: 0, 
          padding: 0, 
          backgroundColor: "black",
          textRendering: 'optimizeLegibility',
        }}
      >
        <Snow />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9F1XF0ZF0F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9F1XF0ZF0F', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  )
}
