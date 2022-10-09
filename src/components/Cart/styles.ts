import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../styles'

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: '0px',
  right: '0px',
  bottom: '0px',
  width: '30rem',
  background: '$gray800',
})

export const Close = styled(Dialog.Close, {})

export const Overlay = styled(Dialog.Overlay, {})

export const Title = styled(Dialog.Title, {})
