import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import camiseta1 from '../assets/images/1.png'
import camiseta2 from '../assets/images/2.svg'
import camiseta3 from '../assets/images/3.svg'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt={''} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 19.90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt={''} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 19.90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt={''} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 19.90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt={''} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 19.90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
