import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React 100 apps',
  description: 'This is react 100 apps.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <Header />
        <main className='p-8 flex justify-center overflow-y-hidden'>{children}</main>
      </body>
    </html>
  )
}
