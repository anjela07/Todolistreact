import React, { useContext } from "react";
import { Context } from "../../context";

export const TodoItem =({todo,id})=>{
    const{deleteTodo,completeTodo} = useContext(Context)
    return <div className="todo-item" style={todo.complete  ? ready : unready}>
    <p className="text"> {todo.text}</p> <button className="btn" onClick={()=>completeTodo(id)} >{todo.complete  ? "✘" : "✔"}</button>
    <button className="btn2" onClick={()=>deleteTodo(id)}>🗑️</button>
    </div>
}

const ready ={
    textDecoration:"line-through"
}
const unready ={
    textDecoration:"none"
}