import Link from 'next/link';
import styles from './Menu.module.css';
import { Roboto_Mono } from 'next/font/google';

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export default function Menu() {
  return (
    <nav className={`${styles.menu} ${roboto_mono.className}`}>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/about/contact'>Contact us</Link>
    </nav>
  );
}
