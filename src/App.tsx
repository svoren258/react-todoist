import React, { useRef, useState } from 'react';
import { uuid }  from 'uuidv4';
import Todolist from './components/Todolist';
import { TodoModel } from './types/todo.model';

interface AppState {
  todos: TodoModel[];
};

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({todos: []});

  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (inputRef != null && inputRef.current) {
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
    <div>
      <Todolist todos={state.todos} toggleTodo={ toggleTodo } deleteTodo={ deleteTodo }></Todolist>
      <input type="text" ref={inputRef}/>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default App;