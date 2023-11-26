import './App.css'
import Contador from './components/Contador/Contador';

function App() { 
  

  return (
    <>
    <main>
        <h1>Boca de Urna</h1>
      <div className='container'>
       
      <div className='cont'>
        <Contador nombre = 'Candidato 1 '/>
        <p></p>
      </div>
    <div className='cont'>
    <Contador nombre='Candidato 2 '  />
    <p></p>
    </div>
    </div>
    </main>
    </>
    
  )
}

export default App
