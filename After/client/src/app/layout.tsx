import Link from 'next/link'
import React from 'react'
import './styles.css'
import TopNav from './components/TopNav'

export default function RootLayout({
    children, }: { children: React.ReactNode }) {
  return (
    <html>
        <body>
            <TopNav/>
            <div className="container">
                {children}
            </div>
        </body>
    </html>
  )
}
