import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';
import Script from 'next/script';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const Manrope = localFont({
  src: [
    {
      path: './fonts/manrope/manrope-bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: './fonts/manrope/manrope-semibold.woff2',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './fonts/manrope/manrope-medium.woff2',
      weight: '500',
      style: 'medium',
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
  const yandexId = '105637836';

  return (
    <html
      lang="ru"
      className={`${roboto.variable} ${MAK.className} ${Manrope.className} font-sans`}
    >
      <head>
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=${yandexId}', 'ym');

              ym(${yandexId}, 'init', {
                ssr: true,
                webvisor: true,
                clickmap: true,
                ecommerce: "dataLayer",
                accurateTrackBounce: true,
                trackLinks: true
              });
            `,
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${yandexId}`}
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
