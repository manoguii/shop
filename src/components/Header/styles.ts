import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '$gray800',
    borderRadius: 6,
    width: '48px',
    height: '48px',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',

    div: {
      width: '24px',
      height: '24px',
      background: '$green500',
      color: 'white',
      weight: 'bold',
      borderRadius: '9999px',

      border: '2px solid $gray900',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '-8px',
      right: '-8px',
    },
  },
})
