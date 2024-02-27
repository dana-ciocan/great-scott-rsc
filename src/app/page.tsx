import ProductCard from './components/ProductCard/ProductCard';
import { getData } from './utils';
import styles from './page.module.css';

export default async function ProductsPage() {
  const products = await getData('http://localhost:4000/products');
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
