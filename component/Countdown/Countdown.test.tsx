import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../flux/redux/store";
import Countdown from "./Countdown";

const store = configureStore();
describe("Given a Countdown component", () => {
  describe("When it´s rendered", () => {
    test("Then it should render the texts: HORAS, MINUTOS, SEGUNDOS ", () => {
      render(
        <Provider store={store}>
          <Countdown></Countdown>
        </Provider>
      );

      const segundos = screen.getByText("SEGUNDOS");
      const minutos = screen.getByText("MINUTOS");
      const horas = screen.getByText("HORAS");

      expect(horas).toBeInTheDocument();
      expect(minutos).toBeInTheDocument();
      expect(segundos).toBeInTheDocument();
    });
  });
});
