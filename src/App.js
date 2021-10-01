import React, { useState,useEffect } from 'react';
import './App.css';
//importing components 
import Form from './component/Form';
import Todolist from './component/Todolist';

function App() {
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([]);
  //RUN ONCE when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);
  //USE EFFECT
  useEffect(() => {
    filterHandler();
  },[todos, status] )
  //Functions
  function filterHandler() {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break
    }
  };
  //save to local
  function saveLocacalTodos() {
      localStorage.setItem('todos', JSON.stringify(todos));
  };
  function getLocalTodos() {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
     let todoLocal = JSON.parse(localStorage.getItem('todos'));
     setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header className="head">
        <h1>TODO LIST</h1>
      </header>
      <Form
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        setStatus={setStatus}
      />
      <Todolist 
      filteredTodos={filteredTodos}
      setTodos={setTodos} 
      todos={todos}/>
    </div>
  );
}

export default App;
