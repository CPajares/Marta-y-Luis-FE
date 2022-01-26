import type { NextPage } from "next";
import Layout from "../../component/Layout/Layout";
import LogginCard from "../../component/Loggin/LogginCard";
import styles from "../../styles/Login.module.css";

const Loggin: NextPage = () => {
  return (
    <Layout title={"Log-in"}>
      <main className={styles.main}>
        <div className={styles.main__container}>
          <LogginCard></LogginCard>
        </div>
      </main>
    </Layout>
  );
};

export default Loggin;
