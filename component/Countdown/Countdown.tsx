import { useState } from "react";
import styles from "./Countdown.module.css";

const Countdown = () => {
  const secondO = 1000;
  const minuteO = secondO * 60;
  const hourO = minuteO * 60;
  const dayO = hourO * 24;

  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [day, setDay] = useState(0);

  let countDown = new Date("Feb 02, 2022 00:00:00").getTime();

  setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;
    setDay(Math.floor(distance / dayO));
    setHour((distance % dayO) / hourO);
    setMinute(Math.floor(distance % hourO) / minuteO);
    setSecond(Math.floor(distance % minuteO) / secondO);
  }, 1000);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__time}>
          <div>{Math.floor(day)}</div>
          <p className={styles.container__parrafo}>DÍAS</p>
        </div>
        <div className={styles.container__time}>
          <div>{Math.floor(hour)}</div>
          <p className={styles.container__parrafo}>HORAS</p>
        </div>
        <div className={styles.container__time}>
          <div>{Math.floor(minute)}</div>
          <p className={styles.container__parrafo}>MINUTOS</p>
        </div>
        <div className={styles.container__time}>
          <div>{Math.floor(second)}</div>
          <p className={styles.container__parrafo}>SEGUNDOS</p>
        </div>
      </div>
    </>
  );
};

export default Countdown;
