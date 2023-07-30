import styles from './home.module.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img1 from '../assets/albert-dera-ILip77SbmOE-unsplash.jpg'
import img2 from '../assets/thisisengineering-raeng-o6jUolZ7QJk-unsplash.jpg'
import img3 from '../assets/subhaan-saleem-Jf7hr7ZQzg8-unsplash.jpg'
import img4 from '../assets/yilmaz-akin-FPKtCl74Hfs-unsplash.jpg'
import img5 from '../assets/malik-skydsgaard-CafVSOyraI8-unsplash.jpg'
import img6 from '../assets/quino-al-l__g1muWh0U-unsplash.jpg'
import img7 from '../assets/jonathan-borba-WdjFdP3zj20-unsplash.jpg'
import img8 from '../assets/kenny-eliason-5ddH9Y2accI-unsplash.jpg'
import img9 from '../assets/bruce-mars-HHXdPG_eTIQ-unsplash.jpg'

export default function Home(){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
return(
  <>
  <section>
    <article className={styles.presentation}>
    <p>Bem-vindos à <span className={styles.name}>XHealth!</span> Somos um espaço dedicado ao bem-estar, saúde e qualidade de vida dos nossos alunos.
    Com uma ampla variedade de modalidades, estamos comprometidos em atender às necessidades de todos os praticantes, independentemente do nível de condicionamento físico ou objetivo.
    </p>
    <button>Venha nos conhecer</button> 
    </article>
    </section>
  <main className={styles.main}>
  <h2 className={styles.special}> Depoimento dos nossos clientes</h2>
  <Carousel responsive={responsive} className={styles.depoiments}>
        <article>
              <img src= {Img1} />
              <p>Ana Pereira</p>
              <span>Estou frequentando a academia há seis meses e já estou vendo resultados surpreendentes! As aulas de HIIT e bike indoor são meus favoritos, pois me dão aquela dose de endorfina e me ajudam a manter a forma. Perdi gordura.</span>
            </article>
            <article>
              <img src= {Img1} />
              <p>Ana Pereira</p>
              <span>Estou frequentando a academia há seis meses e já estou vendo resultados surpreendentes! As aulas de HIIT e bike indoor são meus favoritos, pois me dão aquela dose de endorfina e me ajudam a manter a forma. Perdi gordura.</span>
            </article>
            <article>
              <img src= {Img1} />
              <p>Ana Pereira</p>
              <span>Estou frequentando a academia há seis meses e já estou vendo resultados surpreendentes! As aulas de HIIT e bike indoor são meus favoritos, pois me dão aquela dose de endorfina e me ajudam a manter a forma. Perdi gordura.</span>
            </article>
            <article>
              <img src= {Img1} />
              <p>Ana Pereira</p>
              <span>Estou frequentando a academia há seis meses e já estou vendo resultados surpreendentes! As aulas de HIIT e bike indoor são meus favoritos, pois me dão aquela dose de endorfina e me ajudam a manter a forma. Perdi gordura.</span>
            </article>
            <article>
              <img src= {Img1} />
              <p>Ana Pereira</p>
              <span>Estou frequentando a academia há seis meses e já estou vendo resultados surpreendentes! As aulas de HIIT e bike indoor são meus favoritos, pois me dão aquela dose de endorfina e me ajudam a manter a forma. Perdi gordura.</span>
            </article>
            <article>
              <img src= {Img1} />
              <p>Ana Pereira</p>
              <span>Estou frequentando a academia há seis meses e já estou vendo resultados surpreendentes! As aulas de HIIT e bike indoor são meus favoritos, pois me dão aquela dose de endorfina e me ajudam a manter a forma. Perdi gordura.</span>
            </article>
            <article>
              <img src= {Img1} />
              <p>Ana Pereira</p>
              <span>Estou frequentando a academia há seis meses e já estou vendo resultados surpreendentes! As aulas de HIIT e bike indoor são meus favoritos, pois me dão aquela dose de endorfina e me ajudam a manter a forma. Perdi gordura.</span>
            </article>
            <article>
              <img src= {Img1} />
              <p>Ana Pereira</p>
              <span>Estou frequentando a academia há seis meses e já estou vendo resultados surpreendentes! As aulas de HIIT e bike indoor são meus favoritos, pois me dão aquela dose de endorfina e me ajudam a manter a forma. Perdi gordura.</span>
            </article>
            </Carousel>
    <section className={styles.modalitys}>
      <h2>Modalidades</h2>
      <p>HIIT (High-Intensity Interval Training):
      Treinos curtos e intensos que alternam períodos de alta intensidade com períodos de descanso.
      Eficaz para queima de gordura, aumento da capacidade cardiovascular e otimização do tempo de treino.</p>
      <p> Danças:
      Aulas de dança com ritmos diversos, como zumba, salsa, samba, entre outros.
      Uma maneira divertida de queimar calorias, melhorar a coordenação e se divertir ao som de músicas envolventes.</p>
      <p>Musculação:
      Treinamento com pesos para desenvolver força, resistência e ganhar massa muscular.
      Acompanhamento de profissionais qualificados para orientar os treinos de acordo com os objetivos de cada aluno.
    </p>
    <p>Funcional:
     Treinamento funcional com exercícios que replicam movimentos do dia a dia.
     Contribui para o fortalecimento de músculos estabilizadores e melhora da coordenação motora.</p>
    <p> Jump:
     Aulas realizadas em mini trampolins que proporcionam um exercício de baixo impacto. 
     Ótima opção para melhorar a resistência cardiovascular e tonificar os músculos.</p>
    <p> Personal Trainer:
     Oferecemos acompanhamento individualizado com Personal Trainers experientes, para atender às necessidades específicas de cada aluno.</p>
     <p>Bike Indoor:
      Treinos em bicicletas estacionárias com diferentes níveis de resistência.
      Ideal para melhorar a resistência cardiovascular, queimar calorias e fortalecer as pernas.</p>
     <p> Lutas:
      Oferecemos uma variedade de modalidades de luta, como boxe, muay thai, jiu-jitsu, entre outras.
      Ótima opção para aprender técnicas de autodefesa, aprimorar o condicionamento físico e liberar o estresse.</p>
    </section>
    <section className={styles.profissionals}>
      <h2>Nossos renomados profissionais</h2>
      <article>
        <img src={img2} alt="" />
        <p>Pedro Moraes</p>
        <span>
        Pedro Moraes é um renomado fisioterapeuta esportiva com mais de 15 anos de experiência no cuidado de atletas profissionais e amadores. Sua paixão pelo esporte e sua dedicação à reabilitação e prevenção de lesões tornaram-na uma referência na área. Ela possui formação especializada em técnicas de terapia manual, liberação miofascial e exercícios terapêuticos. Seu trabalho é fundamental para o bem-estar e o desempenho dos atletas, garantindo uma recuperação segura e eficiente após lesões e aprimorando a performance deles para que alcancem seus objetivos esportivos.</span>
      </article>
      <article>
        <img src={img3} alt="" />
        <p>Rodrigo Almeida</p>
        <span>Personal Trainer e Coach de Alta Performance
        Rodrigo Almeida é um personal trainer altamente requisitado, conhecido por seus resultados impressionantes com atletas profissionais e entusiastas do fitness. Sua abordagem personalizada e motivadora tem ajudado inúmeros clientes a atingir suas metas de condicionamento físico e superar seus próprios limites. Com uma vasta experiência em treinamento de força, treinos funcionais e periodização do treinamento, Rodrigo desenvolve programas sob medida para cada indivíduo, levando em conta suas necessidades específicas e objetivos. Sua paixão pelo esporte e sua energia contagiante inspiram seus clientes a se dedicarem ao máximo para alcançar um desempenho de alta performance.</span>
      </article>
      <article>
        <img src={img4} alt="" />
        <p>Laura Santos</p>
        <span>Laura Santos é uma nutricionista esportiva altamente conceituada, reconhecida por sua abordagem holística e baseada em evidências para a nutrição esportiva. Com uma formação sólida em nutrição e fisiologia do exercício, Laura trabalha com atletas de diferentes modalidades para otimizar seu desempenho, recuperação e bem-estar geral. Sua expertise inclui a elaboração de planos alimentares personalizados que atendem às necessidades específicas de cada atleta, maximizando a ingestão de nutrientes essenciais para o sucesso esportivo. Ela também fornece orientações para o controle do peso, a hidratação adequada e a suplementação estratégica, sempre focada na saúde e no rendimento dos seus clientes.</span>
      </article>
    </section>
    <section className={styles.athletes}>
      <h2>Os atletas que contam conosco</h2>
      <article>
        <p>Isabela Ferreira</p>
        <img src={img5} alt="" />
        <p>Nadadora Profissional</p>
        <span>Isabela Ferreira é uma nadadora profissional que brilha nas piscinas desde uma idade jovem. Sua técnica impecável e velocidade impressionante renderam-lhe várias medalhas e títulos em competições nacionais e internacionais. Focada e dedicada, Isabela treina incansavelmente para aprimorar suas habilidades e quebrar recordes. Seu talento natural e ética de trabalho exemplar a tornam uma inspiração para outros nadadores e atletas em geral. Além de seu sucesso nas provas, ela também é conhecida por seu compromisso em incentivar jovens talentos e promover o esporte.</span>
      </article>

      <article>
        <p>Marcelo Costa</p>
        <img src={img6} alt="" />
        <p>Corredor de Trail Runnig</p>
        <span>Marcelo Costa é um apaixonado por corrida e um talentoso corredor de trail running. Sua dedicação aos treinos e competições o levou a conquistar diversos pódios em provas de trilhas desafiadoras ao redor do país. Com um espírito aventureiro, ele adora explorar novos percursos em meio à natureza, superando obstáculos naturais e elevando constantemente seus limites. Sua disciplina e determinação são admiradas pelos colegas de treino, e sua jornada inspira muitos outros a se aventurarem nas corridas de montanha.</span>
      </article>
      <article>
        <p>Rafael Oliveira</p>
        <img src={img7} alt="" />
        <p>Lutador de Jiu-Jitsu</p>
        <span>Rafael Oliveira é um faixa-preta de jiu-jitsu reconhecido nacional e internacionalmente. Sua paixão pelo esporte começou cedo, e ele dedicou grande parte de sua vida ao treinamento e competição no tatame. Com um estilo de luta técnico e estratégico, Rafael acumulou uma impressionante coleção de medalhas e títulos em campeonatos importantes. Além de suas habilidades como lutador, ele é conhecido por sua humildade e por compartilhar seu conhecimento com os companheiros de treino. Rafael é um verdadeiro embaixador do jiu-jitsu e inspira outros a seguirem sua paixão pelas artes marciais.</span>
      </article>
    </section>
    <section className={styles.plus}>
      <h2>Serviços extras</h2>
      <section>
        <article>
          <p>Bio Impedância</p>
          <img src={img8} alt="" />
          <span>A bioimpedância é um método de análise da composição corporal baseado na medida da resistência elétrica dos tecidos do corpo.</span>
          <button>MAIS INFOS</button>
        </article>
        <article>
          <p>Personal Trainer</p>
          <img src={img9} alt="" />
          <span>Um Personal Trainer é um profissional capacitado para oferecer orientação personalizada, motivação e suporte individualizado em busca de objetivos específicos relacionados à saúde, condicionamento físico e bem-estar.</span>
          <button>MAIS INFOS</button>
        </article>
        <article>
          <p>Fisioterapeuta</p>
          <img src={img2} alt="" />
          <span>O fisioterapeuta é um profissional de saúde altamente capacitado, especializado em avaliar, tratar e prevenir distúrbios do movimento e funcionalidade do corpo humano.</span>
          <button>MAIS INFOS</button>
        </article>
      </section>
    </section>
  </main>
  </>
)  
}