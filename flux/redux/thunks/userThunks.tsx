import axios from "axios";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";
import { getUserAction, loginUserAction } from "../actions/actionsCreators";

interface Iuser {
  name: string;
  password: string;
}
interface Prop {
  user: Iuser;
}
const apiUrl = process.env.NEXT_PUBLIC_API_HEROKU;

export const loginUserThunks = (user: Prop) => async (dispatch: any) => {
  try {
    const response = await axios.post(`${apiUrl}user/login`, user);
    if (response.status === 200) {
      const token = response.data.token;
      const userDecode: any = jwtDecode(token);
      dispatch(loginUserAction(userDecode));
      localStorage.setItem("tokenMartayLuis", JSON.stringify({ token }));
      toast("Bienvenido", {
        icon: "👏",
      });
    }
  } catch {
    toast.error("Datos erroneos");
  }
};

export const getUserThunks = (id: any) => async (dispatch: any) => {
  const tokenStorage: any = localStorage.getItem("tokenMartayLuis");
  const { token } = JSON.parse(tokenStorage);

  try {
    const response = await axios.get(`${apiUrl}user/getuser/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = response.data;

    if (response.status === 200) {
      dispatch(getUserAction(user));
      return user;
    }
  } catch {
    const error = new Error();
    error.message = "Not possible to book";
  }
};
