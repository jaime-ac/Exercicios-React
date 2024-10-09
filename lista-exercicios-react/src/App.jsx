import { useState } from 'react'
import './App.css'
import TituloHome from './components/TituloHome'
import ArCondicionado from './pages/ArCondicionado'
import Porquinho from './pages/Porquinho'
import MediaFinal from './pages/MediaFinal'
import VendaProduto from './pages/VendaProduto'
import Farmarcia from './pages/Farmarcia'
import AlturaValentinaEnzo from './pages/AlturaValentinaEnzo'
import PesquisaHabitantes from './pages/PesquisaHabitantes'

function App() {
  const [pagina, setPagina] = useState()

  return (
    <>
      <div className='app-container'>

        <TituloHome/>

        <div className='nav-container'>

          <nav>
            <button className='botoes-navegacao' onClick={() => setPagina(<ArCondicionado/>)}>1</button>
            <button className='botoes-navegacao' onClick={() => setPagina(<Porquinho/>)}>2</button>
            <button className='botoes-navegacao' onClick={() => setPagina(<MediaFinal/>)}>3</button>
            <button className='botoes-navegacao' onClick={() => setPagina(<VendaProduto/>)}>4</button>
            <button className='botoes-navegacao' onClick={() => setPagina(<Farmarcia/>)}>5</button>
            <button className='botoes-navegacao' onClick={() => setPagina(<AlturaValentinaEnzo/>)}>6</button>
            <button className='botoes-navegacao' onClick={() => setPagina(<PesquisaHabitantes/>)}>7</button>
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
