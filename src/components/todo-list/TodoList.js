import "./TodoList.css";
import TodoItem from "../todo-item/TodoItem";

const TodoList = (props) => {
  return (
    <ul>
      {props.todoGroup.map((todo) => {
        return <TodoItem todoItem={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
