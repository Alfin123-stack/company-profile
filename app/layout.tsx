import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'RW Connect – Platform Informasi Lingkungan',
  description: 'Solusi digital untuk informasi lingkungan yang terorganisir, transparan, dan mudah diakses oleh seluruh warga.',
  keywords: ['informasi lingkungan', 'pengumuman warga', 'RW', 'komunitas'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
