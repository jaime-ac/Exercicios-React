import { useState } from "react"
import TituloExercicios from "../components/TituloExercicios"
import "./Porquinho.css"
import CofrinhoTriste from "../components/CofrinhoTriste"
import CofrinhoFeliz from "../components/CofrinhoFeliz"

function Porquinho() {
    const [produto, setProduto] = useState('')
    const [moeda1real, setMoeda1Real] = useState('')
    const [moeda50centavos, setMoeda50Centavos] = useState('')
    const [moeda25centavos, setMoeda25Centavos] = useState('')
    const [moeda10centavos, setMoeda10Centavos] = useState('')
    const [moeda5centavos, setMoeda5Centavos] = useState('')
    const [resultadoCalculo, setResultadoCalculo] = useState()

    function calcularDinheiro(){

        let resultado = ((moeda1real * 1) + (moeda50centavos * 0.50) + (moeda25centavos * 0.25) + (moeda10centavos * 0.10) + (moeda5centavos * 0.05))

        if (produto > resultado){
            
            setResultadoCalculo(<CofrinhoTriste valorProduto={produto} totalGuardado={resultado.toFixed(2)} condicao={"Fundo Insuficiente"}/>)
            
        }else{

            setResultadoCalculo(<CofrinhoFeliz valorProduto={produto} totalGuardado={resultado.toFixed(2)} condicao={"Fundo Suficiente"}/>)
            
        }

    }

  return (
    <div className="porquinho-container">

        <div className="container-titulo-porquinho">

            <TituloExercicios texto={"Meu Cofre"} emoji={"💰🔐"}/>

        </div>

        <div className="container-descricao-porquinho">

            <p className="enunciado-exercicio-porquinho">Faça um programa que leia o valor de um produto e conte a quantidade de moedas no cofre. O programa deverá verificar se o total de reais que contem no cofrinho é o bastante para comprar o produto. </p>

            <button className="botao-quebrar-cofre">Quebrar cofre...🔓</button>

        </div>

        <div className="campo-preco-produto">

            <label htmlFor="preco-produto">Preço do Produto</label>
            <input className="input-campos" type="text"  id="preco-produto" placeholder="digite o preço do produto" 
                value={produto}
                onChange={(event) => setProduto(event.target.value)}
            />

        </div>

        <div className="container-calculo">

            <div className="campo-botoes-moedas">

                <input className="input-campos" type="text" placeholder="quantidade de moedas de 1 real"
                    value={moeda1real}
                    onChange={(event) => setMoeda1Real(event.target.value)}
                />

                <input className="input-campos" type="text" placeholder="quantidade de moedas de 50 centavos"
                    value={moeda50centavos}
                    onChange={(event) => setMoeda50Centavos(event.target.value)}
                />

                <input className="input-campos" type="text" placeholder="quantidade de moedas de 25 centavos"
                    value={moeda25centavos}
                    onChange={(event) => setMoeda25Centavos(event.target.value)}
                />

                <input className="input-campos" type="text" placeholder="quantidade de moedas de 10 centavos"
                    value={moeda10centavos}
                    onChange={(event) => setMoeda10Centavos(event.target.value)}
                />

                <input className="input-campos" type="text" placeholder="quantidade de moedas de 5 centavos"
                    value={moeda5centavos}
                    onChange={(event) => setMoeda5Centavos(event.target.value)}
                />

            </div>

            <div className="botao-realizar-calculo">

                <button className="botao-calculo" onClick={calcularDinheiro}>Contar dinheiro...</button>

            </div>

            <div className="campo-resultado">

                {resultadoCalculo}

            </div>

        </div>
      
    </div>
  )
}

export default Porquinho
