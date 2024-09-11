import { CartContainer, CartDetails, CartFooter, CartItem, CartItems, CartItemsContainer, CartSummary, CartTotalPrice, CartTotalQuantity, ItemDetails, ItemDetailsContainer } from "@/styles/pages/cart";
import axios from "axios";
import Image from "next/image";
import { X } from "phosphor-react";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

interface CartProps {
  handleCloseCart: () => void
}

export function Cart({ handleCloseCart }: CartProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { cartDetails, removeItem, clearCart } = useShoppingCart()

  function convertPriceToNumber(priceString: string) {
    const numericPrice = parseInt(
      priceString.replace('R$', '').replace(',', '').trim()
    );
    return numericPrice;
  }

  const shoppingCart = Object.values(cartDetails).map(product => {
    return {
      ...product,
      image: product.imageUrl,
      price: convertPriceToNumber(String(product.price)),
      priceId: product.defaultPriceId
    };
  });

  const totalPrice = shoppingCart.reduce((accumulator, product) => accumulator + (product.price),
    0)

  function handleRemoveItemFromCart(id: string) {
    removeItem(id)
  }

  async function handleBuyProducts() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: shoppingCart.map((item) => ({
          price: item.priceId,
          quantity: 1,
        }))
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
      clearCart()
    } catch (error) {
      setIsCreatingCheckoutSession(false)

      console.log(error)
    }
  }

  return (
    <CartContainer>
      <X size={24} onClick={handleCloseCart} />
      <CartDetails>
        <CartItemsContainer>
          <h3>Sacola de compras</h3>
          <CartItems>
            {shoppingCart.map(product => {
              return (
                <CartItem key={product.id}>
                  <Image src={product.image} width={95} height={95} alt="" />
                  <ItemDetailsContainer>
                    <ItemDetails>
                      <p>{product.name}</p>
                      <span>{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(product.price / 100)}</span>
                    </ItemDetails>
                    <span onClick={() => handleRemoveItemFromCart(product.id)}>Remover</span>
                  </ItemDetailsContainer>
                </CartItem>
              )
            })}
          </CartItems>
        </CartItemsContainer>
        <CartFooter>
          <CartSummary>
            <CartTotalQuantity>
              <p>Quantidade</p>
              <span>{shoppingCart.length} itens</span>
            </CartTotalQuantity>
            <CartTotalPrice>
              <p>Valor total</p>
              <span>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(totalPrice / 100)}</span>
            </CartTotalPrice>
          </CartSummary>
          <button disabled={isCreatingCheckoutSession} onClick={handleBuyProducts} >Finalizar compra</button>
        </CartFooter>
      </CartDetails>
    </CartContainer>
  )
}