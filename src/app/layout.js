import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from './ui/Navigation';
import Footer from './ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tech Website - Next.js + Tailwind CSS',
  description: 'A simple tech website built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='https://avatars.githubusercontent.com/u/91911634?v=4'
        />
      </head>
      <body className={inter.className}>
        <Navigation />

        {children}

        <Footer />
      </body>
    </html>
  );
}
