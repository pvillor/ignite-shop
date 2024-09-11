import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { useState } from "react"
import Stripe from "stripe"
import Head from "next/head"
import { useShoppingCart } from "use-shopping-cart"
import { Product as CartProduct } from "use-shopping-cart/core"

interface ProductProps {
  product: CartProduct
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart()

  async function handleAddItemToCart() {
    addItem(product)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(product.price / 100)}</span>

          <p>{product.description}</p>

          <button onClick={handleAddItemToCart}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_QSFRRHP7kctiTP' } }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        url: product.url,
        price: Number(price.unit_amount),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}