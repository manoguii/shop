import { Container, Header } from '@/styles/pages/app'
import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logo from '../assets/Logo.svg'
import Image from 'next/image'

globalStyles() // <-- config global stitches

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logo} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
