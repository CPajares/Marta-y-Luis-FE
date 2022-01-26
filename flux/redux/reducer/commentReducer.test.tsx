import actionTypes from "../actions/actionsTypes";
import CommentReducer from "./commentReducer";

describe("Given a CommentReducer", () => {
  describe("When it receives a publishComment action", () => {
    test("Then it should return an object with the new comment", () => {
      const initial = {};

      const comment = { text: "comentario constructivo" };
      interface Iaction {
        type: string;
        comment: object;
      }
      const action: Iaction = {
        type: actionTypes.publishComment,
        comment: comment,
      };

      const newComment = CommentReducer(initial, action);

      expect(newComment).toEqual(comment);
    });
  });

  describe("When it receives a deleteComment action", () => {
    test("Then it should return an object with the new comment", () => {
      const initial = {};

      const comment = { text: "comentario constructivo" };
      interface Iaction {
        type: string;
        comment: object;
      }
      const action: Iaction = {
        type: actionTypes.deleteComment,
        comment: comment,
      };

      const newComment = CommentReducer(initial, action);

      expect(newComment).toEqual(comment);
    });
  });

  describe("When it receives a editComment action", () => {
    test("Then it should return an object with the new comment", () => {
      const initial = {};

      const comment = { text: "comentario constructivo" };
      interface Iaction {
        type: string;
        comment: object;
      }
      const action: Iaction = {
        type: actionTypes.editComment,
        comment: comment,
      };

      const newComment = CommentReducer(initial, action);

      expect(newComment).toEqual(comment);
    });
  });
});
