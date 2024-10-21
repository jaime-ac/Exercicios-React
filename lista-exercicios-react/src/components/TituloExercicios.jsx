import "./TituloExercicios.css"

function TituloExercicios(props) {
  return (
    <div className="container-exercicio">

        <h3 className="titulo-exercicio">{props.texto} {props.emoji}</h3>
      
    </div>
  )
}

export default TituloExercicios
