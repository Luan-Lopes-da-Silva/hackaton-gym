import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import n1 from '../assets/n1.jpg'
import n2 from '../assets/n2.jpg'
import n3 from '../assets/n3.jpg'
import f1 from '../assets/f1.jpg'
import f2 from '../assets/f2.jpg'
import f3 from '../assets/f3.jpg'
import style from './coachs.module.scss'

export default function Coachs(){
  return(
  <>
  <section className={style.container}>
  <h2>Nossos profissionais</h2>
  <article>
  <h3>Quadro de Professores e Personais</h3>
  <div className={style.cards}>
    <div>
    <p>Carlos Mendes</p>
    <img src={p1} alt="" />
    </div>
    <div>
    <p>Camila Silva</p>
    <img src={p2} alt="" />
    </div>
    <div>
    <p>Rodrigo Almeida</p>
    <img src={p3} alt="" />
    </div>
  </div>
  </article>
  <article>
  <h3>Quadro de Nutricionistas</h3>
  <div className={style.cards}>
    <div>
    <p>Laura Santos</p>
    <img src={n1} alt="" />
    </div>
    <div>
    <p>Rafael Lima</p>
    <img src={n2} alt="" />
    </div>
    <div>
    <p>Isabela Ferreira</p>
    <img src={n3} alt="" />
    </div>
  </div>
  </article>
  <article>
  <h3>Quadro de Fisioterapeutas</h3>
  <div className={style.cards}>
    <div>
    <p>Pedro Moraes</p>
    <img src={f1} alt="" />
    </div>
    <div>
    <p>Gabriel Silva</p>
    <img src={f2} alt="" />
    </div>
    <div>
    <p>Marina Almeida</p>
    <img src={f3} alt="" />
    </div>
  </div>
  </article>
  </section>
  
  </> 
  )
}