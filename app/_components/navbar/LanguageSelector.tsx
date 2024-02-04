'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { GB, SE, UA } from 'country-flag-icons/react/3x2';
import { locales } from '@/_types/types';

const LanguageSelector = () => {
  const [languagesShown, setLanguagesShown] = useState<boolean>(false);
  const languageSelectorRef = useRef<HTMLDivElement>(null);

  const userLocale = useLocale();

  const handleClickOutside = (e: MouseEvent) => {
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
      flag = <SE />;
      break;
    case 'en':
      flag = <GB />;
      break;
    case 'ua':
      flag = <UA />;
      break;
    default:
      flag = <SE />;
  }

  return (
    <div
      ref={languageSelectorRef}
      className="relative inline-block text-left mr-6"
    >
      <div>
        <button
          type="button"
          className="inline-flex items-center px-2 rounded-md"
          onClick={() => {
            setLanguagesShown(!languagesShown);
          }}
        >
          {flag}
          <svg
            className="-mr-1 ml-1 h-10 w-10 text-secondary"
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
        } right-0 z-10 mt-2 w-auto p-1 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
      >
        <div className="py-1" role="none">
          {locales.map((l, i) => {
            if (l.locale !== userLocale) {
              return (
                <a
                  key={i}
                  href={`/${l.locale}`}
                  className="flex items-center text-gray-700 px-4 py-2 text-sm"
                >
                  <span className="mr-2">{l.flag}</span> {l.language}
                </a>
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
