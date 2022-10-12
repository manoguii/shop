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
}

export const ShopContext = createContext({} as ShopContextType)

export function Shop({ children }: ContextType) {
  const [productsShop, setProductsShop] = useState<ProductsType[]>([])

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
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
