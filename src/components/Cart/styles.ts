import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../styles'

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: '0px',
  right: '0px',
  bottom: '0px',
  width: '30rem',
  background: '$gray800',
  overflowY: 'auto',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '48px',
})

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  top: 28,
  right: 28,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
})

export const Overlay = styled(Dialog.Overlay, {})

export const Title = styled(Dialog.Title, {
  fontSize: '$xl',
  fontWeight: '700',
  color: '$gray100',
  marginBottom: '2rem',
})

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const PayamentContainer = styled('footer', {
  ul: {
    marginTop: '180px',
  },

  li: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '7px',
  },

  p: {
    fontSize: '$md',
    color: '$gray300',
  },

  span: {
    fontSize: '$md',
    color: '$gray300',
  },

  strong: {
    fontSize: '$xl',
    color: '$gray100',
  },

  label: {
    fontSize: '$md',
    color: '$gray100',
  },
})

export const ButtonPayament = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 32px',
  borderRadius: 8,
  color: '$white',
  cursor: 'pointer',
  backgroundColor: '$green500',
  border: 'none',
  width: '100%',
  marginTop: '50px',
  fontSize: '$md',
  fontWeight: '700',

  '&:hover': {
    backgroundColor: '$green300',
  },
})
