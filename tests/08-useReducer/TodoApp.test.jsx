import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/08-useReducer/hooks/useTodos";

jest.mock("../../src/08-useReducer/hooks/useTodos");

describe("Testing <TodoApp />>", () => {
  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        desc: "Demo todo 1",
        done: true,
      },
      {
        id: 2,
        desc: "Demo todo 2",
        done: false,
      },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleAddTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  jest.clearAllMocks();

  test("should should render the component", () => {
    render(<TodoApp />);
    expect(screen.getByText("Demo todo 1")).toBeTruthy();
    expect(screen.getByText("Demo todo 2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
