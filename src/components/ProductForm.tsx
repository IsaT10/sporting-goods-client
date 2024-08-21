import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from './ui/textarea';
import FormInputFiled from './FormInputFiled';
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from '@/redux/api/api';
import { Spinner } from './Icons';
import { toast } from './ui/use-toast';
import { TProduct } from '@/interface';
import { Label } from './ui/label';
import React from 'react';

const productSchema = z.object({
  name: z.string().min(1, 'Name is required!'),
  description: z.string().min(1, 'Desription is required!'),
  brand: z.string().min(1, 'Brand is required!'),
  price: z.string().min(1, 'Price is required!'),
  stock: z.string().min(1, 'Stock number is required!'),
  category: z.string().min(1, 'Category is required!'),
  image: z.string().min(1, 'Image is required!'),
});

type TProductFormProps = {
  isUpdate?: boolean;
  product?: TProduct;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ProductForm({ isUpdate, product, setOpen }: TProductFormProps) {
  const productDetails = {
    ...product,
    // rating: product?.rating.toString(),
    price: product?.price.toString(),
    stock: product?.stock.toString(),
  };

  const defaultValues = {
    name: productDetails?.name || '',
    description: productDetails?.description || '',
    brand: productDetails?.brand || '',
    //   rating: productDetails?.rating || '',
    price: productDetails?.price || '',
    stock: productDetails?.stock || '',
    category: productDetails?.category || '',
    image: productDetails?.image || '',
  };

  const form = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const [addProduct] = useAddProductMutation();

  const [updateProduct] = useUpdateProductMutation();

  const showToast = (isSuccess: boolean, message: string) => {
    toast({
      title: isSuccess ? 'Success' : 'Error',
      description: message,
      variant: isSuccess ? 'default' : 'destructive',
    });
  };

  async function onSubmit(values: z.infer<typeof productSchema>) {
    try {
      if (isUpdate) {
        const changedValues = Object.fromEntries(
          Object.entries(values).filter(
            ([key, value]) =>
              value !== productDetails[key as keyof typeof productDetails]
          )
        ) as Partial<z.infer<typeof productSchema>>;

        await updateProduct({
          id: product?._id,
          data: { ...changedValues },
        }).unwrap();

        showToast(true, 'Product updated successfully.');
      } else {
        // Convert necessary fields to appropriate types
        const data = {
          ...values,
          price: parseFloat(values.price),
          rating: 4,
          stock: parseInt(values.stock, 10),
        };

        await addProduct(data).unwrap();

        showToast(true, 'Product added successfully.');
      }
    } catch (error) {
      console.error('Error processing product:', error);
      showToast(
        false,
        // error?.data?.message ||
        'Product could not be processed. Please try again.'
      );
    } finally {
      setOpen(false); // Close the form dialog
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='space-y-6 lg:space-y-8'>
          <div className='flex gap-6 '>
            <div className='flex-1'>
              <FormInputFiled
                isUpdate={isUpdate}
                placeholder={'Name'}
                name={'name'}
              />
            </div>
            <div className='flex-1'>
              <FormInputFiled
                isUpdate={isUpdate}
                placeholder={'Brand'}
                name={'brand'}
              />
            </div>
          </div>

          <div className='flex gap-6 '>
            <div className='flex-1'>
              <FormInputFiled
                isUpdate={isUpdate}
                placeholder={'Price'}
                name={'price'}
              />
            </div>
            <div className='flex-1'>
              <FormInputFiled
                isUpdate={isUpdate}
                placeholder={'Image Link'}
                name={'image'}
              />
            </div>
          </div>

          <div className='flex gap-6 '>
            <div className='flex-1'>
              <FormInputFiled
                isUpdate={isUpdate}
                placeholder={'Stock'}
                name={'stock'}
              />
            </div>
            <div className='flex-1'>
              <FormField
                name='category'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='space-y-1.5'>
                        {isUpdate && <Label htmlFor='category'>Category</Label>}
                        <Select
                          value={field.value} // Connect the Select value to the form's field value
                          onValueChange={field.onChange} // Trigger form's onChange when selecting an option
                        >
                          <SelectTrigger className='py-6 placeholder:text-stone-300'>
                            <SelectValue
                              placeholder='Category'
                              className='text-stone-600'
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Categories</SelectLabel>
                              <SelectItem value='Football'>Football</SelectItem>
                              <SelectItem value='Baseball'>Baseball</SelectItem>
                              <SelectItem value='Basketball'>
                                Basketball
                              </SelectItem>
                              <SelectItem value='Cycling'>Cycling</SelectItem>
                              <SelectItem value='Badminton'>
                                Badminton
                              </SelectItem>
                              <SelectItem value='Running'>Running</SelectItem>
                              <SelectItem value='Tennis'>Tennis</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div>
                    {isUpdate && (
                      <Label htmlFor='description'>Description</Label>
                    )}
                    <Textarea
                      placeholder='Description'
                      className='resize-none h-[100px]'
                      {...field}
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button className='w-full bg-primary py-3 mt-8 text-white font-semibold rounded-lg'>
          {isSubmitting ? (
            <Spinner className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            'Submit'
          )}
        </Button>
      </form>
    </Form>
  );
}
