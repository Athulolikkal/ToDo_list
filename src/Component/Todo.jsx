import React, { useState } from 'react'
import AddTask from './AddTask'
import ListTask from './ListTask'
import './Todo.css'
const Todo = () => {
 
    const [task,setTasks]=useState([]);
 
 
//     const addTask=(title)=>{
//     const newTask=[...task,{title}]
//     setTasks(newTask)
//  }


const addTask=(value)=>{
   const newTask=[...task,{title:value,status:false}]
   setTasks(newTask)
}



 const removeTask=(index)=>{
    const newTask=[...task]
    newTask.splice(index,1)
    setTasks(newTask)
 }

 const taskCompleted=(value,index)=>{
  console.log(index,'indexxx');
  console.log(value,'valueee');
   const newTask=[...task]
   newTask[index].status=value;
   setTasks(newTask);
 }
 
 
    return (
   <>
   
   <div className='todo-container'>
   <div className='header' style={{fontWeight:'bold',padding:'3px 2px'}}>TO-DO APP</div>
  
   <div className='add-task'>
    <AddTask addTask={addTask} />
   </div>
   <div className='tasks'>
   
   {task.map((task,index)=>(
   <ListTask task={task} removeTask={removeTask} taskCompleted={taskCompleted} index={index} key={index} />
   ))}
   
    
   </div>
   </div>
   </>
   
    
  )
}

export default Todo