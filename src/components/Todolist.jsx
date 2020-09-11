import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import Todo from './Todo';

const Todolist = () => {
  const { filteredTodos } = useContext(TodoContext);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos &&
          filteredTodos.map((todo, id) => <Todo key={id} todo={todo} />)}
      </ul>
    </div>
  );
};

export default Todolist;
