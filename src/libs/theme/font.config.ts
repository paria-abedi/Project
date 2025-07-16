import localFont from 'next/font/local';


export const sans = localFont({
  src: [
    {
      path: '../../../public/fonts/Inter/Inter-Thin.woff2',
      weight: '400',
    },
    {
      path: '../../../public/fonts/Inter/Inter-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../../public/fonts/Inter/Inter-Bold.woff2',
      weight: '600',
    },
    {
      path: '../../../public/fonts/Inter/Inter-SemiBold.woff2',
      weight: '700',
    },
    {
      path: '../../../public/fonts/Inter/Inter-ExtraBold.woff2',
      weight: '800',
    },
  ],
  variable: '--sans-font',
});


