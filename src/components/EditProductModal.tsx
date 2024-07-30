import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ProductForm } from './ProductForm';
import React from 'react';
import { TProduct } from '@/interface';

export default function EditProductModal({ product }: { product: TProduct }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className='flex items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-stone-100 transition-colors focus:bg-accent focus:text-accent-foreground cursor-pointer data-[disabled]:opacity-50 w-full'>
          Edit
        </button>
      </DialogTrigger>
      <DialogContent className='md:max-w-[650px]'>
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>
            Make changes to your product here. Click submit when you're done.
          </DialogDescription>
        </DialogHeader>
        <ProductForm product={product} isUpdate={true} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
