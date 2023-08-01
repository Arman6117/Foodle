import './globals.css'

export const metadata = {
  title: 'Foodle',
  description: 'Order and Enjoy your favorite fast food',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body >{children}</body>
    </html>
  )
}
