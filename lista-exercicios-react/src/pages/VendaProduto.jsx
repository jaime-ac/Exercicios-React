import "./VendaProduto.css"
import { useState } from "react"
import TituloExercicios from "../components/TituloExercicios"

function VendaProduto() {
    const [valorVenda, setValorVenda] = useState()
    const [valorProduto, setValorProduto] = useState('')

    function valorVendaProduto(){

        if(Number(valorProduto) < 20){

            let lucroProduto = Number(valorProduto) * 0.45
            setValorVenda(Number(valorProduto) + lucroProduto)
            
        }else{
            
            let lucroProduto = Number(valorProduto) * 0.30
            setValorVenda(Number(valorProduto) + lucroProduto)

        }

        // setValorVenda(valorProduto)
    }

  return (
    <div className="container-venda-produto">

        <div className="container-titulo-venda">

            <TituloExercicios texto={"Vender Produto"} emoji={"🤑"}/>

        </div>

        <div className="container-enunciado-venda">

            <p className="enunciado-venda">Um comerciante comprou um produto e quer vendê-lo com lucro de 
            45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
            será de 30%. Faça um programa que entre com o valor do produto e mostre 
            o valor de venda.</p>

        </div>

        <div className="container-calculo-venda">
            
            <div className="container-input-produto">

                <input type="text" className="valor-venda" placeholder="digite o valor do produto..."
                    value={valorProduto}
                    onChange={(event) => setValorProduto(event.target.value)}
                />
                
            </div>

            <div className="container-botao-venda">

                <button className="botao-calculo-venda" onClick={valorVendaProduto}>Calcular venda...</button>

            </div>

            <div className="container-resultado-venda">

                {valorVenda}

            </div>

        </div>
      
    </div>
  )
}

export default VendaProduto
