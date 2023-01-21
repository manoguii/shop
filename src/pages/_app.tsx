import { Container, Header } from '@/styles/pages/app'
import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logo from '../assets/logo.svg'

globalStyles() // <-- config global stitches

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logo.src} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
