import { styled } from '../../styles'

export const ImageContainer = styled('div', {
  width: '100%',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 1000,
  padding: '1rem',
  marginBottom: '4rem',
  marginLeft: '-60px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
