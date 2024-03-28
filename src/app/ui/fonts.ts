import { Inter, Acme, } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

const acme_init = Acme({
  subsets: ['latin'],
  weight: ['400'],
});

export const acme = acme_init.className;