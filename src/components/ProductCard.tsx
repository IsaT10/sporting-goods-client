import { TProduct } from '@/interface';
import img from '../assets/images/saif71-com-IHYoOsWkufQ-unsplash.jpg';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }: { product: TProduct }) {
  return (
    <div className='900:w-full xs:w-[400px]  mx-auto transition-transform transform duration-300 hover:scale-y-105'>
      <div className='relative rounded-[40px] overflow-hidden hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex flex-col justify-between group'>
        <img
          className='w-full p-3 sm:p-4 pb-0 h-auto  rounded-t-[38px]'
          src={img}
          alt={product.name}
        />
        <div className='pt-4 px-3 sm::px-6 pb-8 bg-white flex flex-col justify-end h-full'>
          <h2 className='font-bold text-xl'>{product.name}</h2>
          <p
            className=' text-stone-500 text-[15px] mt-0.5
          '
          >
            {product.description.slice(0, 80)}...
          </p>
          <div className='flex-grow flex justify-between mt-5 items-start'>
            <p className='bg-blue-200 text-xs font-bold text-white rounded-full px-2 py-0.5'>
              {product.category}
            </p>
            <p className='text-yellow-500'>{product.rating} ★</p>
          </div>
          <p className='text-xl font-bold'>${product.price}</p>
          <div className='absolute bottom-6  right-6 opacity-0 duration-300 group-hover:opacity-100 transition-opacity'>
            <Link to={`/product/${product._id}`}>
              <button className='bg-stone-900 rounded-full px-5 py-2 text-white text-sm font-semibold'>
                Make an order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
