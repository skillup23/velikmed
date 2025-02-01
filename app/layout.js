import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const Manrope = localFont({
  src: [
    {
      path: "./fonts/manrope/manrope-bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/manrope/manrope-semibold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./fonts/manrope/manrope-medium.woff2",
      weight: "500",
      style: "medium",
    },
  ],
});

const MAK = localFont({
  src: [
    {
      path: "./fonts/mak/MAK.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/mak/MAK-bold.woff",
      weight: "600",
      style: "bold",
    },
  ],
});

export const metadata = {
  title: "Клиника Великмед",
  description: "Официальный сайт клиники Великмед",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ru"
      className={`${roboto.variable} ${MAK.className} ${Manrope.className} font-sans`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
