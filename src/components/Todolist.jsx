import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import Todo from './Todo';

const Todolist = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </ul>
    </div>
  );
};

export default Todolist;
