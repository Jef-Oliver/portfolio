import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Jeferson Oliver | Backend Developer',
  description: 'Backend Developer apaixonado por resolver problemas reais com código. Especializado em Python, Django, Flask, Java e Spring Boot.',
  keywords: ['Backend Developer', 'Python', 'Django', 'Flask', 'Java', 'Spring Boot', 'PostgreSQL', 'API REST'],
  authors: [{ name: 'Jeferson Oliver' }],
  creator: 'Jeferson Oliver',
  openGraph: {
    title: 'Jeferson Oliver | Backend Developer',
    description: 'Backend Developer apaixonado por resolver problemas reais com código.',
    url: 'https://portfolio-jeferson-blond.vercel.app',
    siteName: 'Jeferson Oliver Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jeferson Oliver - Backend Developer',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeferson Oliver | Backend Developer',
    description: 'Backend Developer apaixonado por resolver problemas reais com código.',
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
  name: 'Jeferson Oliver',
  jobTitle: 'Backend Developer',
  email: 'jeferson.greenish@gmail.com',
  url: 'https://github.com/Jef-Oliver',
  sameAs: ['https://github.com/Jef-Oliver'],
  knowsAbout: ['Python', 'Django', 'Flask', 'FastAPI', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
  description: 'Backend Developer apaixonado por resolver problemas reais com código.',
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