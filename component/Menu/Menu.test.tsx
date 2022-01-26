import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../flux/redux/store";
import Menu from "./Menu";

const store = configureStore();

describe("Given a Menu component", () => {
  describe("When it´s render", () => {
    test("Then it should render a link MARTA Y LUIS", () => {
      render(
        <Provider store={store}>
          <Menu setIsMenuClosed={() => {}}></Menu>
        </Provider>
      );

      const link = screen.getByRole("link", { name: "MARTA Y LUIS" });

      expect(link).toBeInTheDocument();
    });
  });
});
