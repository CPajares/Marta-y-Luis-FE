import { combineReducers } from "redux";
import CommentReducer from "./commentReducer";
import CommentsReducer from "./commentsReducer";
import getArrayReducer from "./getArrayReducer";
import PhotoReducer from "./photoReducer";
import PhotosReducer from "./photosReducer";
import PresentReducer from "./presentReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  photos: PhotosReducer,
  user: userReducer,
  present: PresentReducer,
  data: getArrayReducer,
  comment: CommentReducer,
  photo: PhotoReducer,
  comments: CommentsReducer,
});

export default rootReducer;
