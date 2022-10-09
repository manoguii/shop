import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import logo from '../../assets/shop.svg'
import { HeaderContainer } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={logo.src} width={130} height={52} alt="" />

      <Link href={'/'}>
        <button>
          <Handbag size={24} weight="bold" color="#8D8D99" />
        </button>
      </Link>
    </HeaderContainer>
  )
}
