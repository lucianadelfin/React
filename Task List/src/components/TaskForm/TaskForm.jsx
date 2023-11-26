

import React, {useState} from 'react'
import { LuPlusCircle } from "react-icons/lu";
import { v4 as uuidv4 } from 'uuid';
import './TaskForm.css'


const TaskForm = ({addTask}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  
  const handleCloseModal=() => {
    setIsOpenModal(false)
  }

  const handleOpenModal=()=> {
    setIsOpenModal(true)

  }
  
  const handleSubmitTask = (e) =>{
    e.preventDefault()
    const title = e.target.title.value
    const description =e.target.description.value
    const task = {title,description,createAt :new Date().toDateString(),id:uuidv4()}
    addTask(task)
    handleCloseModal()
  }
  return (
    <div>
      <button onClick={handleOpenModal}> New Task <LuPlusCircle /> </button>
      {
        isOpenModal
        &&
        <div className='modal-backround'>
          <div className='modal'>
            <h2>New Task</h2>
            <form onSubmit={handleSubmitTask}>
              <div className="input-container">
                <input type="text" id='title'/>
              </div>

              <div className="input-container">
                <textarea name="description" id="description" cols="30" rows="10" placeholder='Descripcion de Tarea'></textarea>
              </div>
              <div>
                <button onClick={handleCloseModal} className='btn' >Cancelar</button>
                <button className='btn' type='submit'>Agregar</button>
              </div>
            </form>

          </div>

        </div>


      }

    </div>
  )
}

export default TaskForm