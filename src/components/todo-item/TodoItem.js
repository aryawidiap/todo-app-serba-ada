//import { useState } from 'react';
import "./TodoItem.css";
const TodoItem = (props) => {
  //const [getTodoCompleted, setTodoCompleted] = useState();

  const handleComplete = (event) => {
    const isCompleted = event.target.parentNode.parentNode.firstChild;
    const isCompletedButton = event.target;
    if (isCompleted.className === "completed-false") {
      isCompleted.className = "completed-true";
      isCompletedButton.className = "buttonCompleted-true";
    } else {
      isCompleted.className = "completed-false";
      isCompletedButton.className = "buttonCompleted-false";
    }
    console.log(isCompleted);
  };
  const handleDelete = (event) => {
    const isDeleted = event.target.parentNode.parentNode;
    isDeleted.remove();
  };
  return (
    <li key={props.todoItem.id} draggable="true">
      <h3 className={"completed-" + props.todoItem.completed}>
        {props.todoItem.title}
      </h3>
      <div className="buttons">
        <button
          title="Complete Task"
          className={"buttonCompleted-" + props.todoItem.completed}
          onClick={handleComplete}
        >
          ✅
        </button>
        <button title="Delete Task" onClick={handleDelete}>
          🚫
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
