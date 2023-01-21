import { styled } from '@/styles'

const Button = styled('button', {
  backgroundColor: '$green500',
  padding: 8,
  borderRadius: 8,
  border: 0,

  '&:hover': {
    backgroundColor: 'Aqua',
  },
})

export default function Home() {
  return (
    <>
      <Button>Hello Wolrd</Button>
    </>
  )
}
