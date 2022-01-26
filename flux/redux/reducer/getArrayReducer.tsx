import actionTypes from "../actions/actionsTypes";

interface Iaction {
  type: string;
  presents: Array<object>;
  comments: Array<object>;
  photos: Array<object>;
}

const getArrayReducer = (data = [], action: Iaction) => {
  let newData: Array<object> = data;
  switch (action.type) {
    case actionTypes.getPresents:
      newData = [...action.presents];
      break;
    case actionTypes.getHomePresents:
      newData = [...action.presents];
      break;
    case actionTypes.getLeisurePresents:
      newData = [...action.presents];
      break;
    case actionTypes.getTravelPresents:
      newData = [...action.presents];
      break;
    case actionTypes.bookPresent:
      newData = [...action.presents];
      break;
    case actionTypes.unBookPresent:
      newData = [...action.presents];
      break;
    default:
  }
  return newData;
};

export default getArrayReducer;
