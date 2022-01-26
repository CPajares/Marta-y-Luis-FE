/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  bookPresentForUserThunks,
  bookPresentThunks,
  getHomePresentsThunks,
  getLeisurePresentThunks,
  getPresentThunks,
  getTravelPresentThunks,
  unBookPresentForUserThunks,
  unBookPresentThunks,
} from "../redux/thunks/presentThunks";

const usePresent = () => {
  const dispatch = useDispatch();

  const { present: presentReducer, data } = useSelector(
    ({ present, data }: any) => ({
      present,
      data,
    })
  );

  const bookPresentForUser = (present: any) => {
    dispatch(bookPresentForUserThunks(present));
  };

  const bookPresent = (id: any) => {
    dispatch(bookPresentThunks(id));
  };

  const unBookPresent = (present: any) => {
    dispatch(unBookPresentThunks(present));
  };

  const unBookPresentForUser = (present: object) => {
    dispatch(unBookPresentForUserThunks(present));
  };

  const getPresents = useCallback(() => {
    dispatch(getPresentThunks());
  }, [dispatch]);

  const getHomePresents = useCallback(() => {
    dispatch(getHomePresentsThunks());
  }, [dispatch]);

  const getLeisurePresent = useCallback(() => {
    dispatch(getLeisurePresentThunks());
  }, [dispatch]);

  const getTravelPresent = useCallback(() => {
    dispatch(getTravelPresentThunks());
  }, [dispatch]);

  return {
    data,
    presentReducer,
    getTravelPresent,
    getLeisurePresent,
    getHomePresents,
    getPresents,
    unBookPresentForUser,
    unBookPresent,
    bookPresent,
    bookPresentForUser,
  };
};

export default usePresent;
