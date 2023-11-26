import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({tasks, deleteTask}) => {
  return (
    <div>
      {
        tasks.length==0
        ?<h2>Aun no ha ingresado tareas</h2>
        :tasks.map(task =>(
          <TaskItem task={task} key={task.id} deleteTask={deleteTask}/>

        ))         
          
      }    


    </div>
          
  )
}

export default TaskList