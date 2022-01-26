/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPhotosThunks,
  publishPhotoThunks,
} from "../redux/thunks/photoThunks";

const usePhoto = () => {
  const dispatch = useDispatch();

  const { photo: photoState, photos: photosState } = useSelector(
    ({ photo, photos }: any) => ({
      photo,
      photos,
    })
  );

  const publishPhoto = (photo: object) => {
    dispatch(publishPhotoThunks(photo));
  };

  const getPhotos = useCallback(() => {
    dispatch(getPhotosThunks());
  }, [dispatch]);

  return {
    photosState,
    photoState,
    publishPhoto,
    getPhotos,
  };
};

export default usePhoto;
