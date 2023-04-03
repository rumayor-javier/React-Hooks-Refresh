import { TodoList, TodoAdd } from "./components";
import { useTodos } from "./hooks/useTodos";

export const TodoApp = () => {
  const {
    todos,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
    todosCount,
    pendingTodosCount,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp: {todosCount()}, <small>Pending: {pendingTodosCount()}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Add Todo</h4>
          <hr />
          <TodoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
