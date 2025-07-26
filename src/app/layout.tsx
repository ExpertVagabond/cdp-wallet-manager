import { FaGithub, FaDiscord, FaLightbulb } from 'react-icons/fa'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import "./globals.css";
import './tailwind.css'
import { Providers } from "./providers";
import '@coinbase/onchainkit/styles.css';
import { Header } from './components/Header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'ZetaChain Universal App',
  description: 'Build, deploy, and interact with universal applications across all blockchains using ZetaChain.',
  openGraph: {
    title: 'ZetaChain Universal App',
    description: 'Build, deploy, and interact with universal applications across all blockchains using ZetaChain.',
    url: 'https://zetachain-universal-app.vercel.app/',
    siteName: 'ZetaChain Universal App',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZetaChain Universal App',
    description: 'Build, deploy, and interact with universal applications across all blockchains using ZetaChain.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white`}>
        <Providers>
          <div className="min-h-screen">
            <Header />
            <main>
              {children}
            </main>
            <footer className="py-10 text-center text-gray-400 bg-black/20 backdrop-blur-xl mt-20 border-t border-white/10">
              <p>&copy; 2025 ZetaChain. All rights reserved.</p>
              <p>
                Built with ZetaChain Universal Apps.{' '}
                <a 
                  href="https://docs.zetachain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Learn More
                </a>
              </p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
