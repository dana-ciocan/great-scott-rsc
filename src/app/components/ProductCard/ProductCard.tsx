'use client';

import Link from 'next/link';
import { useState } from 'react';
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
  const [productCounter, setProductCounter] = useState(0);

  const incrementCounter = (e: MouseEvent) => {
    e.preventDefault();
    setProductCounter(productCounter + 1);
  };
  return (
    <div className={styles.productCard}>
      <div className={styles.productContainer}>
        <h2 className={`${russo_one.className} ${styles.productTitle}`}>
          {productTitle}
        </h2>
        <p>{productDescription}</p>
      </div>
      <Link
        href={`/product/${productId}`}
        className={styles.button}
        onClick={(e) => incrementCounter(e)}
      >
        {productCounter === 0 ? 'Add to basket' : `${productCounter} in basket`}
      </Link>
    </div>
  );
}
