import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("Given a NavBar component", () => {
  describe("When it´s render", () => {
    test("Then it should render the image anillo icono ", () => {
      render(
        <NavBar
          title={"titulo de la pagina"}
          setIsMenuClosed={() => {}}
        ></NavBar>
      );

      const heading = screen.getByRole("img", { name: "anillo-icono" });
      expect(heading).toBeInTheDocument();
    });
  });
  describe("When it´s render", () => {
    test("Then it should render a heading with the the text passed by props", () => {
      render(
        <NavBar
          title={"titulo de la pagina"}
          setIsMenuClosed={() => {}}
        ></NavBar>
      );

      const titulo = screen.getByRole("heading", {
        name: "titulo de la pagina",
      });
      expect(titulo).toBeInTheDocument();
    });
  });
});
