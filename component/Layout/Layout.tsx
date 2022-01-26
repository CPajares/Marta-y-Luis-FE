import { ReactNode, useState } from "react";
import Head from "next/head";
import NavBar from "../NavBar/NavBar";
import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Marta y Luis" }: Props) => {
  const [isMenuClosed, setIsMenuClosed] = useState(true);

  return (
    <div className={styles.container}>
      {isMenuClosed ? "" : <Menu setIsMenuClosed={setIsMenuClosed}></Menu>}
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Carlos Pajares" />
        <meta
          name="description"
          content="Boda de Marta y Luis. Podéis encontrar un espacio dedicado a la pareja donde reservar el regalo, dejarles un comentario o una foto para el recuerdo"
        ></meta>
        <link rel="icon" href="/icons/anillos-icono.png" />
      </Head>
      <header className={styles.layout}>
        <NavBar title={title} setIsMenuClosed={setIsMenuClosed}></NavBar>
      </header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
