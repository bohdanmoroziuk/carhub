import './globals.css'

import { Header } from '@/components'

export const metadata = {
  title: 'CarHub',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
      </body>
    </html>
  )
}
