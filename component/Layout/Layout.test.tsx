import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it´s rendered with the prop title", () => {
    test("Then it should render a heading with the text passed by the prop title ", () => {
      render(<Layout title={"Test title"}></Layout>);

      const heading = screen.getByRole("heading", { name: "Test title" });

      expect(heading).toBeInTheDocument();
    });
  });
});
