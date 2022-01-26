import axios from "axios";
import Link from "next/link";
import styles from "../../styles/ListaDeBodasDetalle.module.css";

/* eslint-disable @next/next/no-img-element */
const PresentPage = ({ presentInfo }: any) =>
  presentInfo ? (
    <>
      <div className={styles.present}>
        <div className={styles.present__imageContainer}>
          <img
            className={styles.present__image}
            src={presentInfo.img}
            alt="Info-regalo"
          />
        </div>
        <div className={styles.present__description}>
          <h3>{presentInfo.name}</h3>
          <p>{presentInfo.description1}</p>
          <p>{presentInfo.description2}</p>
          <div className={styles.present__buttons}>
            <Link href={presentInfo.url} passHref>
              <p className={styles.present__where}>¿Donde puedo comprarlo?</p>
            </Link>
            <Link href="/lista-de-bodas" passHref>
              <button>Volver</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  ) : (
    <h3>Loading</h3>
  );

export const getStaticPaths = async () => {
  const response = await axios.get(
    "https://proyectofinal-martayluis.herokuapp.com/martayluis/presents"
  );
  const presents = response.data;
  const paths = presents.map((present: any) => ({
    params: { id: `${present.id}` },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params: { id } }: any) => {
  const response = await axios.get(
    `https://proyectofinal-martayluis.herokuapp.com/martayluis/infopresent/${id}`
  );
  const present = response.data;

  return {
    props: {
      presentInfo: present,
    },
  };
};

export default PresentPage;
