import { useState } from "react";
import useComment from "../../flux/hooks/useComment";
import Button from "../Button/Button";
import styles from "./CommentForm.module.css";
const CommentForm = () => {
  const { publishComment } = useComment();
  const initComment = {
    text: "",
  };
  const [isDissableButton, setIsDissableButton] = useState(true);

  const [userComment, setUserComment] = useState(initComment);
  const checkFormIsFull = () => {
    if (userComment.text !== "") {
      setIsDissableButton(false);
    }
  };

  const changeUserComment = (event: any) => {
    setUserComment({
      ...userComment,
      [event.target.id]: event.target.value,
    });
    checkFormIsFull();
  };

  const clickOnSubmit = (event: any) => {
    event.preventDefault();
    publishComment(userComment);
    setIsDissableButton(true);
    setUserComment(initComment);
  };

  return (
    <form className={styles.form}>
      <label className={styles.form__label} htmlFor="text">
        Dejanos tu comentario o aquel momento que quieras recordar:
      </label>
      <textarea
        id="text"
        name="text"
        required
        value={userComment.text}
        onChange={changeUserComment}
        className={styles.form__textarea}
        minLength={2}
        maxLength={500}
      />
      <Button
        text={"publicar"}
        click={clickOnSubmit}
        disabledButton={isDissableButton}
      ></Button>
    </form>
  );
};

export default CommentForm;
