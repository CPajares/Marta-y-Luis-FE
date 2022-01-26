import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../flux/redux/store";
import Home from "../pages";

const store = configureStore();
describe("Given a Home page", () => {
  describe("When it is called", () => {
    test("Then it should render", () => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
    });
  });
});
