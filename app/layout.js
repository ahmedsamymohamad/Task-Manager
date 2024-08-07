import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '@/SessionProvider'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Track Task',
  description: 'Sign in to create new task',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider>
        <Navbar />
      {children}
      </Provider>               
      </body>
    </html>
  )
}
