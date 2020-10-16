import React from "react";
import Todo from "./Todo";
import { TodoModel } from "../types/todo.model";
import './Todolist.scss';

interface Props {
    todos: TodoModel[];
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;

}

const Todolist: React.FC<Props> = ({ todos, toggleTodo, deleteTodo }) => {

    return (
    <div className="todolist-container">
        { todos.map((todo) =>  
            <Todo key={ todo.id } todo={ todo } toggleTodo={ toggleTodo } deleteTodo= { deleteTodo }/>
        )}
    </div>
    );
};

export default Todolist;