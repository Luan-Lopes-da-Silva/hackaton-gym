import nutri from '../../assets/yilmaz-akin-FPKtCl74Hfs-unsplash-removebg-preview.png'
import avatar2 from "../../assets/Avatars/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
import avatar3 from "../../assets/Avatars/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
import avatar4 from "../../assets/Avatars/duman-photography-w3JKo9UgXFY-unsplash.jpg"
import LayoutCoachs from "../../components/LayoutCoachs"
import { useEffect } from 'react'


export default function NutriInfos(){
  const newTitle = 'Nutri - Laura Santos'
  useEffect(()=>{
  document.title=newTitle
  },[])
  return(
  <>
  <LayoutCoachs
  profissionalName={'Laura Santos'}
  profissionalPhoto={nutri}
  infosProfissional={' Laura Santos é uma nutricionista esportiva altamente conceituada, reconhecida por sua abordagem holística e baseada em evidências para a nutrição esportiva. Com uma formação sólida em nutrição e fisiologia do exercício, Laura trabalha com atletas de diferentes modalidades para otimizar seu desempenho, recuperação e bem-estar geral. Sua expertise inclui a elaboração de planos alimentares personalizados que atendem às necessidades específicas de cada atleta, maximizando a ingestão de nutrientes essenciais para o sucesso esportivo.'}
  depoimentPhoto={avatar4}
  author={'Carlos Rodrigues'}
  comment={'"A Laura Santos é uma nutricionista excepcional! Desde o momento em que comecei a seguir suas orientações, minha vida mudou para melhor. Ela é muito atenciosa, compreensiva e dedicada a seus pacientes.."'}
  depoimentPhoto2={avatar3}
  author2={'Camila Almeida'}
  comment2={'""A Laura Santos é mais do que uma nutricionista, ela é uma verdadeira inspiração! Com sua orientação e conhecimento, consegui superar meus desafios com a alimentação e conquistar uma relação mais saudável com a comida. Ela me mostrou que uma dieta não precisa ser restritiva ou monótona para ser eficaz"'}
  depoimentPhoto3={avatar2}
  author3={'Pedro Mendonça'}
  comment3={'""A Laura Santos é uma profissional exemplar! Como atleta, sempre tive preocupações específicas em relação à minha nutrição. Laura foi capaz de criar um plano alimentar que atendeu perfeitamente às minhas necessidades, fornecendo a energia e os nutrientes necessários para o meu desempenho esportivo.."'}
  />
  
  </>  
  )
}