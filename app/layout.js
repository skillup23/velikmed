import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import Header from './components/Header';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const randomGrotesque = localFont({
  src: [
    {
      path: './fonts/random_grotesque/RG-SpaciousBook.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/random_grotesque/RG-StandardBold.ttf',
      weight: '600',
      style: 'bold',
    },
  ],
});

const MAK = localFont({
  src: [
    {
      path: './fonts/mak/MAK.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/mak/MAK-bold.woff',
      weight: '600',
      style: 'bold',
    },
  ],
});

export const metadata = {
  title: 'Клиника Великмед',
  description: 'Официальный сайт клиники Великмед',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ru"
      className={`${roboto.variable} ${randomGrotesque.className} ${MAK.className} font-sans`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
