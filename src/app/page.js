"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { checkout } from "./checkout";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to my website</h1>
      <button
        onClick={() => {
          checkout({
            lineItems: [
              { price: "price_1OuyJQRwyQxbNwDJZM2R26fK", quantity: 1 },
            ],
          });
        }}
        className={styles.buyBtn}
      >
        Buy Now
      </button>
    </main>
  );
}
