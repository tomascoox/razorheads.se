import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import * as React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Created with modern Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: 'black' }}>
        {children}
      </body>
    </html>
  )
} 