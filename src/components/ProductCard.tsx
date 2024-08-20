import { TProduct } from '@/interface';
// import img from '../assets/images/badminton-1.jpg';
import { Link } from 'react-router-dom';

import Star from './Star';

export default function ProductCard({ product }: { product: TProduct }) {
  return (
    <div className='900:w-full rounded-lg xs:w-[400px] mx-auto transition-transform transform duration-300 '>
      <div className='relative border-2  rounded-xl overflow-hidden hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex flex-col justify-between group'>
        <div className='h-96 bg-gray-200 flex items-center justify-center'>
          <img
            src={product.image}
            alt={product.name}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='pt-4 px-4 sm:px-6 pb-8 bg-white flex flex-col justify-end h-full'>
          <h2 className='font-bold text-lg'>{product.name}</h2>
          <p
            className=' text-stone-500 text-[15px] mt-0.5
          '
          >
            {product.description.slice(0, 80)}...
          </p>
          <div className='flex-grow flex justify-between mt-3 mb-2 items-start'>
            <div className='flex gap-3'>
              <p className='bg-green-400 text-xs font-bold  rounded-full px-3 py-0.5'>
                {product.category}
              </p>
              <p className='bg-purple-400 text-xs font-bold  rounded-full px-3 py-0.5'>
                {product.brand}
              </p>
            </div>
            <Star rating={product.rating} />
          </div>
          <p className='mt-1 mb-2 text-sm text-stone-600'>
            {product.stock ? (
              <span>Stock quantity: {product.stock}</span>
            ) : (
              <span
                className='text-xs px-2 py-1 text-white rounded-md
              bg-[#bc0101] font-semibold'
              >
                Out of stock
              </span>
            )}
          </p>
          <div className='flex justify-between'>
            <p className='text-xl font-bold text-brightOrange'>
              ${product.price}
            </p>
            <div className=''>
              <Link to={`/product/${product._id}`}>
                <button className='bg-stone-900 rounded-full px-5 py-2 text-white text-sm font-semibold'>
                  Make an order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className='900:w-full xs:w-[400px]  mx-auto transition-transform transform duration-300 hover:scale-y-105'>
// <div className='relative rounded-xl overflow-hidden hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex flex-col justify-between group'>
//   <div className='h-96 bg-gray-200 flex items-center justify-center'>
//     <img
//       src={product.image}
//       alt={product.name}
//       className='w-full h-full object-cover'
//     />
//   </div>
//   <div className='pt-4 px-4 sm::px-6 pb-8 bg-white flex flex-col justify-end h-full'>
//     <h2 className='font-bold text-xl'>{product.name}</h2>
//     <p
//       className=' text-stone-500 text-[15px] mt-0.5
//     '
//     >
//       {product.description.slice(0, 80)}...
//     </p>
//     <div className='flex-grow flex justify-between mt-5 mb-2 items-start'>
//       <div className='flex gap-3'>
//         <p className='bg-green-400 text-xs font-bold  rounded-full px-3 py-0.5'>
//           {product.category}
//         </p>
//         <p className='bg-purple-400 text-xs font-bold  rounded-full px-3 py-0.5'>
//           {product.brand}
//         </p>
//       </div>
//       <Star rating={product.rating} />
//     </div>
//     <p className='mt-1 mb-3 text-sm text-stone-600'>
//       {product.stock ? (
//         <span>Stock quantity: {product.stock}</span>
//       ) : (
//         <span
//           className='text-xs px-2 py-1 text-white rounded-md
//         bg-[#bc0101] font-semibold'
//         >
//           Out of stock
//         </span>
//       )}
//     </p>
//     <p className='text-xl font-bold text-brightOrange'>
//       ${product.price}
//     </p>
//     <div className='absolute bottom-6  right-6 opacity-0 duration-300 group-hover:opacity-100 transition-opacity'>
//       <Link to={`/product/${product._id}`}>
//         <button className='bg-stone-900 rounded-full px-5 py-2 text-white text-sm font-semibold'>
//           Make an order
//         </button>
//       </Link>
//     </div>
//   </div>
// </div>
// </div>
