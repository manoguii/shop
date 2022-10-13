import { HomeContainer, Product } from '../styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'
import { Handbag } from 'phosphor-react'
import { ShopContext } from '../context/ShopContex'
import { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Stripe from 'stripe'
import Image from 'next/future/image'
import Link from 'next/link'
import Head from 'next/head'
import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const { addProductCart, setProductsStripe } = useContext(ShopContext)

  useEffect(() => {
    setProductsStripe(products)
  }, [])

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Shop</title>
      </Head>

      <Header />

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <Link href={'/'}>
                    <button onClick={() => addProductCart(product.id)}>
                      <Handbag size={32} color="#FFFF" weight="bold" />
                    </button>
                  </Link>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      priceNumber: price.unit_amount / 100,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: (60 * 60) / 2,
  }
}
