import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('not-found');
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-2xl">{t('heading')}</h1>
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
