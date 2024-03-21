import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import '@/globals.css';
import { MetaParams } from '@/_types/types';
import Navbar from '@/_components/navbar/Navbar';
import Footer from '@/_components/footer/Footer';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

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
  params: { locale: 'sv' | 'en' | 'uk' };
};

const RootLayout: React.FC<Props> = ({ children, params: { locale } }) => {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
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
