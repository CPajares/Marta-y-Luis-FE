import actionTypes from "../actions/actionsTypes";

interface Iaction {
  type: string;
  comments: Array<object>;
}

const CommentsReducer = (comments = [], action: Iaction) => {
  let newComments: Array<object> = comments;
  if (action.type === actionTypes.getComments) {
    newComments = [...action.comments];
  }
  return newComments;
};

export default CommentsReducer;
