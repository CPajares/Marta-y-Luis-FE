import actionTypes from "../actions/actionsTypes";

interface Iaction {
  type: string;
  id?: object;
  present?: object;
}

const PresentReducer = (present = {}, action: Iaction) => {
  let newPresent = present;
  switch (action.type) {
    case actionTypes.bookPresentForUser:
      newPresent = { ...action.present };
      break;
    case actionTypes.unBookPresentForUser:
      newPresent = { ...action.present };
      break;
    default:
  }
  return newPresent;
};

export default PresentReducer;
