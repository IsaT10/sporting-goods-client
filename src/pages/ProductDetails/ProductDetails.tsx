import Container from '@/components/Container';
import { useGetProductsQuery } from '@/redux/api/api';
import img from '../../assets/images/saif71-com-IHYoOsWkufQ-unsplash.jpg';
import { useParams } from 'react-router-dom';
import { Minus, Plus, Spinner } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/redux/hooks';
import { addItem } from '@/redux/features/cartSlice';
import React from 'react';
import { toast } from '@/components/ui/use-toast';

export default function ProductDetails() {
  const [quantity, setQuantity] = React.useState(1);

  console.log(quantity);
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductsQuery({
    id,
  });

  const dispatch = useAppDispatch();

  if (isLoading) {
    return (
      <Container>
        <div className='flex justify-center items-center h-[calc(100vh-150px)]'>
          <Spinner className='h-10 w-10' />
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div className='flex justify-center items-center h-[calc(100vh-150px)]'>
          <p>Error loading product details. Please try again later.</p>
        </div>
      </Container>
    );
  }

  if (!product?.data) {
    return (
      <Container>
        <div className='flex justify-center items-center h-[calc(100vh-150px)]'>
          <p>Product not found.</p>
        </div>
      </Container>
    );
  }

  const { name, price, image, stock, category, brand } = product.data;

  const handleAddToCart = () => {
    if (quantity < stock) {
      dispatch(
        addItem({
          id: id!,
          name,
          price,
          brand,
          category,
          image,
          stock,
          quantity, // Default quantity to 1
        })
      );
      toast({
        title: 'Success',
        description: `${name} is added to cart`,
        variant: 'default',
      });
    } else {
      toast({
        title: 'Error',
        description: `You have reached the maximum quantity available for this item. Please adjust your quantity.`,
        variant: 'destructive',
      });
    }
  };

  return (
    <Container>
      <div className='flex justify-between gap-16 pt-14'>
        <img className='w-1/2 h-[500px]' src={img} alt={name} />

        <div className='w-1/2 flex flex-col gap-4 items-start'>
          <h3 className='font-semibold text-3xl'>{name}</h3>
          <p className='text-[40px] font-bold text-orange-500'>${price}</p>
          <p className='text-[15px] leading-6 text-[#838383] font-'>
            Blue running shoes are crafted with premium materials and innovative
            technology to provide unparalleled comfort and support for your
            runs. With a sleek design and vibrant blue color, they’ll add a pop
            of style to your athletic wardrobe while helping you achieve your
            fitness goals with confidence.
          </p>
          <div className='font-semibold'>
            <p>
              Brand: <span className='text-[#838383] font-normal'>{brand}</span>
            </p>
            <p className='mt-1'>
              Category:{' '}
              <span className='text-[#838383] font-normal'>{category}</span>
            </p>
            <p className='mt-1'>
              Availability:{' '}
              <span className='text-[#5f5f5f]'>
                {stock ? 'In stock' : 'Out of stock'}
              </span>
            </p>
          </div>

          {stock ? (
            <>
              {' '}
              <div className='flex  items-center gap-5 mt-5'>
                <div className='flex items-center gap-6 p-4 rounded-lg border border-stone-200'>
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    <Minus />
                  </button>
                  <input
                    className='w-4 outline-none'
                    type='text'
                    defaultValue={quantity}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  />
                  {/* <span>{quantity}</span> */}
                  <button onClick={() => setQuantity(quantity + 1)}>
                    <Plus />
                  </button>
                </div>

                <Button
                  onClick={handleAddToCart}
                  className='bg-orange-500 rounded-lg px-9 py-7 '
                >
                  Add to cart
                </Button>
              </div>
              <p className='mt'>
                Subtotal:{' '}
                <span className='text-orange-500 font-semibold'>
                  ${price * quantity}
                </span>
              </p>
            </>
          ) : (
            <h2>Out of stock</h2>
          )}
        </div>
      </div>
    </Container>
  );
}
