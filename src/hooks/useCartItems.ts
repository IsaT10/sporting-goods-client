import { useAppSelector } from '@/redux/hooks';

const VAT_RATE = 0.15; // Example VAT rate of 15%

export function useCartItems() {
  const cartItems = useAppSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const vat = subtotal * VAT_RATE;
  const total = subtotal + vat;

  return { subtotal, vat, total, cartItems };
}
