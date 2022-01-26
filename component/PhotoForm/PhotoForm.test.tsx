import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import configureStore from "../../flux/redux/store";
import PhotoForm from "./PhotoForm";

const store = configureStore();
describe("Given a PhotoForm component", () => {
  describe("When it´s render", () => {
    test("Then it should render a text box with the name título", () => {
      render(
        <Provider store={store}>
          <PhotoForm></PhotoForm>
        </Provider>
      );

      const textBox = screen.getByRole("textbox", { name: "Título:" });

      expect(textBox).toBeInTheDocument();
    });
  });

  describe("When it´s render and select an image", () => {
    test("Then it should upload that image", () => {
      render(
        <Provider store={store}>
          <PhotoForm></PhotoForm>
        </Provider>
      );

      const file = new File(["hello"], "hello.png", { type: "image/png" });
      const inputFile: any = screen.getByTestId("photo");

      userEvent.upload(inputFile, file);
      expect(inputFile).toBeInTheDocument();
      expect(inputFile.files[0]).toStrictEqual(file);
    });
  });

  describe("When it´s render and select an image", () => {
    test("Then it should upload that image", () => {
      render(
        <Provider store={store}>
          <PhotoForm></PhotoForm>
        </Provider>
      );

      const button = screen.getByRole("button", { name: "publicar" });

      expect(button).not.toBeDisabled();
    });
  });

  describe("When it´s render and be type a title and upload an iamge", () => {
    test("Then it should be a button publicar notdisabled", () => {
      render(
        <Provider store={store}>
          <PhotoForm></PhotoForm>
        </Provider>
      );

      const file = new File(["hello"], "hello.png", { type: "image/png" });
      const inputFile: any = screen.getByTestId("photo");
      const button = screen.getByRole("button", { name: "publicar" });

      userEvent.click(button);
      userEvent.upload(inputFile, file);

      expect(button).not.toBeDisabled();
    });
  });
});
