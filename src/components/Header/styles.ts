import { styled } from "../../styles";

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
    border: 'none'
  },
})