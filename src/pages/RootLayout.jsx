import { Outlet,Link } from 'react-router-dom'
import style from './rootLayout.module.scss'
import logo from '../assets/XHEALTH.svg'

export default function RootLayout(){
  return(
    <>
    <header className={style.header}>
    <nav>
      <div>
        <Link to={'/'}><img src={logo} alt="" /></Link>
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
      <Outlet/>
      <footer className={style.footer}>
      <img src={logo} alt="" />
      <p>Desenvolvido por Luan e Ricardo</p>
      </footer>
    </>
  )
}