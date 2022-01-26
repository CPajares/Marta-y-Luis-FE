import actionTypes from "./actionsTypes";

interface PropUser {
  user: object;
}

export const loginUserAction = (user: PropUser) => ({
  type: actionTypes.loginUser,
  user,
});

export const bookPresentForUserAction = (present: object) => ({
  type: actionTypes.bookPresentForUser,
  present,
});

export const bookPresentAction = (presents: Array<Object>) => ({
  type: actionTypes.bookPresent,
  presents,
});

export const unBookPresentAction = (presents: Array<Object>) => ({
  type: actionTypes.unBookPresent,
  presents,
});

export const unBookPresentForUserAction = (present: object) => ({
  type: actionTypes.unBookPresentForUser,
  present,
});

export const getPresentsAction = (presents: Array<Object>) => ({
  type: actionTypes.getPresents,
  presents,
});

export const publishCommentAction = (comment: Object) => ({
  type: actionTypes.publishComment,
  comment,
});

export const getCommentsAction = (comments: Array<Object>) => ({
  type: actionTypes.getComments,
  comments,
});

export const deleteCommentAction = (comment: Object) => ({
  type: actionTypes.deleteComment,
  comment,
});

export const editCommentAction = (comment: Object) => ({
  type: actionTypes.editComment,
  comment,
});

export const getUserAction = (user: Object) => {
  return {
    type: actionTypes.getUser,
    user,
  };
};

export const publishPhotoAction = (photo: Object) => ({
  type: actionTypes.publishPhoto,
  photo,
});

export const getPhotosAction = (photos: Array<object>) => ({
  type: actionTypes.getPhotos,
  photos,
});

export const getHomePresentsAction = (presents: Array<object>) => ({
  type: actionTypes.getHomePresents,
  presents,
});

export const getLeisurePresentsAction = (presents: Array<object>) => ({
  type: actionTypes.getLeisurePresents,
  presents,
});

export const getTravelPresentsAction = (presents: Array<object>) => ({
  type: actionTypes.getTravelPresents,
  presents,
});
