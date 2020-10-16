import React, { useRef, useState } from 'react';
import { uuid }  from 'uuidv4';
import Todolist from './components/Todolist';
import { TodoModel } from './types/todo.model';
import './App.scss';

interface AppState {
  todos: TodoModel[];
};

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({todos: []});

  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (inputRef != null && inputRef.current && inputRef.current.value) {
      setState({
        ...state,
        todos: [
          ...state.todos,
          {
            id: uuid(),
            name: inputRef.current.value,
            completed: false
          }
        ]
      });
      inputRef.current.value = '';
    }
  }

  const toggleTodo = (id: string) => {
    setState({
      ...state,
      todos: state.todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo)
    });
  };

  const deleteTodo = (id: string) => {
    setState({
      ...state,
      todos: state.todos.filter(todo => todo.id !== id)
    });
  };
  
  return (
    <div className="main-container">
      <Todolist todos={state.todos} toggleTodo={ toggleTodo } deleteTodo={ deleteTodo }></Todolist>
      <input className="input-container" type="text" ref={inputRef} placeholder="Type here"/>
      <button className="add-button-container" onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default App;