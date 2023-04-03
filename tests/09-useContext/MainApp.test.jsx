import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routesConfig } from "../../src/09-useContext/routesConfig";

describe("Testing <MainApp /> component", () => {
  test("should show Home Page", () => {
    const router = createMemoryRouter(routesConfig, { initialEntries: ["/"] });
    render(<RouterProvider router={router} />);

    const head = screen.getByRole("heading", { level: 1 }).innerHTML;
    expect(head).toContain("Home Page");
  });

  test("should show Login Page", () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/login"],
    });
    render(<RouterProvider router={router} />);

    const head = screen.getByRole("heading", { level: 1 }).innerHTML;
    expect(head).toContain("Login Page");
  });
});
