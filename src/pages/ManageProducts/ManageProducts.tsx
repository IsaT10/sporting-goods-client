import Container from '@/components/Container';
import ProductListItem from '@/components/ProductListItem';
import { useGetProductsQuery } from '@/redux/api/api';
import AddProductModal from '@/components/AddProductModal';
import { Input } from '@/components/ui/input';
import React from 'react';
import useDebounce from '@/hooks/useDebounce';
import { Spinner } from '@/components/Icons';
import SortByStock from '@/components/SortByStock';
import FilterdByCategory from '@/components/FilterdByCategory';
import PaginationProducts from '@/components/PaginationProducts';
import { TProduct } from '@/interface';

export default function ManageProducts() {
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [category, setCategory] = React.useState<string>('');
  const [byStock, setByStock] = React.useState<string>('stock');
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [limit] = React.useState<number>(10); // Items per page
  const value = useDebounce(searchTerm, 600);

  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsQuery({
    searchTerm: value,
    category,
    page: currentPage,
    sort: byStock,
  });

  const totalPages = products?.data?.totalProduct
    ? Math.ceil(products.data.totalProduct / limit)
    : 1; // Assuming `total` is the total number of products

  if (isLoading)
    return (
      <div className='h-[calc(100vh-150px)] flex justify-center items-center'>
        <Spinner className='h-10 w-10' />
      </div>
    );

  if (error)
    return (
      <div className='h-[calc(100vh-150px)] flex justify-center items-center text-red-600 font-semibold text-2xl'>
        Unable to load data. Please check your internet connection and try
        again.
      </div>
    );

  return (
    <Container>
      <div className='pb-28 pt-14'>
        <div className='flex justify-between gap-10'>
          <div className='flex flex-col gap-5'>
            <AddProductModal />
            <SortByStock byStock={byStock} setByStock={setByStock} />
          </div>
          <div className='flex flex-col gap-5 md:w-[30%] lg:w-[25%] items-end'>
            <Input
              value={searchTerm}
              type='text'
              placeholder='Search by name...'
              onChange={(e) => setSearchTerm(e.target.value)}
              className=''
            />
            <FilterdByCategory category={category} setCategory={setCategory} />
          </div>
        </div>

        {!products?.data?.products?.length ? (
          <div className='h-[60vh] flex justify-center items-center '>
            <p className='text-stone-700 text-xl font-semibold'>
              No results found for your search criteria.
            </p>
            {/* <p>Try adjusting your filters or search terms.</p> */}
          </div>
        ) : (
          <>
            <div className='border border-stone-200 font-semibold rounded-b-none text-stone-800 text-sm rounded-lg py-4 px-6 md:px-10 flex justify-between items-center mt-10 bg-orange-100'>
              <span className='flex-1 md:ml-6'>Name</span>
              <span className='flex-1  text-center'>Price</span>
              <span className='flex-1 text-center'>Category</span>
              <span className='flex-1 text-center'>Stock</span>
              <span className='flex-[.5] text-center'>Actions</span>
            </div>

            <div className='rounded-lg border border-t-0 rounded-t-none border-stone-200 divide-y divide-stone-200 mb-10'>
              {products?.data?.products?.map((el: TProduct, idx: number) => (
                <ProductListItem key={idx} product={el} />
              ))}
            </div>
          </>
        )}

        {products?.data?.products?.length < 10 ? null : (
          <PaginationProducts
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </Container>
  );
}
