import { AppProps } from 'next/app'
// import Header from '../components/Header'
import { Shop } from '../context/ShopContex'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Shop>
        <Component {...pageProps} />
      </Shop>
    </Container>
  )
}
