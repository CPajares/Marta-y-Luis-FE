import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../flux/redux/store";
import Footer from "./Footer";

const store = configureStore();
describe("Given a Footer component", () => {
  describe("When it´s rendered", () => {
    test("Then it should render the text: By Carlos Pajares ", () => {
      render(
        <Provider store={store}>
          <Footer></Footer>
        </Provider>
      );

      const text = screen.getByText("By Carlos Pajares");

      expect(text).toBeInTheDocument();
    });
  });
});
