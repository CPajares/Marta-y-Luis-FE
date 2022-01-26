import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "../../flux/redux/store";
import PresentCard from "./PresentCard";

const store = configureStore();

describe("Given a PresentCard component", () => {
  describe("When it´s render", () => {
    test("Then it should render a heading received by props", () => {
      const present = {
        id: "222",
        name: "aspirador",
        description1: "decripcion",
      };

      render(
        <Provider store={store}>
          <PresentCard present={present}></PresentCard>
        </Provider>
      );

      const heading = screen.getByRole("heading", { name: "aspirador" });

      expect(heading).toBeInTheDocument();
    });
  });
  describe("When it´s render", () => {
    test("Then it should render a heading received by props", () => {
      const present = {
        id: "222",
        name: "aspirador",
        description1: "decripcion",
      };

      render(
        <Provider store={store}>
          <PresentCard present={present}></PresentCard>
        </Provider>
      );

      const heading = screen.getByRole("heading", { name: "aspirador" });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it´s render", () => {
    test("Then it should render a clickable button reservar", () => {
      const present = {
        id: "222",
        name: "aspirador",
        description1: "decripcion",
      };

      render(
        <Provider store={store}>
          <PresentCard present={present}></PresentCard>
        </Provider>
      );

      const buttonReservar = screen.getByRole("button", { name: "Reservar" });

      userEvent.click(buttonReservar);

      expect(buttonReservar).toBeInTheDocument();
    });
  });

  describe("When it´s render and button reservar it´s clicked", () => {
    test("Then the button should´t be in the document and appear instead button liberar", () => {
      const present = {
        id: "222",
        name: "aspirador",
        description1: "decripcion",
      };

      const user = {
        name: "mario",
        presentUser: [],
      };

      render(
        <Provider store={store}>
          <PresentCard present={present} user={user}></PresentCard>
        </Provider>
      );

      const buttonReservar = screen.getByRole("button", { name: "Reservar" });
      userEvent.click(buttonReservar);
      expect(buttonReservar).not.toBeInTheDocument();

      const buttonLiberar = screen.getByRole("button", { name: "Liberar" });
      expect(buttonLiberar).toBeInTheDocument();
      userEvent.click(buttonLiberar);
    });
  });
});
