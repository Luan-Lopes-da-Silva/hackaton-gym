import style from './signin.module.scss'
import Bg from '../../assets/Gallery/acad1.jpg'
export default function Signin(){
return(
<>
<main className={style.container}>
<div><img src={Bg} alt=""/>
</div>
<form>
<label htmlFor="name">Nome</label>
<input type="text" id="name" placeholder="Seu nome"/>
<p>Sexo</p>
<div className={style.radios}>
  <label htmlFor="sex">Masculino</label>
  <input type="radio" id="masc" name="sex"/>
  <label htmlFor="sex">Feminino</label>
  <input type="radio" id="fem" name="sex"/>
</div>
<label htmlFor="age">Idade</label>
<input type="text" id="age" placeholder="Sua idade" />
<label htmlFor="email">Email</label>
<input type="text" id="email" placeholder="johndoe@email.com"/>
<label htmlFor="conf-e">Confirmação email</label>
<input type="text" id="conf-e" placeholder="johndoe@email.com"/>
<label htmlFor="password">Senha</label>
<input type="password" id="password" placeholder="*********"/>
<label htmlFor="conf-p">Confirmar senha</label>
<input type="password" id="conf-p" placeholder="*********"/> 
<button>Cadastrar-se</button> 
</form>  
</main>
</>  
)  
}