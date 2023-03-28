import React,{useState} from 'react'


const AddTask = ({addTask}) => {
 
    const [value,setValue ]=useState('')

  const addItem=()=>{
   addTask(value)
   setValue('');
 }
   
    return (
  <>
  
  <div className='input-container '>
       
        <input type='text'  className='input ' placeholder='enter your task' value={value}  onChange={(e)=>{setValue(e.target.value)}} />
       
        
         {/* <br /> */}
        <br />
        {value?<i class="fa-sharp fa-solid fa-plus " onClick={addItem} ></i>:<i class="fa-sharp fa-solid fa-plus"></i>}
         
       
    </div>

    </>
  )
}

export default AddTask