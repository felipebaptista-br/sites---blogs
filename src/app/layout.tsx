import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sites & Blogs Corporativos | Presença Digital Estratégica",
  description:
    "Descubra como sites e blogs trabalham juntos para criar uma presença digital completa, engajar seu público e construir autoridade no mercado.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="sites-blogs-theme">
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
