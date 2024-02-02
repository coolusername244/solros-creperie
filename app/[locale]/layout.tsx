import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/globals.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Solros Crêperie',
  description: 'Generated by create next app',
};

type Props = {
  children: React.ReactNode;
  params: { locale: 'en' | 'sv' | 'uk' };
};

const RootLayout: React.FC<Props> = ({ children, params: { locale } }) => {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
