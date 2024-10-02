import "./AtendimentoFarmarcia.css"
import { useState } from "react"

function AtendimentoFarmarcia() {

    const [filaNormal, setFilaNormal] = useState([])
    const [filaPreferencial, setFilaPreferencial] = useState([])
    const [atendimento, setAtendimento] = useState()
    const [classeAtendimento, setClasseAtendimento] = useState("atendimento-vazio")
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

            setAtendimento(`${filaPreferencial[0].tipo} ${filaPreferencial[0].numero}`)
            setClasseAtendimento("senhas-preferenciais")
            setFilaPreferencial(filaPreferencial.slice(1))

        }else if (filaNormal.length){

            setAtendimento(`${filaNormal[0].tipo} ${filaNormal[0].numero}`)
            setClasseAtendimento("senhas-normais")
            setFilaNormal(filaNormal.slice(1))

        }else{

            setClasseAtendimento("atendimento-vazio")

        }

    }

    return (

        <div className="container-atendimento">

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

                    <div className={classeAtendimento}>

                        {atendimento}

                    </div>

                </div>

            </div>

        </div>   

    )

}

export default AtendimentoFarmarcia
