import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../assets/albert-dera-ILip77SbmOE-unsplash.jpg'
import styles from './slider.module.scss'

export default function SliderComponent() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div>
        <h2> Depoimento dos nossos clientes</h2>
        <section className={styles.section}>
        <Slider {...settings}>
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

        </Slider>
        </section>
      </div>
    );
  }
