import { useContext } from "react";
import TodoContext from "../context/todoContext";

const ToDoList: React.FC = () => {
  interface dataTypes {
    id: number;
    text: string;
  }
  const { data} = useContext(TodoContext);


  return (
    <ul className="list-group mt-3 card">
      {data.map((item: dataTypes) => (
        <li>{item.text}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
