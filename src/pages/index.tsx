import Image from "next/future/image";
import { HomeContainer, Product } from "../styles/pages/home";

import camisa1 from "../assets/camisetas/1.png"
import camisa2 from "../assets/camisetas/2.png"
import camisa3 from "../assets/camisetas/3.png"


export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camisa1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camisa2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
