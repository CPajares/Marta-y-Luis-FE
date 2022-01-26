import actionTypes from "../actions/actionsTypes";
import userReducer from "./userReducer";

describe("Given a PresentReducer", () => {
  describe("When it receives a unBookPresentForUser action", () => {
    test("Then it should return an object with the present", () => {
      const initial = {};

      const marioUser = { name: "mariogl" };
      interface Iaction {
        type: string;
        user: object;
      }
      const action: Iaction = {
        type: actionTypes.loginUser,
        user: marioUser,
      };

      const newUser = userReducer(initial, action);

      expect(newUser).toEqual(marioUser);
    });
  });

  describe("When it receives a unBookPresentForUser action", () => {
    test("Then it should return an object with the present", () => {
      const initial = {};

      const marioUser = { name: "mariogl" };
      interface Iaction {
        type: string;
        user: object;
      }
      const action: Iaction = {
        type: actionTypes.getUser,
        user: marioUser,
      };

      const newUser = userReducer(initial, action);

      expect(newUser).toEqual(marioUser);
    });
  });
});
