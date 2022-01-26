import actionTypes from "../actions/actionsTypes";

interface Iaction {
  type: string;
  user: object;
}

const userReducer = (user = {}, action: Iaction) => {
  let newUser = user;
  if (action.type === actionTypes.loginUser) {
    newUser = { ...action.user };
  } else if (action.type === actionTypes.getUser) {
    newUser = { ...action.user };
  }
  return newUser;
};

export default userReducer;
