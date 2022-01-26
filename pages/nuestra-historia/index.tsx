/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Layout from "../../component/Layout/Layout";
import styles from "../../styles/NuestraHistoria.module.css";

const NuestraHistoria: NextPage = () => (
  <Layout title={"Nuestra Historia"}>
    <main className={`${styles.main} main-margin-bottom`}>
      <div className={styles.container}>
        <div className={styles.couple}>
          <p className={styles.couple__name}>MARTA</p>
          <p>
            Marta se sentaba en las primeras mesas de clase junto a su amigo
            Mario, al que le contaba como le gustaba la sonrisa de aquel chico
            tímido y atractivo de la última fila que no le permitía concentrarse
            para los examenes.
          </p>
        </div>
        <img
          className={styles.photo}
          width={556}
          height={340}
          src="/images/lavanda.jpg"
          alt="amor entre marta y luis"
        />
        <div className={styles.couple}>
          <p>
            Luis se sentaba en la última fila en la universidad y se pasaba las
            clases enbobado mirando a Marta soñando con sus labios y sin
            atraverse a cruzar una palabra hasta que su amigo Mario se la
            presentó un día en la cafetería y saltaron chispas.
          </p>
          <p className={styles.couple__name}>LUIS</p>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.info__whenAndWhere}>
          <div>
            <div className={styles.info__where}>
              <p>DONDE:</p>
              <p>Capilla Tibidabo, Barcelona</p>
            </div>
          </div>
          <div>
            <p>CUANDO:</p>
            <p>2/2/2022</p>
          </div>
        </div>
        <iframe
          className={styles.info__map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1495.8934682686101!2d2.117682227886092!3d41.42214356244145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49789d9881bff%3A0x131436748ea64eee!2sTemplo%20del%20Sagrado%20Coraz%C3%B3n%20de%20Jes%C3%BAs%2C%20Ctra.%20de%20Vallvidrera%20al%20Tibidabo%2C%20111%2C%2008035%20Barcelona!5e0!3m2!1ses!2ses!4v1638573101348!5m2!1ses!2ses"
          width="370"
          height="200"
          loading="lazy"
        ></iframe>
      </div>
    </main>
  </Layout>
);

export default NuestraHistoria;
