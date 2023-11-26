import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import './TaskItem.css'

const TaskItem = ({task,deleteTask}) => {
  return (
    <div className='item-container'>
    <h3 className='item-title'>{task.title}</h3>
    <p className='description'>{task.description}</p>
    <span className='date'>{task.createAt} </span>
    
    <button className='btn-item' onClick={()=>deleteTask(task.id)}>Finalizar <RiDeleteBin6Line /> </button>
    

  </div>
  )
}

export default TaskItem