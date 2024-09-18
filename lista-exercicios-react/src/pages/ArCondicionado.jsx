import { useState } from "react"
import TituloExercicios from "../components/TituloExercicios"
import "./ArCondicionado.css"
import { SiConvertio } from "react-icons/si";

function ArCondicionado() {
    const [celsius, setCelsius] = useState('')
    const [fahrenheit, setFahrenheit] = useState('')

    function converterParaFahrenheit(event){
        setCelsius(event.target.value)
        let f = (event.target.value * 9/5) + 32
        setFahrenheit(f.toFixed(1))
    }

    function converterParaCelsius(event){
        setFahrenheit(event.target.value)
        let c = (event.target.value - 32) * 5/9
        setCelsius(c.toFixed(1))

    }

  return (
    <div className="container-arCondicionado">

        <div className="container-titulo-exercicio">

            <TituloExercicios texto={"Ar Condicionado"} emoji={"⏱"}/>

        </div>

        <div className="container-descricao">

            <p className="enunciado-exercicio">Faça um programa onde o usuário irá converter graus Celsius para Fahrenheit ou Fahrenheit para Celsius</p>

        </div>

        <div className="parte-conversao">


            <div className="parte-imagem-celsius">

                <img className="imagens-conversao" src="./images/celsius.jpg" alt="" />
                <a className="nome-cientistas" href="https://pt.wikipedia.org/wiki/Anders_Celsius">Anders Celsius</a>

            </div>

            <div className="parte-conversao-temperatura">

                <div className="input-container">

                    <label htmlFor="input-Celsius">Graus Celsius</label>
                    <input className="inputs-conversao" type="text" id="input-Celsius" placeholder="digite a temperatura em Celsius"
                        value={celsius}
                        onChange={converterParaFahrenheit}
                    />

                </div>

                <div className="simbolo-conversao">

                    <SiConvertio />

                </div>

                <div className="input-container">

                    <label htmlFor="input-Fahrenheit">Graus Fahrenheit</label>
                    <input className="inputs-conversao" type="text" id="input-Fahrenheit" placeholder="digite a temperatura em Fahrenheit"
                        value={fahrenheit}
                        onChange={converterParaCelsius}
                    />

                </div>

            </div>

            <div className="parte-imagem-fahrenheit">

                <img className="imagens-conversao" src="./images/daniel-fahrenheit.jpg" alt="" />
                <a className="nome-cientistas" href="https://pt.wikipedia.org/wiki/Gabriel_Fahrenheit">Daniel Gabriel Fahrenheit</a>

            </div>

        </div>
      
    </div>
  )
}

export default ArCondicionado
