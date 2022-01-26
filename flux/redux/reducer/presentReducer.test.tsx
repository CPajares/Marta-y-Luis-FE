import actionTypes from "../actions/actionsTypes";
import PresentReducer from "./presentReducer";

describe("Given a PresentReducer", () => {
  describe("When it receives a unBookPresentForUser action", () => {
    test("Then it should return an object with the present", () => {
      const initial = {};

      const present = { name: "aspirador" };
      interface Iaction {
        type: string;
        id: object;
      }
      const action: Iaction = {
        type: actionTypes.unBookPresentForUser,
        id: present,
      };

      const newPresent = PresentReducer(initial, action);

      expect(newPresent).toEqual(present);
    });
  });

  describe("When it receives a bookPresentForUser action", () => {
    test("Then it should return an object with the present", () => {
      const initial: Array<object> = [];

      const present = { name: "1234" };
      interface Iaction {
        type: string;
        present: object;
      }
      const action: Iaction = {
        type: actionTypes.bookPresentForUser,
        present: present,
      };

      const newPresent = PresentReducer(initial, action);

      expect(newPresent).toEqual(present);
    });
  });
});
