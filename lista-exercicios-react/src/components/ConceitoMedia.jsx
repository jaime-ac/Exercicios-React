import "./ConceitoMedia.css"

function ConceitoMedia(props) {
  return (
    <div className="container-componente-media">

        <h3 className="dados-resultado">Nome: {props.name}</h3>
        <h3 className="dados-resultado">Média: {props.media}</h3>
        <img className="imagem-conceito" src={props.situacao} alt="" />
        
    </div>
  )
}

export default ConceitoMedia
