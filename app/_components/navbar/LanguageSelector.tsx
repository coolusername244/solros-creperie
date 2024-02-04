'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { GB, SE, UA } from 'country-flag-icons/react/3x2';

const LanguageSelector = () => {
  const [languagesShown, setLanguagesShown] = useState<boolean>(false);
  const languageSelectorRef = useRef<HTMLDivElement>(null);

  const locale = useLocale();

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

  let flag: JSX.Element;

  switch (locale) {
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
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
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
          <a
            href="/"
            className="flex items-center text-gray-700 px-4 py-2 text-sm"
          >
            <span className="mr-2">
              <SE height={15} />
            </span>{' '}
            Swedish
          </a>
          <a
            href="/"
            className="flex items-center text-gray-700 px-4 py-2 text-sm"
          >
            <span className="mr-2">
              <UA height={15} />
            </span>{' '}
            Ukrainian
          </a>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
