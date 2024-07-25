import Container from '@/components/Container';
import ProductListItem from '@/components/ProductListItem';

import { useGetProductsQuery } from '@/redux/api/api';

export default function ManageProducts() {
  const { data, error, isLoading } = useGetProductsQuery('');

  if (isLoading) return <p>loading...</p>;

  return (
    <Container>
      <div className='border border-stone-200 font-semibold rounded-b-none text-stone-500 text-sm rounded-lg py-4 px-10 flex justify-between items-center'>
        <span className='flex-1 ml-6'>Name</span>
        <span className='flex-1 text-center'>Price</span>
        <span className='flex-1 text-center'>Category</span>
        <span className='flex-1 text-center'>Stock</span>
        <span className='flex-[.5] text-center'></span>
      </div>

      <div className='rounded-lg border border-t-0 rounded-t-none border-stone-200 divide-y divide-stone-200'>
        {data.data.map((el, idx) => (
          <ProductListItem key={idx} product={el} />
        ))}
      </div>
    </Container>
  );
}
