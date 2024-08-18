import CartItem from '@/components/CartItem';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { useCartItems } from '@/hooks/useCartItems';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  const { subtotal, vat, total, cartItems } = useCartItems();

  return (
    <div className=''>
      <PageHeader route='cart' title='Shopping Cart' />

      <Container>
        {!cartItems.length ? (
          <div className='flex flex-col gap-6 justify-center items-center h-[calc(100vh-300px)]'>
            <p className='text-xl  font-semibold'>No products in the cart.</p>
            <Link to={'/all-products'}>
              <Button className='bg-orange-500'>Return to shop</Button>
            </Link>
          </div>
        ) : (
          <div className='md:flex gap-5 lg:gap-10 md:mt-10 lg:mt-20 mb-32'>
            <div className='flex-1 '>
              {cartItems?.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className='md:w-[370px] 900:w-[400px] bg-white p-5 shadow-l h-max mt-20 md:mt-9 lg:mt-3 border border-stone-300 rounded-lg'>
              <div className='text-xs md:text-sm'>
                <h3 className='text-lg md:text-2xl font-semibold mb-3'>
                  Cart totals
                </h3>
                <div className='font-semibold  flex justify-between py-4 border-b border-b-stone-200'>
                  <span>SUBTOTAL</span>
                  <span className='text-orange-500'>
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className='font-semibold  flex justify-between py-4 border-b border-b-stone-200 min-h-28'>
                  <span>VAT (15%)</span>
                  <span className='text-orange-500'>${vat.toFixed(2)}</span>
                </div>
                <div className='font-semibold  flex justify-between py-4 border-b border-b-stone-200 '>
                  <span>TOTAL</span>
                  <span className='text-orange-500'>${total.toFixed(2)}</span>
                </div>
              </div>
              <button
                className='mt-10 bg-orange-500 w-full rounded-lg p-3 text-white font-semibold'
                onClick={handleProceedToCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
