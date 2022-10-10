import Image from 'next/future/image'
import { ProductModalContainer } from './styles'
import camisa1 from '../../assets/camisetas/1.png'

export default function ProductModal() {
  return (
    <ProductModalContainer>
      <div>
        <Image src={camisa1} alt="" />
      </div>
      <aside>
        <h1>Camiseta Beyond the Limits</h1>
        <span>R$ 79,90</span>
        <button>remover</button>
      </aside>
    </ProductModalContainer>
  )
}
