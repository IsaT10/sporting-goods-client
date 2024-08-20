import Container from '@/components/Container';
import { useGetProductsQuery } from '@/redux/api/api';
// import img from '../../assets/images/badminton-1.jpg';
import { useParams } from 'react-router-dom';
import { Minus, Plus, Spinner } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/redux/hooks';
import { addItem } from '@/redux/features/cartSlice';
import React from 'react';
import { toast } from '@/components/ui/use-toast';
import Star from '@/components/Star';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useCartItems } from '@/hooks/useCartItems';

export default function ProductDetails() {
  const [quantity, setQuantity] = React.useState(1);
  const { cartItems } = useCartItems();

  const { id } = useParams();

  const selectedItem = cartItems?.find((el) => el.id === id);
  console.log(selectedItem);
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

  const { name, rating, price, image, stock, category, brand } = product.data;

  const handleAddToCart = () => {
    const totalQuantityInCart = (selectedItem?.quantity || 0) + quantity;
    if (totalQuantityInCart <= stock) {
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
      <div className='space-y-9 md:space-y-0 md:flex justify-between gap-10 lg:gap-16 pt-12 pb-20 md:py-24'>
        <PhotoProvider>
          <PhotoView src={image}>
            <img
              className='md:w-1/2 w-full h-[320px] sm:h-[400px] md:h-[500px] rounded-lg object-cover'
              src={image}
              alt={name}
            />
          </PhotoView>
        </PhotoProvider>

        <div className='md:w-1/2 flex flex-col gap-4 items-start'>
          <h3 className='font-semibold text-2xl 900:text-3xl'>{name}</h3>
          <p className='sm:text-[34px] 900:text-[40px] font-bold text-[#FF4500]'>
            ${price}
          </p>
          <Star rating={rating} />
          <p className='text-[15px] leading-6 text-coolGray '>
            Blue running shoes are crafted with premium materials and innovative
            technology to provide unparalleled comfort and support for your
            runs. With a sleek design and vibrant blue color, they’ll add a pop
            of style to your athletic wardrobe while helping you achieve your
            fitness goals with confidence.
          </p>
          <div className='font-semibold'>
            <p>
              Brand: <span className='text-coolGray font-normal'>{brand}</span>
            </p>
            <p className='mt-1'>
              Category:{' '}
              <span className='text-coolGray font-normal'>{category}</span>
            </p>
            <p className='mt-1 '>
              Quantity: <span className='text-coolGray'>{stock}</span>
              {/* <span className='text-darkGray'>
                {stock ? 'In stock' : 'Out of stock'}
              </span> */}
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
                  className='bg-brightOrange rounded-lg px-9 py-7 '
                >
                  Add to cart
                </Button>
              </div>
              <p className='text-stone-700'>
                Subtotal:{' '}
                <span className='text-brightOrange font-semibold'>
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
