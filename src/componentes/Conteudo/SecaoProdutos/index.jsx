import './style.css'

import Oculos01 from '../../../assets/img/oculos01.png'
import Oculos02 from '../../../assets/img/oculos02.png'
import Oculos03 from '../../../assets/img/oculos03.png'
import Oculos04 from '../../../assets/img/oculos04.png'

export default function SecaoProdutos()
{
  return (
    <section className="secao-produtos">
      <div className="limitar-secao" id="Produtos">
        <h2>NOSSOS PRODUTOS</h2>
        <p>Tralhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculinos, femininos e infantil.</p>
        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

        <div className="cards-container-produtos">
          <div className="card-produtos">
            <h3>Óculos de grau</h3>
            <img src={Oculos01} alt="Oculos de grau"></img>
            <p>R$ 499,99</p>
          </div>
          <div className="card-produtos">
            <h3>Óculos transition</h3>
            <img src={Oculos02} alt="Oculos transition"></img>
            <p>R$ 699,99</p>
          </div>
          <div className="card-produtos">
            <h3>Óculos de sol</h3>
            <img src={Oculos03} alt="Oculos de sol"></img>
            <p>R$ 299,99</p>
          </div>
          <div className="card-produtos">
            <h3>Óculos infantil</h3>
            <img src={Oculos04} alt="Oculos infantil"></img>
            <p>R$ 399,99</p>
          </div>
        </div>
        <p>Todos os nossos produtos incluem:</p>
        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  )
}