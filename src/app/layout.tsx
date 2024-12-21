import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "./globals.css"
import * as React from "react"

const lato = Lato({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Razorheads - TIK POWER | Official Band Site",
  description:
    "Home of Razorheads, creators of TIK POWER - the legendary song celebrating Timrå IK's qualification for Elitserien in 2000. Rock meets hockey in this historic tribute to TIK's achievement.",
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
  metadataBase: new URL('https://razorheads.se'),
  openGraph: {
    title: "Razorheads - TIK POWER | Official Band Site",
    description:
      "Creators of TIK POWER - the legendary song celebrating Timrå IK's qualification for Elitserien in 2000.",
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
    <html lang="sv">
      <body className={lato.className} style={{ margin: 0, padding: 0, backgroundColor: "black" }}>
        {children}
      </body>
    </html>
  )
}
