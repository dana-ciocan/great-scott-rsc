import Link from 'next/link';

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
    <div>
      <h2>{productTitle}</h2>
      <p>{productDescription}</p>
      <Link href={`/product/${productId}`}>More info</Link>
    </div>
  );
}
