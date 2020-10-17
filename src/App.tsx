import React, { useRef, useEffect, useState, FC } from "react";
import Todolist from "./components/Todolist";
import { TodoModel } from "./types/todo.model";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 } from "uuid";

interface AppState {
  todos: TodoModel[];
}

const App: FC = () => {
  const localStorageState = localStorage.getItem("state");
  const parsedState = localStorageState
    ? JSON.parse(localStorageState)
    : undefined;
  const [state, setState] = useState<AppState>(parsedState || { todos: [] });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (inputRef != null && inputRef.current && inputRef.current.value) {
      setState({
        ...state,
        todos: [
          ...state.todos,
          {
            id: v4(),
            name: inputRef.current.value,
            completed: false,
            createdAt: new Date().toLocaleString(),
          },
        ],
      });
      inputRef.current.value = "";
    }
  };

  const toggleTodo = (id: string) => {
    setState({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  };

  const deleteTodo = (id: string) => {
    setState({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="main-container">
      <div className="header-container">
        <FontAwesomeIcon className="list-icon" icon="list"></FontAwesomeIcon>
        <h1 className="header">Simple TODO app</h1>
      </div>
      <div className="divider"></div>
      <label className="input-label">Enter something you want to do:</label>
      <input
        className="input-container"
        type="text"
        onKeyDown={handleKeyDown}
        ref={inputRef}
        placeholder="Type here"
      />
      <button className="add-button-container" onClick={addTodo}>
        Add Todo
      </button>
      <Todolist
        todos={state.todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      ></Todolist>
    </div>
  );
};

export default App;
