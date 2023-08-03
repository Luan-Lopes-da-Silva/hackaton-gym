import physio from '../../assets/physical-therapy-6292317_1280 (1) (1).jpg'
import avatar5 from "../../assets/Avatars/erwi-vZurgrIe60w-unsplash.jpg"
import avatar7 from "../../assets/Avatars/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
import avatar9 from "../../assets/Avatars/stephanie-liverani-Zz5LQe-VSMY-unsplash.jpg"
import LayoutCoachs from "../../components/LayoutCoachs"
import { useEffect } from 'react'

export default function Physio(){
const newTitle = 'Fisio - Pedro Moraes'
useEffect(()=>{
document.title=newTitle
},[])
return(
<>
<LayoutCoachs
profissionalName={'Pedro Moraes'}
profissionalPhoto={physio}
infosProfissional={'Rodrigo Almeida é um personal trainer altamente requisitado, conhecido por seus resultados impressionantes com atletas profissionais e entusiastas do fitness. Sua abordagem personalizada e motivadora tem ajudado inúmeros clientes a atingir suas metas de condicionamento físico e superar seus próprios limites. Com uma vasta experiência em treinamento de força, treinos funcionais e periodização do treinamento, Rodrigo desenvolve programas sob medida para cada indivíduo, levando em conta suas necessidades específicas e objetivos. Sua paixão pelo esporte e sua energia contagiante inspiram seus clientes a se dedicarem ao máximo para alcançar um desempenho de alta performance.'}
depoimentPhoto={avatar9}
author={'Vanessa Silva'}
comment={'""O Pedro Moraes é um fisioterapeuta incrível! Eu estava com muitas dores nas costas há meses e já havia tentado diferentes tratamentos, mas nada parecia funcionar. Foi quando conheci o Pedro e ele fez toda a diferença na minha recuperação."'}
depoimentPhoto2={avatar7}
author2={'João Mendes'}
comment2={'""O Pedro Moraes é um verdadeiro profissional! Eu sofri uma lesão no joelho enquanto praticava esportes e fiquei preocupado com minha recuperação. No entanto, desde a primeira consulta com o Pedro, minha confiança foi restaurada."'}
depoimentPhoto3={avatar5}
author3={'MARIANA OLIVEIRA'}
comment3={'"O Pedro Moraes é simplesmente excepcional! Tive a sorte de encontrar um fisioterapeuta tão talentoso e cuidadoso como ele. Pedro me acompanhou em toda a minha jornada de reabilitação após uma cirurgia no ombro, e seu suporte foi fundamental para minha recuperação bem-sucedida."'}


/>

</>  
)  
}