import Image from 'next/future/image'
import { ImageContainer } from './styles'

export default function ImageSuccess({ product }) {
  return (
    <ImageContainer>
      <Image src={product.imageUrl} width={120} height={110} alt="" />
    </ImageContainer>
  )
}
