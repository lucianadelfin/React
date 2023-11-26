import React,{ useEffect, useState} from 'react'
import { TaskForm,TaskList } from './components'

import './App.css'


function App() {
  const [tasks, setTasks]=useState([])
  const [currentTasks, setCurrentTasks] =useState([])
  const [search, setSearch] = useState('')
  

  const addTask=(task)=>{
    setTasks([...tasks, task])


  }
  const deleteTask=(taskId)=>{
    setTasks(tasks.filter(task=>task.id != taskId))
  }
  
  const handleChangeFilter= (e)=>{
    setSearch(e.target.value)
  }
  useEffect(()=>{
    setCurrentTasks(tasks.filter(task=>task.title.toLowerCase().includes(search.toLocaleLowerCase())))
  },[search, tasks])

  return (
    <>
      <div className='control-form'>
        <input type="text" placeholder='Buscar tu tarea..' value={search} onChange={handleChangeFilter}/>
      
      <TaskForm  addTask={addTask}/>
      </div>
      <div>
      <TaskList tasks={currentTasks} deleteTask={deleteTask} />
      
      </div>
      
    </>
  )
}

export default App
