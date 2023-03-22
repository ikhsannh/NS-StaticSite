"use client"
import Footer from '@/components/Footer'
import Navbar from '../components/Navbar'
import './globals.css'
import { motion } from 'framer-motion'

export const metadata = {
  title: 'Team RE',
  description: 'Team Renewable Energy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <motion.div 
          className='min-h-screen px-40 bg-darkGreen text-cream'
          initial="initial"
          animate="animate"  
          >    
         <nav> 
          <Navbar /> </nav>   
          {children}
         <footer> <Footer /> </footer>
       </motion.div>
      </body>
    </html>
  )
}
