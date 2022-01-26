import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../flux/redux/store";
import LogginCard from "./LogginCard";

const store = configureStore();

describe("Given a LogginCard component", () => {
  describe("When it´s render", () => {
    test("Then it should render textboxs: Usuario y Contraseña and a Login button ", () => {
      render(
        <Provider store={store}>
          <LogginCard></LogginCard>
        </Provider>
      );

      const inputUser = screen.getByRole("textbox", { name: "Usuario:" });
      const inputPassword = screen.getByRole("textbox", {
        name: "Usuario:",
      });
      const buttonLogin = screen.getByRole("button", { name: "Login" });

      expect(inputUser).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(buttonLogin).toBeInTheDocument();
    });
  });
});
