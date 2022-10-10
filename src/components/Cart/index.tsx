import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
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
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} weight="bold" color="#8D8D99" />
        </Close>
        <ProductsContainer>
          <Title>Sacola de compras</Title>
          <ProductModal />
          <ProductModal />
          <ProductModal />
          <ProductModal />
          <ProductModal />
          <ProductModal />
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
