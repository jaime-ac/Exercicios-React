import TituloExercicios from "../components/TituloExercicios"
import "./PesquisaHabitantes.css"

function PesquisaHabitantes() {
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
            
        </div>



        
      
    </div>
  )
}

export default PesquisaHabitantes
