import axios from "axios";
import toast from "react-hot-toast";
import {
  getPhotosAction,
  publishPhotoAction,
} from "../actions/actionsCreators";

const apiUrl = process.env.NEXT_PUBLIC_API_HEROKU;

export const publishPhotoThunks = (photo: any) => async (dispatch: any) => {
  const tokenStorage: any = localStorage.getItem("tokenMartayLuis");
  const { token } = JSON.parse(tokenStorage);
  try {
    const response = await axios.post(
      `${apiUrl}martayluis/photoupload`,
      photo,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const photoData = response.data;

    if (response.status === 200) {
      dispatch(publishPhotoAction(photoData));
    }
  } catch {
    const error = new Error();
    error.message = "Not possible to book";
    toast.error("No se pudo publicar tu foto");
  }
};

export const getPhotosThunks = () => async (dispatch: any) => {
  try {
    const response = await axios.get(`${apiUrl}martayluis/photos`);
    const photos = response.data;
    if (response.status === 200) {
      dispatch(getPhotosAction(photos));
    }
  } catch {
    const error = new Error();
    error.message = "Not possible to load the photos";
  }
};
