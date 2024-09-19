import "./CofrinhoFeliz.css"

function CofrinhoFeliz(props) {

  return (
    <div className="container-cofrinho-feliz">

        <h3>Preço do produto: R${props.valorProduto}</h3>
        <h3>Total guardado: R${props.totalGuardado}</h3>
        <h3>Resultado: {props.condicao}</h3>
        <img className="imagem-cofre-feliz" src="./images/cofrinho-feliz.png" alt="" />
      
    </div>
  )
}

export default CofrinhoFeliz
