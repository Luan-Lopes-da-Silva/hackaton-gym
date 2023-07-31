import styles from './about.module.scss'
import acad1 from '../assets/Gallery/acad1.jpg'
import acad2 from '../assets/Gallery/acad2.jpg'
import acad3 from '../assets/Gallery/acad3.jpg'
import acad4 from '../assets/Gallery/acad4.jpg'
import { useRef } from 'react'
import { Accordion,AccordionItem} from '@szhsin/react-accordion'
import expand from '../assets/expand_more_FILL0_wght400_GRAD0_opsz48 (1).svg'
import dep1 from '../assets/dep1.jpg'
import dep2 from '../assets/dep2.jpg'
import dep3 from '../assets/dep3.jpg'
import galleryPhotos from '../assets/Gallery/Galery.svg'


export default function About(){
  const ref = useRef(null)
  
  function gallery(ev){
    const src = ref.current.src
    ref.current.src = ev.currentTarget.src
    ev.currentTarget.src= src
  }

  return(
    <>
    <section className={styles.us}>
    <h2>Sobre nos</h2>
    <article>
    <h3>Quem somos</h3>
    <p>
    Missão: Na XHealth, nossa missão é inspirar e capacitar pessoas de todas as idades e níveis de condicionamento físico a alcançarem o melhor de si mesmas, promovendo um estilo de vida saudável e equilibrado.
    Visão: Ser a academia referência em excelência, inovação e resultados, tornando-se o destino preferido para aqueles que buscam transformar suas vidas por meio da saúde e bem-estar.
    Valores: Dedicação, Respeito, Comunidade, Integridade e Excelência  
    </p>
    </article>
    <article className={styles.instalations}>
    <h3>Nossas instalações</h3> 
    <img src={acad4} alt="" className={styles.principal}
    ref={ref}
    />
    <div className={styles.gallery}>
      <img src={acad1} alt=""
      onClick={gallery}
      />
      <img src={acad2} alt="" 
      onClick={gallery}
      />
      <img src={acad3} alt="" 
      onClick={gallery}
      />
    </div>
    <p>Nossas instalações foram cuidadosamente projetadas para oferecer um espaço seguro, inspirador e acolhedor. Contamos com uma ampla variedade de equipamentos de alta qualidade, áreas de treinamento funcional, estúdio de aulas em grupo, piscina aquecida, vestiários confortáveis e espaços de relaxamento e convivência.</p>
    </article>
    <h3>Nossos serviços</h3>
    <Accordion>
      <AccordionItem header ={
      <div className={styles.header}>
      <p className={styles.title}>Treinamento Personalizado</p>
      <img src={expand} alt="" />  
      </div>
      } className={styles.accord}>
        <p>Oferecemos programas de treinamento individualizados, desenvolvidos por profissionais experientes, para atender às metas e necessidades específicas de cada cliente.
        </p>
      </AccordionItem>
      <AccordionItem header={
        <div className={styles.header}>
        <p className={styles.title}>Aulas em Grupo</p>
        <img src={expand} alt="" />
        </div>
      } className={styles.accord}>
      <p>Uma extensa seleção de aulas em grupo, como zumba, spinning, pilates, yoga, HIIT e muito mais, proporcionando opções para todos os gostos e níveis de aptidão.
      </p>
      </AccordionItem>
      <AccordionItem
      header={
        <div className={styles.header}>
        <p className={styles.title}>Serviços de bem estar</p>
        <img src={expand} alt="" />
        </div> 
      } className={styles.accord}>
      <p>Além do fitness, valorizamos o bem-estar global dos nossos membros, oferecendo serviços de nutrição, aconselhamento sobre saúde mental e programas de relaxamento.</p>
      </AccordionItem>
      <AccordionItem header={
          <div className={styles.header}>
          <p className={styles.title}>Área do cardio e musculação</p>
          <img src={expand} alt="" />
         </div> 
      }className={styles.accord}>
      <p>Nossa academia dispõe de uma área completa para treinamento cardiovascular e musculação, com equipamentos de última geração.</p>
      </AccordionItem>
    </Accordion>
    <article>
    <h3>Programas Especias</h3>
    <p>Desafios XHealth: Regularmente, promovemos desafios temáticos que incentivam a superação dos nossos membros, recompensando o comprometimento e dedicação.
    XHealth Kids: Pensando no futuro, temos programas especialmente desenvolvidos para crianças, incentivando hábitos saudáveis desde cedo.
    SilverX: Oferecemos programas adaptados para a terceira idade, focados na mobilidade, equilíbrio e bem-estar geral dos idosos.</p>  
    </article>
    <article >
    <h3>Depoimento dos clientes</h3>
    <div className={styles.deps}>
    <img src={dep2} alt="" />
    <div>
      <h3>Ana</h3>
      <p>Desde que me tornei membro da XHealth, minha vida mudou completamente. Antes, eu levava uma vida sedentária e não me sentia bem comigo mesma. Mas, desde o primeiro dia na academia, fui recebida calorosamente pela equipe e pelos outros alunos. As aulas de ginástica e o treinamento funcional são os meus favoritos! A cada semana, sinto minha energia aumentar e minha força física melhorar. Além disso, a XHealth também me ensinou a importância de uma alimentação saudável, e graças ao apoio dos nutricionistas, alcancei meu objetivo de emagrecer e ganhar mais saúde. Hoje, me sinto mais confiante e feliz, e só tenho a agradecer a toda a equipe da XHealth por me ajudarem nessa transformação incrível.</p>
    </div>
    </div>
    <div className={styles.deps}>
    <img src={dep3} alt="" />
    <div>
      <h3>Pedro</h3>
      <p>A XHealth foi o ponto de virada na minha vida. Antes, eu sofria com dores nas costas e não tinha força para executar tarefas simples do dia a dia. A musculação foi a minha salvação! Os professores são muito atenciosos e me ajudaram a corrigir minha postura e a adotar uma rotina de treinos adequada ao meu corpo. Em pouco tempo, senti uma grande melhoria na minha qualidade de vida. Hoje, sou uma pessoa mais ativa, com mais energia e disposição. Além disso, os eventos e workshops promovidos pela academia são fantásticos! Aprendi muito sobre saúde e bem-estar. Agradeço imensamente à XHealth por me devolver a vitalidade e me ensinar a importância de cuidar do corpo e da mente.</p>
    </div> 
    </div>
    <div className={styles.deps}>
    <img src={dep1} alt="" />  
    <div>
      <h3>Júlia</h3>
      <p>A XHealth é muito mais do que uma academia para mim, é como uma segunda família. Os instrutores são incríveis, sempre nos motivando e nos incentivando a alcançar nosso melhor desempenho. Desde que comecei a frequentar as aulas de pilates e yoga, sinto meu corpo mais flexível e minha mente mais tranquila. Além disso, fiz amizades incríveis aqui. O apoio e a camaradagem que encontramos entre os alunos é realmente inspirador. Todos se ajudam e se apoiam mutuamente em cada etapa do caminho. Agradeço a XHealth por me proporcionar esse ambiente tão positivo e acolhedor para me exercitar e cuidar de mim mesma. Recomendo a todos que busquem uma academia que vá além do físico, mas também cuide do nosso bem-estar emocional.</p>
    </div>
    </div>  
    </article>
    <article className={styles.events}>
    <h3>Eventos na comunidade</h3>
    <img src={galleryPhotos} alt="" />  
    </article>
    <article>
    <div>
      <h3>Localização</h3>
      <span>Rua da Saúde, 123</span>
      <span>Bairro Fitness</span>
      <span>Cidade Energia - Estado do Bem-Estar</span>
      <span>CEP: 12345-678</span>
    </div>
    <div>
    <h3>Horário de Funcionamento</h3>
    <span>Segunda a Sexta: 06:00 às 22:00</span>
    <span>Sábados: 08:00 às 18:00</span>
    <span>Domingos e Feriados: Fechado</span>  
    </div>
    <div>
    <h3>Contatos</h3>
    <span>Telefone: (11) 98765-4321</span>
    <span>E-mail: contato@xhealthacademia.com.br</span>  
    </div>
    <div>
    <h3>Redes Sociais</h3>
    <span>Facebook: www.facebook.com/xhealthacademia</span>
    <span>Instagram: www.instagram.com/xhealthacademia</span>
    <span>YouTube: www.youtube.com/xhealthacademia</span>  
    </div>
    <div>
    <h3>Obrigado!</h3>
    <span>
    Agradecimento aos espectadores e potenciais clientes pelo seu tempo e confiança em nosso trabalho.
    Veja a unidade mais próxima a você e agende uma aula experimental ou venha conhecer nosso espaço.  
    </span>  
    </div> 
    </article>
    <button className={styles.button}>Outras unidades</button>
    </section>
    </>  
  )
}