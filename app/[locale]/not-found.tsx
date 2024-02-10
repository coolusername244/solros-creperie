import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import SunFlower from '@/_assets/site-icons/logo-no-background-no-text.png';

export default function NotFound() {
  const t = useTranslations('not-found');
  return (
    <main className="screen-content flex flex-col justify-center items-center">
      <h1 className="text-2xl">{t('heading')}</h1>
      <Image
        src={SunFlower}
        alt="Sunflower"
        width={500}
        height={500}
        className="h-96 w-96 my-8"
      />
      <div>
        <Link href="/">
          <button className="text-xl border border-primary bg-primary font-medium p-3 rounded-xl text-white">
            {t('button')}
          </button>
        </Link>
      </div>
    </main>
  );
}
