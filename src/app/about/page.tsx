import styles from './page.module.css';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <p>
        We sell flux capacitors and all kinds of other gadgets and gizmos
        specifically designed for building reliable time machines.
      </p>
      <p>
        <em>You can trust us to get you when you are going!</em>
      </p>
    </main>
  );
}
