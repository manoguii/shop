import { styled } from '../../styles'

export const ProductModalContainer = styled('div', {
  background: 'transparent',
  display: 'flex',
  gap: 20,

  img: {
    width: '94px',
    height: '94px',
    background: 'transparent',
  },

  div: {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
  },

  aside: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',

    h1: {
      color: '$gray300',
      fontSize: '$md',
    },

    span: {
      color: '$gray100',
      fontSize: '$md',
    },

    button: {
      backgroundColor: 'transparent',
      color: '$green300',
      border: 'none',
      display: 'flex',
      fontSize: '1rem',
      cursor: 'pointer',
    },
  },
})
