import { TodoItem } from "./components/TodoItem";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Context } from "./context";


export const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const createTodo = (text) => {
    setTodos([...todos, { text: inputValue, complete: false }]);
    setInputValue("");
    localStorage.setItem(
      "todo",
      JSON.stringify([ ...todos, {text: inputValue, complete: false} ])
    );
  };

  //   useEffect(()=>{
  // console.log("write new action")
  //   },[inputValue])

useEffect(()=>{
  let localTodos = JSON.parse(localStorage.getItem("todo"))
 localTodos && setTodos(localTodos)
},[])
  // useEffect(()=>{
  //   console.log("add new action")
  //     },[todos])

  const update = (arr) => {
    localStorage.setItem("todo",JSON.stringify(arr))
  }

  const completeTodo = (id) => {
    console.log("completed");
    let arr = [...todos];
    arr[id].complete = !arr[id].complete;
    setTodos(arr)
    update(arr)

  };
  const deleteTodo = (id) => {
    let arr = [...todos];
    arr.splice(id, 1);
    setTodos(arr)
    update(arr)
   };
  return (
    <Context.Provider value={{completeTodo,deleteTodo}}>
 <div className="App">
      <div>
        <h1 className="h1">Todo-List</h1>
        <input
          className="input"
          type="text"
          placeholder="type smth.."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button className="add" onClick={createTodo} >🐾</button>
      </div>
      { todos && todos.map((el, id) => {
        return (
          <TodoItem
            todo={el}
            id={id}
            key={id}
          />
        );
      })}
    </div>
    </Context.Provider>
   
  );
};

export default App;
