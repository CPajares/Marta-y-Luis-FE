import Link from "next/link";
import { useEffect } from "react";
import useUser from "../../flux/hooks/useUser";
import styles from "./Menu.module.css";

type Props = {
  setIsMenuClosed: Function;
};

const Menu = ({ setIsMenuClosed }: Props) => {
  const onClickLi = (event: any) => {
    event.preventDefault();
    setIsMenuClosed(true);
  };
  const { isLogged, setIsLogged } = useUser();

  useEffect(() => {
    const token = localStorage.getItem("tokenMartayLuis");

    if (token) {
      setIsLogged(true);
    }
  }, [setIsLogged]);

  return (
    <div className={styles.menu}>
      <ul>
        {isLogged ? (
          <>
            <li className={styles.menu__list} onClick={onClickLi}>
              <Link href="/">
                <a>MARTA Y LUIS</a>
              </Link>
            </li>
            <li className={styles.menu__list} onClick={onClickLi}>
              <Link href="/nuestra-historia">
                <a>NUESTRA HISTORIA</a>
              </Link>
            </li>
            <li className={styles.menu__list} onClick={onClickLi}>
              <Link href="/lista-de-bodas">
                <a>LISTA DE BODAS</a>
              </Link>
            </li>
            <li className={styles.menu__list} onClick={onClickLi}>
              <Link href="/libro-de-visitas">
                <a>LIBRO DE VISITAS</a>
              </Link>
            </li>
            <li className={styles.menu__list} onClick={onClickLi}>
              <Link href="/fotos">
                <a>FOTOS</a>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li onClick={onClickLi}>
              <Link href="/">
                <a className={styles.menu__list}>MARTA Y LUIS</a>
              </Link>
            </li>
            <li onClick={onClickLi}>
              <Link href="/nuestra-historia">
                <a className={styles.menu__list}>NUESTRA HISTORIA</a>
              </Link>
            </li>
            <li onClick={onClickLi}>
              <Link href="/login">
                <a className={styles.menu__list}>LOG-IN</a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
export default Menu;
