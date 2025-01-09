/* eslint react/prop-types: 0 */
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

const TodosList = (props) => {
  
  const [sortByDueDate, setSortByDueDate] = useState(false);
  const [sortedTodos, setSortedTodos] = useState([]);


  // Aktualisiere die sortierte Liste, wenn sich `sortByDueDate` oder `todos` ändert
  useEffect(() => {
    const newSortedTodos = [...props.todos].sort((a, b) => {
      if (sortByDueDate) {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);

        // Sortiere zuerst nach Fälligkeitsdatum
        if (dateA - dateB !== 0) {
          return dateA - dateB;
        }

        // Falls die Fälligkeitsdaten gleich sind, sortiere nach Priorität
        return a.priority - b.priority;
      }

      // Standard-Sortierung nach Priorität
      return a.priority - b.priority;
    });
    setSortedTodos(newSortedTodos);
  }, [sortByDueDate, props.todos]);

  return (
    <div>
      <button onClick={() => setSortByDueDate(!sortByDueDate)}>
        {sortByDueDate ? "Nach Prio sortieren" : "Nach Fälligkeitsdatum sortieren"}
      </button>
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
      </div>
  );
};

export default TodosList;
