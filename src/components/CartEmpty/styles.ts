import { styled } from '../../styles'
import * as Dialog from '@radix-ui/react-dialog'

export const CartEmptyContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  h1: {
    color: '$gray300',
    fontSize: '$xl',
    marginBottom: '1rem',
  },

  p: {
    color: '$gray300',
    fontSize: '$md',
    textAlign: 'center',
  },
})

export const ButtonClose = styled(Dialog.Close, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 32px',
  borderRadius: 8,
  color: '$green500',
  backgroundColor: '$gray800',
  cursor: 'pointer',
  border: '3px solid $green500',
  width: '100%',
  marginTop: '50px',
  fontSize: '$md',
  fontWeight: '700',

  '&:hover': {
    color: '$green300',
    border: '3px solid $green300',
  },
})
