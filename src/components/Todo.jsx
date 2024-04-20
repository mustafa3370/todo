import React from 'react'
import{AiFillEdit} from 'react-icons/ai'
import{BsTrashFill } from 'react-icons/bs'
const Todo = ({task,deleteTodo,editTodo}) => {
 
  return (
    <div className='flex justify-between items-center bg-violet-800 text-white py-3 px-4 rounded-md 
    mb-1 cursor-pointer'>
      <p className='font-primary'>{task.task}</p>
      <div className='flex items-center gap-x-4'>
        <AiFillEdit className='text-x1'onClick={()=>editTodo(task.id)}/>
        <BsTrashFill  className='text-x1' onClick={()=>deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo
