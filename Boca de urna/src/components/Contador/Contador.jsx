// Contador.js
import React, { useState } from 'react';
import './Contador.css'


function Contador(prop) {
  const [cantidad, setCantidad] = useState(0);

  function sumar (){
    setCantidad(cantidad + 1);
  }
  function restar(){ 
    if(cantidad ==0)
    return
    setCantidad(cantidad - 1);    

  } 
  return (
    <>     
       <h1>{prop.titulo}</h1>
      <div>
        <h2>{prop.nombre}</h2>
        <p>{ cantidad }</p>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
      </div>
    </>
  );
}

export default Contador;