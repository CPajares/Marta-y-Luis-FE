import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "../../flux/redux/store";
import Filter from "./Filter";

const store = configureStore();
describe("Given a Filter component", () => {
  describe("When it´s rendered", () => {
    test("Then it should render a select with the option: Todos ", () => {
      render(
        <Provider store={store}>
          <Filter></Filter>
        </Provider>
      );

      const select = screen.getByRole("combobox");
      const option = screen.getByRole("option", { name: "Todos" });

      expect(select).toBeInTheDocument();
      expect(option).toBeInTheDocument();
    });
  });

  describe("When it´s rendered", () => {
    test("Then it should render a not dissabled button", () => {
      render(
        <Provider store={store}>
          <Filter></Filter>
        </Provider>
      );

      const button = screen.getByRole("button", { name: "Buscar" });

      userEvent.click(button);

      expect(button).toBeInTheDocument();
      expect(button).not.toBeDisabled();
    });
  });
});
