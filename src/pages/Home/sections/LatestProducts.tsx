import Container from '@/components/Container';
import { Spinner } from '@/components/Icons';
import ProductCard from '@/components/ProductCard';
import SectionTitle from '@/components/SectionTitle';
import { TProduct } from '@/interface';
import { useGetProductsQuery } from '@/redux/api/api';

export default function LatestProducts() {
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery({ limit: 3, sort: '-createdAt' });

  if (isLoading)
    return (
      <div className='h-[70vh] flex justify-center items-center'>
        <Spinner className='h-10 w-10' />
      </div>
    );

  if (error)
    return (
      <div className='h-[70vh] flex justify-center items-center text-red-600 font-semibold text-2xl'>
        Unable to load data. Please check your internet connection and try
        again.
      </div>
    );

  console.log(products?.data?.products);
  return (
    <Container>
      <div className=''>
        <SectionTitle
          title='New Arrivals'
          subTitle='Stay updated with our newest arrivals. Discover the freshest gear and latest trends to elevate your performance and style.'
        />
        <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8 gap-y-12 '>
          {products?.data?.products?.map((el: TProduct, idx: number) => (
            <ProductCard key={idx} product={el} />
          ))}
        </div>
      </div>
    </Container>
  );
}
