import { Inter } from 'next/font/google'
import SessionWrapper from '@/hocs/auth-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Authentication with Next Auth v4',
  description: 'Learn Next Auth with qthwngg_',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className={inter.className}>{children}</body>
      </SessionWrapper>
    </html>
  )
}
