import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/components/TodoItem";

describe("Testing <TodoItem />", () => {
  const demoTodo = {
    id: 1,
    desc: "Testing Todo",
    done: false,
  };

  const onToggleTodoMock = jest.fn();
  const onDeleteTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should show pending todo with normal text", () => {
    render(
      <TodoItem
        todo={demoTodo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain(
      "align-self-center text-capitalize"
    );
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("should show done todo with line-through text", () => {
    const doneTodo = {
      ...demoTodo,
      done: true,
    };

    render(
      <TodoItem
        todo={doneTodo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("should call onToggleTodo function", () => {
    render(
      <TodoItem
        todo={demoTodo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledTimes(1);
    expect(onToggleTodoMock).toHaveBeenCalledWith(demoTodo.id);
  });

  test("should call onDeleteTodo function", () => {
    render(
      <TodoItem
        todo={demoTodo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const buttonElement = screen.getByRole("deleteButton");
    fireEvent.click(buttonElement);

    expect(onDeleteTodoMock).toHaveBeenCalledTimes(1);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(demoTodo.id);
  });
});
