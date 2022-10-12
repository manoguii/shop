import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContex'
import CartEmpty from '../CartEmpty'
import ProductModal from '../ProductModal'
import {
  ButtonPayament,
  Close,
  Content,
  Overlay,
  PayamentContainer,
  ProductsContainer,
  Title,
} from './styles'

export default function Cart() {
  const { productsShop, formatSum, quantityToCart } = useContext(ShopContext)
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} weight="bold" color="#8D8D99" />
        </Close>
        <ProductsContainer>
          <Title>Sacola de compras</Title>
          {quantityToCart === 0 ? (
            <CartEmpty />
          ) : (
            productsShop.map((product) => {
              return <ProductModal key={product.id} product={product} />
            })
          )}
        </ProductsContainer>
        {quantityToCart > 0 ? (
          <PayamentContainer>
            <ul>
              <li>
                <p>Quantidade</p>
                <span>{`${quantityToCart} Itens`}</span>
              </li>
              <li>
                <label>Valor Total</label>
                <strong>{formatSum}</strong>
              </li>
            </ul>
            <ButtonPayament>Finalizar compra</ButtonPayament>
          </PayamentContainer>
        ) : null}
      </Content>
    </Dialog.Portal>
  )
}
