import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import useComment from "../../flux/hooks/useComment";
import useUser from "../../flux/hooks/useUser";
import styles from "./Comment.module.css";

interface IProp {
  comments: Array<ObjectProp>;
}

interface ObjectProp {
  text: string;
  author: string;
  like: number;
  isEdited: boolean;
  id: string;
  date: any;
}

const Comment: any = ({ comments }: IProp) => {
  const { deleteComment, editComment } = useComment();
  const commentsToPublish = comments.slice().reverse();

  const { getUser, userReducer } = useUser();

  const clickDelete = (event: any) => {
    deleteComment(event.target.id);
  };

  const [editText, setEditText] = useState(true);
  const [idCommentToEdit, setIdCommentToEdit] = useState("0");
  const [commentEdited, setCommentEdited] = useState("");

  const changeComment = (event: any) => {
    setCommentEdited(event.target.value);
  };
  const clickEdit = (event: any) => {
    setEditText(false);
    setIdCommentToEdit(event.target.id);
  };

  const clickSaveEdit = (event: any) => {
    const bodyToRequest = {
      text: commentEdited,
      id: event.target.id,
    };
    editComment(bodyToRequest);
    setEditText(true);
    setIdCommentToEdit("");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tokenStorage: any = localStorage.getItem("tokenMartayLuis");
      const { token } = JSON.parse(tokenStorage);
      const tokenD: any = jwtDecode(token);
      getUser(tokenD.id);
    }
  }, [getUser]);

  return commentsToPublish.length ? (
    <>
      {commentsToPublish.map((comment: ObjectProp) => (
        <div key={comment.id} className={styles.comment}>
          <textarea
            disabled={idCommentToEdit === comment.id ? false : true}
            name="comment"
            id="comment"
            onChange={changeComment}
            defaultValue={comment.text}
            className={styles.comment__area}
          ></textarea>
          {comment.isEdited && (
            <span className={styles.comment__editInfo}>Comentario Editado</span>
          )}
          {userReducer.name === comment.author && (
            <>
              <div
                className={styles.comment__close}
                id={comment.id}
                onClick={clickDelete}
              >
                x
              </div>
              {editText ? (
                <div
                  id={comment.id}
                  onClick={clickEdit}
                  className={styles.comment__edit}
                >
                  Editar
                </div>
              ) : (
                <div
                  id={comment.id}
                  onClick={clickSaveEdit}
                  className={styles.comment__edit}
                >
                  Guardar
                </div>
              )}
            </>
          )}

          <div className={styles.comment__details}>
            <span>{comment?.author} </span>
            <span>{new Date(comment.date).toLocaleDateString("es-ES")}</span>
          </div>
        </div>
      ))}
    </>
  ) : (
    <h2>LOADING</h2>
  );
};

export default Comment;
