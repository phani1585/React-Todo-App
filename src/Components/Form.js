import React from "react";
import '../styles.css'

const Form = ({todo,setTodo,todoList,setTodoList}) => {

    const handleChange = (event) => {
        setTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(todo === ''){
            alert("Todo Can't be Empty")
        }else {
            setTodoList([...todoList,{name:todo,id:Date.now()}])
            setTodo('')
        }
    }

    return(
        <div className="input-container">
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={handleChange} placeholder="Enter Your Task Here" name="todo" className="input"/>
                <button type="submit" className="add-btn">ADD</button>
            </form>
        </div>
    );
}

export default Form;