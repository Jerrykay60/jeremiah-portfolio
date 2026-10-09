import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jeremiahakindureni.dev'),
  title: 'Jeremiah Akindureni | Full-Stack Developer & Aspiring ML Engineer',
  description:
    'Full-stack developer turning real-world problems into shipped products. Based in Lagos, Nigeria. Designer and engineer behind PropNest, Rent Tracker, SmartBite, and CampusFund.',
  keywords: [
    'Jeremiah Akindureni',
    'Full-Stack Developer',
    'Machine Learning Engineer',
    'Lagos Nigeria Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'PropNest',
    'Rent Tracker',
    'Software Engineer Nigeria',
  ],
  authors: [
    { name: 'Jeremiah Akindureni', url: 'https://github.com/Jerrykay60' },
  ],
  creator: 'Jeremiah Akindureni',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jeremiahakindureni.dev',
    title: 'Jeremiah Akindureni | Full-Stack Developer & Aspiring ML Engineer',
    description:
      'Full-stack developer turning real-world problems into shipped products. Designing, building, and deploying real-world solutions solo.',
    siteName: 'Jeremiah Akindureni Portfolio',
    images: [
      {
        url: '/images/jeremiah-desk.jpg',
        width: 1200,
        height: 630,
        alt: 'Jeremiah Akindureni - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeremiah Akindureni | Full-Stack Developer',
    description:
      'Full-stack developer turning real-world problems into shipped products.',
    images: ['/images/jeremiah-desk.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-brand-blue selection:text-white transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
