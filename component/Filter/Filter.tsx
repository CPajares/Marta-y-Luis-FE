import usePresent from "../../flux/hooks/usePresent";
import styles from "./Filter.module.css";

const Filter = () => {
  const { getPresents, getHomePresents, getLeisurePresent, getTravelPresent } =
    usePresent();
  const clickFilter = (event: any) => {
    event.preventDefault();
    if (event.target.category?.value === "casa") {
      getHomePresents();
    } else if (event.target.category?.value === "ocio") {
      getLeisurePresent();
    } else if (event.target.category?.value === "viaje") {
      getTravelPresent();
    } else if (event.target.category?.value === "todos") {
      getPresents();
    }
  };
  return (
    <form className={styles.form} onSubmit={clickFilter}>
      <div className={styles.form__container}>
        <p>Buscar por categorías:</p>
        <select
          className={styles.form__select}
          defaultValue={"Mostrar todos"}
          name="category"
        >
          <option value="todos">Todos</option>
          <option value="casa">Casa</option>
          <option value="viaje">Viaje</option>
          <option value="ocio">Ocio</option>
        </select>
        <button type="submit">Buscar</button>
      </div>
    </form>
  );
};

export default Filter;
