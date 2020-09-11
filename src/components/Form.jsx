import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const Form = () => {
  const {
    setInputValue,
    inputValue,
    todos,
    setTodos,
    setFilterBy,
  } = useContext(TodoContext);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputValue, completed: false, id: Math.random() * 1000 },
    ]);
    setInputValue('');
  };

  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={inputValue}
        onChange={handleChange}
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          onChange={handleFilterChange}
          name="todos"
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
