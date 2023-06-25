import '@/assets/styles/globals.css';
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { StoreProvider } from '@/store/StoreProvider';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const SFProText = localFont({
  src: [
    {
      path: '../assets/fonts/SFProText-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-SFProText',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${roboto.variable} ${SFProText.variable}`}>
      <body>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
          <div className="portals"></div>
        </StoreProvider>
      </body>
    </html>
  );
}
