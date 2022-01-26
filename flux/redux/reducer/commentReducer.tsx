import actionTypes from "../actions/actionsTypes";

interface Iaction {
  type: string;
  comment: object;
}

const CommentReducer = (comment = {}, action: Iaction) => {
  let newComment = comment;
  switch (action.type) {
    case actionTypes.publishComment:
      newComment = { ...action.comment };
      break;
    case actionTypes.deleteComment:
      newComment = { ...action.comment };
      break;
    case actionTypes.editComment:
      newComment = { ...action.comment };
      break;
    default:
  }
  return newComment;
};

export default CommentReducer;
