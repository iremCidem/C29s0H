import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';

const manrope = Manrope({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'ÇözümTR project',
  description: 'case project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={manrope.className}>
        <Providers> {children} </Providers>
      </body>
    </html>
  );
}
