
import React from "react";
import TodoListItem from "./to-do-list-item";

const TodoList = ({todoe}) =>{
    const elements = todoe.map((item)=>{
        const {id, ...itemProps} = item;
        return  (
            <li key = {id} className="list-group-item">
                <TodoListItem {...itemProps}/>
             </li>)
    })
    return(
        <ul className="list-group">
            {elements}
        </ul>
    );
};

export default TodoList;
