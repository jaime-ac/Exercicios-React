import "./CofrinhoTriste.css"

function CofrinhoTriste(props) {
  return (
    <div className="container-cofrinho-triste">

        <h3>Preço do produto: R${props.valorProduto}</h3>
        <h3>Total guardado: R${props.totalGuardado}</h3>
        <h3>Resultado: {props.condicao}</h3>
        <img className="imagem-cofre-triste" src="./images/cofrinho-triste.png" alt="" />
      
    </div>
  )
}

export default CofrinhoTriste
