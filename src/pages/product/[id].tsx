import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"
import Image from "next/future/image"
import Stripe from "stripe"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetail } from "../../styles/pages/products"

interface ProductsProps {
  product: {
    id: string; 
    name: string;
    imageUrl: string;
    price: string;
    description: string;
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {params: {id: 'prod_MZB3mDjifA9zoi'}}
    ],
    fallback: false,
  }
}

export default function Product({ product }: ProductsProps) {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt=""/>
      </ImageContainer>

      <ProductDetail>
        <h1>{ product.name }</h1>
        <span>{ product.price }</span>

        <p>{ product.description }</p>
        
        <button>
          Comprar agora
        </button>
      </ProductDetail>
    </ProductContainer>
    )
}


export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
  const productId = params.id;

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
      }
    },
    revalidate: 60 * 60 * 1,
  }
}