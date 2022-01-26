import jwtDecode from "jwt-decode";
import type { NextPage } from "next";
import { useEffect } from "react";
import Countdown from "../component/Countdown/Countdown";

import Layout from "../component/Layout/Layout";
import useUser from "../flux/hooks/useUser";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { getUser } = useUser();
  useEffect(() => {
    const tokenStorage: any = localStorage.getItem("tokenMartayLuis");
    if (tokenStorage) {
      const { token } = JSON.parse(tokenStorage);
      const tokenD: any = jwtDecode(token);
      getUser(tokenD.id);
    }
  }, [getUser]);

  return (
    <>
      <Layout title={"Marta y Luis"}>
        <main className={styles.main}>{/* <Countdown></Countdown> */}</main>
      </Layout>

      <Countdown></Countdown>
    </>
  );
};

export default Home;
