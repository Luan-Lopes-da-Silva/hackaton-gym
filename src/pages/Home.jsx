import SliderComponent from "../components/Slider";
import styles from './home.module.scss'
export default function Home(){
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
    <section className={styles.depoiments}>
    <SliderComponent/>    
    </section>
    <section>
      <h2>Modalidades</h2>
    </section>
    <section>
      <h2>Nossos renomados profissionais</h2>
    </section>
    <section>
      <h2>Os atletas que contam conosco</h2>
    </section>
    <section>
      <h2>Serviços extras</h2>
    </section>
  </main>
  </>
)  
}