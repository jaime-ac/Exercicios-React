import "./MediaFinal.css"
import { useState } from "react"
import ConceitoMedia from "../components/ConceitoMedia"
import TituloExercicios from "../components/TituloExercicios"

function MediaFinal() {
    const [nome, setNome] = useState('')
    const [notaUm, setNotaUm] = useState('')
    const [notaDois, setNotaDois] = useState('')
    const [conceito, setConceito] = useState()


    function calcularMedia(){

        if(isNaN(notaUm) || isNaN(notaDois) || nome === '' || notaUm < 0 || notaDois < 0 || notaUm > 10 || notaDois > 10){

            setConceito("Erro: Nenhum campo pode ficar vázio e as notas digitadas não podem ser menores que zero!")
            return

        }else{

            let mediaAluno = ((Number(notaUm) + Number(notaDois)) / 2).toFixed(1)
    
            console.log(mediaAluno)
    
            if(mediaAluno < 0){
    
                setConceito("Conceito Inválido")
    
            }else if (mediaAluno >= 0 && mediaAluno <= 4){
    
                setConceito(<ConceitoMedia name={nome} media={mediaAluno} situacao={"E"}/>)
                
            }else if (mediaAluno > 4 && mediaAluno <= 6){
                
                setConceito(<ConceitoMedia name={nome} media={mediaAluno} situacao={"D"}/>)
                
            }else if (mediaAluno > 6 && mediaAluno <= 7.5){
                
                setConceito(<ConceitoMedia name={nome} media={mediaAluno} situacao={"C"}/>)
                
            }else if (mediaAluno > 7.5 && mediaAluno <= 9){
                
                setConceito(<ConceitoMedia name={nome} media={mediaAluno} situacao={"B"}/>)
                
            }else{
                
                setConceito(<ConceitoMedia name={nome} media={mediaAluno} situacao={"./images/conceito-a.png"}/>)
    
            }

        }
        

    }
  return (
    <div className="container-media">

        <div className="container-titulo-media">

            <TituloExercicios texto={"Cálculo Média"} emoji={"🧮"}/>

        </div>

        <div className="container-descricao-media">

            <p className="enunciado-exer-media">Faça um programa que leia duas notas parciais obtidas por um 
            aluno qualquer numa disciplina qualquer ao longo de um semestre 
            qualquer, e calcule a sua média. De posse da média, esta deve ser 
            convertida em conceito que é o novo hype do momento na educação! </p>

        </div>

        <div className="container-calculo-media">

            <div className="parte-dados-calculo">

                <label htmlFor="nomeAluno" className="label-botoes">Nome A</label>
                <input type="text" className="entrada-dados-calculo" id="nomeAluno" placeholder="digite seu nome"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                />

                <label htmlFor="nota1Aluno" className="label-botoes">Nota 1</label>
                <input type="text" className="entrada-dados-calculo" id="nota1Aluno" placeholder="digite a primeira nota"
                    value={notaUm}
                    onChange={(event) => setNotaUm(event.target.value)}
                />

                <label htmlFor="nota2Aluno" className="label-botoes">Nome 2</label>
                <input type="text" className="entrada-dados-calculo" id="nota2Aluno" placeholder="digite a segunda nota"
                    value={notaDois}
                    onChange={(event) => setNotaDois(event.target.value)}
                />

                <button className="botao-calculo-media" onClick={calcularMedia}>Calcular Média</button>

            </div>

            <div className="parte-resultado-calculo">

                {conceito}

            </div>

        </div>

      
    </div>
  )
}

export default MediaFinal
