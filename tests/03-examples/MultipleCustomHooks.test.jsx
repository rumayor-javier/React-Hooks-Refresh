import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Testing MultipleCustomHooks", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should show the component correctly", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("Random Product Finder"));

    const nextButton = screen.getByRole("button", { name: "Next Product" });
    const previousButton = screen.getByRole("button", {
      name: "Previous Product",
    });

    expect(nextButton.disabled).toBeTruthy();
    expect(previousButton.disabled).toBeTruthy();
  });

  test("should show the product information", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        title: "Fjallraven",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest.",
        category: "Mens clothing",
      },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Fjallraven")).toBeTruthy();
    expect(screen.getByText("$ 109.95")).toBeTruthy();
    expect(
      screen.getByText(
        "Your perfect pack for everyday use and walks in the forest."
      )
    ).toBeTruthy();
    expect(screen.getByText("Mens clothing")).toBeTruthy();
    expect(screen.getByRole("img", { name: "Fjallraven" })).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next Product" });
    const previousButton = screen.getByRole("button", {
      name: "Previous Product",
    });

    expect(nextButton.disabled).toBeFalsy();
    expect(previousButton.disabled).toBeFalsy();
  });

  test("should call increment function", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        title: "Fjallraven",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest.",
        category: "Mens clothing",
      },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next Product" });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
