import styles from "./PresentCard.module.css";
import Link from "next/link";
import usePresent from "../../flux/hooks/usePresent";

const PresentCard = ({ present, user }: any) => {
  const { bookPresentForUser, unBookPresent, unBookPresentForUser } =
    usePresent();

  const clickBook = async () => {
    if (user.presentUser.length === 0) {
      present.isReserved = true;
      user.presentUser = [present.id];
    }

    bookPresentForUser(present);
  };
  const clickUnbook = () => {
    present.isReserved = false;
    user.presentUser = [];

    unBookPresent(present);
    unBookPresentForUser(present);
  };
  return (
    <div className={styles.present}>
      {present.isReserved ? (
        <span className={styles.present__available}>Regalo reservado</span>
      ) : (
        <span className={styles.present__available}>Regalo disponible</span>
      )}
      <div className={styles.present__container}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.present__image}
          width="150"
          height="150"
          src={present.img}
          alt="regalo"
        />
      </div>
      <div className={styles.present__description}>
        <h3>{present.name}</h3>
        <p>{present.description1}</p>
        <p>Categoria: {present.category}</p>
        <div className={styles.present__info}>
          {!present.isReserved && (
            <>
              <button onClick={clickBook} type="button">
                Reservar
              </button>
              <Link href={`/lista-de-bodas/${present.id}`} passHref>
                <p className={styles.present__moreinfo}>+Info</p>
              </Link>
            </>
          )}

          {user?.presentUser &&
            user.presentUser[0] === present.id &&
            present.isReserved && (
              <>
                <button onClick={clickUnbook} type="button">
                  Liberar
                </button>
                <Link href={`/lista-de-bodas/${present.id}`} passHref>
                  <p className={styles.present__moreinfo}>+Info</p>
                </Link>
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default PresentCard;
