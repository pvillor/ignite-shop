import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

import logoImg from '../assets/logo.svg';
import { Container, Header, ShoppingBag } from "@/styles/pages/app";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag as ShoppingBagIcon } from "phosphor-react";
import { CartProvider } from "use-shopping-cart";
import { CartCount } from "./components/cart-count";
import { useState } from "react";
import { Cart } from "./components/cart";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [cartOpen, setCartOpen] = useState(false)

  function handleOpenCart() {
    setCartOpen(true)
  }

  function handleCloseCart() {
    setCartOpen(false)
  }

  return (
    <CartProvider mode="payment" cartMode="client-only" stripe={process.env.STRIPE_PUBLIC_KEY} currency="BRL" successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`} cancelUrl={`${process.env.NEXT_URL}`} shouldPersist>
      <Container>
        <Header>
          <Link href='/'>
            <Image src={logoImg} alt="" />
          </Link>
          <ShoppingBag onClick={handleOpenCart}>
            <ShoppingBagIcon size={24} />
            <CartCount />
          </ShoppingBag>

        </Header>
        <Component {...pageProps} />
        {cartOpen && <Cart handleCloseCart={handleCloseCart} />}
      </Container>
    </CartProvider>
  )
}