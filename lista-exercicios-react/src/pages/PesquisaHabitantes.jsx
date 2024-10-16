import { useEffect, useState } from "react"
import TituloExercicios from "../components/TituloExercicios"
import "./PesquisaHabitantes.css"

function PesquisaHabitantes() {
  const [altura, setAltura] = useState()
  const [genero, setGenero] = useState()
  const [listaHabitantes, setListaHabitantes] = useState([])

  let maiorAltura = 0
  let menorAltura = 4
  let somaAlturaMulheres = 0
  let contadorMulher = 0
  let contadorHomem = 0
  let somaAlturaPopulacao = 0
  let mediaAlturaMulher
  let mediaAlturaPopulacao
  let porcentualHomens

  useEffect(() => {
    console.log(listaHabitantes)
  }, [listaHabitantes])

  function adicaoHabitante(){

    let habitante = {

      altura: '',
      genero: ''
  
    }

    if ( altura < 0 || altura > 3 || genero < 0 || genero > 1){

      alert("Digite dados válidos!!!")

    }else if(altura === '' || genero === ''){

      alert("Preencha todos os campos!!!")

    }else{

      if (listaHabitantes.length < 3){

        // alert("Dados válidos!")
  
        habitante.altura = Number(altura)
        // alert("passei")
  
        habitante.genero = Number(genero)
        // alert("passei de novo")
  
        setListaHabitantes([...listaHabitantes, habitante])
        alert("Habitante adicionado...")
  
        // console.log(listaHabitantes)
  
        setAltura('')
        setGenero('')

      }else{
        
        alert("Dados da pesquisa completa, já pode prosseguir com a pesquisa...")

      }

    }

  }

  function pesquisarHabitantes(){

    if(listaHabitantes.length < 3){
      
      alert(`Número de habitantes necessário para pesquisa insuficiente, adicione mais habitantes!\nTotal de habitantes necessário: 10`)

    }else{

      for (let i = 0; i < listaHabitantes.length; i++){

        somaAlturaPopulacao += listaHabitantes[i].altura

        if (listaHabitantes[i].genero === 0){

          somaAlturaMulheres += listaHabitantes[i].altura
          contadorMulher ++

        }else{

          contadorHomem ++

        }

        if (listaHabitantes[i].altura > maiorAltura){

          maiorAltura = listaHabitantes[i].altura

        }

        if (listaHabitantes[i].altura < menorAltura){

          menorAltura = listaHabitantes[i].altura

        }

      }

      mediaAlturaPopulacao = somaAlturaPopulacao / listaHabitantes.length
      mediaAlturaMulher = somaAlturaMulheres / contadorMulher
      porcentualHomens = (contadorHomem / listaHabitantes.length) * 100

      alert(`Media População: ${mediaAlturaPopulacao.toFixed(2)}\nMedia Mulher: ${mediaAlturaMulher.toFixed(2)}\nMaior Altura: ${maiorAltura}\nMenor Altura: ${menorAltura}\nPorcentual de Homens: ${porcentualHomens.toFixed(0)}%`)
      
    }
    
  }

  return (
    <div className="container-pesquisa-habitantes">

        <div className="container-titulo-habitantes">

            <TituloExercicios texto={"Pesquisa de Habitantes"} emoji={"🔍"}/>

        </div>

        <div className="container-pesquisa">

            <div className="container-descricao-habitantes">

                <p className="enunciado-pesquisa">Foi feita um a pesquisa entre os habitantes de um a região e 
                coletados os dados de altura e gênero (0=masculino , 1=feminino) das pessoas. Faça 
                um programa que leia os dados de 10 pessoas e informe: 
                 a maior e a menor altura encontrada; 
                 a média de altura das mulheres; 
                 a média de altura da população; 
                 o percentual de homens na população.</p>

            </div>

            <div className="container-inputs-dados">

              <div className="div-entrada-dados">

                <label htmlFor="labelAltura">Altura</label>

                <input className="inputs-habitantes" type="text" id="labelAltura" placeholder="digite a altura"
                  value={altura}
                  onChange={(event) => setAltura(event.target.value)}

                />
              </div>

              <div className="div-entrada-dados">

                <label htmlFor="labelGenero">Gênero</label>

                <input className="inputs-habitantes" type="number" id="labelGenero" min={0} max={1} placeholder=" informe o gênero"
                  value={genero}
                  onChange={(event) => setGenero(event.target.value)}
                />

              </div>

              <div className="div-entrada-dados">

                <button className="botao-adicao-habitante" onClick={adicaoHabitante}>Adicionar habitante</button>

              </div>

            </div>

            <div className="div-botao-pesquisa">

              <button className="botao-pesquisa-habitantes" onClick={pesquisarHabitantes}>Realizar Pesquisa</button>

            </div>

            <div className="container-resultado-habitantes">

            </div>
            
        </div>  

    </div>
  )
}

export default PesquisaHabitantes
