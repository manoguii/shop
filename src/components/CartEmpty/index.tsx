import Link from 'next/link'
import { CartEmptyContainer } from './styles'

export default function CartEmpty() {
  return (
    <CartEmptyContainer>
      <h1>Seu carrinho está vazio</h1>
      <p>Adicione produtos clicando no botão “Comprar” na página de produto.</p>
      <Link href={'/'}>
        <a>VOLTAR PARA A PÁGINA INICIAL</a>
      </Link>
    </CartEmptyContainer>
  )
}
