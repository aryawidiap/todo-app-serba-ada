import "./TodoCreate.css";
import { useState } from "react";

const getId = () => {
  const d = new Date();
  return d.getTime();
};

const TodoCreate = (props) => {
  const [getTodoTitle, setTodoTitle] = useState("");
  const [getTodoImportance, setTodoImportance] = useState();
  const [getTodoUrgency, setTodoUrgency] = useState();
  
  const handleTodoTitle = (event) => {
    setTodoTitle(event.target.value);
  };
  const handleTodoImportance = (event) => {
    setTodoImportance(event.target.checked);
  };
  const handleTodoUrgency = (event) => {
    setTodoUrgency(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: getId() + 1,
      title: getTodoTitle,
      important: event.target.important.checked,
      urgent: event.target.urgent.checked,
      completed: false
    };

    props.onCreateTodo(newTodo);

    setTodoTitle("");
    setTodoImportance(false);
    setTodoUrgency(false);
    //console.log(newTodo);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={getTodoTitle}
        onChange={handleTodoTitle}
        placeholder="Input your task here"
        name="title-input"
        required="required"
      />
      <div id='importanceCheckbox'>
        <input
          type="checkbox"
          id="important"
          name="important"
          checked={getTodoImportance}
          onChange={handleTodoImportance}
        />
        <label htmlFor="important">important</label>
      </div>
      <div id='urgencyCheckbox'>
        <input
          type="checkbox"
          id="urgent"
          name="urgent"
          checked={getTodoUrgency}
          onChange={handleTodoUrgency}
        />
        <label htmlFor="urgent">urgent</label>
      </div>
      <button type="submit">+</button>
    </form>
  );
};

export default TodoCreate;
