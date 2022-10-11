import Image from 'next/future/image'
import { ProductModalContainer } from './styles'

export default function ProductModal({ product }) {
  return (
    <ProductModalContainer>
      <div>
        <Image src={product.imageUrl} width={100} height={90} alt="" />
      </div>
      <aside>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <button>remover</button>
      </aside>
    </ProductModalContainer>
  )
}
