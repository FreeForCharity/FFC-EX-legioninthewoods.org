import type { Metadata } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import CookieConsent from './../components/cookie-consent'
import GoogleTagManager, { GoogleTagManagerNoScript } from './../components/google-tag-manager'
import {
  openSans,
  lato,
  raleway,
  faustina,
  cantataOne,
  faunaOne,
  montserrat,
  cinzel,
} from '@/lib/fonts'

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://legioninthewoods.org'),
  title: {
    default: 'Legion in the Woods | Restaurant & Bar | State College, PA',
    template: '%s | Legion in the Woods',
  },
  description:
    'Legion in the Woods - Restaurant, Bar & Social Club in State College, PA. Great food, drinks, games, darts, and community. Part of Nittany Post 245.',
  keywords: [
    'Legion in the Woods',
    'restaurant',
    'bar',
    'State College',
    'Pennsylvania',
    'social club',
    'darts',
    'games',
    'dining',
    'Centre County',
    'fish fry',
    'trivia night',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://legioninthewoods.org/',
    siteName: 'Legion in the Woods',
    title: 'Legion in the Woods | Restaurant & Bar | State College, PA',
    description:
      'Great food, drinks, games, and community in State College, PA. Part of Nittany Post 245.',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Legion in the Woods',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ALPost245',
    title: 'Legion in the Woods | Restaurant & Bar | State College, PA',
    description:
      'Great food, drinks, games, and community in State College, PA. Part of Nittany Post 245.',
    images: ['/web-app-manifest-512x512.png'],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: '32x32' },
      { url: `${basePath}/icon.png`, type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: `${basePath}/apple-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preload critical LCP image */}
        <link
          rel="preload"
          as="image"
          href={`${basePath}/Images/figma-hero-img.webp`}
          fetchPriority="high"
        />

        <GoogleTagManager />
      </head>
      <body
        className={[
          'antialiased',
          openSans.variable,
          lato.variable,
          raleway.variable,
          faustina.variable,
          cantataOne.variable,
          faunaOne.variable,
          montserrat.variable,
          cinzel.variable,
        ].join(' ')}
        suppressHydrationWarning={true}
      >
        <GoogleTagManagerNoScript />
        {/* <PopupProvider> */}
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        {/* <PopupsRootClient /> */}
        {/* </PopupProvider> */}
      </body>
    </html>
  )
}
