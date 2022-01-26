import { useState } from "react";
import Link from "next/link";
import usePhoto from "../../flux/hooks/usePhoto";
import Button from "../Button/Button";
import styles from "./PhotoForm.module.css";

const PhotoForm = () => {
  const { publishPhoto, getPhotos } = usePhoto();

  const [isPhotoPublish, setIsPhotoPublish] = useState(false);

  const [photoForm, setPhotoForm] = useState({
    title: "",
    photo: "",
  });

  const changeFormData = (event: any) => {
    setPhotoForm({
      ...photoForm,
      [event.target.id]: event.target.value,
    });
  };
  const changeFormPhoto = (event: any) => {
    setPhotoForm({
      ...photoForm,
      [event.target.id]: event.target.files[0],
    });
  };

  const clickConfirmPublish = () => {
    setIsPhotoPublish(false);
    setPhotoForm({
      title: "",
      photo: "",
    });
    getPhotos();
  };

  const clickOnSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", photoForm.title);
    formData.append("photo", photoForm.photo);
    publishPhoto(formData);
    if (photoForm.photo !== "" && photoForm.title !== "") {
      setIsPhotoPublish(true);
    }
  };

  return (
    <div>
      {isPhotoPublish ? (
        <div className={styles.succesful}>
          <h2>Foto publicada con éxito</h2>
          <Link href="/fotos">
            <a onClick={clickConfirmPublish} className={styles.succesful__link}>
              ¿Quieres Subir otra foto?
            </a>
          </Link>
        </div>
      ) : (
        <form className={styles.form}>
          <h2 className={styles.form__heading}>
            Comparte tus fotos con nosotros:
          </h2>
          <label className={styles.form__label} htmlFor="title">
            Título:
          </label>
          <input
            value={photoForm.title}
            onChange={changeFormData}
            id="title"
            autoComplete="off"
            type="text"
          />

          <label className={styles.form__label} htmlFor="photo">
            Adjuntar foto:
          </label>
          <input
            onChange={changeFormPhoto}
            id="photo"
            type="file"
            data-testid="photo"
          />

          <Button text={"publicar"} click={clickOnSubmit}></Button>
        </form>
      )}
    </div>
  );
};

export default PhotoForm;
