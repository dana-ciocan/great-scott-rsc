import ProductCard from '../components/Product/Product';
import styles from './page.module.css';

async function getData() {
  const res = await fetch('http://localhost:4000/products');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getData();
  return (
    <main className={styles.main}>
      {products.map((product: Product) => {
        return (
          <ProductCard
            productTitle={product.title}
            productDescription={product.description}
            key={product.id}
            productId={product.id}
          />
        );
      })}
    </main>
  );
}
