import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { CONTACT } from '@/lib/constants';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-jeferson-blond.vercel.app'),
  title: 'Jeferson Olivera | Backend Developer',
  description:
    'Backend Developer especializado em arquitetura, performance e modernização de sistemas corporativos. Python, Java, PostgreSQL e Google Cloud Platform.',
  keywords: [
    'Backend Developer',
    'Arquitetura de Software',
    'Python',
    'Django',
    'FastAPI',
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'Redis',
    'Docker',
    'Google Cloud Platform',
    'APIs REST',
    'Microserviços',
    'Otimização de Performance',
  ],
  authors: [{ name: 'Jeferson Olivera' }],
  creator: 'Jeferson Olivera',
  openGraph: {
    title: 'Jeferson Olivera | Backend Developer',
    description:
      'Arquitetura robusta, performance otimizada e sistemas escaláveis.',
    url: 'https://portfolio-jeferson-blond.vercel.app',
    siteName: 'Jeferson Olivera Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jeferson Olivera - Backend Developer',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeferson Olivera | Backend Developer',
    description:
      'Arquitetura robusta, performance otimizada e sistemas escaláveis.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jeferson Olivera',
  jobTitle: 'Backend Developer',
  email: CONTACT.email,
  url: CONTACT.github,
  sameAs: [CONTACT.github, CONTACT.linkedin],
  knowsAbout: [
    'Python',
    'Django',
    'FastAPI',
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'Redis',
    'Docker',
    'Google Cloud Platform',
  ],
  description:
    'Backend Developer especializado em arquitetura, performance e modernização de sistemas corporativos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}