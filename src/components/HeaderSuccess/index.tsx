import Image from 'next/image'
import logo from '../../assets/shop.svg'
import { HeaderContainer } from './styles'

export default function HeaderSuccess() {
  return (
    <HeaderContainer>
      <Image src={logo.src} width={130} height={52} alt="" />
    </HeaderContainer>
  )
}
