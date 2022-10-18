import React from 'react';
import TodoRender from './TodoRen';

const TodoList = ({todoList,setTodoList}) => {
    return(
        <div>
            {
                todoList.map((todoItem)=>(
                    <TodoRender setTodoList={setTodoList} todoList={todoList} key={todoItem.id} todoItem={todoItem}/>
                ))
            }
            </div>
    );
}

export default TodoList;