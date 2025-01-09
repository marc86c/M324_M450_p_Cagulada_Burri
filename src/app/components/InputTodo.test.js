import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputTodo from './InputTodo';

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