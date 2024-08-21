import Container from '@/components/Container';
import { Filter, Spinner } from '@/components/Icons';
import ProductCard from '@/components/ProductCard';
import { TProduct } from '@/interface';
import { useGetProductsQuery } from '@/redux/api/api';
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PaginationProducts from '@/components/PaginationProducts';
import FilterProducts from './sections/FilterProducts';
import useFilters from '@/hooks/useFilters';

const initialFilterState = {
  searchTerm: '',
  category: 'all',
  brand: 'all',
  byPrice: '',
  byRating: 'all',
};

export default function AllProducts() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');

  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [limit] = React.useState<number>(10); // Items per page
  const { filters, handleFilterChange, handleResetAll } = useFilters({
    ...initialFilterState,
    category: categoryParam || 'all',
  });

  React.useEffect(() => {
    if (categoryParam) {
      handleFilterChange('category', categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (value: string) => {
    handleFilterChange('category', value);
    queryParams.set('category', value);
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery(
    {
      page: currentPage,
      searchTerm: filters.debouncedSearchTerm,
      category: filters.category,
      brand: filters.brand,
      sort: filters.byPrice,
      rating: filters.byRating,
    },
    { pollingInterval: 30000 }
  );

  const totalPages = products?.data?.totalProduct
    ? Math.ceil(products.data.totalProduct / limit)
    : 1;

  if (isLoading)
    return (
      <div className='h-[calc(100vh-150px)] flex justify-center items-center'>
        <Spinner className='h-10 w-10' />
      </div>
    );

  if (error)
    return (
      <div className='h-[calc(100vh-150px)] flex justify-center items-center text-red-600 font-semibold text-center sm:text-xl md:text-2xl'>
        Unable to load data. Please check your internet connection and try
        again.
      </div>
    );

  return (
    <div className='mb-24'>
      <div className='hidden 650:inline-block bg-[#091F40] w-full py-4 md:py-12 lg:py-20'>
        <Container>
          <h2 className=' sm:text-xl md:text-2xl lg:text-3xl font-bold md:mb-2 text-white'>
            All Products
          </h2>
          <span className=' text-stone-400 text-sm font-medium'>
            <span className='cursor-pointer text-xs md:text-base hover:text-stone-200'>
              <Link to='/'>home / </Link>
            </span>
            <span className='cursor-pointer text-xs md:text-base text-stone-200'>
              all-Products
            </span>
          </span>
        </Container>
      </div>
      <Container>
        <div className='flex 650:hidden justify-between ml-3 mr-2 pt-4'>
          <h2 className='text-lg font-bold '>All Products</h2>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant='secondary' className=''>
                <Filter /> <span className='ml-2 text-sm'>Filter</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side={'left'}
              className='max-h-full pt-14 overflow-y-auto'
            >
              <FilterProducts
                searchTerm={filters.searchTerm}
                setSearchTerm={(value) =>
                  handleFilterChange('searchTerm', value)
                }
                byPrice={filters.byPrice}
                setByPrice={(value) => handleFilterChange('byPrice', value)}
                category={filters.category}
                setCategory={handleCategoryChange}
                brand={filters.brand}
                setBrand={(value) => handleFilterChange('brand', value)}
                byRating={filters.byRating}
                setByRating={(value) => handleFilterChange('byRating', value)}
                handleResetAll={handleResetAll}
              />
            </SheetContent>
          </Sheet>
        </div>

        <div className=' 650:grid pt-8 md:pt-10 650:grid-cols-[215px_auto] md:grid-cols-[250px_auto] lg:grid-cols-[300px_auto] gap-6 lg:gap-8 relative items-start'>
          <div className='hidden 650:inline'>
            <FilterProducts
              searchTerm={filters.searchTerm}
              setSearchTerm={(value) => handleFilterChange('searchTerm', value)}
              byPrice={filters.byPrice}
              setByPrice={(value) => handleFilterChange('byPrice', value)}
              category={filters.category}
              setCategory={handleCategoryChange}
              brand={filters.brand}
              setBrand={(value) => handleFilterChange('brand', value)}
              byRating={filters.byRating}
              setByRating={(value) => handleFilterChange('byRating', value)}
              handleResetAll={handleResetAll}
            />
          </div>

          {!products?.data?.products?.length ? (
            <div className='h-[70vh] flex flex-col justify-center text-stone-800 text-xl font-semibold  items-center '>
              <span>Sorry, no results were found.</span>
              <span>
                Try adjusting your search, filters, or sorting options.
              </span>
              {/* <p>Try adjusting your filters or search terms.</p> */}
            </div>
          ) : (
            <div>
              <div className='grid 900:grid-cols-2 xl:grid-cols-2 md:gap-x-4 gap-y-14 lg:gap-x-8 mb-24'>
                {products?.data?.products?.map((el: TProduct, idx: number) => (
                  <ProductCard key={idx} product={el} />
                ))}
              </div>
              {products?.data?.products?.length < 10 &&
              currentPage === totalPages ? null : (
                <PaginationProducts
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                />
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
