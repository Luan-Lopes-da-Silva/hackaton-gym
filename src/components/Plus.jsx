/* eslint-disable react/prop-types */
import style from './plus.module.scss'
import { Link } from 'react-router-dom'
import logo from '../assets/XHEALTH.svg'
export default function Plus(props){
  return(
  <>
  <header className={style.header}>
    <nav>
      <div>
        <img src={logo} alt="" />
      </div>
      <ul>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/services'}>Services</Link>
        <Link to={'/coachs'}>Coachs</Link>
        <Link to={'/plans'}>Plans</Link>
        <button>sign in</button>
      </ul>
    </nav>
    </header>
    <main className={style.main}>
    <article>
    <h1>{props.title}</h1>
    <div className={style.info}>
    <div className={style.firstColumn}>
    <img src={props.img} alt="" />
    </div>
    <div className={style.secondColumn}>
    <p>{props.content}</p>
    <button>Ver Profissionais</button>
    </div>  
    </div>
    </article>
    <h2 className= {style.subtitle}>{props.benefitsTitle}</h2>
    <div className={style.benefits}>
    <p>{props.children}</p>
    </div>
    </main>
    <footer className={style.footer}>
      <img src={logo} alt="" />
      <p>Desenvolvido por Luan e Ricardo</p>
    </footer> 
  </>
  )
}