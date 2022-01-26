import axios from "axios";
import toast from "react-hot-toast";
import {
  bookPresentForUserAction,
  getHomePresentsAction,
  getLeisurePresentsAction,
  getPresentsAction,
  getTravelPresentsAction,
  unBookPresentAction,
  unBookPresentForUserAction,
} from "../actions/actionsCreators";

const apiUrl = process.env.NEXT_PUBLIC_API_HEROKU;

export const bookPresentForUserThunks =
  (present: any) => async (dispatch: any) => {
    try {
      const tokenStorage: any = localStorage.getItem("tokenMartayLuis");
      const { token } = JSON.parse(tokenStorage);
      const response = await axios.patch(
        `${apiUrl}user/presentforuser/${present.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        dispatch(bookPresentForUserAction(present));

        toast.success("Regalo reservado");
      }
    } catch (error: any) {
      toast.error("Error. Recuerde, solo puede reservar un regalo");
    }
  };

export const bookPresentThunks = (id: any) => async () => {
  try {
    const tokenStorage: any = localStorage.getItem("tokenMartayLuis");
    const { token } = JSON.parse(tokenStorage);
    await axios.patch(
      `${apiUrl}martayluis/bookpresent/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch {
    const error = new Error();
    error.message = "Not possible to book";
  }
};

export const unBookPresentThunks = (present: any) => async (dispatch: any) => {
  try {
    const tokenStorage: any = localStorage.getItem("tokenMartayLuis");
    const { token } = JSON.parse(tokenStorage);
    const response = await axios.patch(
      `${apiUrl}martayluis/unbookpresent/${present.id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      dispatch(unBookPresentAction(present));

      toast.success("Regalo reservado");
    }
  } catch {
    const error = new Error();
    error.message = "Not possible to book";
  }
};

export const unBookPresentForUserThunks =
  (present: any) => async (dispatch: any) => {
    try {
      const tokenStorage: any = localStorage.getItem("tokenMartayLuis");
      const { token } = JSON.parse(tokenStorage);
      const response = await axios.patch(
        `${apiUrl}user/unbookpresentforuser/${present.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        dispatch(unBookPresentForUserAction(present));
        toast.success("Regalo liberado");
      }
    } catch {
      const error = new Error();
      error.message = "Not possible to book";
    }
  };

export const getPresentThunks = () => async (dispatch: any) => {
  try {
    const response = await axios.get(`${apiUrl}martayluis/presents`);

    const presents = response.data;
    if (response.status === 200) {
      dispatch(getPresentsAction(presents));
    }
  } catch {
    const error = new Error();
    error.message = "Not possible to book";
  }
};

export const getHomePresentsThunks = () => async (dispatch: any) => {
  const tokenStorage: any = localStorage.getItem("tokenMartayLuis");
  const { token } = JSON.parse(tokenStorage);

  try {
    const response = await axios.get(`${apiUrl}martayluis/presents/home`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const presents = response.data;

    if (response.status === 200) {
      dispatch(getHomePresentsAction(presents));
    }
  } catch {
    const error = new Error();
    error.message = "Not possible to book";
  }
};

export const getLeisurePresentThunks = () => async (dispatch: any) => {
  const tokenStorage: any = localStorage.getItem("tokenMartayLuis");
  const { token } = JSON.parse(tokenStorage);

  try {
    const response = await axios.get(`${apiUrl}martayluis/presents/leisure`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const presents = response.data;

    if (response.status === 200) {
      dispatch(getLeisurePresentsAction(presents));
    }
  } catch {
    const error = new Error();
    error.message = "Not possible to book";
  }
};

export const getTravelPresentThunks = () => async (dispatch: any) => {
  const tokenStorage: any = localStorage.getItem("tokenMartayLuis");
  const { token } = JSON.parse(tokenStorage);

  try {
    const response = await axios.get(`${apiUrl}martayluis/presents/travel`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const presents = response.data;

    if (response.status === 200) {
      dispatch(getTravelPresentsAction(presents));
    }
  } catch {
    const error = new Error();
    error.message = "Not possible to book";
  }
};
