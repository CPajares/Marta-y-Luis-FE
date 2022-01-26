import {
  deleteCommentAction,
  editCommentAction,
  getCommentsAction,
  getHomePresentsAction,
  getLeisurePresentsAction,
  getPhotosAction,
  getPresentsAction,
  getTravelPresentsAction,
  getUserAction,
  loginUserAction,
  publishCommentAction,
  publishPhotoAction,
} from "./actionsCreators";
import actionTypes from "./actionsTypes";

describe("Given a loginUserAction", () => {
  describe("When it´s called ", () => {
    test("Then it should return an object", () => {
      const user: any = { name: "Test" };

      const expectedAction = {
        type: actionTypes.loginUser,
        user,
      };

      const actionResult = loginUserAction(user);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
describe("Given a getPresentsAction", () => {
  describe("When it´s called ", () => {
    test("Then it should return an object ", () => {
      const presents: any = [{ name: "Test" }];

      const expectedAction = {
        type: actionTypes.getPresents,
        presents,
      };

      const actionResult = getPresentsAction(presents);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
describe("Given a publishCommentAction", () => {
  describe("When it´s called ", () => {
    test("Then it should return an object", () => {
      const comment: any = { text: "Test" };

      const expectedAction = {
        type: actionTypes.publishComment,
        comment,
      };

      const result = publishCommentAction(comment);

      expect(result).toEqual(expectedAction);
    });
  });
});
describe("Given a getCommentsAction", () => {
  describe("When it´s called ", () => {
    test("Then it should return an object", () => {
      const comments: any = [{ text: "Test" }];

      const expectedAction = {
        type: actionTypes.getComments,
        comments,
      };

      const result = getCommentsAction(comments);

      expect(result).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteCommentAction ", () => {
  describe("When it´s called ", () => {
    test("Then it should return an object", () => {
      const comment: any = { text: "Test" };

      const expectedAction = {
        type: actionTypes.deleteComment,
        comment,
      };

      const result = deleteCommentAction(comment);

      expect(result).toEqual(expectedAction);
    });
  });
});

describe("Given a editCommentAction ", () => {
  describe("When it´s called", () => {
    test("Then it should return an object", () => {
      const comment: any = { text: "Test" };

      const expectedAction = {
        type: actionTypes.editComment,
        comment,
      };

      const result = editCommentAction(comment);

      expect(result).toEqual(expectedAction);
    });
  });
});

describe("Given a getUserAction ", () => {
  describe("When it´s called ", () => {
    test("Then it should return an object", () => {
      const user: any = { name: "Test" };

      const expectedAction = {
        type: actionTypes.getUser,
        user,
      };

      const result = getUserAction(user);

      expect(result).toEqual(expectedAction);
    });
  });
});

describe("Given a publishPhotoAction ", () => {
  describe("When it´s called ", () => {
    test("Then it should return an object", () => {
      const photo: any = { title: "Test" };

      const expectedAction = {
        type: actionTypes.publishPhoto,
        photo,
      };

      const result = publishPhotoAction(photo);

      expect(result).toEqual(expectedAction);
    });
  });
});

describe("Given a getPhotosAction ", () => {
  describe("When it´s called ", () => {
    test("Then it should return an object", () => {
      const photos: any = [{ title: "Test" }];

      const expectedAction = {
        type: actionTypes.getPhotos,
        photos,
      };

      const result = getPhotosAction(photos);

      expect(result).toEqual(expectedAction);
    });
  });
});

describe("Given a getHomePresentsAction ", () => {
  describe("When it´s called ", () => {
    test("Then it should return an object", () => {
      const presents: any = [{ title: "Test" }];

      const expectedAction = {
        type: actionTypes.getHomePresents,
        presents,
      };

      const result = getHomePresentsAction(presents);

      expect(result).toEqual(expectedAction);
    });
  });
});

describe("Given a getLeisurePresentsAction  ", () => {
  describe("When it´s called ", () => {
    test("Then it should return an object", () => {
      const presents: any = [{ title: "Test" }];

      const expectedAction = {
        type: actionTypes.getLeisurePresents,
        presents,
      };

      const result = getLeisurePresentsAction(presents);

      expect(result).toEqual(expectedAction);
    });
  });
});

describe("Given a getLeisurePresentsAction  ", () => {
  describe("When it´s called ", () => {
    test("Then it should return an object", () => {
      const presents: any = [{ title: "Test" }];

      const expectedAction = {
        type: actionTypes.getTravelPresents,
        presents,
      };

      const result = getTravelPresentsAction(presents);

      expect(result).toEqual(expectedAction);
    });
  });
});
