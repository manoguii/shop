import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logo from '../assets/shop.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logo.src} width={130} height={52} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
