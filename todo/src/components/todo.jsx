export default function Todo({ todo, onHandleDeleteTodo, onHandleUpdateTodo }) {
  return (
    <li className="todo">
      <input type="checkbox" onClick={() => onHandleUpdateTodo(todo.id)} />
      <span
        style={todo.isDone ? { textDecoration: "line-through" } : {}}
      >{` ${todo.description} `}</span>
      <button onClick={() => onHandleDeleteTodo(todo.id)}>X</button>
    </li>
  );
}
