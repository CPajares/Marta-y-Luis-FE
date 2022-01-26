import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Footer component", () => {
  describe("When it´s render", () => {
    test("Then it should render the text: By Carlos Pajares ", () => {
      render(<Button></Button>);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
