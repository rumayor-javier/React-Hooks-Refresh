import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

const initialState = [];

const init = () => {
  const localTodos = localStorage.getItem("todos");
  return localTodos ? JSON.parse(localTodos) : [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (newTodo) => {
    dispatch({ type: "add", payload: newTodo });
  };

  const onDeleteTodo = (todoId) => {
    dispatch({ type: "delete", payload: todoId });
  };

  const onToggleTodo = (todoId) => {
    dispatch({ type: "toggle", payload: todoId });
  };

  const todosCount = () => {
    return todos.length
  }

  const pendingTodosCount = () => {
    return todos.filter((todo) => !todo.done).length
  }

  return {
    todos,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
    todosCount,
    pendingTodosCount
  }
}
