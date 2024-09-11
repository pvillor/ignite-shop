import { stripe } from "@/lib/stripe";
import { ImageContainer, ImagesContainer, PurchaseDetails, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface CustomerProps {
  customerName: string
  products: {
    price: {
      product: {
        name: string,
        images: string[]
      }
    }
  }[]
}

export default function Success({ customerName, products }: CustomerProps) {
  const moreThanOneProductWereBought = products.length > 1

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ImagesContainer>
          {products.map(item => {
            return (
              <ImageContainer>
                <Image src={item.price.product.images[0]} width={130} height={130} alt="" />
              </ImageContainer>
            )
          })}
        </ImagesContainer>

        <PurchaseDetails>
          <h1>Compra efetuada!</h1>

          {moreThanOneProductWereBought ? (
            <p>Uhuul <strong>{customerName}</strong>, sua compra de {products.length} camisetas já está a caminho da sua casa. </p>
          ) : (
            <p>Uhuul <strong>{customerName}</strong>, sua <strong>{products[0].price.product.name}</strong> já está a caminho da sua casa. </p>
          )}
        </PurchaseDetails>
        <Link href='/'>
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  const products = session.line_items.data

  return {
    props: {
      customerName,
      products
    }
  }
}
