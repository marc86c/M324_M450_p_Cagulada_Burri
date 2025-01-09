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
    const addButton = screen.getByRole('button');

    fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    expect(addTodoMock).toHaveBeenCalledWith('Test Todo');
    expect(inputElement).toHaveValue('');
  });

  test('shows alert on empty input', () => {
    window.alert = jest.fn();
    render(<InputTodo addTodoProps={jest.fn()} />);

    const addButton = screen.getByRole('button');

    fireEvent.click(addButton);

    expect(window.alert).toHaveBeenCalledWith('Please write item');
  });
});


describe("TodoContainer - Add and Delete Todos", () => {
  test("adds a new todo item", () => {
    render(<TodoContainer />);
    
    const inputElement = screen.getByPlaceholderText(/Add todo.../i);
    
    fireEvent.change(inputElement, { target: { value: "Learn Testing" } });
    const addButton = screen.getByRole('button');

    fireEvent.click(addButton);

    const addedTodo = screen.getByText("Learn Testing");
    expect(addedTodo).toBeInTheDocument();
  });

  test("deletes a todo item", () => {
    render(<TodoContainer />);
    
    const inputElement = screen.getByPlaceholderText(/Add todo.../i);
    
    fireEvent.change(inputElement, { target: { value: "Learn Testing" } });
    const addButton = screen.getByRole('button');

    fireEvent.click(addButton);
    const deleteButton = screen.getByTestId("delete-Learn Testing");

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn Testing")).toBeNull();
  });

});

describe("TodoContainer - set priority", () => {
  test("adds a new todo item and set priority", () => {
    render(<TodoContainer />);
    
    const inputElement = screen.getByPlaceholderText(/Add todo.../i);
    
    fireEvent.change(inputElement, { target: { value: "Learn Testing" } });
    const addButton = screen.getByRole('button');

    fireEvent.click(addButton);
    
    const addedTodoPriority = screen.getByTestId("priority-Learn Testing");
    
    fireEvent.change(addedTodoPriority, { target: { value: '1' } });

    expect(addedTodoPriority.value).toBe('1');
  });

});
