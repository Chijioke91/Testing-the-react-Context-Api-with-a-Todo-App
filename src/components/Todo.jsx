import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const Todo = ({ todo }) => {
  const { deleteTodo, todoComplete } = useContext(TodoContext);

  return (
    <div className="todo">
      <li className="todo-item">{todo.text}</li>
      <button className="complete-btn" onClick={() => todoComplete(todo.id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => deleteTodo(todo.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
