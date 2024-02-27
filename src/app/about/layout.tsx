import { Russo_One } from 'next/font/google';
import styles from './layout.module.css';

export const russo_one = Russo_One({
  weight: '400',
  subsets: ['latin'],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.main}>
      <h1 className={russo_one.className}>About us</h1>
      {children}
    </main>
  );
}
