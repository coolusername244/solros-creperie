'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { GB, SE, UA } from 'country-flag-icons/react/3x2';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/_types/types';

const LanguageSelector = () => {
  const [languagesShown, setLanguagesShown] = useState<boolean>(false);
  const languageSelectorRef = useRef<HTMLDivElement>(null);

  const userLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const updateLanguage = (locale: string): void => {
    const newPath = pathname.replace(pathname.split('/')[1], locale);
    router.push(newPath);
  };

  const handleClickOutside = (e: MouseEvent): void => {
    if (
      languageSelectorRef.current &&
      !languageSelectorRef.current.contains(e.target as Node)
    ) {
      setLanguagesShown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const locales: locales[] = [
    {
      locale: 'sv',
      language: 'Svenska',
      flag: <SE height={15} />,
    },
    {
      locale: 'en',
      language: 'English',
      flag: <GB height={15} />,
    },
    {
      locale: 'ua',
      language: 'Українська',
      flag: <UA height={15} />,
    },
  ];

  let flag: JSX.Element;

  switch (userLocale) {
    case 'sv':
      flag = <SE height={15} />;
      break;
    case 'en':
      flag = <GB height={15} />;
      break;
    case 'ua':
      flag = <UA height={15} />;
      break;
    default:
      flag = <SE height={15} />;
  }

  return (
    <div ref={languageSelectorRef} className="relative inline-block  text-left">
      <div className="flex">
        <button
          type="button"
          className="inline-flex items-center rounded-md"
          onClick={() => {
            setLanguagesShown(!languagesShown);
          }}
        >
          {flag}
          <svg
            className="-mr-1 h-5 w-5 text-secondary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          languagesShown ? 'absolute' : 'hidden'
        } right-0 z-10 mt-2 w-auto  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
      >
        <div className="py-1" role="none">
          {locales.map((l, i) => {
            if (l.locale !== userLocale) {
              return (
                <button
                  key={i}
                  onClick={() => {
                    updateLanguage(l.locale);
                  }}
                  className="flex w-full items-center text-gray-700 px-4 py-2 text-sm hover:bg-tertiary"
                >
                  <span className="mr-2">{l.flag}</span> {l.language}
                </button>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
