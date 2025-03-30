import React from 'react'
import './styles.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  description: 'Trae Zeeofor manipulated Payload Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="antialiased flex flex-col justify-center items-center min-h-screen w-full font-trebuchetMs bg-[#E8F1FF]">
        <Header />
        <main className="flex-grow h-full w-full max-w-[1440px] bg-white text-black">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
