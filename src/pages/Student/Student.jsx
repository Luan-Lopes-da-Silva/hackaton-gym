import style from './student.module.scss'
import logo from '../../assets/XHEALTH.svg'
import teacher1 from '../../assets/n1.jpg'
import teacher2 from '../../assets/p3.jpg'
import { useEffect } from 'react'
export default function Student(){
const newTitle = 'Student'
useEffect(()=>{
  document.title = newTitle  
},[])
return(
   <>
    <header className={style.header}>
    <nav>
      <div>
        <img src={logo} alt="" />
      </div>
      <ul>
        <div className={style.avatar}>
        </div>
        <li>Logout</li>
      </ul>
    </nav>
    </header>
    <section className={style.section}>
    <h1>Ola aluno</h1>
    <article className={style.schedules}>
      <h2>Seus agendamentos</h2>
      <p>29/07/2023  09:00  professor rodrigo almeida</p>
      <p>31/07/2023  09:00  professor rodrigo almeida</p>
      <p>02/08/2023  09:00  professor rodrigo almeida</p>
      <button>Agendar</button>
    </article>
    <h2>Profissionais contratados</h2>
    <article className={style.teachers}>
    <div className={style.coach}>
    <p>Laura Santos</p>
    <img src={teacher1} alt="" />
    <p>Nutricionista</p>
    </div>
    <div className={style.coach}>
    <p>Rodrigo Almeida</p>
    <img src={teacher2} alt="" />
    <p>Personal</p>  
    </div>
    <button>Ver profissionais</button>  
    </article>
    <h2>Treino</h2>
    <article className={style.training}>
      <div className={style.card}>
      <div className={style.infos}>
          <p>Instrutor: Rodrigo Almeida</p>
          <p>Aluno : John doe</p>
      </div>
      <div className={style.container}>
        <div className={style.firstColumn}>
          <p>Agachamento livre</p>
          <p>Leg Press</p>
          <p>Extensor de pernas</p>
          <p>Cadeira flexora</p>
          <p>Afundo unilateral</p>
          <p>Gêmeos</p>
          <p>Abdutor</p>
          <p>Adutor</p>
        </div>
        <div className={style.secondColumn}>
          <p>4x 8-10</p>
          <p>3x 10-12</p>
          <p>3x 12-15</p>
          <p>3x 12-15</p>
          <p>3x 10</p>
          <p>4x 15-20</p>
          <p>3x 15</p>
          <p>3x 15</p>
        </div>
      </div>
      <div className={style.index}>A</div>
      </div>
      
      <div className={style.card}>
      <div className={style.infos}>
          <p>Instrutor: Rodrigo Almeida</p>
          <p>Aluno : John doe</p>
      </div>
      <div className={style.container}>
        <div className={style.firstColumn}>
          <p>Supino reto</p>
          <p>Supino inclinado halt</p>
          <p>Cruxifixo</p>
          <p>Peck deck</p>
          <p>Flexões</p>
          <p>Pullover</p>
          <p>Press de peito maq</p>
          <p>Esteira</p>
        </div>
        <div className={style.secondColumn}>
          <p>4x 8-10</p>
          <p>3x 10-12</p>
          <p>3x 12-15</p>
          <p>3x 12-15</p>
          <p>3x max</p>
          <p>3x 12</p>
          <p>3x 12-15</p>
          <p>10 min</p>
        </div>
      </div>
      <div className={style.index}>B</div>
      </div>
      <div className={style.card}>
      <div className={style.infos}>
          <p>Instrutor: Rodrigo Almeida</p>
          <p>Aluno : John doe</p>
      </div>
      <div className={style.container}>
        <div className={style.firstColumn}>
          <p>Barra fixa</p>
          <p>Remada curvada</p>
          <p>Puxada frontal</p>
          <p>Remada unilateral halt</p>
          <p>Levantamento terra</p>
          <p>Remada maquina</p>
          <p>Encolhimento ombro</p>
          <p>Esteira</p>
        </div>
        <div className={style.secondColumn}>
          <p>4x max</p>
          <p>3x 8-10</p>
          <p>3x 10-12</p>
          <p>3x 10</p>
          <p>3x 8</p>
          <p>3x 12</p>
          <p>4x 12</p>
          <p>10 min</p>
        </div>
      </div>
      <div className={style.index}>C</div>
      </div>
    </article>  
    </section> 
   </> 
)  
}