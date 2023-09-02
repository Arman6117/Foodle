import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import {Baloo_2} from 'next/font/google'
export const metadata = {
  title: 'Foodle',
  description: 'Order and Enjoy your favorite fast food',
}
const baloo = Baloo_2({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en" className='scrollbar-thin scrollbar-thumb-[#ea5858]'>

    
      <body className={baloo.className}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
