import '@/assets/styles/globals.css';
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const SFProText = localFont({
  variable: '--font-SFProText',
  src: [
    {
      path: '../assets/fonts/SFProText-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${roboto.variable} ${SFProText.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
