/* eslint react/prop-types: 0 */
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);
  const [isNearDeadline, setIsNearDeadline] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const duestyle = {
    paddingleft: "10%",
  };

  const { completed, id, title, priority, dueDate } = props.todo;

  // Überprüfen, ob das Fälligkeitsdatum innerhalb der nächsten 24 Stunden liegt
  useEffect(() => {
    if (dueDate) {
      const dueDateObj = new Date(dueDate);
      const now = new Date();
      const timeDiff = dueDateObj - now;
      setIsNearDeadline(timeDiff <= 24 * 60 * 60 * 1000 && timeDiff >= 0);
    }
  }, [dueDate]);

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <li
      className={styles.item}
      data-type="todo-item"
      style={isNearDeadline ? { backgroundColor: "lightcoral" } : {}}
    >
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
          name="checkbox"
        />
        <input
          data-testid={`priority-${title}`}
          type="number"
          value={priority || ""}
          onChange={(e) => props.changePriority(id, e.target.value)}
          className={styles.textInputPriority}
        />
        <button
          data-testid={`delete-${title}`}
          data-set="delete-todo-btn"
          onClick={() => props.deleteTodoProps(id)} 
        >
          <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
        <span className={styles.dueDate} style={duestyle} data-testid={`dueDate-${title}`}>
          {` - ${dueDate}` ? ` - Due: ${new Date(dueDate).toLocaleDateString()}` : ""}
        </span>
      </div>
      <input
        data-testid={`input-${title}`}
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
