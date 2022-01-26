import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../flux/redux/store";
import NuestraHistoria from "../pages/nuestra-historia";

const store = configureStore();
describe("Given a NuestraHistoria page", () => {
  describe("When it is called", () => {
    test("Then it should render", () => {
      render(
        <Provider store={store}>
          <NuestraHistoria />
        </Provider>
      );
    });
  });
});
