import './style.css'

import Loja from '../../../assets/img/loja.png';
import Atendimento from '../../../assets/img/atendimento.png';

export default function SecaoSobre()
{
  return (
    <section className="secao-sobre">
      <div className="limitar-secao" id="Sobre">
        <h2>QUEM SOMOS NÓS?</h2>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada np atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
        <div className="cards-container-sobre">
          <div className="card-sobre">
            <img src={Loja} alt="imagem loja"></img>
          </div>
          <div className="card-sobre card-text">
            <h3>NOSSAS FILIAIS</h3>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>
          <div className="card-sobre card-text">
            <h3>ATENDIMENTO FLEXÍVEL</h3>
            <p>Nossa equipe especializada é treinada para te atender</p>
          </div>
          <div className="card-sobre">
            <img src={Atendimento} alt="imagem atendimento"></img>
          </div>
        </div>
      </div>
    </section>
  )
}