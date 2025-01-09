'use client'

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import styles from "./TodoContainer.module.css";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [isClient, setIsClient] = useState(false); // Zustand, um sicherzustellen, dass der Code im Client ausgeführt wird

  // Initiale To-Dos aus dem Local Storage holen
  const getInitialTodos = () => {
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };

  useEffect(() => {
    setIsClient(true); // Setzt isClient auf true, wenn der Client geladen wurde
  }, []);

  useEffect(() => {
    if (isClient) {
      setTodos(getInitialTodos());
    }
  }, [isClient]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const changePriority = (id, newPriority) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, priority: newPriority } : todo
      )
    );
  };

  const addTodoItem = (title, dueDate, priority) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
      dueDate: dueDate,
      priority: priority
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    if (isClient) {
      const temp = JSON.stringify(todos);
      localStorage.setItem("todos", temp);
    }
  }, [todos, isClient]);

  

  return (
    <div className={styles.inner}>
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
        setUpdate={setUpdate}
        changePriority={changePriority}
      />
    </div>
  );
};

export default TodoContainer;
