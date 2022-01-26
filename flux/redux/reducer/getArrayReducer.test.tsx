import actionTypes from "../actions/actionsTypes";
import CommentsReducer from "./commentsReducer";
import getArrayReducer from "./getArrayReducer";

describe("Given a getArrayReducer", () => {
  describe("When it receives a getPresents action", () => {
    test("Then it should return an object with the new present", () => {
      const initial: any = [];

      const presentExpected = [{ name: "aspirador" }];
      interface Iaction {
        type: string;
        presents: any;
        comments: any;
        photos: any;
      }
      const action: Iaction = {
        type: actionTypes.getPresents,
        presents: presentExpected,
        comments: "test",
        photos: "test",
      };

      const newPresent = getArrayReducer(initial, action);

      expect(newPresent).toEqual(presentExpected);
    });
  });
  describe("When it receives a getPresents action", () => {
    test("Then it should return an array with the new comments", () => {
      const initial: any = [];

      const commentExpected = [{ text: "comentario chulo" }];
      interface Iaction {
        type: string;
        presents: any;
        comments: any;
        photos: any;
      }
      const action: Iaction = {
        type: actionTypes.getComments,
        presents: "test",
        comments: commentExpected,
        photos: "test",
      };

      const newComment = CommentsReducer(initial, action);

      expect(newComment).toEqual(commentExpected);
    });
  });

  describe("When it receives a getPhotos action", () => {
    test("Then it should return an array with the new photos", () => {
      const initial: any = [];

      const photoExpected = [{ photo: "http...." }];
      interface Iaction {
        type: string;
        presents: any;
        comments: any;
        photos: any;
      }
      const action: Iaction = {
        type: actionTypes.getPhotos,
        presents: "test",
        comments: "test",
        photos: photoExpected,
      };

      const newPhoto = getArrayReducer(initial, action);

      expect(newPhoto).toEqual(photoExpected);
    });
  });
  describe("When it receives a getHomePresents action", () => {
    test("Then it should return an Array with the new presents", () => {
      const initial: any = [];

      const presentExpected = [{ name: "Aspirador...." }];
      interface Iaction {
        type: string;
        presents: any;
        comments: any;
        photos: any;
      }
      const action: Iaction = {
        type: actionTypes.getHomePresents,
        presents: presentExpected,
        comments: "test",
        photos: "test",
      };

      const newPresent = getArrayReducer(initial, action);

      expect(newPresent).toEqual(presentExpected);
    });
  });

  describe("When it receives a getHomePresents action", () => {
    test("Then it should return an Array with the new presents", () => {
      const initial: any = [];

      const presentExpected = [{ name: "Aspirador...." }];
      interface Iaction {
        type: string;
        presents: any;
        comments: any;
        photos: any;
      }
      const action: Iaction = {
        type: actionTypes.getLeisurePresents,
        presents: presentExpected,
        comments: "test",
        photos: "test",
      };

      const newPresent = getArrayReducer(initial, action);

      expect(newPresent).toEqual(presentExpected);
    });
  });

  describe("When it receives a getHomePresents action", () => {
    test("Then it should return an Array with the new presents", () => {
      const initial: any = [];

      const presentExpected = [{ name: "Aspirador...." }];
      interface Iaction {
        type: string;
        presents: any;
        comments: any;
        photos: any;
      }
      const action: Iaction = {
        type: actionTypes.getTravelPresents,
        presents: presentExpected,
        comments: "test",
        photos: "test",
      };

      const newPresent = getArrayReducer(initial, action);

      expect(newPresent).toEqual(presentExpected);
    });
  });
});
