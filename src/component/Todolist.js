import React from "react";
//Import components
import Todo from "./Todo"
function Todolist({todos,setTodos,filteredTodos}) {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                    setTodos={setTodos}
                    todos={todos}
                    key={todo.id} 
                    text={todo.text} 
                    todo={todo}
                    id={todo.id}/>
                ))}
            </ul>
        </div>
    );
};

export default Todolist;