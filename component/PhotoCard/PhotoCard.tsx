/* eslint-disable @next/next/no-img-element */
import { SRLWrapper } from "simple-react-lightbox";
import useUser from "../../flux/hooks/useUser";
import styles from "./PhotoCard.module.css";

interface Iprops {
  photos: Array<object>;
}

interface PhotoToPublish {
  id: string;
  photo: string;
  author: { name: string };
  title: string;
}

const PhotoCard = ({ photos }: Iprops) => {
  console.log(photos);
  const photosToPublish: any = photos.slice().reverse();

  const { userReducer } = useUser();
  return photosToPublish.map((photoToPublish: PhotoToPublish) => (
    <SRLWrapper key={photoToPublish.id}>
      <div className={styles.photoCard}>
        {userReducer.name === photoToPublish.author.name && (
          <div className={styles.photoCard__close}></div>
        )}
        <img
          className={styles.photoCard__image}
          src={photoToPublish.photo}
          alt={photoToPublish.title}
        />
        <div className={styles.photoCard__info}>
          <p className={styles.photoCard__title}>{photoToPublish.title}</p>
          <p className={styles.photoCard__author}>
            {photoToPublish.author?.name}
          </p>
        </div>
      </div>
    </SRLWrapper>
  ));
};

export default PhotoCard;
