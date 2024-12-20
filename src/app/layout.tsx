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
  openGraph: {
    title: "Razorheads - TIK POWER | Official Band Site",
    description:
      "Creators of TIK POWER - the legendary song celebrating Timrå IK's qualification for Elitserien in 2000.",
    type: "website",
    locale: "sv_SE",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className} style={{ margin: 0, padding: 0, backgroundColor: "black" }}>
        {children}
      </body>
    </html>
  )
}
