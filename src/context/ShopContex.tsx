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
  removeItemToCart: (id: string) => void
  isCreateCheckoutSession: boolean
  handleBayProduct: () => Promise<void>
  addProductCart: (id: string) => void
  setProductsStripe: Dispatch<SetStateAction<ProductsType[]>>
}

export const ShopContext = createContext({} as ShopContextType)

export function Shop({ children }: ContextType) {
  const [productsStripe, setProductsStripe] = useState<ProductsType[]>([])

  const [productsShop, setProductsShop] = useState<ProductsType[]>([])
  const [isCreateCheckoutSession, setIsCreateCheckoutSession] = useState(false)

  async function handleBayProduct() {
    try {
      setIsCreateCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        productsCart: productsShop,
      })
      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreateCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  function addProductCart(id: string) {
    const productClicked = productsStripe.find((produto) => {
      return produto.id === id
    })

    const haveInCart = productsShop.some((item) => {
      return item.id === productClicked.id
    })

    if (haveInCart) {
      return alert('O produto ja esta no carrinho')
    } else setProductsShop((state) => [...state, productClicked])
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

  return (
    <ShopContext.Provider
      value={{
        productsShop,
        removeItemToCart,
        isCreateCheckoutSession,
        handleBayProduct,
        addProductCart,
        setProductsStripe,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
