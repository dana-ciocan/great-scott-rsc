import './globals.css';
import Menu from './components/Menu/Menu';
import { Russo_One, Inter } from 'next/font/google';

export const russo_one = Russo_One({
  weight: '400',
  subsets: ['latin'],
});
const inter = Inter({ subsets: ['latin'] });

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
    <html lang='en' className={inter.className}>
      <body>
        <Menu />
        <div className='page-container'>
          <h1 className={russo_one.className}>Time travel R us</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
