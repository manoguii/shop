import Image from 'next/future/image'
import { ImageContainer } from './styles'

export default function ImageSuccess({ item }) {
  return (
    <ImageContainer>
      <Image src={item.images[0]} width={120} height={110} alt="" />
    </ImageContainer>
  )
}
