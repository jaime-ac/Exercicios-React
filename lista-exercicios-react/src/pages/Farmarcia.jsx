
import { useState } from "react"
import ProdutosFarmarcia from "../components/ProdutosFarmarcia"
import "./Farmarcia.css"

function Farmarcia() {
    const [produtos, setProdutos] = useState(false)
    const [filaNormal, setFilaNormal] = useState([])
    const [filaPreferencial, setFilaPreferencial] = useState([])
    const [contador, setContador] = useState(1)

    function senhaNormal(){

        let senha_normal = {

            numero: contador,
            tipo: 'Normal'

        }

        setContador(contador + 1)

        setFilaNormal([...filaNormal, senha_normal])
        
    }

    function senhaPreferencial(){

        let senha_preferencial = {

            numero: contador,
            tipo: 'Preferencial'

        }

        setContador(contador + 1)

        setFilaPreferencial([...filaPreferencial, senha_preferencial])

    }

    function chamarPaciente(){

        if (filaPreferencial.length){

            alert(filaPreferencial[0].numero)
            setFilaPreferencial(filaPreferencial.slice(1))

        }else if (filaNormal.length){

            alert(filaNormal[0].numero)
            setFilaNormal(filaNormal.slice(1))

        }

    }

  return (
    <div className="container-farmarcia">

        <div className="container-cabecalho">

            <img src="./farmarcia/farmarcia-logo.png" alt="" className="logo-farmarcia"/>
            <img src="./farmarcia/farmarcia-placa.png" alt="" className="placa-farmarcia"/>

        </div>

        <div className="container-visual">

            <img src="./farmarcia/farmarcia.png" alt="" className="imagem-farmarcia"/>
            <button className="botao-produtos" onClick={ () => setProdutos(!produtos) }>Ver produtos</button>
            {produtos && <ProdutosFarmarcia/>}

        </div>

        <div className="container-atendimento">

            <button className="botao-atendimento">Atendimento</button>

            <div className="container-botoes">

                <div className="container-normal">

                    <button className="botoes-atendimento" onClick={senhaNormal}>Senha Normal</button>

                    {filaNormal.map((senha_normal) => (

                        <div key={senha_normal.numero} className="senhas-normais">

                            <p>{senha_normal.tipo}</p>
                            <p>{senha_normal.numero}</p>

                        </div>

                    ))}

                </div>

                <div className="container-preferencial">

                    <button className="botoes-atendimento" onClick={senhaPreferencial}>Senha Preferencial</button>

                    {filaPreferencial.map((senha_preferencial) => (

                        <div key={senha_preferencial.numero} className="senhas-preferenciais">

                            <p>{senha_preferencial.tipo}</p>
                            <p>{senha_preferencial.numero}</p>

                        </div>

                    ))}

                </div>

                <div className="container-atender">

                    <button className="botoes-atendimento" onClick={chamarPaciente}>Chamar Senha</button>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Farmarcia
