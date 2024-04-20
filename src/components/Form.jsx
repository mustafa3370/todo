import React, { useState } from 'react'

function Form({createTodo}) {
   const [value, setvalue] = useState('');
   const handleSubmit=e=>{
     e.preventDefault();
     createTodo(value)
   }
  return (<>
  <div className= 'title flex justify-center text-2xl font-extrabold mb-16 	'>
   <h1 className='tracking-wide'>TO DO LIST</h1>
  </div>
    <form className='mb-4 font-primary w-full flex justify-center ' onSubmit={handleSubmit}>
  <input
    id="query"
    class="input"
    type="text"
    placeholder="what task do you have ?"
    name="searchbar"
    onChange={(e)=>setvalue(e.target.value)} value={value}
  />

<button>Add</button>


    </form>
    
  </>)
}

export default Form
