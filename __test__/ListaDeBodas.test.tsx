import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../flux/redux/store";
import ListaDeBodas from "../pages/lista-de-bodas";

describe("Given a ListaDeBodas page", () => {
  describe("When it is called and get the token", () => {
    test("Should render", async () => {
      const store = configureStore();

      const presentsProp = [
        {
          id: "22",
        },
      ];

      JSON.parse = jest.fn().mockReturnValue({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWFyaW9nbCIsImlkIjoiNjE5ZGZmMzE3NmJlMGM1NzJiNmUxYWRjIiwiaWF0IjoxNjM4MDA4ODk0fQ.KgEv6HzuZRvIjIkI55fqgn7opb5Hv6Mo9q6YlWStorI",
      });
      render(
        <Provider store={store}>
          <ListaDeBodas presents={presentsProp} />
        </Provider>
      );
    });
  });
});
