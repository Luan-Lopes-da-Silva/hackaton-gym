import { useEffect } from 'react'
import fisio from '../../assets/physical-therapy-6292317_1280 (1) (1).jpg'
import Plus from '../../components/Plus'
export default function Fisio(){
const newTitle = 'Physio'
useEffect(()=>{
  document.title = newTitle  
},[])  
return(
<Plus
title={'Fisioterapeuta'}
img = {fisio}
content = {'O fisioterapeuta é um profissional de saúde altamente capacitado, especializado em avaliar, tratar e prevenir distúrbios do movimento e funcionalidade do corpo humano. O fisioterapeuta é um profissional com graduação em Fisioterapia, uma formação que abrange conhecimentos em anatomia, fisiologia, biomecânica, cinesiologia e outras áreas da saúde.'}
benefitsTitle = {'Vantagens da fisioterapia'}
>
<p>1.Alívio da Dor: A fisioterapia utiliza técnicas e modalidades terapêuticas que ajudam a reduzir a dor em diferentes partes do corpo, seja por lesões, problemas musculares ou articulares.</p>
<p>2.Recuperação de Lesões: O fisioterapeuta auxilia na recuperação de lesões, como entorses, contusões e distensões, por meio de exercícios específicos e terapias manuais.</p>
<p>3.Melhoria da Mobilidade e Flexibilidade: Através de exercícios e alongamentos, a fisioterapia ajuda a melhorar a mobilidade e flexibilidade das articulações, permitindo uma maior amplitude de movimento.</p>
<p>4.Fortalecimento Muscular: A fisioterapia prescreve exercícios de fortalecimento muscular, o que é essencial para recuperar-se de lesões e prevenir problemas futuros.</p>
<p>5.Reabilitação Pós-Cirúrgica: Após cirurgias, a fisioterapia é fundamental para ajudar o paciente a recuperar suas habilidades físicas e voltar às atividades normais.</p>
<p>6.Melhoria da Postura: O fisioterapeuta pode identificar problemas de postura e propor exercícios para corrigi-los, prevenindo dores e desconfortos.</p>
<p>7.Prevenção de Lesões: Através de avaliações físicas e orientações personalizadas, a fisioterapia pode ajudar a prevenir lesões em atletas e pessoas que praticam atividades físicas.</p>
<p>8.Promoção do Bem-Estar Geral: A fisioterapia contribui para a melhoria do bem-estar geral, tanto físico quanto mental, proporcionando maior qualidade de vida.</p>
<p>9.Tratamento de Problemas Respiratórios: A fisioterapia respiratória é utilizada para auxiliar no tratamento de doenças respiratórias, melhorando a capacidade pulmonar e facilitando a respiração.</p>
<p>10.Tratamento de Condições Neurológicas: A fisioterapia é eficaz no tratamento de condições neurológicas, como acidente vascular cerebral (AVC), paralisia cerebral e doença de Parkinson, visando a melhoria da funcionalidade e independência do paciente.</p>
</Plus>
)  
}