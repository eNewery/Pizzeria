import { MiContextoProvider } from './components/CartContext'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pizzeria Don Hornero',
  description: 'Pizzas, Empanadas, Helados, Bebidas, Comida Rápida',
}

export default function RootLayout({ children }) {
  return (
    <MiContextoProvider>

    <html lang="en">
      
      <body className="container">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
    </MiContextoProvider>
  )
}
