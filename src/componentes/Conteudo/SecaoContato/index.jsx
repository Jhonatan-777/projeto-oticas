import './style.css'

import IconLocal from '../../../assets/img/local.png';
import IconTel from '../../../assets/img/telefone.png';
import IconEmail from '../../../assets/img/email.png';
import IconFb from '../../../assets/img/fb.png';
import IconIg from '../../../assets/img/ig.png';
import IconTt from '../../../assets/img/tt.png';

export default function SecaoContato()
{
  return (
    <section className="secao-contato">
      <div className="limitar-secao" id="Contato">
        <h2>FALE CONOSCO</h2>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre contato através de nossas redes sociais ou da central de atendimento.</p>
        <div className="container-contatos">
          <div className="container-box-contatos">
            <h3>Contato</h3>
            <div className="box-contatos">
              <img src={IconLocal} alt='icon local'></img>
              <p>Nova Iguaçu, RJ</p>
            </div>
            <div className="box-contatos">
              <img src={IconTel} alt='icon telefone'></img>
              <p>(21) 99999-9999</p>
            </div>
            <div className="box-contatos">
              <img src={IconEmail} alt='icon email'></img>
              <p>contato@oticavida.com</p>
            </div>
          </div>
          <div className="container-box-contatos">
            <h3>Nossas Redes Sociais</h3>
            <div className="box-contatos">
              <img src={IconFb} alt='icon facebook'></img>
              <p>/OticaVida</p>
            </div>
            <div className="box-contatos">
              <img src={IconIg} alt='icon instagram'></img>
              <p>@oticavidarj</p>
            </div>
            <div className="box-contatos">
              <img src={IconTt} alt='icon twitter'></img>
              <p>@oticavidarj</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}