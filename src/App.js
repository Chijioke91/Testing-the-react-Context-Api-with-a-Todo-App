import React, { createContext } from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';
import TodoContextProvider from './context/TodoContext';

export const TodoContext = createContext();

const App = () => {
  return (
    <TodoContextProvider>
      <div>
        <header>My Todo</header>
        <Form />
        <Todolist />
      </div>
    </TodoContextProvider>
  );
};

export default App;
