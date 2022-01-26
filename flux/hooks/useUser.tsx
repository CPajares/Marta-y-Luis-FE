/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunks, loginUserThunks } from "../redux/thunks/userThunks";

const useUser = () => {
  const dispatch = useDispatch();

  const [isLogged, setIsLogged] = useState(false);
  const {
    user: userReducer,
    present: presentReducer,
    data,
    comment,
    comments,
  } = useSelector(({ user, present, data, comment, comments }: any) => ({
    user,
    comments,
    present,
    data,
    comment,
  }));

  const loginUser = (userLogin: any) => {
    dispatch(loginUserThunks(userLogin));
  };

  const getUser = useCallback(
    (id: string) => {
      dispatch(getUserThunks(id));
    },
    [dispatch]
  );

  return {
    comments,
    userReducer,
    presentReducer,
    data,
    comment,
    loginUser,
    isLogged,
    setIsLogged,
    getUser,
  };
};

export default useUser;
