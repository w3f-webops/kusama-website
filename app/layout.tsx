import Script from 'next/script'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kusama Network',
  description: 'Kusama Network',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script src="https://apisa.web3.foundation/latest.js"  />
    </html>
  )
}
