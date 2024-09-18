import { useState } from 'react'
import './App.css'
import TituloHome from './components/TituloHome'
import ArCondicionado from './pages/ArCondicionado'

function App() {
  const [pagina, setPagina] = useState()

  return (
    <>
      <div className='app-container'>

        <TituloHome/>

        <div className='nav-container'>

          <nav>
            <button className='botoes-navegacao' onClick={() => setPagina(<ArCondicionado/>)}>1</button>
            <button className='botoes-navegacao'>2</button>
            <button className='botoes-navegacao'>3</button>
            <button className='botoes-navegacao'>4</button>
            <button className='botoes-navegacao'>5</button>
            <button className='botoes-navegacao'>6</button>
            <button className='botoes-navegacao'>7</button>
            <button className='botoes-navegacao'>8</button>
            <button className='botoes-navegacao'>9</button>
            <button className='botoes-navegacao'>10</button>
            <button className='botoes-navegacao'>11</button>
          </nav>

        </div>

        <div className='paginas-container'>

          {pagina}

        </div>

      </div>
    </>
  )
}

export default App
