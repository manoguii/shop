import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../styles'

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: '0px',
  right: '0px',
  bottom: '0px',
  width: '30rem',
  background: '$gray800',

  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'space-between',

  footer: {
    position: 'absolute',
    bottom: '48px',
    right: '48px',
    left: '48px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',

    div: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
})

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  top: 28,
  right: 28,
  background: 'transparent',
  border: 'none',
})

export const Overlay = styled(Dialog.Overlay, {})

export const Title = styled(Dialog.Title, {
  position: 'absolute',
  top: '72px',
  left: '48px',
})
