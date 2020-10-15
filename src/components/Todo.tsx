import React from "react";
import { TodoModel } from "../types/todo.model";

interface Props {
    todo: TodoModel;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
}

const Todo: React.FC<Props> = ({ todo, toggleTodo, deleteTodo }) => {

    const onChange = () => {
        toggleTodo(todo.id);
    };

    const onClick = () => {
        deleteTodo(todo.id);
    };

    return (
        <div>
            <input 
                type="checkbox"
                checked={ todo.completed }
                onChange={ onChange }
            />
            { todo.name }
            <button onClick={ onClick }>X</button>
        </div>
    );
};

export default Todo;