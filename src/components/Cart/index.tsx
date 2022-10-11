import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContex'
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
  const { productsShop } = useContext(ShopContext)
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} weight="bold" color="#8D8D99" />
        </Close>
        <ProductsContainer>
          <Title>Sacola de compras</Title>
          {productsShop.map((product) => {
            return <ProductModal key={product.id} product={product} />
          })}
        </ProductsContainer>
        <PayamentContainer>
          <ul>
            <li>
              <p>Quantidade</p>
              <span>3 Itens</span>
            </li>
            <li>
              <label>Valor Total</label>
              <strong>R$ 270,00</strong>
            </li>
          </ul>
          <ButtonPayament>Finalizar compra</ButtonPayament>
        </PayamentContainer>
      </Content>
    </Dialog.Portal>
  )
}
