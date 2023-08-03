import LayoutCoachs from "../../components/LayoutCoachs";
import img from "../../assets/subhaan-saleem-Jf7hr7ZQzg8-unsplash-removebg (1).jpg"
import avatar1 from "../../assets/Avatars/aiony-haust-3TLl_97HNJo-unsplash.jpg"
import avatar6 from "../../assets/Avatars/henry-tuchez-ge5VYVTZMtc-unsplash.jpg"
import avatar8 from "../../assets/Avatars/philipp-wuthrich-5n3JP9WAJTs-unsplash.jpg"
import { useEffect } from "react";

export default function PersonalInfos(){
const newTitle = 'Personal - Rodrigo Almeida'
useEffect(()=>{
document.title=newTitle
},[])
return(
<>
<LayoutCoachs
profissionalName={'Rodrigo Almeida'}
profissionalPhoto = {img}
infosProfissional ={'Rodrigo Almeida é um personal trainer altamente requisitado, conhecido por seus resultados impressionantes com atletas profissionais e entusiastas do fitness. Sua abordagem personalizada e motivadora tem ajudado inúmeros clientes a atingir suas metas de condicionamento físico e superar seus próprios limites. Com uma vasta experiência em treinamento de força, treinos funcionais e periodização do treinamento, Rodrigo desenvolve programas sob medida para cada indivíduo, levando em conta suas necessidades específicas e objetivos. Sua paixão pelo esporte e sua energia contagiante inspiram seus clientes a se dedicarem ao máximo para alcançar um desempenho de alta performance.'}
depoimentPhoto = {avatar8}
author = {'Marcos oliveira'}
comment = {'"Ricardo Almeida é muito mais do que um personal trainer. Ele é um verdadeiro coach de alta performance. Desde o início dos nossos treinamentos, ele identificou meus pontos fortes e fracos, traçou metas ambiciosas e me ajudou a superar meus próprios limites."'}
depoimentPhoto2 = {avatar1}
author2 = {'Ana Carolina'}
comment2 = {'"Conhecer o Ricardo Almeida foi um divisor de águas na minha jornada fitness. Ele é um personal trainer excepcional, dedicado e motivador. Com o seu acompanhamento, consegui alcançar resultados que antes pareciam impossíveis.  O Ricardo é uma verdadeira inspiração e estou grata por tê-lo como meu treinador!"'}
depoimentPhoto3 = {avatar6}
author3 = {'Fernanda Mendes'}
comment3 = {'"O Ricardo Almeida é simplesmente incrível! Ele é um personal trainer que vai além de apenas criar exercícios. Ele se preocupa genuinamente com o bem-estar de seus clientes. Quando comecei a treinar com o Ricardo, estava insegura e desmotivada. Mas ele rapidamente conquistou minha confiança e me fez acreditar no meu potencial."'}
/>
</>  
)  
}