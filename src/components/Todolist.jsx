import { useState } from 'react';
import Form from './Form';
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import Edit from './Edit';
uuidv4()
function Todolist() {
  const [todoValue, settodoValue] = useState([]);

  const createTodo = todo =>{
    settodoValue([...todoValue,{id:uuidv4(),task:todo,isEditing:false}])
  }
  const deleteTodo =id=>{
  settodoValue(todoValue.filter(todoValue=>todoValue.id !== id))  
  }
  const editTodo =id=>{
    settodoValue(todoValue.map(todo=> todo.id === id ? {...todo,isEditing:!todo.isEditing}:todo))
    }
  const editTask =(task, id)=>{
    settodoValue(todoValue.map(todo=> todo.id===id ? {...todo,task,isEditing:!todo.isEditing}:todo))
  }
  return (
  
    <div className='container mx-auto bg-[#FFC470] mt-20 p-8 rounded-md'>
      <Form createTodo={createTodo}/>
      {
        todoValue.map((todo,idx)=>(
          todo.isEditing?(
            <Edit key={idx} editTodo={editTask} task={todo}/>
          ):(
            <Todo task={todo} key={idx} deleteTodo={deleteTodo} editTodo={editTodo}/>
          )
        
        ))
      }
    </div>
  )
}

export default Todolist
