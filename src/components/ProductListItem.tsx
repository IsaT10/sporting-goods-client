import { useDeleteProductMutation } from '@/redux/api/api';
import ThreeDotButton from './ThreeDotButton';

export default function ProductListItem({ product }) {
  const [deleteProduct] = useDeleteProductMutation();
  const handleDeleteProduct = () => {
    console.log(product._id);
    deleteProduct(product._id);
  };
  return (
    <div className='font-semibold text-sm py-5 px-10 flex justify-between items-center'>
      <span className='flex-1 ml-6'>{product.name}</span>
      <span className='flex-1 text-center'>{product.price}</span>
      <span className='flex-1 text-center'>{product.category.name}</span>
      <span className='flex-1 text-center'>{product.stock}</span>
      <span className='flex-[.5] text-center'>
        <ThreeDotButton handleDeleteProduct={handleDeleteProduct} />
      </span>
    </div>
  );
}
