import React, { useState, createContext } from "react";
import todoData from "../shared/data";

const TodoContext = createContext(null);

interface dataTypes {
  id:number;
  text:string;
}
interface value {
  data:dataTypes[];
  text:string;
  addTodo:void
}
export const TodoContextProvider: React.FC<value> = ({ children }) => {
  const [text, setText] = useState("");

  const [data, setData] = useState(todoData);



  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem = {
      id: 4,
      text,
    };

    setData([newItem, ...data]);
    setText("");
  };

  return (
    <TodoContext.Provider value ={{ data, text, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
