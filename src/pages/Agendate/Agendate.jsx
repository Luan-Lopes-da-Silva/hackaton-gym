import style from './agendate.module.scss'
export default function Agendate(){
return(
<>
<main className={style.container}>
<h1>Agendamento</h1>
<form className={style.form}>
<label htmlFor="name">Nome</label>
<input type="text" placeholder='Seu nome'/>
<p>Sexo</p>
<label htmlFor="genre">Masculino</label>
<input type="radio" name="genre" id="masc" />
<label htmlFor="genre">Feminino</label>  
<input type="radio" name="genre" id="fem" />
<label htmlFor="age">Idade</label>
<input type="text" placeholder="Sua idade" name="age"/>
<label htmlFor="service">Serviço</label>
<select name='service'>
<option value="Selecione o serviço">Selecione o serviço</option>
<option value="Personal trainer">Personal trainer</option>
<option value="Bioimpedância">Bioimpedância</option>
<option value="Nutricionista">Nutricionista</option>
<option value="Fisioterapia">Fisioterapia</option>  
</select>
<label htmlFor="profissional">Profissional</label>
<select name='profissional'>
<option value="Selecione o profissional">Selecione o profissional</option>
<option value="Rodrigo Almeida">Rodrigo Almeida</option>
<option value="Laura Santos">Laura Santos</option>
<option value="Pedro Moraes">Pedro Moraes</option> 
</select>
<label htmlFor="date">Data</label>
<input type="date" name="date" placeholder="DD/MM"/>
<label htmlFor="hour">Horário</label>
<input type="text" name="hour" placeholder="16:00"/>
<button>Agendar</button>
</form>  
</main>
</>  
)  
}