import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['sv', 'en', 'ua'],

  // Used when no locale matches
  defaultLocale: 'sv',

  // Hide default locale prefix in the URL (/sv)
  localePrefix: 'as-needed',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(sv|en|ua)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
