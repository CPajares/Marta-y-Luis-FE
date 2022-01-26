import styles from "./Button.module.css";

interface Props {
  text?: string;
  click?: React.MouseEventHandler<HTMLButtonElement>;
  disabledButton?: boolean;
}

const Button = ({ text, click, disabledButton }: Props) => {
  return (
    <button
      disabled={disabledButton}
      type="submit"
      className={styles.button}
      onClick={click}
    >
      {text}
    </button>
  );
};

export default Button;
