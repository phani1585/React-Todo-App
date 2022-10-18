import React, { useState } from 'react';
import '../styles.css'

const TodoRender = ({todoItem,todoList,setTodoList}) => {
    const [isDouble, setIsDouble] = useState(false)
    const [upvalue,setUpValue] = useState(todoItem.name)
    const handleDelete = () =>{
        setTodoList(todoList.filter(item => item.id !== todoItem.id))
    }

    const handleUpdate = () => {
        // e.preventDefault()
        const element = todoList.find(item => item.id === todoItem.id )
        element['name'] = upvalue
        todoList.splice(0,1,element)
        setTodoList(todoList)
        setIsDouble(false)
    }

    const handleUpdateChange = (e) =>{
        setUpValue(e.target.value)
        
    }
    
    return(
        <div className='todo-holder'>
            <div className='wrapper left'>           
                    <input type='checkbox'/>
                {
                    isDouble ? <form onSubmit={(e)=>{e.preventDefault(e);handleUpdate();}}>
                        <input className='todo-input-update'  onChange={handleUpdateChange} value={upvalue}/>
                        </form> : <div className='todo-render'  onDoubleClick={()=>{setIsDouble(true)}} >{todoItem.name}</div>
                }
            </div>
            <div className='wrapper Right'>
                {
                    isDouble ? <button onClick={handleUpdate} className='edit-btn'>Update</button>
                    :<button onClick={()=>{setIsDouble(true)}} className='edit-btn'>Edit</button>
                }
                
                <button onClick={handleDelete} className='close-btn'>-</button>
            </div>
        </div>
    );
}



export default TodoRender;