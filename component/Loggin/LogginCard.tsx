import { useState } from "react";
import Button from "../Button/Button";
import styles from "./LogginCard.module.css";
import Link from "next/link";
import useUser from "../../flux/hooks/useUser";
import { useRouter } from "next/dist/client/router";

const LogginCard = () => {
  const { loginUser } = useUser();

  const [isDissableButton, setIsDissableButton] = useState(true);
  const initData = {
    name: "",
    password: "",
  };

  const [userData, setUserData] = useState(initData);

  const checkFormIsFull = () => {
    if (userData.name !== "" && userData.password !== "") {
      setIsDissableButton(false);
    }
  };

  const changeUserData = (event: any) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
    checkFormIsFull();
  };
  const router = useRouter();
  const clickOnSubmit = (event: any) => {
    event.preventDefault();
    router.push("/");
    loginUser(userData);
    setUserData(initData);
    setIsDissableButton(true);
  };

  return (
    <>
      <form className={styles.form} onSubmit={clickOnSubmit}>
        <h2>LOG-IN</h2>
        <p>Introduce tu nombre de usuario y contraseña</p>
        <div>
          <div>
            <label htmlFor="name">Usuario: </label>
            <input
              className={styles.form__input}
              value={userData.name}
              onChange={changeUserData}
              autoComplete="off"
              type="text"
              id="name"
              placeholder="usuario"
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña: </label>
            <input
              className={styles.form__input}
              value={userData.password}
              onChange={changeUserData}
              autoComplete="off"
              type="password"
              id="password"
              placeholder="contraseña"
            />
          </div>
        </div>
        <div>
          <Button
            disabledButton={isDissableButton}
            text={"Login"}
            click={clickOnSubmit}
          ></Button>

          <Link href="/" passHref>
            <button type="button" className={`${styles.button}`}>
              Salir
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default LogginCard;
