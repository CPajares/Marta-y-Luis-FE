import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../flux/redux/store";
import Fotos from "../pages/fotos";

const store = configureStore();
describe("Given a Fotos page", () => {
  describe("When it is called", () => {
    test("Then it should render", () => {
      const photos = [
        {
          id: "22",
          author: {
            name: "mario",
          },
        },
      ];
      photos.slice = jest
        .fn()
        .mockReturnValue({ reverse: jest.fn().mockReturnValue(photos) });

      render(
        <Provider store={store}>
          <Fotos photosSSR={photos} />
        </Provider>
      );
    });
  });
});
