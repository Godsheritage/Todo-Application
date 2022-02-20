import React from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ToDoInput from './components/ToDoInput';
import { TodoContextProvider } from './context/todoContext';

function App() {
  return (
    <TodoContextProvider>
      <div className="App container">
        <Header/>
        <ToDoInput/>
        <ToDoList/>
      </div>
    </TodoContextProvider>
  );
}

export default App;
