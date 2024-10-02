
import "./Farmarcia.css"
import { useState } from "react"
import ProdutosFarmarcia from "../components/ProdutosFarmarcia"
import AtendimentoFarmarcia from "../components/AtendimentoFarmarcia"

function Farmarcia() {
    const [produtos, setProdutos] = useState(false)
    const [atender, setAtender] = useState(false)
    const [abriuCaixa, setAbriuCaixa] = useState(false)

  return (
    <div className="container-farmarcia">

        <div className="container-cabecalho">

            <img src="./farmarcia/farmarcia-logo.png" alt="" className="logo-farmarcia"/>
            <button className="botao-sobre" onClick={() => setAbriuCaixa(true)}>Sobre Márcia</button>
            
            
            <img src="./farmarcia/farmarcia-placa.png" alt="" className="placa-farmarcia"/>

        </div>

        <div className="container-visual">

            <img src="./farmarcia/farmarcia.png" alt="" className="imagem-farmarcia"/>

        </div>

        <div className="div-botoes-produtos-atendimento">

            <button className="botao-produtos" onClick={ () => setProdutos(!produtos) }>Ver produtos</button>
            <button className="botao-produtos" onClick={ () => setAtender(!atender) }>Atendimento</button>

        </div>

        <div className="div-produtos">

            {produtos && <ProdutosFarmarcia/>}

        </div>

        <div className="div-atendimento">

            {atender && <AtendimentoFarmarcia/>}

        </div>
      
            <dialog open={abriuCaixa}>

                <div className="sobre-marcia">

                    <h1>Márcia</h1>

                    <img className="imagem-marcia" src="./farmarcia/marcia.png" alt="" />

                    <p className="texto-marcia">Márcia possui formação em administração de empresas, com uma paixão especial por empreendedorismo e design.</p>

                    <p className="texto-marcia">Márcia sempre foi uma pessoa determinada e criativa. Ela cresceu em uma família onde o empreendedorismo era valorizado, inspirada pelo sucesso de seu tio Mário, que administrava uma farmácia local.</p>

                    <p className="texto-marcia">Depois de se formar na faculdade, Márcia se casou e começou a trabalhar em uma empresa de marketing, onde pôde desenvolver suas habilidades em design e gestão. No entanto, sua vida pessoal deu uma reviravolta quando seu casamento chegou ao fim após um evento no mínimo estranho. Seu marido saiu para comprar cigarros e nunca mais voltou, deixando Márcia sozinha para lidar com a dor do abandono e o desafio de reconstruir sua vida.</p>

                    <p className="texto-marcia">Decidida a seguir em frente, Márcia viu na farmácia de seu tio Mário uma oportunidade de recomeçar. Ela comprou o negócio e começou a reformá-lo, aplicando suas habilidades em administração e design para transformá-lo em um espaço moderno e acolhedor.</p>

                    <p className="texto-marcia">Enquanto renovava a farmácia, Márcia também decidiu investir em tecnologia para impulsionar o negócio. Ela implementou um sistema de gerenciamento de estoque automatizado e lançou um programa de fidelidade digital para os clientes, proporcionando uma experiência de compra mais conveniente e personalizada.</p>

                    <p className="texto-marcia">Agora, com a farmácia renovada e pronta para competir no mercado, Márcia está determinada a fazer da Farmárcia um sucesso. Ela está em busca de um programador de tecnologia para ajudá-la a desenvolver uma presença online robusta, incluindo um website responsivo e aplicativos móveis que ofereçam aos clientes uma experiência de compra moderna e simplificada. A história de Márcia é um testemunho de resiliência e determinação, mostrando como ela transformou uma adversidade em uma oportunidade de crescimento pessoal e profissional. Ahhh, e ela é muito mais feliz agora :D</p>

                    <button className="botao-fechar-caixa" onClick={() => setAbriuCaixa(false)}>Fechar</button>

                </div>
                    
            </dialog>

    </div>
  )
}

export default Farmarcia
