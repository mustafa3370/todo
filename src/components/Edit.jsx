import React, { useState } from 'react'

function Edit({editTodo,task}) {
   const [value, setvalue] = useState('');
   const handleSubmit=e=>{
     e.preventDefault();
     editTodo(value , task.id)
   }
  return (
    <form className='mb-4 font-primary w-full flex justify-center ' onSubmit={handleSubmit}>
  <input
    id="query"
    class="input"
    type="text"
    placeholder="Update Your task"
    
    onChange={(e)=>setvalue(e.target.value)} value={value}
  />

<button>Update</button>


    </form>
  )
}

export default Edit
