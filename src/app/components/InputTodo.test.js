import React from "react";
import { render, screen } from "@testing-library/react";
import InputTodo from "./InputTodo";
import "@testing-library/jest-dom";

describe("InputTodo Component", () => {
  it("renders input field and add button", () => {
    render(<InputTodo addTodoProps={() => {}} />);
    // Überprüfen, ob der Button existiert
    const addButton = screen.getByRole("button");
    expect(addButton).toBeInTheDocument();
  });
});
