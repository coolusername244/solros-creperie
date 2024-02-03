import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import '@/globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { MetaParams } from '@/_types/types';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params: { locale } }: MetaParams) {
  const t = await getTranslations({ locale, namespace: 'meta' });

  const metadata: Metadata = {
    title: t('title'),
    description: t('description'),
  };

  return metadata;
}

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
