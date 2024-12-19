import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import * as React from "react"

const inter = Inter({ subsets: ["latin"] })

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
      <body style={{ margin: 0, padding: 0, backgroundColor: "black" }}>
        {children}
      </body>
    </html>
  )
}
