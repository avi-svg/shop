import styles from './Navbar.module.css'
import Link from "next/link";


export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <Link href={"/card"} className={styles.link}>My Card</Link>
            </div>
            <div className={styles.right}>
                <Link href={"/products"} className={styles.link}>Products</Link>
                <Link href={"/reviews"} className={styles.link}>Reviews</Link>
            </div>
        </nav>
    )
}