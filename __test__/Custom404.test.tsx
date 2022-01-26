import { Provider } from "react-redux";
import configureStore from "../flux/redux/store";
import Custom404 from "../pages/404";
import { render, screen } from "@testing-library/react";

const store = configureStore();
describe("Given a Custom404 page", () => {
  describe("When it is called", () => {
    test("Then it should render an image", () => {
      render(
        <Provider store={store}>
          <Custom404 />
        </Provider>
      );

      const heading = screen.getByRole("img", { name: "Mario Error 404" });

      expect(heading).toBeInTheDocument();
    });
  });
});
