import Plus from "../../components/Plus";
import img from "../../assets/subhaan-saleem-Jf7hr7ZQzg8-unsplash-removebg (1).jpg"
import { useEffect } from "react";
export default function Personal(){
const newTitle = 'Personal'
useEffect(()=>{
document.title = newTitle
},[])  
return(
<>
<Plus
title = {'Personal trainer'}
img={img}
content={'Um Personal Trainer é um profissional capacitado para oferecer orientação personalizada, motivação e suporte individualizado em busca de objetivos específicos relacionados à saúde, condicionamento físico e bem-estar. O Personal Trainer é um profissional formado em Educação Física ou áreas relacionadas, com conhecimento teórico e prático em treinamento físico, anatomia, fisiologia e nutrição.'}
benefitsTitle ={'Vantagens e responsabilidades do personal trainer'}
>
<p>Personalização: Os programas são elaborados de acordo com o perfil, histórico de saúde e objetivos de cada pessoa, otimizando resultados.</p>
<p>Orientação Correta: O Personal Trainer ensina as técnicas corretas de execução dos exercícios, reduzindo o risco de lesões e maximizando os benefícios.</p>
<p>Motivação: Com apoio contínuo e incentivo, o Personal Trainer mantém os clientes motivados para alcançar seus objetivos, mesmo nos momentos mais desafiadores.</p>
<p>Eficiência: Os treinos são planejados para serem eficientes, com exercícios adequados e periodização adequada, para garantir progresso constante.</p>
<p>Avaliação Inicial: Realizar uma análise completa das condições físicas, histórico de saúde, limitações e metas do cliente antes de iniciar o programa de treinamento</p>
<p>Elaboração do Programa: Desenvolver um plano de treinamento personalizado, considerando objetivos, disponibilidade de tempo, nível de condicionamento e preferências do cliente.</p>
<p>Supervisão: Acompanhar de perto o cliente durante os treinos, corrigindo posturas e garantindo que os exercícios sejam realizados de forma segura e eficaz.</p>
<p>Atualização do Programa: Periodicamente, ajustar e modificar o programa para garantir a progressão e evitar estagnação.</p>  
</Plus>
</> 
)  
}