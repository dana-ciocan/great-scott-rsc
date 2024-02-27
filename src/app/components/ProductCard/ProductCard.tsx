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
      <div className={styles.productContainer}>
        <h2 className={`${russo_one.className} ${styles.productTitle}`}>
          {productTitle}
        </h2>
        <p>{productDescription}</p>
      </div>
      <Link href={`/product/${productId}`} className={styles.button}>
        Add to basket
      </Link>
    </div>
  );
}
