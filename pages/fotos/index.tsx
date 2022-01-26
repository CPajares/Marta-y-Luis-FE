/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import jwtDecode from "jwt-decode";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../../component/Layout/Layout";
import PhotoCard from "../../component/PhotoCard/PhotoCard";
import PhotoForm from "../../component/PhotoForm/PhotoForm";
import usePhoto from "../../flux/hooks/usePhoto";
import useUser from "../../flux/hooks/useUser";
import styles from "../../styles/Fotos.module.css";

const Fotos: NextPage = ({ photosSSR }: any) => {
  const { getPhotos, photoState, photosState } = usePhoto();
  const { getUser } = useUser();

  const [isSSR, setIsSSR] = useState(true);

  console.log("FUERA", photoState.author);
  useEffect(() => {
    if (photoState.author !== undefined) {
      console.log("DENTRO");
      setIsSSR(false);
      getPhotos();
    }
  }, [getPhotos, photoState]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tokenStorage: any = localStorage.getItem("tokenMartayLuis");
      const { token } = JSON.parse(tokenStorage);
      const tokenD: any = jwtDecode(token);
      getUser(tokenD.id);
    }
  }, [getUser]);

  return (
    <Layout title={"Fotos"}>
      <main className={`${styles.main} main-margin-bottom`}>
        <div className={styles.containerForm}>
          <PhotoForm></PhotoForm>
          <img
            className={styles.sidePhoto}
            src="/images/rodillaCielo.webp"
            alt="Pedida Marta y Luis"
          />
        </div>
        <div className={styles.containerPhotos}>
          {isSSR ? (
            <PhotoCard photos={photosSSR}></PhotoCard>
          ) : (
            <PhotoCard photos={photosState}></PhotoCard>
          )}
        </div>
      </main>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_HEROKU;
  const response = await axios.get(`${apiUrl}martayluis/photos`);
  const PhotosList = response.data;
  return {
    props: {
      photosSSR: PhotosList.reverse(),
    },
  };
};

export default Fotos;
