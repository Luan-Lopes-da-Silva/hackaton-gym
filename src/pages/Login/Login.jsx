import{Link} from 'react-router-dom'
import Bg from '../../assets/samuel-girven-VJ2s0c20qCo-unsplash.jpg'
import style from './login.module.scss'
import see from '../../assets/Vector.svg'
import seeOf from '../../assets/Vector2.svg'
import { useEffect, useRef } from 'react'
export default function Login(){
  const refInput = useRef(null)
  const newTitle = 'Login'

  useEffect(()=>{
    document.title = newTitle
  },[])

  function showPassword(ev){
  if(refInput.current.type === 'password'){
  refInput.current.type = 'text'
  ev.currentTarget.src = seeOf
  }else{
  ev.currentTarget.src = see 
  refInput.current.type = 'password'
  }
  }
 return(
  <>
  <main className={style.container}>
  <div><img src={Bg} alt=""/></div>
  <form>
  <label htmlFor="email">Email</label>
  <input type="text" id="email" placeholder="johndoe@email.com"/>
    <label htmlFor="password">Senha</label>
    <input type="password" id="password" placeholder="*********" className={style.pass} ref={refInput}/>
    <img src={see} alt="" className={style.eye} onClick={showPassword}/>
  <div>
    <span><Link to={'/'}>Esqueceu sua senha?</Link></span>
    <span><Link to={'/signin'}>Criar conta</Link></span>
  </div>
  <button>Login</button> 
  </form>  
  </main>
  </>  
 ) 
}