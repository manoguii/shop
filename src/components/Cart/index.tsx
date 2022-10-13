import {
  ButtonPayament,
  Close,
  Content,
  Overlay,
  PayamentContainer,
  ProductsContainer,
  Title,
} from './styles'
import { X } from 'phosphor-react'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContex'
import CartEmpty from '../CartEmpty'
import ProductModal from '../ProductModal'
import * as Dialog from '@radix-ui/react-dialog'

export default function Cart() {
  const {
    productsShop,
    isCreateCheckoutSession,
    handleBayProduct,
    quantityToCart,
  } = useContext(ShopContext)

  const sumCart = productsShop.reduce((previous, current) => {
    const priceNumberFormat = current.priceNumber
    return previous + priceNumberFormat
  }, 0)

  const formatSum = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(sumCart)

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} weight="bold" color="#8D8D99" />
        </Close>
        <ProductsContainer>
          <Title>Sacola de compras</Title>
          {quantityToCart === 0 ? (
            <CartEmpty />
          ) : (
            productsShop.map((product) => {
              return <ProductModal key={product.id} product={product} />
            })
          )}
        </ProductsContainer>
        {quantityToCart > 0 ? (
          <PayamentContainer>
            <ul>
              <li>
                <p>Quantidade</p>
                <span>{`${quantityToCart} Itens`}</span>
              </li>
              <li>
                <label>Valor Total</label>
                <strong>{formatSum}</strong>
              </li>
            </ul>
            <ButtonPayament
              disabled={isCreateCheckoutSession}
              onClick={handleBayProduct}
            >
              Finalizar compra
            </ButtonPayament>
          </PayamentContainer>
        ) : null}
      </Content>
    </Dialog.Portal>
  )
}
