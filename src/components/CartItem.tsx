import React from 'react';
import { Minus, Plus, Spinner } from './Icons';
import { useAppDispatch } from '@/redux/hooks';
import { removeItem, updateQuantity } from '@/redux/features/cartSlice';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

export default function CartItem({ item }) {
  const [quantity, setQuantity] = React.useState(item.quantity);
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  const [manualUpdate, setManualUpdate] = React.useState(false);

  React.useEffect(() => {
    if (!manualUpdate) {
      const timeoutId = setTimeout(() => {
        // setIsLoading(true);
        dispatch(updateQuantity({ id: item.id, quantity }));
      }, 1000); // 2000 ms = 2 seconds
      setIsLoading(false);
      return () => clearTimeout(timeoutId);
    }
  }, [dispatch, quantity, item.id, manualUpdate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Validate input to ensure it's a positive number
    if (/^\d+$/.test(value)) {
      setQuantity(Number(value));
      setManualUpdate(true);
    } else if (value === '') {
      setQuantity(0); // Or handle empty input case
      setManualUpdate(true);
    }
  };

  const handleIncrease = () => {
    if (quantity < item?.stock) {
      setIsLoading(true);
      dispatch(updateQuantity({ id: item.id, quantity }));
      setTimeout(() => {
        setQuantity(quantity + 1);
        setManualUpdate(false);
        setIsLoading(false);
        toast({
          title: 'Update cart',
          variant: 'default',
        });
      }, 1000);
    } else {
      toast({
        title: 'Error',
        description: `You have reached the maximum quantity available for this item. Please adjust your quantity.`,
        variant: 'destructive',
      });
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setIsLoading(true);
      dispatch(updateQuantity({ id: item.id, quantity }));
      setTimeout(() => {
        setQuantity(quantity + 1);
        setManualUpdate(false);
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleUpdateCart = () => {
    if (quantity < item?.stock) {
      setIsLoading(true);
      dispatch(updateQuantity({ id: item.id, quantity }));
      setTimeout(() => {
        setIsLoading(false);
        setManualUpdate(false);
        toast({
          title: 'Success',
          description: `${item?.name} is added to cart`,
          variant: 'default',
        });
      }, 1000);
    } else {
      toast({
        title: 'Error',
        description: `You have reached the maximum quantity available for this item. Please adjust your quantity.`,
        variant: 'destructive',
      });
    }
  };

  return (
    <div className='flex py-10 lg:py-5 border-b border-b-stone-300 gap-5 items-start'>
      {/* <div className='flex gap-6 items-center'>
        <img className='w-32 h-28 object-cover' src={item.image} alt='' />
        <div className='flex flex-col gap-2'>
          <span className=' font-semibold'>{item.name}</span>
          <div className='flex gap-4 '>
            <p className='bg-green-400 text-xs font-bold text-stone-800 rounded-full px-2 py-0.5'>
              {item.category}
            </p>
            <p className='bg-purple-400 text-xs font-bold text-stone-800 rounded-full px-2 py-0.5'>
              {item.brand}
            </p>
          </div>
          <span className='font-semibold text-stone-500 text-sm'>
            Price: ${item.price}
          </span>
        </div>
      </div>
      <div className='flex items-center gap-5 px-4 py-2.5 text-sm rounded-full border border-stone-200'>
        <button onClick={handleDecrease}>
          <Minus />
        </button>
        <input
          className='w-5 outline-none'
          type='text'
          value={quantity}
          onChange={handleInputChange}
        />
        <button onClick={handleIncrease}>
          <Plus />
        </button>
      </div>
      <button
        className='bg-stone-800 px-6 flex items-center gap-2 text-white font-semibold py-2'
        onClick={handleUpdateCart}
        disabled={isLoading}
      >
        <span>Update cart</span> {isLoading && <Spinner className='h-3 w-3' />}
      </button>

      <p className=' flex flex-col gap-2 items-center text-sm font-semibold'>
        <span>SUBTOTAL</span>
        <span className='text-orange-500'>${item.quantity * item.price}</span>
      </p>

      <button onClick={() => handleRemoveItem(item.id)}>
        <Remove />
      </button> */}
      <img className='w-32 h-28 object-cover' src={item.image} alt='' />
      <div>
        <div className='flex flex-col gap-3'>
          <span className=' font-semibold text-lg'>{item.name}</span>
          <div className='flex gap-4 '>
            <p className='bg-green-400 text-xs font-bold text-stone-800 rounded-full px-2 py-0.5'>
              {item.category}
            </p>
            <p className='bg-purple-400 text-xs font-bold text-stone-800 rounded-full px-2 py-0.5'>
              {item.brand}
            </p>
          </div>
          <span className='font-semibold  text-sm'>Price: ${item.price}</span>
          <p className='text-sm font-semibold'>
            <span>Subtotal: </span>
            <span className='text-orange-500'>
              ${(item.quantity * item.price).toFixed(2)}
            </span>
          </p>
          <p className='font-semibold text-sm'>Quantity:</p>
          <div className='flex lg:flex-row flex-col gap-5'>
            <div className='flex items-center gap-5 px-4 py-2.5 text-sm rounded-lg border border-stone-200'>
              <button onClick={handleDecrease}>
                <Minus />
              </button>
              <input
                className='w-5 outline-none'
                type='text'
                value={quantity}
                onChange={handleInputChange}
              />
              <button onClick={handleIncrease}>
                <Plus />
              </button>
            </div>

            <Button
              className=' font-semibold w-36 flex gap-2 items-center'
              onClick={handleUpdateCart}
              // disabled={isLoading}
              variant={'outline'}
            >
              <span>Update cart</span>{' '}
              {isLoading && <Spinner className='h-3 w-3' />}
            </Button>
            <Button
              className='hover:border hover:border-red-500 hover:bg-white duration-200 hover:text-red-500'
              variant={'outline'}
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
