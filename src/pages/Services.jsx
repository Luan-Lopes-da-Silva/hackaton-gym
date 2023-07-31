import style from './services.module.scss'
import image1 from '../assets/Services/1.jpg'
import image2 from '../assets/Services/2.jpg'
import image3 from '../assets/Services/3.jpg'
import image4 from '../assets/Services/4.jpg'
import image5 from '../assets/Services/5.jpg'
import image6 from '../assets/Services/6.jpg'
import image7 from '../assets/Services/7.jpg'
import image8 from '../assets/Services/8.jpg'
export default function Services(){
return(
  <>
  <section className={style.services}>
  <h2>Nossos serviços</h2>
  <div className={style.container}>
    <article>
    <img src={image1} alt="" />
    <div>
      <h2>Personal Trainer</h2>
      <p>Oferecemos acompanhamento individualizado com Personal Trainers experientes, para atender às necessidades específicas de cada aluno.</p>
    </div>
    </article>
    <article>
    <img src={image3} alt="" />
    <div>
      <h2>Jump</h2>
      <p>Aulas realizadas em mini trampolins que proporcionam um exercício de baixo impacto.
    Ótima opção para melhorar a resistência cardiovascular e tonificar os músculos.</p>
    </div>
    </article>
    <article>
    <img src={image7} alt="" />
    <div>
      <h2>HIIT</h2>
      <p>Treinos curtos e intensos que alternam períodos de alta intensidade com períodos de descanso.
        Eficaz para queima de gordura, aumento da capacidade cardiovascular e otimização do tempo de treino.</p>
    </div>
    </article>
    <article>
    <img src={image4} alt="" />
    <div>
      <h2>Danças</h2>
      <p>Aulas de dança com ritmos diversos, como zumba, salsa, samba, entre outros.
    Uma maneira divertida de queimar calorias, melhorar a coordenação e se divertir ao som de músicas envolventes.</p>
    </div>
    </article>
    <article>
    <img src={image5} alt="" />
    <div>
      <h2>Musculação</h2>
      <p>Treinamento com pesos para desenvolver força, resistência e ganhar massa muscular.
    Acompanhamento de profissionais qualificados para orientar os treinos de acordo com os objetivos de cada aluno.</p>
    </div>
    </article>
    <article>
    <img src={image8} alt="" />
    <div>
      <h2>Bike indoor</h2>
      <p>Treinos em bicicletas estacionárias com diferentes níveis de resistência.
    Ideal para melhorar a resistência cardiovascular, queimar calorias e fortalecer as pernas.</p>
    </div>
    </article>
    <article>
    <img src={image6} alt="" />
    <div>
      <h2>Lutas</h2>
      <p>Oferecemos uma variedade de modalidades de luta, como boxe, muay thai, jiu-jitsu, entre outras.
    Ótima opção para aprender técnicas de autodefesa, aprimorar o condicionamento físico e liberar o estresse.</p>
    </div>
    </article>
    <article>
    <img src={image2} alt="" />
    <div>
      <h2>Funcional</h2>
      <p>Treinamento funcional com exercícios que replicam movimentos do dia a dia.
    Contribui para o fortalecimento de músculos estabilizadores e melhora da coordenação motora.</p>
    </div>
    </article>
    <p className={style.etc}>
    Outras Modalidades:
    Além das modalidades mencionadas, oferecemos uma variedade de outras atividades, como yoga, pilates, alongamento, entre outras.
    </p>
  </div>
  <section className={style.form}>
  <h3>Ficou com alguma duvida?</h3>
  <p>Mande sua mensagem que em breve um atendente ira retornar uma resposta</p>

  <form>
    <label htmlFor="email">Email</label>
    <input type="text" id='email' placeholder='seuemail@email.com'/>
    <label htmlFor="msg">Mensagem</label>
    <textarea id="msg" cols="30" rows="10" placeholder='Sua mensagem...'></textarea>
    <button>Enviar mensagem</button>
  </form>
  </section>
  </section>
  </>
)  
}