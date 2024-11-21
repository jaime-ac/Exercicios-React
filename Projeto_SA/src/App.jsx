import './App.css'
import { useState } from 'react'

function App() {

  const [username, setUsername] = useState("")

  function handleClick(e){

    setUsername(e.target.value)
    console.log(username)

    
  }
  
  function handlechange(e){
    
    setUsername(e.target.value)
    console.log(username)

  }


  return (
    <>
      <div className='div-login'>

        <h2>CADASTRAR</h2>

        <input className='inputs' type="text" placeholder='Nome'
          value={username} 
          onChange={handlechange}
        />
        
        <button className='botao-cadastro' onClick={handleClick}>Cadastrar</button>
        
      </div>
    </>
  )
}

export default App
