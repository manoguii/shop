import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Stripe from 'stripe'
import HeaderSuccess from '../components/HeaderSuccess'
import ImageSuccess from '../components/ImageSuccess'
import { stripe } from '../lib/stripe'
import { SuccessContainer } from '../styles/pages/success'

interface SuccessProps {
  customerName: string
  product: {
    name: string
  }
  productPurchase: [
    {
      id: string
      images: string
    },
  ]
}

export default function Success({
  customerName,
  product,
  productPurchase,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <HeaderSuccess />

      <SuccessContainer>
        <div>
          {productPurchase.map((item) => {
            return <ImageSuccess key={item.id} item={item} />
          })}
        </div>
        <h1>Compra efetuada !</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, sua{' '}
          <strong>
            {productPurchase.length > 1
              ? `compra de ${productPurchase.length} camisetas`
              : product.name}
          </strong>{' '}
          já está a caminho da sua casa.{' '}
        </p>

        <Link href={'/'}>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  params,
}) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name
  const productName = session.line_items.data[0].price.product as Stripe.Product
  const productPurchase = session.line_items.data.map((product) => {
    return product.price.product
  })

  return {
    props: {
      customerName,
      product: {
        name: productName.name,
      },
      productPurchase,
    },
  }
}
