import actionTypes from "../actions/actionsTypes";

interface Iaction {
  type: string;
  photo: object;
}

const PhotoReducer = (photo = {}, action: Iaction) => {
  let newPhoto = photo;
  if (action.type === actionTypes.publishPhoto) {
    newPhoto = { ...action.photo };
  }
  return newPhoto;
};

export default PhotoReducer;
