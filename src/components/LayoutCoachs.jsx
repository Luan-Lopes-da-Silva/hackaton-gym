/* eslint-disable react/prop-types */
import style from './layout.module.scss'
import ratingImg from '../assets/teste.svg'
import { Link } from 'react-router-dom'

export default function LayoutCoachs(props){
return(
<>
    <main className={style.main}>
    <h1>{props.profissionalName}</h1>
    <div className={style.profissional}>
    <img src={props.profissionalPhoto} alt="" />
    <div className={style.secondColumn}>
    
      <p>{props.infosProfissional}</p>
      <div className={style.rating}>
    <img src={ratingImg} alt="" />  
    <img src={ratingImg} alt="" />  
    <img src={ratingImg} alt="" />  
    <img src={ratingImg} alt="" />  
    <img src={ratingImg} alt="" />  
    </div> 
      <Link to ={'/agendate'}><button>Agendar</button></Link>
    </div> 
    </div>
    <h2>Depoimentos de alunos</h2>
    <div className={style.depoiments}>
    <div className={style.depoiment}>
    <img src={props.depoimentPhoto}/>
    <h3>{props.author}</h3>
    <p>{props.comment}</p>
    <div className={style.rating}>
    <img src={ratingImg} alt="" />  
    <img src={ratingImg} alt="" />  
    <img src={ratingImg} alt="" />  
    <img src={ratingImg} alt="" />  
    <img src={ratingImg} alt="" />  
    </div>  
    </div>
    
    <div className={style.depoiment}>
    <img src={props.depoimentPhoto2}/>
    <h3>{props.author2}</h3>
    <p>{props.comment2}</p>
    <div className={style.rating}>
    <img src={ratingImg} alt="" />  
    <img src={ratingImg} alt="" />  
    <img src={ratingImg} alt="" />  
    <img src={ratingImg} alt="" />  
    <img src={ratingImg} alt="" />  
    </div>   
    </div>
    
    <div className={style.depoiment}>
    <img src={props.depoimentPhoto3}/>
    <h3>{props.author3}</h3>
    <p>{props.comment3}</p>
    <div className={style.rating}>
    <img src={ratingImg} alt="" />  
    <img src={ratingImg} alt="" />  
    <img src={ratingImg} alt="" />  
    <img src={ratingImg} alt="" />  
    <img src={ratingImg} alt="" />  
    </div>  
    </div>
    
    </div>  
    </main>
</>

)
}