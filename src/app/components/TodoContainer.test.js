import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoContainer from "./TodoContainer";

describe("TodoContainer - Add and Delete Todos", () => {
  test("adds a new todo item", () => {
    render(<TodoContainer />);
    
    const inputElement = screen.getByPlaceholderText(/Add todo.../i);
    
    fireEvent.change(inputElement, { target: { value: "Learn Testing" } });

    const addButton = screen.getByTestId('add');

    fireEvent.click(addButton);

    const addedTodo = screen.getByText("Learn Testing");
    expect(addedTodo).toBeInTheDocument();
  });

  test("deletes a todo item", () => {
    render(<TodoContainer />);
    
    const inputElement = screen.getByPlaceholderText(/Add todo.../i);
    
    fireEvent.change(inputElement, { target: { value: "Learn Testing" } });

    const addButton = screen.getByTestId('add');

    fireEvent.click(addButton);
    const deleteButtons = screen.getAllByTestId("delete-Learn Testing");
    const countOfEntries = deleteButtons.length;
    fireEvent.click(deleteButtons[0]);

    const newDeleteButtons = screen.getAllByTestId("delete-Learn Testing");
    const newCountOfEntries = newDeleteButtons.length;
    expect(countOfEntries).toBeGreaterThan(newCountOfEntries);
  });

});

describe("TodoContainer - set priority", () => {
  test("adds a new todo item and change priority", () => {
    render(<TodoContainer />);
    
    const inputElement = screen.getByPlaceholderText(/Add todo.../i);
    
    fireEvent.change(inputElement, { target: { value: "Learn Testing" } });

    const addButton = screen.getByTestId('add');

    fireEvent.click(addButton);
    
    const addedTodoPriority = screen.getAllByTestId("priority-Learn Testing");
    
    fireEvent.change(addedTodoPriority[0], { target: { value: '1' } });

    expect(addedTodoPriority[0].value).toBe('1');
  });

});

describe("TodoContainer - set dueDate", () => {
  test("adds a new todo item and set dueDate", async () => {
    render(<TodoContainer />);
    const inputElement = screen.getByPlaceholderText(/Add todo.../i);
    const dueDateElement = screen.getByTestId("dueDate-add");
    
    fireEvent.change(inputElement, { target: { value: "SetDueDateTest" } });
    fireEvent.change(dueDateElement, {target: {value: new Date(1900, 1, 1).toLocaleDateString()}});

    const addButton = screen.getByTestId('add');

    fireEvent.click(addButton);

    let addedTodo = screen.getByText("SetDueDateTest");
    expect(addedTodo).toBeInTheDocument();


    //not working man :C
    addedTodo = screen.getByTestId("dueDate-1900");
    expect(addedTodo).toBeInTheDocument();
  });

});