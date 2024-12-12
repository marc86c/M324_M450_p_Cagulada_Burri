/* eslint react/prop-types: 0 */
import TodoItem from "./TodoItem";

const TodosList = (props) => {
  const sortedTodos = [...props.todos].sort((a, b) => a.priority - b.priority);

  return (
    <ul data-set="todo-list">
      {sortedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
          changePriority={props.changePriority}
        />
      ))}
    </ul>
  );
};

export default TodosList;
