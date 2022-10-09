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
