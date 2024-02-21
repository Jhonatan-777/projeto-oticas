import "./style.css"

import Logo from '../../assets/img/logo.png';

export default function Topo()
{
  return (
    <header>
      <div className="limitar-secao secao-topo">
        <img src={Logo} alt="logo óticas vida" ></img>
        <nav>
          <a href="#Produtos">PRODUTOS</a>
          <a href="#Sobre">SOBRE</a>
          <a href="#Contato">CONTATO</a>
        </nav>
      </div>
    </header>
  )
}