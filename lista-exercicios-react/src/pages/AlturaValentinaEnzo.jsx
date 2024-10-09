import { useState } from "react"
import TituloExercicios from "../components/TituloExercicios"
import "./AlturaValentinaEnzo.css"

function AlturaValentinaEnzo() {

  const [anos, setAnos] = useState('')

  let contador = 0
  let alturaValentina = 150
  let alturaEnzo = 140

  function calcularTempo() {

    while (alturaValentina >= alturaEnzo) {

      alturaValentina += 2
      alturaEnzo += 3

      contador++

    }

    setAnos(`${contador} anos.`)
  }

  return (

    <div className="container-altura">

      <div className="container-titulo-altura">

        <TituloExercicios texto={"Altura versus Idade"} emoji={"📏"} />

      </div>

      <div className="contaier-descricao-altura">

        <p className="enunciado-altura">
          Crie um programa/script/algoritmo que mostre quando Enzo será mais
          alto que Valentina.
        </p>

      </div>

      <div className="container-exercicio-altura">

        <div className="parte-valentina">

          <p className="texto-personagens">Olá, sou Valentina, irmã do mano Juca, tenho 1.50 metros de altura e cresço 2 cm por ano.</p>

          <img
            src="./images/valentina.png"
            alt=""
            className="imagens-personagens"
          />

        </div>

        <div className="parte-calculo">

          <button className="botao-altura" onClick={calcularTempo}>
            Calcular tempo...
          </button>

          {anos}

        </div>

        <div className="parte-enzo">

          <p className="texto-personagens">Olá, sou Enzo, irmão do Mano Juca, tenho 1.40 metros de altura e cresço 3 cm por ano.</p>

          <img src="./images/enzo.png" alt="" className="imagens-personagens" />

        </div>

      </div>

    </div>

  );

}

export default AlturaValentinaEnzo;
