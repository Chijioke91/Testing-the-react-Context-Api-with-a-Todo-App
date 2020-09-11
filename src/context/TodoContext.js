import React, { createContext, useState, useEffect, useCallback } from 'react';

export const TodoContext = createContext([]);

const TodoContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filterBy, setFilterBy] = useState('all');

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const todoComplete = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  // used useCallback to avoid re-rendering of the function as that is a dependency for our useEffect
  const handleFilter = useCallback(() => {
    switch (filterBy) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;

      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;

      default:
        return setFilteredTodos(todos);
    }
  }, [filterBy, todos]);

  // set todos to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    handleFilter();
  }, [todos, handleFilter]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        inputValue,
        setInputValue,
        deleteTodo,
        todoComplete,
        filteredTodos,
        setFilterBy,
        handleFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
