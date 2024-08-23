import localFont from "next/font/local";

const belfast = localFont({
  src: [
    {
      path: '../../public/assets/fonts/belfast_grotesk_extra_bold-webfont.woff2',
      weight: '400',
    },
  ],
  variable: '--font-mono',
});

const generalsans = localFont({
  src: [
    {
      path: '../../public/assets/fonts/generalsans-medium-webfont.woff2',
      weight: '400',
    },
    {
      path: '../../public/assets/fonts/generalsans-semibold-webfont.woff2',
      weight: '500',
    },
  ],
  variable: '--font-sans',
});

export { belfast, generalsans };
