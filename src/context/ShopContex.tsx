import axios from 'axios'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

interface ProductsType {
  id: string
  name: string
  imageUrl: string
  price: string
  priceNumber?: number
}

interface ContextType {
  children: ReactNode
}

interface ShopContextType {
  productsShop: ProductsType[]
  setProductsShop: Dispatch<SetStateAction<ProductsType[]>>
  removeItemToCart: (id: string) => void
  formatSum: string
  quantityToCart: number
  setProductStripe: Dispatch<SetStateAction<{}>>
  isCreateCheckoutSession: boolean
  handleBayProduct: () => Promise<void>
}

export const ShopContext = createContext({} as ShopContextType)

export function Shop({ children }: ContextType) {
  const [productsShop, setProductsShop] = useState<ProductsType[]>([])
  const [productStripe, setProductStripe] = useState()
  const [isCreateCheckoutSession, setIsCreateCheckoutSession] = useState(false)
  console.log(productStripe)

  async function handleBayProduct() {
    try {
      setIsCreateCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        priceId: productStripe,
      })
      console.log(response)
      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreateCheckoutSession(false)
      console.log(err)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  function removeItemToCart(id: string) {
    const productClicked = productsShop.find((product) => {
      return product.id === id
    })
    const newArray = productsShop.filter((product) => {
      return product !== productClicked
    })
    setProductsShop(newArray)
  }

  // eslint-disable-next-line array-callback-return
  const sumCart = productsShop.reduce((previous, current) => {
    const typePrice = current.priceNumber
    return previous + typePrice
  }, 0)

  const formatSum = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(sumCart)

  const quantityToCart = productsShop.length

  return (
    <ShopContext.Provider
      value={{
        productsShop,
        setProductsShop,
        removeItemToCart,
        formatSum,
        quantityToCart,
        setProductStripe,
        isCreateCheckoutSession,
        handleBayProduct,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
