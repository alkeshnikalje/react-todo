import Todo from "./todo";
export default function TodoList({
  todos,
  onHandleDeleteTodo,
  onHandleUpdateTodo,
}) {
  const SortedTodos = todos.sort((a, b) => {
    if (a.isDone === b.isDone) {
      // If isDone values are the same, maintain the original order
      return 0;
    } else if (a.isDone) {
      // Move objects with isDone true to the end
      return 1;
    } else {
      // Move objects with isDone false to the front
      return -1;
    }
  });

  return (
    <ul className="todo-list">
      {SortedTodos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          onHandleDeleteTodo={onHandleDeleteTodo}
          onHandleUpdateTodo={onHandleUpdateTodo}
        />
      ))}
    </ul>
  );
}
