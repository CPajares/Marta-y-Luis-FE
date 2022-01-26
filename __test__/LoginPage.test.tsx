import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "../flux/redux/store";
import Loggin from "../pages/login";

const store = configureStore();
describe("Given a LoginPage page", () => {
  describe("When it is called", () => {
    test("Then it should render", () => {
      render(
        <Provider store={store}>
          <Loggin />
        </Provider>
      );
    });
  });

  describe("When we type on usuario and contraseña inputs", () => {
    test("Then button login haven´t to be dissable", () => {
      render(
        <Provider store={store}>
          <Loggin />
        </Provider>
      );

      const inputUser = screen.getByRole("textbox", { name: "Usuario:" });
      const inputPassword = screen.getByPlaceholderText("contraseña");
      const buttonPassword = screen.getByRole("button", {
        name: "Login",
      });
      userEvent.type(inputUser, "mariogl");
      userEvent.type(inputPassword, "mariogl");

      expect(buttonPassword).not.toBeDisabled();
    });
  });
});
