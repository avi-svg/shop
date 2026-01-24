'use client'

import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const handleCartClick = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login?redirect=/card");
    } else {
      router.push("/card");
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <nav className={styles.link}>
          <button onClick={handleCartClick}>My Cart</button>
        </nav>
      </div>
      <div className={styles.right}>
        <Link href={"/products"} className={styles.link}>
          Products
        </Link>
        <Link href={"/reviews"} className={styles.link}>
          Reviews
        </Link>
      </div>
    </nav>
  );
}
