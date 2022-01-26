import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => (
  <footer className={styles.footer}>
    <Link href="https://www.linkedin.com/in/carlos-pajares-973434220/" passHref>
      <p className={`${styles.footer__paragraph} paj`}>By Carlos Pajares</p>
    </Link>
    <p className={styles.footer__paragraph}>Marta y Luis 2/2/2022</p>
  </footer>
);

export default Footer;
