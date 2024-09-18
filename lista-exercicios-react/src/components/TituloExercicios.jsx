import "./TituloExercicios.css"

function TituloExercicios(props) {
  return (
    <div className="container-exercicio">

        <h3>{props.texto} {props.emoji}</h3>
      
    </div>
  )
}

export default TituloExercicios
