import React, { createContext, useState } from 'react';

export const TodoContext = createContext([]);

const TodoContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const todoComplete = (id) =>
    setTodos(
      todos.map(
        (todo) => todo.id === id && { ...todo, completed: !todo.completed }
      )
    );

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        inputValue,
        setInputValue,
        deleteTodo,
        todoComplete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
