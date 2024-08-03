// import { z } from 'zod';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';

// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from '@/components/ui/form';
// import { Textarea } from './ui/textarea';
// import FormInputFiled from './FormInputFiled';
// import { DialogClose } from './ui/dialog';
// import { useAddProductMutation } from '@/redux/api/api';
// import { useState } from 'react';
// import { compareObjects } from '@/utils/compareObject';

// const productSchema = z.object({
//   name: z.string({ required_error: 'Name is required' }),
//   description: z.string({ required_error: 'Description is required' }),
//   brand: z.string({ required_error: 'brand is required' }),
//   rating: z.string({ required_error: 'rating is required' }),
//   price: z.string({ required_error: 'price is required' }),
//   stock: z.string({ required_error: 'stock is required' }),
//   category: z.string({ required_error: 'category is required' }),
//   image: z.string({ required_error: 'image is required' }),
// });

// export function ProductForm({ isUpdate = false, product }) {
//   const productDetails = {
//     ...product,
//     rating: product?.rating.toString(),
//     price: product?.price.toString(),
//     stock: product?.stock.toString(),
//   };
//   //   const defaultValues = {
//   //     name: product ? product.name : 'SS Ton Gladiator',
//   //     description: product
//   //       ? product.description
//   //       : 'SS Ton Gladiator is known for its powerful hitting and high-quality willow.',
//   //     brand: product ? product.brand : 'SS',
//   //     rating: product ? product.rating : '4.6',
//   //     price: product ? product.price : '340.89',
//   //     stock: product ? product.stock : '23',
//   //     category: product ? product.category : '668cbbc541aed87cd71b6253',
//   //     image: product
//   //       ? product.image
//   //       : 'https://example.com/images/ss-ton-gladiator.jpg',
//   //   };

//   const defaultValues = {
//     name: productDetails ? productDetails.name : '',
//     description: productDetails ? productDetails.description : '',
//     brand: productDetails ? productDetails.brand : '',
//     rating: productDetails ? productDetails.rating : '',
//     price: productDetails ? productDetails.price : '',
//     stock: productDetails ? productDetails.stock : '',
//     category: productDetails ? productDetails.category : '',
//     image: productDetails ? productDetails.image : '',
//   };

//   const form = useForm({
//     resolver: zodResolver(productSchema),
//     defaultValues: {
//       ...defaultValues,
//     },
//   });

//   const {
//     watch,
//     formState: { isValid },
//   } = form;

//   /* const { fields, append } = useFieldArray({
//     name: "urls",
//     control: form.control,
//   }) */

//   const initialValues: z.infer<typeof productSchema> = watch();
//   const [addProduct, { error }] = useAddProductMutation();

//   function onSubmit(values: z.infer<typeof productSchema>) {
//     const changedValues: Partial<z.infer<typeof productSchema>> = {};

//     // console.log('Submitted values:', values);

//     for (const key in values) {
//       if (values[key] !== productDetails[key]) {
//         changedValues[key] = values[key];
//       }
//     }

//     console.log('Changed values:', changedValues);
//     // const changedProperties = compareObjects(values, product);
//     // console.log(changedProperties);

//     if (isUpdate) {
//       console.log(changedValues);
//       //   updateProduct({ id: product._id, ...changedValues }); // Assuming updateProduct accepts an object with id and changed values
//     } else {
//       console.log(values);
//       const data = {
//         ...values,
//         price: parseFloat(values.price),
//         rating: parseFloat(values.rating),
//         stock: parseFloat(values.stock),
//       };
//       addProduct(data);
//       console.log(data);
//     }
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)}>
//         <div className='space-y-8'>
//           <div className='flex gap-6 '>
//             <div className='flex-1'>
//               <FormInputFiled placeholder={'Name'} name={'name'} />
//             </div>
//             <div className='flex-1'>
//               <FormInputFiled placeholder={'Brand'} name={'brand'} />
//             </div>
//           </div>

//           <div className='flex gap-6 '>
//             <div className='flex-1'>
//               <FormInputFiled placeholder={'Price'} name={'price'} />
//             </div>
//             <div className='flex-1'>
//               <FormInputFiled placeholder={'Image Link'} name={'image'} />
//             </div>
//           </div>

//           <div className='flex gap-6 '>
//             <div className='flex-1'>
//               <FormInputFiled placeholder={'Stock'} name={'stock'} />
//             </div>
//             <div className='flex-1'>
//               <FormInputFiled placeholder={'Category'} name={'category'} />
//             </div>
//           </div>
//           <div className='flex gap-6 '>
//             <div className='flex-1'>
//               <FormInputFiled placeholder={'Rating'} name={'rating'} />
//             </div>
//             <div className='flex-1'>
//               <FormInputFiled
//                 placeholder={'Description'}
//                 name={'description'}
//               />
//             </div>
//           </div>
//         </div>

//         {/* <FormField
//           control={form.control}
//           name='message'
//           render={({ field }) => (
//             <FormItem>
//               <FormControl>
//                 <Textarea
//                   placeholder='Message'
//                   className='resize-none'
//                   {...field}
//                 />
//               </FormControl>

//               <FormMessage />
//             </FormItem>
//           )}
//         /> */}
//         {isValid ? (
//           <DialogClose
//             type='submit'
//             className='w-full bg-primary py-3 mt-8 text-white font-semibold rounded-lg'
//           >
//             <span>Submit</span>
//           </DialogClose>
//         ) : (
//           <Button className='w-full bg-primary py-3 mt-8 text-white font-semibold rounded-lg'>
//             Submit
//           </Button>
//         )}
//       </form>
//     </Form>
//   );
// }

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
  //   const defaultValues = {
  //     name: product ? product.name : 'SS Ton Gladiator',
  //     description: product
  //       ? product.description
  //       : 'SS Ton Gladiator is known for its powerful hitting and high-quality willow.',
  //     brand: product ? product.brand : 'SS',
  //     // rating: product ? product.rating : '4.6',
  //     price: product ? product.price : '340.89',
  //     stock: product ? product.stock : '23',
  //     category: product ? product.category : 'Cricket',
  //     image: product
  //       ? product.image
  //       : 'https://example.com/images/ss-ton-gladiator.jpg',
  //   };

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

        console.log(changedValues);

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

        console.log(data); // Optional: Remove if no longer needed
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
              <FormInputFiled
                isUpdate={isUpdate}
                placeholder={'Category'}
                name={'category'}
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
