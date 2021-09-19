import "./TodoGroups.css";
import TodoList from '../todo-list/TodoList'

const TodoGroups = (props) => {
  //console.log(props);
  const importantUrgentTodos = [];
  const importantNotUrgentTodos = [];
  const notImportantUrgentTodos = [];
  const notImportantNotUrgentTodos = [];

  for (const todo of props.dataTodos) {
    console.log(todo);
    console.log(todo.important);
    console.log(todo.urgent);
    if (todo.important === true) {
      if (todo.urgent === true) {
        importantUrgentTodos.push(todo);
      } else {
        importantNotUrgentTodos.push(todo);
      }
    } else {
      if (todo.urgent === true) {
        notImportantUrgentTodos.push(todo);
      } else {
        notImportantNotUrgentTodos.push(todo);
      }
    }
  }

  return (
    <>
      <section className="todo-group">
        <h2>Do</h2>
        <TodoList todoGroup={importantUrgentTodos}/>
      </section>
      <section className="todo-group">
        <h2>Decide</h2>
        <TodoList todoGroup={importantNotUrgentTodos}/>
      </section>
      <section className="todo-group">
        <h2>Delegate</h2>
        <TodoList todoGroup={notImportantUrgentTodos}/>
      </section>
      <section className="todo-group">
        <h2>Delete</h2>
        <TodoList todoGroup={notImportantNotUrgentTodos}/>
      </section>
    </>
  );
};

export default TodoGroups;
