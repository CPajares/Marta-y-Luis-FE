import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../flux/redux/store";
import Comment from "./Comment";

const store = configureStore();
describe("Given a CommentForm component", () => {
  describe("When it´s rendered and receive the correct token ", () => {
    test("Then it should render a textbox ", () => {
      const commentsProps = [
        {
          id: "2",
          text: "texto comment",
          author: "mario",
        },
      ];
      JSON.parse = jest.fn().mockReturnValue({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWFyaW9nbCIsImlkIjoiNjE5ZGZmMzE3NmJlMGM1NzJiNmUxYWRjIiwiaWF0IjoxNjM4MDA4ODk0fQ.KgEv6HzuZRvIjIkI55fqgn7opb5Hv6Mo9q6YlWStorI",
      });
      render(
        <Provider store={store}>
          <Comment comments={commentsProps}></Comment>
        </Provider>
      );

      const button = screen.getByRole("textbox");

      expect(button).toBeInTheDocument();
    });
  });
});
