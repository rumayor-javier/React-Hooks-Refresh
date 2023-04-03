import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Testing <LoginPage /> component", () => {
  const user = {
    id: 1,
    name: "John",
    email: "john@google.com",
  };

  test("Should render initially without user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("Should call setUser when setUser btn clicked", () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");

    const button = screen.getByRole("setUserButton");
    fireEvent.click(button);
    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: "Rudolph",
      email: "rudo@google.con",
    });
  });
});
