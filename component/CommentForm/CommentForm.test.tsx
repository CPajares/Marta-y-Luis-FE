import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../flux/redux/store";
import CommentForm from "./CommentForm";

const store = configureStore();
describe("Given a CommentForm component", () => {
  describe("When it´s rendered ", () => {
    test("Then it should render a button with the text publicar ", () => {
      render(
        <Provider store={store}>
          <CommentForm></CommentForm>
        </Provider>
      );

      const button = screen.getByRole("button", { name: "publicar" });

      expect(button).toBeInTheDocument();
    });
  });
});
