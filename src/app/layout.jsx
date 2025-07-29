import './globals.css'

export const metadata = {
  title: 'Tai Ji Men Qigong',
  description: 'Tai Ji Men Qigong Website',
  generator: 'Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body suppressHydrationWarning={true} className="h-full">
        {children}
      </body>
    </html>
  )
} 