import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../flux/redux/store";
import PresentPage from "../pages/lista-de-bodas/[id]";

const store = configureStore();
describe("Given a Present page", () => {
  describe("When it is called", () => {
    test("Then it should render", () => {
      render(
        <Provider store={store}>
          <PresentPage />
        </Provider>
      );
    });
  });
});
