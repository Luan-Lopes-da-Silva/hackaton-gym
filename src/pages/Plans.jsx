import style from './plans.module.scss'
export default function Plans(){
return(
<>
<section className={style.section}>
<h2>Nossos Planos</h2>
<article className={style.card1}>
<h3>BASICO</h3>
<p>1.Acesso à academia: Uso completo das instalações de treinamento e equipamentos de musculação.</p>
<p>2.Aulas em grupo: Participação gratuita em aulas de ginástica em grupo, como aeróbica, Zumba, treinamento funcional, entre outras.</p>
<p>3.Acompanhamento inicial: Sessão de avaliação física e definição de metas com um personal trainer.</p>
<p>4.Acesso a vestiários: Uso dos vestiários e chuveiros com armários para guardar pertences.</p>
<p>5.Wi-Fi gratuito: Acesso à internet sem fio nas dependências da academia.</p>
<p>Estacionamento: Possibilidade de estacionar gratuitamente no local durante o período de treinamento.</p>
<h3>R$ 100,00</h3>
</article>

<article className={style.card2}>
<h3>PRATA</h3>
<p>1.Todos os benefícios do Plano Básico.</p>
<p>2.Treino personalizado: Um treino individualizado elaborado por um personal trainer com acompanhamento periódico.</p>
<p>3.Acesso a aulas especiais: Participação em aulas exclusivas, como Pilates, TRX, Spinning ou Yoga.</p>
<p>4.Programa de Nutrição: Orientação nutricional personalizada para auxiliar na dieta e no alcance dos objetivos.</p>
<p>5.Acesso estendido: Possibilidade de treinar em horários mais flexíveis, incluindo horários de pico.</p>
<p>Descontos em serviços: Benefícios em serviços extras, como massagens, sessões de fisioterapia ou acompanhamento psicológico</p>
<h3>R$ 180,00</h3>
</article>  

<article className={style.card3}>
<h3>OURO</h3>
<p>1.Todos os benefícios do Plano Prata.</p>
<p>2.Treino ilimitado: Acesso irrestrito a todas as aulas de grupo e treinos em horários de funcionamento estendidos.</p>
<p>3.Acesso VIP: Prioridade de agendamento para aulas especiais e serviços adicionais.</p>
<p>4.Acesso a outras unidades: Possibilidade de treinar em outras unidades da rede de academias sem custo adicional.</p>
<p>5.Avaliação física avançada: Avaliação periódica mais detalhada com acompanhamento aprofundado dos resultados.</p>
<p>Brindes exclusivos: Recebimento de produtos exclusivos da academia, como camisetas, garrafas de água personalizadas, etc.</p>
<h3>R$ 260,00</h3>
</article>
<p>Se interessou por algum plano ou tem alguma duvida?</p> 
<p>Entre em contato com algum de nossos representantes</p> 
<button>Enviar mensagem</button>
</section>
</>  
)  
}