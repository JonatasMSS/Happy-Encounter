import './globals.css'
import { Lobster } from 'next/font/google'
import { ReactNode } from 'react'
const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lobster',
})

export const metadata = {
  title: 'Happy Encounter',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${lobster.variable} flex min-h-screen flex-row font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
