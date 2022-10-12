import Image from 'next/future/image'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContex'
import { ProductModalContainer } from './styles'

export default function ProductModal({ product }) {
  const { removeItemToCart } = useContext(ShopContext)

  return (
    <ProductModalContainer>
      <div>
        <Image src={product.imageUrl} width={100} height={90} alt="" />
      </div>
      <aside>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <button onClick={() => removeItemToCart(product.id)}>remover</button>
      </aside>
    </ProductModalContainer>
  )
}
