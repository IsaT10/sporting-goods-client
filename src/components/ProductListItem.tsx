import { useDeleteProductMutation } from '@/redux/api/api';
import ThreeDotButton from './ThreeDotButton';
import { TProduct } from '@/interface';
import { toast } from './ui/use-toast';

export default function ProductListItem({ product }: { product: TProduct }) {
  const [deleteProduct] = useDeleteProductMutation();
  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(product._id);
      toast({
        title: 'Success',
        description: 'Product deleted successfully',
        variant: 'default',
      });
    } catch (error) {
      toast({
        title: 'Success',
        description: 'Something went wrong. Try again later!',
        variant: 'destructive',
      });
    }
  };
  return (
    <div className='text-sm py-5 px-6 md:px-10 flex justify-between items-center'>
      <span className='flex-1 md:ml-6'>{product.name}</span>
      <span className='flex-1  text-center'>${product.price}</span>
      <span className='flex-1 text-center'>{product.category}</span>
      <span className='flex-1 font-semibold text-stone-600 text-center'>
        {product.stock}
      </span>
      <span className='flex-[.5] text-center'>
        <ThreeDotButton
          handleDeleteProduct={handleDeleteProduct}
          product={product}
        />
      </span>
    </div>
  );
}
