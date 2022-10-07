import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetail } from "../../styles/pages/products"

export default function Product() {

  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetail>
        <h1>camisetas X</h1>
        <span>R$ 79,80</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vel reiciendis iure quam, quaerat et expedita, quasi ab veritatis aliquam unde inventore explicabo temporibus illo eum dolores rem modi nobis?</p>
        
        <button>
          Comprar agora
        </button>
      </ProductDetail>
    </ProductContainer>
    )
}