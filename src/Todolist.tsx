import React from "react";
import Todo from "./Todo";
import { TodoModel } from "./types/todo";

interface Props {
    todos: TodoModel[];
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;

}

const Todolist: React.FC<Props> = ({ todos, toggleTodo, deleteTodo }) => {

    return (
    <div>{ todos.map((todo) =>  
        <div className="todo-item">
            <Todo key={ todo.id } todo={ todo } toggleTodo={ toggleTodo } deleteTodo= { deleteTodo }/>
        </div>
        )}
    </div>
    );
};

export default Todolist;