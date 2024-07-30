import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ProductForm } from './ProductForm';
import { Button } from './ui/button';
import React from 'react';

export default function AddProductModal() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline'>Add New Product</Button>
      </DialogTrigger>
      <DialogContent className='md:max-w-[650px]'>
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            Add your product here. Click submit when you're done.
          </DialogDescription>
        </DialogHeader>
        <ProductForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
