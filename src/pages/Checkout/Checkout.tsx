import Container from '@/components/Container';
import FormInputFiled from '@/components/FormInputFiled';
import PageHeader from '@/components/PageHeader';
import { toast } from '@/components/ui/use-toast';
import { useCartItems } from '@/hooks/useCartItems';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { Spinner } from '@/components/Icons';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';
import { usePlaceOrderMutation } from '@/redux/api/api';
import { clearCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';

const billingDetails = z.object({
  name: z.string().min(1, 'Name is required!'),
  country: z.string().min(1, 'Country is required!'),
  address: z.string().min(1, 'Address is required!'),
  apartment: z.string().optional(),
  city: z.string().min(1, 'City is required!'),
  postalCode: z.string().optional(),
  phone: z.string().min(1, 'Phone number is required!'),
  email: z.string().min(1, 'Email  is required!'),
});

export default function Checkout() {
  const { subtotal, vat, total, cartItems } = useCartItems();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const result = cartItems?.map((item) => ({
    id: item.id,
    quantity: item.quantity,
  }));

  const defaultValues = {
    name: '',
    country: '',
    address: '',
    apartment: '',
    city: '',
    postalCode: '',
    phone: '',
    email: '',
  };

  const form = useForm({
    resolver: zodResolver(billingDetails),
    defaultValues,
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
  } = form;

  const showToast = (isSuccess: boolean, message: string) => {
    toast({
      title: isSuccess ? 'Success' : 'Error',
      description: message,
      variant: isSuccess ? 'default' : 'destructive',
    });
  };

  const [selectedValue, setSelectedValue] = React.useState('');

  const handleAccordionChange = (value: string) => {
    setSelectedValue(value);
  };

  const [orderPlace] = usePlaceOrderMutation();

  async function onSubmit() {
    try {
      console.log('first');
      await orderPlace(result).unwrap();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('second');

      dispatch(clearCart());

      navigate('/order-success');
    } catch (error) {
      showToast(false, 'Something went very wrong. Please try again later!');
    }

    // Submit your form data to the server or handle it in your app
  }

  return (
    <div>
      <PageHeader route='checkout' title='Checkout' />

      <Container>
        <div className='900:flex  justify-between gap-10 pt-6 sm:pt-10 900:pt-20 pb-24 900:pb-32'>
          <div className='flex-1 sm:w-[80%] mx-auto '>
            <h3 className='text-lg md:text-2xl font-semibold mb-6'>
              Billing details
            </h3>
            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-6 lg:space-y-8'>
                  <FormInputFiled placeholder={'Name'} name={'name'} />
                  <FormInputFiled placeholder={'Country'} name={'country'} />

                  <FormInputFiled placeholder={'Address'} name={'address'} />
                  <div className='flex gap-10'>
                    <div className='flex-1'>
                      <FormInputFiled
                        placeholder={'Apartment'}
                        name={'apartment'}
                      />
                    </div>
                    <div className='flex-1'>
                      <FormInputFiled
                        placeholder={'Postal Code'}
                        name={'postalCode'}
                      />
                    </div>
                  </div>

                  <FormInputFiled placeholder={'City'} name={'city'} />

                  <FormInputFiled placeholder={'Phone'} name={'phone'} />
                  <FormInputFiled placeholder={'Email'} name={'email'} />
                </div>
              </form>
            </Form>
          </div>
          <div className='sm:w-[80%] 900:mt-0 mt-16 mx-auto 900:w-[420px] lg:w-[500px]'>
            <h3 className='text-lg md:text-2xl font-semibold mb-6'>
              Your Order
            </h3>
            <div className='900:text-base text-sm bg-white p-6 shadow-l h-max border border-stone-300 rounded-lg'>
              {cartItems.map((item) => (
                <div
                  className='relative flex items-start gap-6 mb-6'
                  key={item.id}
                >
                  <img
                    className='w-16 h-16 object-cover rounded-sm'
                    src={item.image}
                    alt=''
                  />
                  <div className='flex w-full justify-between items-center'>
                    <div>
                      <p className='font-semibold'>{item.name}</p>
                      <div className='flex gap-4 mt-2'>
                        <p className='bg-green-400 text-[10px] font-bold text-stone-800 rounded-md px-3'>
                          {item.category}
                        </p>
                        <p className='bg-purple-400 text-[10px] font-bold text-stone-800 rounded-md px-3'>
                          {item.brand}
                        </p>
                      </div>
                    </div>
                    <span className='text-brightOrange font-semibold'>
                      ${item.price * item.quantity}
                    </span>
                  </div>
                  <span className='absolute -top-3 left-14 bg-stone-500 text-white text-xs font-semibold py-[3px] px-2 rounded-full'>
                    {item.quantity}
                  </span>
                </div>
              ))}

              <div className='font-semibold text-sm flex justify-between py-4 border-b border-b-stone-200'>
                <span>SUBTOTAL</span>
                <span className='text-brightOrange'>
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className='font-semibold text-sm flex justify-between py-4 border-b border-b-stone-200'>
                <span>VAT (15%)</span>
                <span className='text-brightOrange'>${vat.toFixed(2)}</span>
              </div>
              <div className='font-semibold text-sm flex justify-between py-4 border-b border-b-stone-200 '>
                <span>TOTAL</span>
                <span className='text-brightOrange'>${total.toFixed(2)}</span>
              </div>

              <Accordion
                type='single'
                collapsible
                value={selectedValue}
                onValueChange={handleAccordionChange}
                className='w-full'
              >
                <AccordionItem value='Cash on delivery'>
                  <AccordionTrigger>
                    <RadioGroup value={selectedValue}>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='Cash on delivery' />
                        <span className='text-base'>Cash on delivery</span>
                      </div>
                    </RadioGroup>
                  </AccordionTrigger>
                  <AccordionContent>
                    <span className='font-semibold ml-6 text-[#838383]'>
                      Pay with cash upon delivery.
                    </span>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value='Stripe payment'>
                  <AccordionTrigger>
                    <RadioGroup value={selectedValue}>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='Stripe payment' />
                        <span className='text-base'>Stripe payment</span>
                      </div>
                    </RadioGroup>
                  </AccordionTrigger>
                  <AccordionContent>
                    <span className='font-semibold ml-6 text-[#838383]'>
                      Not available yet
                    </span>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <button
                disabled={
                  selectedValue === 'Stripe payment' || selectedValue === ''
                }
                className='mt-10 disabled:cursor-not-allowed disabled:opacity-60 bg-brightOrange w-full rounded-lg p-3 text-white font-semibold'
                onClick={() => handleSubmit(onSubmit)()}
              >
                {isSubmitting ? (
                  <Spinner className='mx-auto h-4 w-4 animate-spin' />
                ) : (
                  'Place Order'
                )}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
