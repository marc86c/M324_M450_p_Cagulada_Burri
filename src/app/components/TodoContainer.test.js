import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputTodo from './InputTodo';
import TodoContainer from "./TodoContainer";

describe('InputTodo', () => {
  test('renders input and add button', () => {
    render(<InputTodo addTodoProps={jest.fn()} />);

    expect(screen.getByPlaceholderText(/add todo/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('calls addTodoProps with correct input', () => {
    const addTodoMock = jest.fn();
    render(<InputTodo addTodoProps={addTodoMock} />);

    const inputElement = screen.getByPlaceholderText(/add todo/i);
    const addButton = screen.getByTestId('add');

    fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    expect(addTodoMock).toHaveBeenCalledWith('Test Todo', expect.any(String), expect.any(Number));
    expect(inputElement).toHaveValue('');
  });

  test('shows alert on empty input', () => {
    window.alert = jest.fn();
    render(<InputTodo addTodoProps={jest.fn()} />);

    const addButton = screen.getByTestId('add');

    fireEvent.click(addButton);

    expect(window.alert).toHaveBeenCalledWith('Please write item');
  });
});


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
  test("adds a new todo item and set priority", () => {
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
