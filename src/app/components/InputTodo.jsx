/* eslint react/prop-types: 0 */
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = (props) => {

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Einen Tag hinzufügen
    return tomorrow.toISOString().split("T")[0]; // YYYY-MM-DD Format
  };

  const [inputText, setInputText] = useState({
    title: "",
    dueDate: getTomorrowDate(),
    priority: 1,
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title, inputText.dueDate, inputText.priority); // Fälligkeitsdatum mit übergeben
      setInputText({
        title: "",
        dueDate: "",
        priority: 0
      });
    } else {
      alert("Please write item");
    }
  };

  return (
    <form
      data-set="todo-form"
      onSubmit={handleSubmit}
      className="form-container"
    >
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <input
        type="number"
        placeholder="Priority"
        value={inputText.priority}
        name="priority"
        min="1" // Minimale erlaubte Zahl (wird von Browser unterstützt)
        onChange={(e) => {
          const value = parseInt(e.target.value, 10);

          // Validierung: Nur Werte >= 1 zulassen
          if (value >= 1 || e.target.value === "") {
            setInputText({
              ...inputText,
              priority: e.target.value === "" ? "" : value, // Leeres Feld oder gültigen Wert setzen
            });
          }
        }}
      />
      <input
        data-testid="dueDate-add"
        type="date"
        className="input-date"
        value={inputText.dueDate}
        name="dueDate"
        onChange={onChange} // Fälligkeitsdatum aktualisieren
      />
      <button data-set="add-todo-btn" className="input-submit" data-testid="add">
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default InputTodo;
