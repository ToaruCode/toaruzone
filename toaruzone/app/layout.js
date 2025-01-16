import { Geist, Geist_Mono } from 'next/font/google'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ClientClerkProvider from '@components/ClientClerkProvider'
import './globals.css'

export const metadata = {
  title: 'ToaruZone',
  description: 'A platform to find jobs and manage schedules.',
}

export default function RootLayout({ children }) {
  return (
    <ClientClerkProvider>
      <html lang="en">
        <body className="bg-gray-100 text-gray-900">
          <Header />
          <main className="p-6">{children}</main>
          <Footer />
        </body>
      </html>
    </ClientClerkProvider>
  )
}
