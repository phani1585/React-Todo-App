import React, { useState } from "react";
import Header from "./Components/Header";
import Form from './Components/Form'
import TodoList from './Components/TodoList';

const Todo = () => {
    const [todo,setTodo] = useState('');
    const [todoList,setTodoList] = useState([]);

    return(
        <>
        <Header />
        <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}></Form>
        <TodoList setTodoList={setTodoList} todoList={todoList}/>
        </>
    );
}

export default Todo;