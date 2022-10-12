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
}

interface ContextType {
  children: ReactNode
}

interface ShopContextType {
  productsShop: ProductsType[]
  setProductsShop: Dispatch<SetStateAction<ProductsType[]>>
  removeItemToCart: (id: string) => void
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

  return (
    <ShopContext.Provider
      value={{ productsShop, setProductsShop, removeItemToCart }}
    >
      {children}
    </ShopContext.Provider>
  )
}
