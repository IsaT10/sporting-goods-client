import { useDeleteProductMutation } from '@/redux/api/api';
import ThreeDotButton from './ThreeDotButton';
import { TProduct } from '@/interface';

export default function ProductListItem({ product }: { product: TProduct }) {
  const [deleteProduct] = useDeleteProductMutation();
  const handleDeleteProduct = () => {
    deleteProduct(product._id);
  };
  return (
    <div className='text-sm py-5 px-10 flex justify-between items-center'>
      <span className='flex-1 ml-6'>{product.name}</span>
      <span className='flex-1 text-center'>{product.price}</span>
      <span className='flex-1 text-center'>{product.category}</span>
      <span className='flex-1 text-center'>{product.stock}</span>
      <span className='flex-[.5] text-center'>
        <ThreeDotButton
          handleDeleteProduct={handleDeleteProduct}
          product={product}
        />
      </span>
    </div>
  );
}
