import Navbar from './containers/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LumosSearch',
  description: 'Lumos Search a Next-Gen Search Engine built in NextJs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={''}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
