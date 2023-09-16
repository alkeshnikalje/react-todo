import { useState } from "react";

export default function TodoForm({ onHandleAddTodo }) {
  const [description, setDescription] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      description,
      isDone: false,
    };

    onHandleAddTodo(newTodo);

    setDescription("");
  };
  return (
    <form className="todo-form" onSubmit={handleOnSubmit}>
      <label>Add todos</label>
      <br />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
