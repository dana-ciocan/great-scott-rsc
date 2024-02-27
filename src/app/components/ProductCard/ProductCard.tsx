import Link from 'next/link';
import { Russo_One } from 'next/font/google';
import styles from './ProductCard.module.css';

export const russo_one = Russo_One({
  weight: '400',
  subsets: ['latin'],
});
interface ProductProps {
  productTitle: string;
  productDescription: string;
  productId: number;
}

export default function ProductCard({
  productTitle,
  productDescription,
  productId,
}: ProductProps) {
  return (
    <div className={styles.productCard}>
      <h2 className={russo_one.className}>{productTitle}</h2>
      <p>{productDescription}</p>
      <Link href={`/product/${productId}`}>More info</Link>
    </div>
  );
}
