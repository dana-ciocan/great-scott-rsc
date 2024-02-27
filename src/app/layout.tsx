import './globals.css';
import Menu from './components/Menu/Menu';
import { Russo_One } from 'next/font/google';

export const russo_one = Russo_One({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Time travel R us',
  description: 'We will get you when you want to go',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Menu />
        <h1 className={russo_one.className}>Time travel R us</h1>
        {children}
      </body>
    </html>
  );
}
