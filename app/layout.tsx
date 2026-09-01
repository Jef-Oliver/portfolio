import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';

import { CONTACT } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-jeferson-blond.vercel.app'),
  title: 'Jeferson Oliveira | Sistemas Sob Medida para seu Negócio',
  description:
    'Transformo seu negócio com sistemas profissionais: gestão imobiliária, controle de ponto, inventário e muito mais. Soluções sob medida, entregues com qualidade.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  keywords: [
    'Sistema de Gestão',
    'Sistema Personalizado',
    'Desenvolvimento de Software',
    'Sistema Imobiliário',
    'Controle de Ponto',
    'Python',
    'Django',
    'React',
    'Next.js',
    'PostgreSQL',
    'Desenvolvedor Full Stack',
    'Jeferson Oliveira',
  ],
  authors: [{ name: 'Jeferson Oliveira' }],
  creator: 'Jeferson Oliveira',
  openGraph: {
    title: 'Jeferson Oliveira | Sistemas Sob Medida',
    description: 'Seu negócio merece um sistema feito sob medida. Elimine planilhas, erros e retrabalho.',
    url: 'https://portfolio-jeferson-blond.vercel.app',
    siteName: 'Jeferson Oliveira Systems',
    locale: 'pt_BR',
    type: 'website',
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jeferson Oliveira',
  jobTitle: 'Full Stack Developer',
  email: CONTACT.email,
  url: CONTACT.github,
  sameAs: [CONTACT.github, CONTACT.linkedin],
  description: 'Desenvolvedor Full Stack especializado em sistemas sob medida para empresas.',
};

import { GameProvider } from '@/context/GameContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      style={{ backgroundColor: '#000000', color: '#ffffff' }}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VZQ432423T"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VZQ432423T', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-black text-white antialiased`}
        style={{ backgroundColor: '#000000', color: '#ffffff', margin: 0 }}
      >
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}