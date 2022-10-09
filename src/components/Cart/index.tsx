import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { Content } from './styles'

export default function Cart() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay />
      <Content>
        <Dialog.Close>
          <X size={24} weight="bold" />
        </Dialog.Close>
        <Dialog.Title>Sacola de compras</Dialog.Title>
        <form action="">
          <input type="text" />
        </form>
      </Content>
    </Dialog.Portal>
  )
}
