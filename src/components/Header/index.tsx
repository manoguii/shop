import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/shop.svg'
import { HeaderContainer } from './styles'
import Cart from '../Cart'
import * as Dialog from '@radix-ui/react-dialog'
import { Handbag } from 'phosphor-react'

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={logo.src} width={130} height={52} alt="" />

      <Link href={'/'}>
        <Dialog.Root>
          <Dialog.Trigger>
            <Handbag size={24} weight="bold" color="#8D8D99" />
          </Dialog.Trigger>
          <Cart />
        </Dialog.Root>
      </Link>
    </HeaderContainer>
  )
}
