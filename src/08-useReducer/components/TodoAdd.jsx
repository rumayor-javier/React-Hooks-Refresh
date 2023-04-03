import { useForm } from "../../hooks";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 0) return;
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="description"
        className="form-control"
        autoComplete="off"
        placeholder="Task..."
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-primary mt-1">
        Add
      </button>
    </form>
  );
};
