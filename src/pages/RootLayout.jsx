import { Outlet } from 'react-router-dom'
import style from './rootLayout.module.scss'
import logo from '../assets/XHEALTH.svg'

export default function RootLayout(){
  return(
    <>
    <header className={style.header}>
    <nav>
      <div>
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Coachs</li>
        <li>Plans</li>
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