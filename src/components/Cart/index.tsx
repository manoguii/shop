import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import ProductModal from '../ProductModal'
import { Close, Content, Overlay, Title } from './styles'

export default function Cart() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} weight="bold" color="#8D8D99" />
        </Close>
        <Title>Sacola de compras</Title>
        <ProductModal />
        <ProductModal />
        <ProductModal />
        <footer>
          <div>
            Quantidade
            <p>
              <strong>3</strong> Itens
            </p>
          </div>
          <div>
            Valor Total
            <span>R$ 270,00</span>
          </div>

          <button>Finalizar compra</button>
        </footer>
      </Content>
    </Dialog.Portal>
  )
}
