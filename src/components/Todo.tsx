import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TodoModel } from "../types/todo.model";
import './Todo.scss';
import fontawesome from '@fortawesome/fontawesome';
import { faCheckSquare, faCoffee, faTrash } from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faCheckSquare, faCoffee, faTrash);

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
        <div className="todo-container">
            <input 
                className="checkbox-container"
                type="checkbox"
                checked={ todo.completed }
                onChange={ onChange }
            />
            <p className="todo-item">{ todo.name }</p>
            <FontAwesomeIcon className="delete-icon" onClick={ onClick } icon="trash" />
        </div>
    );
};

export default Todo;