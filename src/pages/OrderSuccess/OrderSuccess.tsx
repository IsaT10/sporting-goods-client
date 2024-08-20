import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  return (
    <div className='h-screen flex-col flex 500px] justify-center items-center bg-stone-100'>
      <div className='bg-white h-[350px] px-10 w-[500px] text-center pt-14 pb-10 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.2)]'>
        <div className='bg-gradient-to-br from-[#eb6e41] to-brightOrange p-4 rounded-full w-max mx-auto'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='white'
            stroke-width='2'
            className='size-8'
          >
            <path
              fillRule='evenodd'
              d='M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z'
              clipRule='evenodd'
            />
          </svg>
        </div>

        <h3 className='text-stone-900 font-semibold text-lg mt-8'>
          Order Confirmed!
        </h3>
        <p className='text-stone-500'>
          Thank you for your purchase! Your order has been successfully placed
          and is being processed.
        </p>

        <div className='space-x-4 mt-10'>
          <Link
            to='/'
            className='px-8 py-2 font-semibold text-sm text-brightOrange rounded-sm border-2 border-brightOrange'
          >
            Back Home
          </Link>
          <Link
            to='/all-products'
            className='bg-gradient-to-br from-[#f36d3c] to-brightOrange font-semibold text-sm text-offWhite px-8 py-2.5 rounded-sm -2  border-brightOrange'
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
