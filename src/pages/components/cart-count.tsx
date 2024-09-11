import { useShoppingCart } from "use-shopping-cart";

export function CartCount() {
  const { cartDetails } = useShoppingCart();

  const shoppingCartLength = Object.values(cartDetails).length

  if (shoppingCartLength === 0) {
    return null
  }

  return <span>{shoppingCartLength}</span>;
}