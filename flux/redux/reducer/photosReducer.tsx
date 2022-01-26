import actionTypes from "../actions/actionsTypes";

interface Iaction {
  type: string;
  photos: Array<object>;
}

const PhotosReducer = (photos: Array<object> = [], action: Iaction) => {
  let newPhotos = photos;
  if (action.type === actionTypes.getPhotos) {
    newPhotos = [...action.photos];
  }
  return newPhotos;
};

export default PhotosReducer;
