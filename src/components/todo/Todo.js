import "./Todo.css";
import { useState } from 'react';
import TodoGroups from "../todo-groups/TodoGroups";
import TodoCreate from "../todo-create/TodoCreate";

const Todo = () => {
  const [getTodos, setTodos] = useState([
  ]);

  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo));
    console.log(getTodos);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <div className="todo-list">
        <TodoGroups dataTodos={getTodos} />
      </div>
    </div>
  );
};

export default Todo;
