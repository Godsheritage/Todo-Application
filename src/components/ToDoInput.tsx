import React, { useContext, useState, useRef } from "react";
import TodoContext from "../context/todoContext";

const ToDoInput: React.FC = () => {
  const { text, addTodo } = useContext(TodoContext);
  const inputRef = useRef();
  const [isDisabled, setIsDisabled] = useState(false);
  const [message, setMessage] = useState("");

  const handleTextChange = (e: HTMLFormElement) => {
    console.log(e.target.value)
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <label htmlFor="todolist"></label>
        <input
          className="form-control"
          type="text"
          id="todolist"
          value={text}
          onChange={handleTextChange}
          // ref ={inputRef}
        />
        {console.log(inputRef)}
        {message ? <p className="text">{message}</p> : <></>}
        <button
          type="submit"
          disabled={isDisabled}
          className={isDisabled ? "btn btn-dark mt-3" : "btn btn-primary mt-3"}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default ToDoInput;









