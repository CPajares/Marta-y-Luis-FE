import Image from "next/image";
import styles from "./NavBar.module.css";

type Props = {
  title?: string;
  onClick?: React.MouseEvent<HTMLElement>;
  setIsMenuClosed: Function;
};

const NavBar = ({ title, setIsMenuClosed }: Props) => {
  const click = () => {
    setIsMenuClosed(false);
  };

  return (
    <nav className={styles.navMobile}>
      <div onClick={click} className={styles.navMobile__burger}>
        <div className={styles.navMobile__lineBurger}></div>
        <div className={styles.navMobile__lineBurger}></div>
        <div className={styles.navMobile__lineBurger}></div>
      </div>
      <h2>{title}</h2>
      <Image
        alt="anillo-icono"
        src="/icons/anillo-nav.png"
        layout="fixed"
        width={50}
        height={50}
      />
    </nav>
  );
};

export default NavBar;
