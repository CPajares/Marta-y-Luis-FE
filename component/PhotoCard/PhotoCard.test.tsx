import { render, screen } from "@testing-library/react";
import PhotoCard from "./PhotoCard";

describe("Given a PhotoCard component", () => {
  describe("When it´s render", () => {
    test("Then it should render the image received by props ", () => {
      const photos = [
        {
          photo: "http...",
          title: "Amor",
          author: "Mario",
          id: "12345",
        },
      ];

      render(<PhotoCard photos={photos} />);

      const heading = screen.getByRole("img", { name: "Amor" });

      expect(heading).toBeInTheDocument();
    });
  });
});
