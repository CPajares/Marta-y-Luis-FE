import axios from "axios";
import jwtDecode from "jwt-decode";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Filter from "../../component/Filter/Filter";
import Layout from "../../component/Layout/Layout";
import PresentCard from "../../component/PresentCard/PresentCard";
import useUser from "../../flux/hooks/useUser";
import styles from "../../styles/ListaDeBodas.module.css";

const ListaDeBodas: NextPage = ({ presents }: any) => {
  const { getUser, userReducer, data } = useUser();

  const [isSSG, setIsSSG] = useState(true);

  useEffect(() => {
    if (data.length) {
      setIsSSG(false);
    }
  }, [data]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tokenStorage: any = localStorage.getItem("tokenMartayLuis");
      const { token } = JSON.parse(tokenStorage);
      const tokenD: any = jwtDecode(token);
      getUser(tokenD.id);
    }
  }, [getUser]);

  return (
    <Layout title={"Lista de bodas"}>
      <main className={`${styles.main} main-margin-bottom`}>
        <Filter></Filter>
        <div className={styles.presentContainer}>
          {isSSG
            ? presents.map((present: any) => (
                <PresentCard
                  user={userReducer}
                  key={present.id}
                  present={present}
                ></PresentCard>
              ))
            : data.map((present: any) => (
                <PresentCard
                  user={userReducer}
                  key={present.id}
                  present={present}
                ></PresentCard>
              ))}
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_HEROKU;
  const response = await axios.get(`${apiUrl}martayluis/presents`);
  const presentsList = response.data;
  return {
    props: {
      presents: presentsList,
    },
    revalidate: 10,
  };
};

export default ListaDeBodas;
