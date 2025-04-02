import React from 'react'
import './styles.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BprogressProvider from '@/lib/BprogressProvider'

export const metadata = {
  description: 'Created by Trae Zeeofor',
  title: 'Payload Headless CMS ToDo',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="antialiased flex flex-col justify-center items-center min-h-screen w-full font-trebuchetMs bg-[#E8F1FF]">
        <BprogressProvider>
          <Header />
          <main className="flex-grow h-full w-full max-w-[1440px] bg-white text-black">
            {children}
          </main>
          <Footer />
        </BprogressProvider>
      </body>
    </html>
  )
}
