import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { Close, Content, Overlay, Title } from './styles'

export default function Cart() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} weight="bold" />
        </Close>
        <Title>Sacola de compras</Title>
        <form action="">
          <input type="text" />
        </form>
      </Content>
    </Dialog.Portal>
  )
}
