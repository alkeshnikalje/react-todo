import { useState } from "react";
import Header from "./components/header";
import Form from "./components/addTodoForm";
import TodoList from "./components/todolist";
// const todos = [
//   { id: 1, description: "practice react for 2 hours" },
//   { id: 2, description: "go to the gym for two hours" },
// ];

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (item) => {
    setTodos((todos) => [...todos, item]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <div className="app">
      <Header />
      <Form onHandleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onHandleDeleteTodo={handleDeleteTodo}
        onHandleUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
}

export default App;
