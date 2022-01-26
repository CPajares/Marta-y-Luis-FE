import axios from "axios";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";
import {
  deleteCommentAction,
  editCommentAction,
  getCommentsAction,
  publishCommentAction,
} from "../actions/actionsCreators";

const apiUrl = process.env.NEXT_PUBLIC_API_HEROKU;

export const publishCommentThunks = (comment: any) => async (dispatch: any) => {
  const tokenStorage: any = localStorage.getItem("tokenMartayLuis");
  const { token } = JSON.parse(tokenStorage);
  const { name }: any = jwtDecode(token);
  const { text } = comment;
  const body = {
    text,
    author: name,
  };

  try {
    const response = await axios.post(
      `${apiUrl}martayluis/publishcomment`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const commentUser = response.data;

    if (response.status === 201) {
      dispatch(publishCommentAction(commentUser));
    }
  } catch {
    const error = new Error();
    error.message = "Not possible to book";
    toast.error("No se pudo publicar tu comentario");
  }
};

export const getCommentsThunks = () => async (dispatch: any) => {
  try {
    const response = await axios.get(`${apiUrl}martayluis/comments`);

    const comments = response.data;
    if (response.status === 200) {
      dispatch(getCommentsAction(comments));
    }
  } catch {
    const error = new Error();
    error.message = "Not possible to book";
  }
};

export const deleteCommentThunks = (id: any) => async (dispatch: any) => {
  const tokenStorage: any = localStorage.getItem("tokenMartayLuis");
  const { token } = JSON.parse(tokenStorage);

  try {
    const response = await axios.delete(
      `${apiUrl}martayluis/deletecomment/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const commentUser = response.data;

    if (response.status === 200) {
      dispatch(deleteCommentAction({ response: commentUser, text: "" }));
      toast.error("Comentario eliminado");
    }
  } catch {
    const error = new Error();
    error.message = "Not possible to book";
  }
};

export const editCommentThunks = (comment: object) => async (dispatch: any) => {
  const tokenStorage: any = localStorage.getItem("tokenMartayLuis");
  const { token } = JSON.parse(tokenStorage);

  try {
    const response = await axios.patch(
      `${apiUrl}martayluis/modifycomment`,
      comment,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const commentUser = response.data;

    if (response.status === 200) {
      dispatch(editCommentAction(commentUser));
    }
  } catch {
    const error = new Error();
    error.message = "Not possible to book";
  }
};
