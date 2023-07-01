// app/layout.tsx
import "./globals.css"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { storeConfig } from "../../store.config"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: storeConfig.storeName,
  description: storeConfig.storeDescription,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
