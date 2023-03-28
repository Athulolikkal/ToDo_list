import React from 'react'
// import {Form} from 'react-bootstrap'

const ListTask = ({task,index,removeTask,taskCompleted}) => {
  return (
   <>
   <div className='list-Task'>
   
   <input className='checkbox' type="checkbox" name='' id="" style={{float:'left'}} onChange={(e)=>{taskCompleted(e.target.checked,index)}} />
        
       {task.status?<p style={{display:'inline-block',textDecoration:'line-through',textDecorationColor:'white',opacity:'0.5'}}>{task.title}</p>:<p style={{display:'inline-block'}}>{task.title}</p>}
       
       <i className="fa fa-trash delete-icon"  onClick={()=>{removeTask(index)}} ></i>
      
    
       </div>
      
   </>
    
  )
}

export default ListTask