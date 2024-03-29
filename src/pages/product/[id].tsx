import { GetStaticPaths, GetStaticProps } from 'next'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import axios from 'axios'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {
  ImageContainer,
  ProductContainer,
  ProductDetail,
} from '../../styles/pages/products'

interface ProductsProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductsProps) {
  const [isCreateCheckoutSession, setIsCreateCheckoutSession] = useState(false)

  async function handleBayProduct() {
    try {
      setIsCreateCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreateCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout')
    }
  }

  const title = `${product.name} | Shop`

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetail>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button disabled={isCreateCheckoutSession} onClick={handleBayProduct}>
            Comprar agora
          </button>
        </ProductDetail>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_MZB3mDjifA9zoi' } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}
