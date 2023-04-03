export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between"
    >
      <span
        className={`align-self-center text-capitalize ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        aria-label="span"
        role="button"
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.desc}
      </span>
      <button
        className="btn btn-danger"
        role="deleteButton"
        onClick={() => onDeleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
};
