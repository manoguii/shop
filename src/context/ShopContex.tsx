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
}

export const ShopContext = createContext({} as ShopContextType)

export function Shop({ children }: ContextType) {
  const [productsShop, setProductsShop] = useState<ProductsType[]>([])

  return (
    <ShopContext.Provider value={{ productsShop, setProductsShop }}>
      {children}
    </ShopContext.Provider>
  )
}
